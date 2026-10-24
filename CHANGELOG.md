# Changelog

## v02.02 — 2026-10-24

- First visit adds **all examples in the current language** to the worksheet list (DrakonWidget-style), not only the first; the first one opens. No examples in that language → the first example. A migrated v01.00 worksheet still comes first and stays open
- Help texts (EN, LT) updated accordingly
- Existing users keep their list as it is; new examples can still be added via **Examples → Open copy**

## v02.01 — 2026-10-24

- New example in EN and LT: **Bus / Autobusas** — classic TRIZ training problem (rush hour: twice the passengers, but tunnels and tight turns limit the size). Parts 1–3 with 5 drawings (EC-1, EC-2, selected EC, operating zone, operating time); IFR directions: articulated bus, double-decker, rear-wheel steering, bus + trailer, standing room; PCs on length, stiffness, height
- `tools/`: generator scripts for all example files (pencil, bus)

## v02.00 — 2026-10-24

- **Lithuanian interface** (LT) next to English: form, toolbar, menus, dialogs, messages, help pages, ARIZ guide and all 24 ⓘ callouts; LT uses ARIZ-85V terms (uždavinys, TP / FP, IGR, MLR, OZ / OL, gaminys / įrankis)
- **Language menu** with flags (LT / EN) in the top-right corner, left of **?**; choice is remembered; first visit follows the browser language; switching saves the worksheet and reloads
- Lithuanian example *Pieštukas: aštrus ar tvirtas smaigalys* (Parts 1–3, LT drawings); examples list shows a flag and puts the current language first; first visit opens the example in the current language
- `.ariz` gains optional `_lang`; examples index entries have `lang`; worksheet file names drop diacritics
- New files: `i18n.js`, `help-lt.js`, `examples/pencil_lt.ariz`
- Local working folder for v2: `ariz85v-pwa-02` (v1 frozen in `ariz85v-pwa-01` at v01.03)

## v01.03 — 2026-10-24

- Updates apply on the first visit: when a new version takes over, the page saves the worksheet and reloads itself once (no reload on the very first install)
- Note: browsers still on v01.02 or older get this once more the old way (one manual reload); from v01.03 on it is automatic

## v01.02 — 2026-10-24

- Colour scheme from DrakonWidget (Classic canvas `#97d3e1`, white blocks with black border, green `#038009` buttons, light-green hover, dark-red danger, Arial); all colours are tokens at the top of `style.css`; dark mode derived from it; new icon
- Help menu: round **?** fixed in the top-right corner with *Using worksheets & examples* and *ARIZ-85C guide*; opens in a side panel; shown once on first visit; Esc closes
- ARIZ-85C guide: Parts 1–3 steps, rules R1–R3, loops, SFR kinds, Table 1 (typical conflicts), Table 2 (separation principles), Parts 4–9 overview, terms (own-words summary based on the triz-ariz notes)
- **ⓘ** callouts on 24 steps/fields: explanation + "Ask yourself" question; hidden in print

## v01.01 — 2026-10-24

- Worksheet library: multiple worksheets with switch, New, Rename, Duplicate, Delete, Clear; each autosaves
- Examples dialog: open a copy of an example; ⋯ → Export as example; examples live in `examples/`
- First example: *Pencil: sharp tip vs. strong tip* (Parts 1–3, with drawings)
- Open now imports a file as a new worksheet instead of overwriting; Save names the file after the worksheet
- `.ariz` gains optional `_name` / `_description` keys (backward compatible)
- v01.00 autosave is migrated to a worksheet called "My worksheet"
- License holder: © 2026 INVENTSHIP

## v01.00 — 2026-10-24

- First release: ARIZ-85C Parts 1–3 worksheet as an offline PWA
- Autosave, .ariz open/save with optional password encryption, image steps, print/PDF, dark mode
