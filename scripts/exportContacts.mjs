#!/usr/bin/env node
/**
 * generate-contacts.js
 *
 * Turns a wedding-contacts JSON export into a formatted PDF contact
 * list. Barb Konuszewski (Day of Coordinator) is pinned to the top in
 * bold; everyone else is listed alphabetically by first name, with
 * role and email included.
 *
 * Usage:
 *   node generate-contacts.js <input.json> [output.pdf]
 *
 * Examples:
 *   node generate-contacts.js src/json/contacts.json
 *   node generate-contacts.js src/json/contacts.json public/pdfs/contacts.pdf
 *
 * (requires the "pdfkit" package: npm install pdfkit)
 */

import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

// ---------- CLI args ----------
const [, , inputPath, outputArg] = process.argv;

if (!inputPath) {
  console.error("Usage: node generate-contacts.js <input.json> [output.pdf]");
  process.exit(1);
}

const OUTPUT_PATH = path.resolve(outputArg || "public/pdfs/contacts.pdf");

// Alias used to identify the "pin to top" contact. Matches the "alias"
// field in contacts.json (case-insensitive), falling back to name.
const PINNED_ALIAS = "barb";

function getFirstName(name) {
  return (name || "").trim().split(/\s+/)[0] || "";
}

function getRole(contact) {
  // Prefer a human-readable "title" (e.g. "Florist"); fall back to
  // "role", skipping the placeholder value "Unset".
  if (contact.title && contact.title.trim()) return contact.title.trim();
  if (contact.role && contact.role.trim().toLowerCase() !== "unset") {
    return contact.role.trim();
  }
  return "—";
}

function getEmail(contact) {
  return contact.email && contact.email.trim() ? contact.email.trim() : "—";
}

function getPhone(contact) {
  if (!contact.phone) return "—";
  // Strip invisible bidi/direction marks some entries carry (e.g. U+202B/U+202C)
  const cleaned = contact.phone
    .replace(/[\u200e\u200f\u202a-\u202e]/g, "")
    .trim();
  return cleaned ? cleaned : "—";
}

let contacts;
try {
  const raw = fs.readFileSync(path.resolve(inputPath), "utf8");
  contacts = JSON.parse(raw);
} catch (err) {
  console.error(`Could not read/parse ${inputPath}: ${err.message}`);
  process.exit(1);
}
if (!Array.isArray(contacts)) {
  console.error("Expected contacts.json to contain an array of contacts.");
  process.exit(1);
}

function splitPinned(contacts) {
  const pinned = contacts.find(
    (c) => (c.alias || "").toLowerCase() === PINNED_ALIAS,
  );
  const rest = contacts.filter((c) => c !== pinned);
  return { pinned, rest };
}

function sortAlphabeticallyByFirstName(contacts) {
  return [...contacts].sort((a, b) =>
    getFirstName(a.name).localeCompare(getFirstName(b.name), undefined, {
      sensitivity: "base",
    }),
  );
}

const CARD_FILL = "#f7f6f4";
const CARD_FILL_PINNED = "#f4ecdb";
const CARD_GAP = 12;
const PAD_X = 14;
const PAD_Y = 14;

// Build the stacked, centered lines for one card: name, role, then
// phone/email — omitting phone or email entirely when missing rather
// than showing a placeholder.
function buildCardLines(contact) {
  const role = getRole(contact);
  const phone = getPhone(contact);
  const email = getEmail(contact);

  const lines = [
    {
      text: contact.name || "Unknown",
      font: "Helvetica-Bold",
      size: 13,
      color: "#000000",
      gapAfter: 4,
    },
    {
      text: role.toUpperCase(),
      font: "Helvetica",
      size: 9,
      color: "#8a8a8a",
      gapAfter: 6,
    },
  ];
  if (phone !== "—") {
    lines.push({
      text: phone,
      font: "Helvetica",
      size: 10,
      color: "#000000",
      gapAfter: 3,
    });
  }
  if (email !== "—") {
    lines.push({
      text: email,
      font: "Helvetica",
      size: 10,
      color: "#000000",
      gapAfter: 3,
    });
  }
  lines[lines.length - 1].gapAfter = 0;
  return lines;
}

// Measures each line's wrapped height at the given content width and
// returns the total stacked height plus the per-line heights needed
// to draw them later.
function measureCardLines(doc, lines, width) {
  let height = 0;
  const measured = lines.map((line) => {
    doc.font(line.font).fontSize(line.size);
    const h = doc.heightOfString(line.text, { width, align: "center" });
    height += h + line.gapAfter;
    return { ...line, height: h };
  });
  return { height, measured };
}

function drawCard(
  doc,
  { x, y, width, rowHeight, fill, measured, contentHeight, textX, textWidth },
) {
  doc.roundedRect(x, y, width, rowHeight, 6).fill(fill);

  const tx = textX ?? x;
  const tw = textWidth ?? width;
  let curY = y + (rowHeight - contentHeight) / 2;
  for (const line of measured) {
    doc
      .fillColor(line.color)
      .font(line.font)
      .fontSize(line.size)
      .text(line.text, tx, curY, { width: tw, align: "center" });
    curY += line.height + line.gapAfter;
  }
}

function drawPinnedCard(doc, contact) {
  const contentWidth =
    doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const cardContentWidth = contentWidth - PAD_X * 2;

  const lines = buildCardLines(contact);
  const { height, measured } = measureCardLines(doc, lines, cardContentWidth);
  const rowHeight = height + PAD_Y * 2;

  if (doc.y + rowHeight > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
  const top = doc.y;
  const left = doc.page.margins.left;

  drawCard(doc, {
    x: left,
    y: top,
    width: contentWidth,
    rowHeight,
    fill: CARD_FILL_PINNED,
    measured,
    contentHeight: height,
    textX: left + PAD_X,
    textWidth: cardContentWidth,
  });
  doc.y = top + rowHeight + CARD_GAP;
}

function drawCardPair(doc, pair) {
  const contentWidth =
    doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const colGap = 14;
  const halfWidth = (contentWidth - colGap) / 2;
  const cardContentWidth = halfWidth - PAD_X * 2;
  const left = doc.page.margins.left;

  const built = pair.map((contact) => {
    if (!contact) return null;
    const lines = buildCardLines(contact);
    return measureCardLines(doc, lines, cardContentWidth);
  });

  const rowContentHeight = Math.max(
    ...built.filter(Boolean).map((b) => b.height),
  );
  const rowHeight = rowContentHeight + PAD_Y * 2;

  if (doc.y + rowHeight > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
  const top = doc.y;

  built.forEach((b, i) => {
    if (!b) return;
    const x = left + i * (halfWidth + colGap);
    drawCard(doc, {
      x,
      y: top,
      width: halfWidth,
      rowHeight,
      fill: CARD_FILL,
      measured: b.measured,
      contentHeight: b.height,
      textX: x + PAD_X,
      textWidth: cardContentWidth,
    });
  });

  doc.y = top + rowHeight + CARD_GAP;
}

function generatePdf(contacts) {
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

  const { pinned, rest } = splitPinned(contacts);
  const sortedRest = sortAlphabeticallyByFirstName(rest);

  const doc = new PDFDocument({ margin: 50, size: "LETTER" });
  const stream = fs.createWriteStream(OUTPUT_PATH);
  doc.pipe(stream);

  doc
    .font("Helvetica-Bold")
    .fontSize(20)
    .text("Wedding Contact List", { align: "left" });
  doc.moveDown(1);

  if (pinned) {
    drawPinnedCard(doc, pinned);
  } else {
    console.warn(
      `Warning: no contact with alias "${PINNED_ALIAS}" found — skipping pin.`,
    );
  }

  for (let i = 0; i < sortedRest.length; i += 2) {
    drawCardPair(doc, [sortedRest[i], sortedRest[i + 1]]);
  }

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

generatePdf(contacts)
  .then(() => {
    console.log(`Contact list generated: ${OUTPUT_PATH}`);
  })
  .catch((err) => {
    console.error("Failed to generate contact list:", err);
    process.exit(1);
  });
