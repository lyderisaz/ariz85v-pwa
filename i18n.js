'use strict';
// Languages. English strings are the keys; other languages map them. A missing key falls back to English
// and is collected in i18nMissing (the browser self-check expects it to stay empty).
const LANGS = { lt: 'Lietuvių', en: 'English' };
const LANG_KEY = 'ariz_lang';
const LANG = (() => {
  try { const s = localStorage.getItem(LANG_KEY); if (LANGS[s]) return s; } catch {}
  return (navigator.language || '').toLowerCase().startsWith('lt') ? 'lt' : 'en';
})();
document.documentElement.lang = LANG;

// Flags as inline SVG (emoji flags don't render on Windows); same artwork as the GBC editor.
const FLAGS = {
  lt: '<svg class="flag" viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="1" fill="#FDB913"/><rect y="1" width="5" height="1" fill="#006A44"/><rect y="2" width="5" height="1" fill="#C1272D"/></svg>',
  en: '<svg class="flag" viewBox="0 0 60 30" aria-hidden="true"><clipPath id="fgc"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="fgt"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#fgc)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#fgt)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>',
};

const I18N = { lt: {
  // Toolbar, menus, dialogs
  'ARIZ-85C': 'ARIZ-85V',
  'Worksheet': 'Darbalapis',
  'New': 'Naujas',
  'New blank worksheet': 'Naujas tuščias darbalapis',
  'Examples': 'Pavyzdžiai',
  'Open': 'Atidaryti',
  'Import a .ariz file as a new worksheet': 'Importuoti .ariz failą kaip naują darbalapį',
  'Save': 'Išsaugoti',
  'Export current worksheet as .ariz (Ctrl+S)': 'Eksportuoti darbalapį kaip .ariz failą (Ctrl+S)',
  'PDF / Print': 'PDF / Spausdinti',
  'More': 'Daugiau',
  'Rename worksheet': 'Pervadinti darbalapį',
  'Duplicate worksheet': 'Dubliuoti darbalapį',
  'Export as example…': 'Eksportuoti kaip pavyzdį…',
  'Clear worksheet': 'Išvalyti darbalapį',
  'Delete worksheet': 'Ištrinti darbalapį',
  'Form progress': 'Užpildyta',
  'Language': 'Kalba',
  'Help': 'Pagalba',
  'Using worksheets & examples': 'Darbalapiai ir pavyzdžiai',
  'ARIZ-85C guide': 'ARIZ-85V vadovas',
  'Close': 'Uždaryti',
  'Works offline. Data stays in this browser (autosave) or in the .ariz files you save. Based on ARIZ-85C (Algorithm of Inventive Problem Solving) by Genrikh Altshuller.':
    'Veikia be interneto. Duomenys lieka šioje naršyklėje (išsaugoma automatiškai) arba jūsų išsaugotuose .ariz failuose. Pagal G. S. Altšulerio ARIZ-85V (išradybinių uždavinių sprendimo algoritmą).',
  'Opening an example adds a copy to your worksheets; the original stays unchanged.':
    'Atidarius pavyzdį, jo kopija pridedama prie jūsų darbalapių; originalas nesikeičia.',
  'How to create an example': 'Kaip sukurti pavyzdį',
  'Fill a worksheet, then ⋯ → <em>Export as example…</em>': 'Užpildykite darbalapį, tada ⋯ → <em>Eksportuoti kaip pavyzdį…</em>',
  "Put the file in the repo's <code>examples/</code> folder.": 'Įdėkite failą į repozitorijos aplanką <code>examples/</code>.',
  'Add it to <code>examples/index.json</code> and to <code>sw.js</code> (offline cache).':
    'Įrašykite jį į <code>examples/index.json</code> ir <code>sw.js</code> (talpykla darbui be interneto).',
  'Password': 'Slaptažodis',
  'Repeat password': 'Pakartokite slaptažodį',
  'Cancel': 'Atšaukti',
  'Save without password': 'Išsaugoti be slaptažodžio',
  'Save file': 'Išsaugoti failą',
  'Encrypted file': 'Užšifruotas failas',
  'Optional: set a password (min 4 chars) to encrypt the file. It cannot be recovered if lost.':
    'Neprivaloma: nustatykite slaptažodį (bent 4 simboliai), kad failas būtų užšifruotas. Pamiršto slaptažodžio atkurti neįmanoma.',
  'Enter the password to decrypt this file.': 'Įveskite slaptažodį, kad iššifruotumėte šį failą.',
  // Messages
  'Please choose an image file.': 'Pasirinkite paveikslėlio failą.',
  'Remove this image?': 'Pašalinti šį paveikslėlį?',
  'Untitled': 'Be pavadinimo',
  'My worksheet': 'Mano darbalapis',
  ' copy': ' (kopija)',
  'Autosaved ': 'Išsaugota ',
  'Autosave failed — storage full. Remove large images or delete worksheets.':
    'Nepavyko išsaugoti – saugykla pilna. Pašalinkite didelius paveikslėlius arba ištrinkite darbalapius.',
  'Not enough browser storage. Delete some worksheets or images first.':
    'Naršyklėje trūksta vietos. Pirmiau ištrinkite kelis darbalapius ar paveikslėlius.',
  'Open copy': 'Atidaryti kopiją',
  'Could not load example.': 'Nepavyko įkelti pavyzdžio.',
  'Examples are not available (offline before first load?).': 'Pavyzdžiai nepasiekiami (nebuvo interneto per pirmą įkėlimą?).',
  'Short description of this example:': 'Trumpas šio pavyzdžio aprašymas:',
  'Worksheet name:': 'Darbalapio pavadinimas:',
  'Clear all fields and images in "{0}"?': 'Išvalyti visus laukus ir paveikslėlius darbalapyje „{0}“?',
  'Delete worksheet "{0}"? Save it first if you need it.': 'Ištrinti darbalapį „{0}“? Jei jo reikės, pirmiau išsaugokite.',
  'The worksheet is empty.': 'Darbalapis tuščias.',
  'Password must be at least 4 characters.': 'Slaptažodis turi būti bent 4 simbolių.',
  'Passwords do not match.': 'Slaptažodžiai nesutampa.',
  'Invalid file — expected a .ariz file.': 'Netinkamas failas – tikėtasi .ariz failo.',
  'Wrong password or corrupted file.': 'Neteisingas slaptažodis arba sugadintas failas.',
  'Upload image: ': 'Įkelti paveikslėlį: ',
  'Click, paste or drop an image (double-click image to remove)': 'Spustelėkite, įklijuokite arba nutempkite paveikslėlį (dukart spustelėjus – pašalinamas)',
  'Drawing': 'Brėžinys',
  'What is this step?': 'Kas šis žingsnis?',
  'Ask yourself: ': 'Paklauskite savęs: ',

  // Form (ARIZ-85V terms: uždavinys = formulated task; problema = the initial situation)
  'Choose the key problem before starting ARIZ.': 'Prieš pradėdami ARIZ, pasirinkite pagrindinę problemą.',
  'Key problem': 'Pagrindinė problema',
  'Part 1. Analyzing the system': '1 dalis. Uždavinio analizė',
  'Step 1.1. Formulate the mini-problem': '1.1 žingsnis. Suformuluoti mini uždavinį',
  '1.1.1. Main function of the system': '1.1.1. Sistemos pagrindinė funkcija',
  '"System" = the part where the key problem occurs; phrase the main function as a proper function.':
    '„Sistema“ – ta dalis, kurioje kyla pagrindinė problema; pagrindinę funkciją formuluokite kaip funkciją (veiksmas + objektas).',
  'An engineering system for': 'Techninė sistema, skirta',
  '1.1.2. Components of the system': '1.1.2. Sistemos dalys',
  'A long list is fine.': 'Ilgas sąrašas – ne klaida.',
  'The system consists of': 'Sistemą sudaro',
  '1.1.3. Engineering contradiction 1 (EC-1)': '1.1.3. Techninis prieštaravimas 1 (TP-1)',
  'IF may be a function, parameter or property; THEN (improves) and BUT (worsens) are best written as functions.':
    'JEI gali būti funkcija, parametras ar savybė; TAI (kas pagerėja) ir BET (kas pablogėja) geriausia rašyti kaip funkcijas.',
  'IF': 'JEI', 'THEN': 'TAI', 'BUT': 'BET',
  '1.1.4. Engineering contradiction 2 (EC-2 = inverted EC-1)': '1.1.4. Techninis prieštaravimas 2 (TP-2 = apverstas TP-1)',
  '1.1.5. Mini-problem': '1.1.5. Mini uždavinys',
  'Combine THEN of EC-1 and THEN of EC-2.': 'Sujunkite TP-1 ir TP-2 eilutes TAI.',
  'It is necessary to': 'Reikia',
  'and': 'ir',
  'with minimal changes to the system.': 'minimaliai keičiant sistemą.',
  'Step 1.2. Determine the conflicting pair': '1.2 žingsnis. Nustatyti konfliktuojančią porą',
  '2 elements (product + tool) or 3 (2 products + tool, or product + 2 tools) — never more.':
    '2 elementai (gaminys + įrankis) arba 3 (2 gaminiai + įrankis arba gaminys + 2 įrankiai) – ne daugiau.',
  '1.2.1. Product': '1.2.1. Gaminys',
  '1.2.2. Product state 1': '1.2.2. Gaminio būsena 1',
  '1.2.3. Product state 2': '1.2.3. Gaminio būsena 2',
  '1.2.4. Tool': '1.2.4. Įrankis',
  'The tool interacts directly with the product in EC-1 / EC-2.': 'Įrankis tiesiogiai sąveikauja su gaminiu TP-1 / TP-2.',
  '1.2.5. Tool state 1': '1.2.5. Įrankio būsena 1',
  '1.2.6. Tool state 2': '1.2.6. Įrankio būsena 2',
  'Step 1.3. Graphical models of the engineering contradictions': '1.3 žingsnis. Techninių prieštaravimų grafinės schemos',
  '1.3.1. Graphical presentation of EC-1': '1.3.1. TP-1 grafinė schema',
  '1.3.2. Graphical presentation of EC-2': '1.3.2. TP-2 grafinė schema',
  'Step 1.4. Select a contradiction for further analysis': '1.4 žingsnis. Pasirinkti prieštaravimą tolesnei analizei',
  '1.4.1. Basic engineering contradiction': '1.4.1. Pagrindinis techninis prieštaravimas',
  'Usually pick the one where the main function is performed better.': 'Paprastai renkamasi tas, kuriame pagrindinė funkcija atliekama geriau.',
  '1.4.2. Product': '1.4.2. Gaminys',
  'Product 2 (if exists)': 'Gaminys 2 (jei yra)',
  '1.4.3. Tool': '1.4.3. Įrankis',
  'Tool 2 (if exists)': 'Įrankis 2 (jei yra)',
  '1.4.4. Graphical presentation of selected contradiction': '1.4.4. Pasirinkto prieštaravimo grafinė schema',
  'Step 1.5. Intensify the conflict': '1.5 žingsnis. Sustiprinti konfliktą',
  'Push the IF parameter to its extreme and update THEN / BUT accordingly; "few elements" becomes "no elements".':
    'Parametrą JEI nustumkite iki kraštutinumo ir atitinkamai pakeiskite TAI / BET; „mažai elementų“ virsta „elemento nėra“.',
  'Step 1.6. Formulate the problem model': '1.6 žingsnis. Suformuluoti uždavinio modelį',
  '1.6.1. Conflicting pair': '1.6.1. Konfliktuojanti pora',
  'Product': 'Gaminys',
  'Tool': 'Įrankis',
  '1.6.2. The intensified engineering contradiction': '1.6.2. Sustiprintas techninis prieštaravimas',
  '1.6.3. Problem statement (X-factor)': '1.6.3. Uždavinio formuluotė (X elementas)',
  'It is necessary to introduce an X-factor that preserves the ability to': 'Reikia įvesti X elementą, kuris išsaugotų gebėjimą',
  'without': 'be',
  'without making the system more complex and without any harmful consequences.': 'nesudėtindamas sistemos ir nesukeldamas jokių žalingų pasekmių.',
  'Step 1.7. Apply standard inventive solutions': '1.7 žingsnis. Pritaikyti išradybinius standartus',
  'Optional. If a standard solves it you may jump to Part 7, but continuing through Part 2 is recommended.':
    'Neprivaloma. Jei standartas uždavinį išsprendžia, galima pereiti į 7 dalį, bet rekomenduojama tęsti 2 dalį.',
  'Part 2. Analyzing the problem model': '2 dalis. Uždavinio modelio analizė',
  'Goal: find available resources — space, time, substances and fields of the system and supersystem.':
    'Tikslas – surasti turimus išteklius: erdvę, laiką, sistemos ir supersistemos medžiagas ir laukus.',
  'Step 2.1. Define the operating zone (OZ)': '2.1 žingsnis. Nustatyti operatyvinę zoną (OZ)',
  'OZ-1': 'OZ-1', 'OZ-2': 'OZ-2',
  'Sketch of the space where the conflict appears': 'Erdvės, kurioje kyla konfliktas, eskizas',
  'Do OZ-1 and OZ-2 overlap?': 'Ar OZ-1 ir OZ-2 persidengia?',
  'Step 2.2. Define the operating time (OT)': '2.2 žingsnis. Nustatyti operatyvinį laiką (OL)',
  'OT-1': 'OL-1', 'OT-2': 'OL-2',
  'Do OT-1 and OT-2 overlap?': 'Ar OL-1 ir OL-2 persidengia?',
  'Step 2.3. Define the substance-field resources (SFR)': '2.3 žingsnis. Nustatyti medžiagų ir laukų išteklius (MLR)',
  'List everything that comes to mind — parameters of resources are especially valuable.':
    'Surašykite viską, kas ateina į galvą – ypač vertingi išteklių parametrai.',
  'Resources of the tool': 'Įrankio ištekliai',
  'Resources of the product': 'Gaminio ištekliai',
  'Resources of the supersystem (environment, gravity, air, …)': 'Supersistemos ištekliai (aplinka, gravitacija, oras, …)',
  'substance': 'medžiaga', 'field': 'laukas', 'parameter': 'parametras',
  'Part 3. Ideal final result and physical contradiction': '3 dalis. IGR ir FP apibrėžimas',
  'Step 3.1. Formulate IFR-1': '3.1 žingsnis. Suformuluoti IGR-1',
  'The X-element': 'X elementas',
  'preserves the ability to': 'išsaugo gebėjimą',
  'inside the operational zone': 'operatyvinėje zonoje',
  'during the operational time': 'operatyvinio laiko metu',
  'and eliminates': 'ir pašalina',
  'Step 3.2. Formulate the intensified IFR': '3.2 žingsnis. Suformuluoti sustiprintą IGR',
  'Replace the X-element with a resource from step 2.3 — no new substances or fields. Start with the 5–6 most promising.':
    'X elementą pakeiskite ištekliumi iš 2.3 žingsnio – naujų medžiagų ar laukų įvesti negalima. Pradėkite nuo 5–6 perspektyviausių.',
  'The': 'Išteklius',
  'Step 3.3. Physical contradiction on macro-level': '3.3 žingsnis. Fizikinis prieštaravimas makro lygmeniu',
  'Physical contradiction': 'Fizikinis prieštaravimas',
  '(parameter)': '(parametras)',
  'of': 'kieno',
  'should be': 'turi būti',
  'to provide the useful function': 'kad atliktų naudingą funkciją',
  'to eliminate the harmful action': 'kad pašalintų žalingą veiksmą',
} };

const i18nMissing = new Set();
function tr(s) {
  if (LANG === 'en') return s;
  const v = I18N[LANG][s];
  if (v === undefined) { i18nMissing.add(s); return s; }
  return v;
}
const trf = (s, ...a) => tr(s).replace(/\{(\d)\}/g, (_, i) => a[i]);

// Static page: translate marked text, markup (trusted, from the dictionary above) and attributes.
const norm = s => s.replace(/\s+/g, ' ').trim();
for (const e of document.querySelectorAll('[data-i18n]')) e.textContent = tr(norm(e.textContent));
for (const e of document.querySelectorAll('[data-i18n-html]')) e.innerHTML = tr(norm(e.innerHTML));
for (const e of document.querySelectorAll('[data-i18n-attr]'))
  for (const a of e.dataset.i18nAttr.split(',')) e.setAttribute(a, tr(e.getAttribute(a)));
document.querySelector('.bar strong').textContent = tr('ARIZ-85C');

// Language menu: switching saves the worksheet and reloads, so every text is rebuilt in the new language.
(function () {
  const menu = document.querySelector('.lang-menu');
  document.getElementById('langBtn').innerHTML = FLAGS[LANG] + LANG.toUpperCase();
  const list = document.getElementById('langList');
  for (const [code, name] of Object.entries(LANGS)) {
    const b = document.createElement('button');
    b.type = 'button'; b.lang = code; b.setAttribute('aria-pressed', String(code === LANG));
    b.innerHTML = FLAGS[code]; b.append(name);
    b.onclick = () => {
      menu.open = false;
      if (code === LANG) return;
      try { localStorage.setItem(LANG_KEY, code); } catch {}
      if (typeof flush === 'function') flush();
      location.reload();
    };
    list.append(b);
  }
  document.addEventListener('click', e => { if (!menu.contains(e.target)) menu.open = false; });
})();
