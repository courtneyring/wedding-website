# Wedding Schedule → PDF

## Setup (one time)
```
npm install
```
(`pdfkit` is already in `node_modules` if you keep this folder as-is, so this is optional.)

## Usage
```
node schedule-to-pdf.js <input.json> [alias] [output.pdf]
```

- `<input.json>` — your schedule export
- `[alias]` — optional. Pass a person's alias (e.g. `barb`, `court`, `sam`) to get a PDF of just their events. Leave it off to get one PDF with everything, chronologically, with all assignees listed per event.
- `[output.pdf]` — optional custom filename. Defaults to `schedule-full.pdf` or `schedule-<alias>.pdf`.

### Examples
```
node schedule-to-pdf.js events.json
node schedule-to-pdf.js events.json barb
node schedule-to-pdf.js events.json barb barb-schedule.pdf
```

Events are grouped and sorted by day/time. Events without a time (date-only or fully TBD) are grouped as "Unscheduled / TBD" and appended at the end.

### Generate everything at once
```
node schedule-to-pdf.js schedule-data.json --all
node schedule-to-pdf.js schedule-data.json --all pdfs/    # into a subfolder
```
This writes `schedule-full.pdf` plus one `schedule-<alias>.pdf` for every alias found in the file.