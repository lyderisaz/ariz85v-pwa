# ARIZ-85C Worksheet (PWA)

Offline worksheet for **ARIZ-85C**, the Algorithm of Inventive Problem Solving by **Genrikh Altshuller**.
Covers Parts 1–3: system analysis, problem model and resources, ideal final result and physical contradictions.

Live: https://lyderisaz.github.io/ariz85v-pwa/

## Features

- Works offline and installs as an app (Chrome/Edge: install icon in the address bar)
- Several worksheets in one browser: switch, New, Rename, Duplicate, Delete — each autosaves
- Examples: open a copy of a worked case (first: *Pencil*); export your own worksheet as an example
- Open/Save `.ariz` files (Open imports as a new worksheet), optionally password-encrypted (AES-GCM 256, PBKDF2-SHA256)
- Images per step: click, drag & drop or paste
- Help: round **?** in the top-right corner → *Using worksheets & examples* and *ARIZ-85C guide* (steps, rules, typical conflicts, separation principles, terms); **ⓘ** next to each step opens a short explanation with a guiding question
- Colour scheme from DrakonWidget, kept as tokens at the top of `style.css` (to be replaced by branding rules)
- Print / Save as PDF
- No server, no tracking: data never leaves your device unless you save a file

## Repository layout

```
index.html             page shell + toolbar
app.js                 form schema, rendering, worksheet library, examples, .ariz open/save, encryption
examples/index.json    list of examples: [{ file, name, description }]
examples/*.ariz        example worksheets (unencrypted .ariz)
help.js                help pages and ⓘ step callouts (texts in English)
style.css              brand tokens (top), layout, dark mode, print styles
sw.js                  service worker (offline cache) — bump VERSION on every release
manifest.webmanifest   PWA metadata, .ariz file handler
icon.svg               app icon
CHANGELOG.md           release notes
```

Static files only, no build step. GitHub Pages serves the repo root from `main`.

## Run locally

Service workers need http(s), not `file://`:

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Releasing

1. Change the files, bump `VERSION` in `sw.js` and the version in `index.html`.
2. Add a `CHANGELOG.md` entry.
3. Commit, tag `vXX.YY`, push with tags.

## Adding an example

1. Fill a worksheet, then ⋯ → **Export as example…** (unencrypted, includes name and description).
2. Put the file in `examples/` and add an entry to `examples/index.json`.
3. Add the path to `FILES` in `sw.js`, bump `VERSION`, release.

## .ariz file format

JSON object of field name → text, plus `uploadedImages` (field → `data:image/...` URL).
Optional `_name` and `_description` (worksheet name, example description); readers that don't know them ignore them.
Encrypted files are `{ "salt": [...], "iv": [...], "data": [...] }` byte arrays (16-byte salt, 12-byte IV, 100 000 PBKDF2 iterations).

## Credits

ARIZ-85C method by Genrikh Altshuller.

## License

Code: [MIT](LICENSE).
