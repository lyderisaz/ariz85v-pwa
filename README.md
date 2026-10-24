# ARIZ-85C / ARIZ-85V Worksheet (PWA)

Offline worksheet for **ARIZ-85C** (Lithuanian/Russian name **ARIZ-85V**, АРИЗ-85В), the Algorithm of Inventive Problem Solving by **Genrikh Altshuller**.
Covers Parts 1–3: problem analysis, problem model and resources, ideal final result and physical contradictions.
Interface in **English** and **Lithuanian** (lietuvių).

Live: https://lyderisaz.github.io/ariz85v-pwa/

## Features

- Two languages: flag menu in the top-right corner (LT / EN); first visit follows the browser language
- Works offline and installs as an app (Chrome/Edge: install icon in the address bar)
- Several worksheets in one browser: switch, New, Rename, Duplicate, Delete — each autosaves
- Examples: open a copy of a worked case (*Pencil*, *Bus* — each in EN and LT); export your own worksheet as an example
- Open/Save `.ariz` files (Open imports as a new worksheet), optionally password-encrypted (AES-GCM 256, PBKDF2-SHA256)
- Images per step: click, drag & drop or paste
- Help: round **?** in the top-right corner → *Using worksheets & examples* and *ARIZ guide* (steps, rules, typical conflicts, separation principles, terms); **ⓘ** next to each step opens a short explanation with a guiding question
- Colour scheme from DrakonWidget, kept as tokens at the top of `style.css` (to be replaced by branding rules)
- Print / Save as PDF
- No server, no tracking: data never leaves your device unless you save a file

## Repository layout

```
index.html             page shell + toolbar (static texts marked data-i18n)
i18n.js                language choice, LT dictionary (English strings are keys), flags, language menu
app.js                 form schema, rendering, worksheet library, examples, .ariz open/save, encryption
help.js                help pages and ⓘ step callouts — English
help-lt.js             the same help texts in Lithuanian
examples/index.json    list of examples: [{ file, lang, name, description }]
examples/*.ariz        example worksheets (unencrypted .ariz): pencil, bus — EN and LT
tools/make_*.py        Python scripts that generate the example files (texts + SVG drawings, with self-checks)
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

## Translating

- Every user-visible English string is passed through `tr()`; `i18n.js` holds `I18N.lt` with the English text as key.
- A missing translation falls back to English and is listed in `i18nMissing` (check it in the browser console with the language set to LT — it should be empty).
- Static HTML: `data-i18n` (text), `data-i18n-html` (markup), `data-i18n-attr="title,placeholder"` (attributes).
- Help texts: `help.js` (EN) and `help-lt.js` (LT) use the same keys.
- Terminology (LT): *problema* = the initial, unformulated situation; *uždavinys* = the formulated task (mini uždavinys, uždavinio modelis). TP / FP, IGR, MLR, OZ / OL, gaminys / įrankis.
- To add a language: add it to `LANGS` and `FLAGS`, a dictionary in `I18N`, a `help-xx.js`, and examples with that `lang`.

## Adding an example

1. Fill a worksheet, then ⋯ → **Export as example…** (unencrypted, includes name, description and language).
2. Put the file in `examples/` and add an entry with its `lang` to `examples/index.json`.
3. Add the path to `FILES` in `sw.js`, bump `VERSION`, release.

Or write a generator like `tools/make_bus.py` (both languages in one script, checks that EN and LT fill the same fields):

```bash
python tools/make_bus.py examples
```

## .ariz file format

JSON object of field name → text, plus `uploadedImages` (field → `data:image/...` URL).
Optional `_name`, `_description`, `_lang` (worksheet name, example description, language); readers that don't know them ignore them.
Field names do not depend on the interface language, so a file works in both.
Encrypted files are `{ "salt": [...], "iv": [...], "data": [...] }` byte arrays (16-byte salt, 12-byte IV, 100 000 PBKDF2 iterations).

## Credits

ARIZ-85C method by Genrikh Altshuller.

## License

Code: [MIT](LICENSE).
