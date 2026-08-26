#!/usr/bin/env node
/**
 * schedule-to-pdf.js
 *
 * Turns a wedding-schedule JSON export into a formatted PDF, sorted
 * chronologically. Pass an assignee alias to get just that person's
 * events; leave it off for one big schedule with everyone (each
 * event lists all of its assignees). Pass --all to generate the full
 * schedule plus one PDF per alias found in the file, all at once.
 *
 * Usage:
 *   node schedule-to-pdf.js <input.json> [alias] [output.pdf]
 *   node schedule-to-pdf.js <input.json> --all [outputDir]
 *
 * Examples:
 *   node schedule-to-pdf.js events.json                # everyone, all events
 *   node schedule-to-pdf.js events.json barb            # only Barb's events
 *   node schedule-to-pdf.js events.json barb barb.pdf   # custom output name
 *   node schedule-to-pdf.js events.json --all           # full + every alias
 *   node schedule-to-pdf.js events.json --all pdfs/     # ...into pdfs/
 */

import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

// ---------- CLI args ----------
const [, , inputPath, secondArg, thirdArg] = process.argv;

if (!inputPath) {
  console.error(
    "Usage: node schedule-to-pdf.js <input.json> [alias] [output.pdf]",
  );
  console.error(
    "   or: node schedule-to-pdf.js <input.json> --all [outputDir]",
  );
  process.exit(1);
}

let events;
try {
  const raw = fs.readFileSync(path.resolve(inputPath), "utf8");
  events = JSON.parse(raw);
} catch (err) {
  console.error(`Could not read/parse ${inputPath}: ${err.message}`);
  process.exit(1);
}

// ---------- Shared date/time helpers ----------
const TIME_ZONE = "America/New_York";
const DATE_OPTS = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: TIME_ZONE,
};
const TIME_OPTS = { hour: "numeric", minute: "2-digit", timeZone: TIME_ZONE };

function isDateOnly(str) {
  return /^\d{4}-\d{2}-\d{2}$/.test(str);
}

function sortKey(ev) {
  if (!ev.startTime) return Infinity;
  // Date-only strings ("2026-08-29") parse as UTC midnight, which is
  // 8pm the previous day in Eastern time — that shift can knock an
  // all-day event into the wrong position relative to same-day timed
  // events. Anchor date-only values to Eastern midnight instead.
  // (Fixed at -04:00/EDT, which matches the offsets used elsewhere
  // in this schedule; adjust if using this outside daylight saving.)
  const t = isDateOnly(ev.startTime)
    ? new Date(`${ev.startTime}T00:00:00-04:00`).getTime()
    : new Date(ev.startTime).getTime();
  return Number.isNaN(t) ? Infinity : t;
}

function formatDateHeading(startTime) {
  if (!startTime) return "Unscheduled / TBD";
  if (isDateOnly(startTime)) {
    // Parse the y/m/d directly so we don't shift across a UTC day
    // boundary when formatting in Eastern time.
    const [y, m, d] = startTime.split("-").map(Number);
    const local = new Date(y, m - 1, d);
    return local.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  const d = new Date(startTime);
  return d.toLocaleDateString("en-US", DATE_OPTS);
}

function formatTimeRange(ev) {
  if (!ev.startTime) return null;
  if (isDateOnly(ev.startTime)) return "All day";
  const start = new Date(ev.startTime);
  let str = start.toLocaleTimeString("en-US", TIME_OPTS);
  if (ev.endTime) {
    const end = new Date(ev.endTime);
    str += ` \u2013 ${end.toLocaleTimeString("en-US", TIME_OPTS)}`;
  }
  return str;
}

// ---------- Core: build one PDF for a given alias (or null = everyone) ----------
function buildSchedulePdf(allEvents, alias, outputPath) {
  let filtered = allEvents;
  let personName = null;

  if (alias) {
    filtered = allEvents.filter((ev) =>
      (ev.assignees || []).some((a) => (a.alias || "").toLowerCase() === alias),
    );
    if (filtered.length === 0) {
      console.error(`No events found for alias "${alias}". Skipping.`);
      return false;
    }
    const match = filtered
      .flatMap((ev) => ev.assignees)
      .find((a) => (a.alias || "").toLowerCase() === alias);
    personName = match ? match.name : alias;
  }
  const withOrder = filtered.map((ev, idx) => ({ ev, idx }));
  withOrder.sort((a, b) => {
    const ka = sortKey(a.ev);
    const kb = sortKey(b.ev);
    if (ka !== kb) return ka - kb;

    // Secondary sort: `order` ascending, blanks (undefined/null) last.
    const oa = a.ev.order;
    const ob = b.ev.order;
    const aHas = oa !== undefined && oa !== null;
    const bHas = ob !== undefined && ob !== null;
    if (aHas && bHas && oa !== ob) return oa - ob; // ascending
    if (aHas !== bHas) return aHas ? -1 : 1; // has-order wins over blank

    return a.idx - b.idx; // stable fallback for true ties
  });
  const sorted = withOrder.map((x) => x.ev);
  // Group sorted events by day heading, preserving chronological order
  // of the groups themselves (Unscheduled group goes last).
  const groups = [];
  let currentHeading = null;
  let currentGroup = null;
  for (const ev of sorted) {
    const heading = formatDateHeading(ev.startTime);
    if (heading !== currentHeading) {
      currentHeading = heading;
      currentGroup = { heading, events: [] };
      groups.push(currentGroup);
    }
    currentGroup.events.push(ev);
  }

  const doc = new PDFDocument({ size: "LETTER", margin: 50 });
  doc.pipe(fs.createWriteStream(outputPath));

  const PAGE_WIDTH =
    doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const timeColWidth = 110;

  function ensureSpace(minHeight) {
    const bottom = doc.page.height - doc.page.margins.bottom;
    if (doc.y + minHeight > bottom) {
      doc.addPage();
    }
  }

  function drawRule(color = "#dddddd") {
    const y = doc.y;
    doc
      .moveTo(doc.page.margins.left, y)
      .lineTo(doc.page.width - doc.page.margins.right, y)
      .strokeColor(color)
      .lineWidth(1)
      .stroke();
    doc.moveDown(0.2);
  }

  function renderEvent(ev) {
    ensureSpace(65);

    const timeStr = formatTimeRange(ev);
    const startY = doc.y;

    doc
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor("#0b3d91")
      .text(timeStr || "TBD", doc.page.margins.left, startY, {
        width: timeColWidth,
      });

    doc
      .font("Helvetica-Bold")
      .fontSize(11)
      .fillColor("#1a1a1a")
      .text(
        ev.title || "(untitled)",
        doc.page.margins.left + timeColWidth,
        startY,
        {
          width: PAGE_WIDTH - timeColWidth,
        },
      );

    doc.moveDown(0.2);
    // Notes
    // const notes = (ev.notes || []).filter(
    //   (n) => n && String(n).trim().length > 0,
    // );
    // for (const note of notes) {
    //   doc
    //     .font("Helvetica")
    //     .fontSize(10.5)
    //     .fillColor("#000000")
    //     .text(note, doc.page.margins.left + timeColWidth, doc.y, {
    //       width: PAGE_WIDTH - timeColWidth,
    //     });
    // }
    if (ev.notes) {
      doc
        .font("Helvetica")
        .fontSize(10)
        .fillColor("#000000")
        .text(ev.notes, doc.page.margins.left + timeColWidth, doc.y, {
          width: PAGE_WIDTH - timeColWidth,
        });
      doc.moveDown(0.2);
    }
    // Assignees — only shown on the full (no-alias) schedule
    if (!alias) {
      const assignees = ev.assignees || [];
      if (assignees.length) {
        const names = assignees.map((a) => a.name).join(", ");
        doc
          .font("Helvetica")
          .fontSize(9)
          .fillColor("#666666")
          .text(
            `Assigned: ${names}`,
            doc.page.margins.left + timeColWidth,
            doc.y,
            {
              width: PAGE_WIDTH - timeColWidth,
            },
          );
      } else {
        doc
          .font("Helvetica-Oblique")
          .fontSize(9)
          .fillColor("#999999")
          .text(
            "No assignees listed",
            doc.page.margins.left + timeColWidth,
            doc.y,
            {
              width: PAGE_WIDTH - timeColWidth,
            },
          );
      }
    }
    if (ev.cars && alias !== "lindsay") {
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor("#666666")
        .text(`Cars: ${ev.cars}`, doc.page.margins.left + timeColWidth, doc.y, {
          width: PAGE_WIDTH - timeColWidth,
        });
    }
    doc.moveDown(1.9);
  }

  // Title
  doc
    .font("Helvetica-Bold")
    .fontSize(20)
    .fillColor("#1a1a1a")
    .text(
      personName
        ? `Wedding Schedule \u2014 ${personName}`
        : "Wedding Schedule \u2014 Full Timeline",
      {
        width: PAGE_WIDTH,
      },
    );
  doc
    .moveDown(0.3)
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#1a1a1a")
    .text(`Day of Coordinator: Barb Konuszewski, 810-407-2884`);
  doc
    .moveDown(0.3)
    .font("Helvetica")
    .fontSize(10)
    .fillColor("#666666")
    .text(
      `${sorted.length} event${sorted.length === 1 ? "" : "s"} \u00b7 Generated ${new Date().toLocaleDateString("en-US", DATE_OPTS)}`,
    );

  doc.moveDown(1.8);
  //   drawRule();

  for (const group of groups) {
    ensureSpace(60);

    doc.moveDown(0.6);
    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .fillColor("#0b3d91")
      .text(group.heading.toUpperCase(), doc.page.margins.left, doc.y, {
        width: PAGE_WIDTH,
      });
    doc.moveDown(0.3);
    drawRule("#0b3d91");
    doc.moveDown(0.4);

    for (const ev of group.events) {
      renderEvent(ev);
    }
  }

  doc.end();
  console.log(`PDF written to ${outputPath}`);
  return true;
}

// ---------- CLI dispatch ----------
if (secondArg === "--all") {
  const outDir = path.resolve(thirdArg || ".");
  fs.mkdirSync(outDir, { recursive: true });

  // Collect every unique alias across all events, preserving first-seen order.
  const seen = new Set();
  const aliases = [];
  for (const ev of events) {
    for (const a of ev.assignees || []) {
      const al = (a.alias || "").toLowerCase();
      if (al && !seen.has(al)) {
        seen.add(al);
        aliases.push(al);
      }
    }
  }

  buildSchedulePdf(events, null, path.join(outDir, "schedule-full.pdf"));
  for (const al of aliases) {
    buildSchedulePdf(events, al, path.join(outDir, `schedule-${al}.pdf`));
  }
  console.log(`\nGenerated ${aliases.length + 1} PDFs in ${outDir}`);
} else {
  const alias = secondArg && secondArg !== "" ? secondArg.toLowerCase() : null;
  const outputPath = path.resolve(
    thirdArg || (alias ? `schedule-${alias}.pdf` : "schedule-full.pdf"),
  );
  const ok = buildSchedulePdf(events, alias, outputPath);
  if (!ok) process.exit(1);
}
