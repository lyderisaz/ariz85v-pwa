# ARIZ-85C Worksheet (PWA)

Offline worksheet for **ARIZ-85C**, the Algorithm of Inventive Problem Solving by **Genrikh Altshuller**.
Covers Parts 1–3: system analysis, problem model and resources, ideal final result and physical contradictions.

Live: https://lyderisaz.github.io/ariz85v-pwa/

## Features

- Works offline and installs as an app (Chrome/Edge: install icon in the address bar)
- Autosave in the browser; Open/Save `.ariz` files, optionally password-encrypted (AES-GCM 256, PBKDF2-SHA256)
- Images per step: click, drag & drop or paste
- Print / Save as PDF
- No server, no tracking: data never leaves your device unless you save a file

## Repository layout

```
index.html             page shell + toolbar
app.js                 form schema, rendering, autosave, .ariz open/save, encryption
style.css              layout, dark mode, print styles
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

## .ariz file format

JSON object of field name → text, plus `uploadedImages` (field → `data:image/...` URL).
Encrypted files are `{ "salt": [...], "iv": [...], "data": [...] }` byte arrays (16-byte salt, 12-byte IV, 100 000 PBKDF2 iterations).

## Credits

ARIZ-85C method by Genrikh Altshuller.

## License

Code: [MIT](LICENSE).
