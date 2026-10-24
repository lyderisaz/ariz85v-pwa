# Changelog

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
