'use strict';
// Field names are part of the .ariz file format; renaming one breaks existing files.
const AUTOSAVE_KEY = 'ariz_form_autosave';
const PBKDF2 = { name: 'PBKDF2', iterations: 100000, hash: 'SHA-256' };

// ---- Form schema: [type, ...args].
// Builders translate at build time (tr from i18n.js); English strings are the dictionary keys.
const h2 = t => ['h2', tr(t)], h3 = t => ['h3', tr(t)], h4 = t => ['h4', tr(t)], n = t => ['note', tr(t)];
const f = (name, label = '') => ['field', name, label && tr(label)], st = t => ['static', tr(t)];
const tri = p => [f(p + 'If', 'IF'), f(p + 'Then', 'THEN'), f(p + 'But', 'BUT')];
const img = (key, label = 'Drawing') => ['img', key, tr(label)];
const res = (p, title) => ['res', p, tr(title)];
const block = items => ['block', items];
const range = k => Array.from({ length: k }, (_, i) => i + 1);

const SCHEMA = [
  n('Choose the key problem before starting ARIZ.'),
  f('keyProblem', 'Key problem'),

  h2('Part 1. Analyzing the system'),
  h3('Step 1.1. Formulate the mini-problem'),
  h4('1.1.1. Main function of the system'),
  n('"System" = the part where the key problem occurs; phrase the main function as a proper function.'),
  f('mainFunction', 'An engineering system for'),
  h4('1.1.2. Components of the system'),
  n('A long list is fine.'),
  f('systemComponents', 'The system consists of'),
  h4('1.1.3. Engineering contradiction 1 (EC-1)'),
  n('IF may be a function, parameter or property; THEN (improves) and BUT (worsens) are best written as functions.'),
  ...tri('ec1'),
  h4('1.1.4. Engineering contradiction 2 (EC-2 = inverted EC-1)'),
  ...tri('ec2'),
  h4('1.1.5. Mini-problem'),
  n('Combine THEN of EC-1 and THEN of EC-2.'),
  f('miniProblemNecessary', 'It is necessary to'),
  f('miniProblemAnd', 'and'),
  st('with minimal changes to the system.'),

  h3('Step 1.2. Determine the conflicting pair'),
  n('2 elements (product + tool) or 3 (2 products + tool, or product + 2 tools) — never more.'),
  f('product', '1.2.1. Product'),
  f('productState1', '1.2.2. Product state 1'),
  f('productState2', '1.2.3. Product state 2'),
  f('tool', '1.2.4. Tool'),
  n('The tool interacts directly with the product in EC-1 / EC-2.'),
  f('toolState1', '1.2.5. Tool state 1'),
  f('toolState2', '1.2.6. Tool state 2'),

  h3('Step 1.3. Graphical models of the engineering contradictions'),
  img('graphicalEC1', '1.3.1. Graphical presentation of EC-1'),
  img('graphicalEC2', '1.3.2. Graphical presentation of EC-2'),

  h3('Step 1.4. Select a contradiction for further analysis'),
  h4('1.4.1. Basic engineering contradiction'),
  n('Usually pick the one where the main function is performed better.'),
  ...tri('basicEC'),
  f('selectedProduct', '1.4.2. Product'),
  f('selectedProduct2', 'Product 2 (if exists)'),
  f('selectedTool', '1.4.3. Tool'),
  f('selectedTool2', 'Tool 2 (if exists)'),
  img('selectedContradictionGraphical', '1.4.4. Graphical presentation of selected contradiction'),

  h3('Step 1.5. Intensify the conflict'),
  n('Push the IF parameter to its extreme and update THEN / BUT accordingly; "few elements" becomes "no elements".'),
  ...tri('intensified'),

  h3('Step 1.6. Formulate the problem model'),
  h4('1.6.1. Conflicting pair'),
  f('modelProduct', 'Product'),
  f('modelProduct2', 'Product 2 (if exists)'),
  f('modelTool', 'Tool'),
  f('modelTool2', 'Tool 2 (if exists)'),
  h4('1.6.2. The intensified engineering contradiction'),
  ...tri('modelIntensified'),
  h4('1.6.3. Problem statement (X-factor)'),
  st('It is necessary to introduce an X-factor that preserves the ability to'),
  f('ifrUseful'),
  st('without'),
  f('ifrWithout'),
  st('without making the system more complex and without any harmful consequences.'),

  h3('Step 1.7. Apply standard inventive solutions'),
  n('Optional. If a standard solves it you may jump to Part 7, but continuing through Part 2 is recommended.'),

  h2('Part 2. Analyzing the problem model'),
  n('Goal: find available resources — space, time, substances and fields of the system and supersystem.'),
  h3('Step 2.1. Define the operating zone (OZ)'),
  f('oz1', 'OZ-1'),
  f('oz2', 'OZ-2'),
  img('ozSketch', 'Sketch of the space where the conflict appears'),
  img('ozOverlap', 'Do OZ-1 and OZ-2 overlap?'),
  h3('Step 2.2. Define the operating time (OT)'),
  f('ot1', 'OT-1'),
  f('ot2', 'OT-2'),
  img('otOverlap', 'Do OT-1 and OT-2 overlap?'),
  h3('Step 2.3. Define the substance-field resources (SFR)'),
  n('List everything that comes to mind — parameters of resources are especially valuable.'),
  res('toolResources', 'Resources of the tool'),
  res('productResources', 'Resources of the product'),
  res('supersystemResources', 'Resources of the supersystem (environment, gravity, air, …)'),

  h2('Part 3. Ideal final result and physical contradiction'),
  h3('Step 3.1. Formulate IFR-1'),
  st('The X-element'),
  f('ifr1Useful', 'preserves the ability to'),
  f('ifr1Zone', 'inside the operational zone'),
  f('ifr1Time', 'during the operational time'),
  f('ifr1Eliminates', 'and eliminates'),

  h3('Step 3.2. Formulate the intensified IFR'),
  n('Replace the X-element with a resource from step 2.3 — no new substances or fields. Start with the 5–6 most promising.'),
  ...range(5).map(i => block([
    f(`intensifiedIFR${i}Resource`, 'The'),
    f(`intensifiedIFR${i}Useful`, 'preserves the ability to'),
    f(`intensifiedIFR${i}Zone`, 'inside the operational zone'),
    f(`intensifiedIFR${i}Time`, 'during the operational time'),
    f(`intensifiedIFR${i}Eliminates`, 'and eliminates'),
  ])),

  h3('Step 3.3. Physical contradiction on macro-level'),
  ...range(5).map(i => block([
    ['h4', `${tr('Physical contradiction')} ${i}`],
    f(`physicalContradiction${i}Parameter`, '(parameter)'),
    f(`physicalContradiction${i}Resource`, 'of'),
    f(`physicalContradiction${i}Value1`, 'should be'),
    f(`physicalContradiction${i}UsefulFunction`, 'to provide the useful function'),
    st('BUT'),
    f(`physicalContradiction${i}Value2`, 'should be'),
    f(`physicalContradiction${i}HarmfulFunction`, 'to eliminate the harmful action'),
  ])),
];

// ---- Render
const form = document.getElementById('mainForm');
const images = {};
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

function textarea(name) {
  const t = el('textarea'); t.name = t.id = name; t.rows = 1;
  return t;
}

function render(items, parent) {
  for (const it of items) {
    if (Array.isArray(it[0])) { render(it, parent); continue; }
    const [type, a, b] = it;
    if (type === 'h2' || type === 'h3' || type === 'h4') parent.append(el(type, '', a));
    else if (type === 'note') parent.append(el('div', 'note', a));
    else if (type === 'static') parent.append(el('p', 'static', a));
    else if (type === 'field') {
      const row = el('div', 'row'), t = textarea(a);
      const l = el('label', '', b); l.htmlFor = a;
      if (!b) { row.style.gridTemplateColumns = '1fr'; t.setAttribute('aria-label', a); } else row.append(l);
      row.append(t); parent.append(row);
    } else if (type === 'block') { const d = el('div', 'block'); render(b === undefined ? a : b, d); parent.append(d); }
    else if (type === 'res') {
      parent.append(el('h4', '', b));
      const g = el('div', 'res');
      for (const k of ['Substance', 'Field', 'Parameter']) {
        const c = el('div'), l = el('label', '', tr(k.toLowerCase())), t = textarea(a + k);
        l.htmlFor = a + k; c.append(l, t); g.append(c);
      }
      parent.append(g);
    } else if (type === 'img') {
      parent.append(el('h4', '', b));
      const area = el('div', 'draw-area'); area.dataset.field = a; area.tabIndex = 0; area.setAttribute('role', 'button');
      area.setAttribute('aria-label', tr('Upload image: ') + b);
      const input = el('input'); input.type = 'file'; input.accept = 'image/*'; input.hidden = true;
      area.append(el('span', 'hint', '📎 ' + tr('Click, paste or drop an image (double-click image to remove)')), input);
      area.onclick = () => input.click();
      area.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } };
      input.onchange = () => input.files[0] && loadImage(a, input.files[0]);
      area.ondragover = e => { e.preventDefault(); area.classList.add('over'); };
      area.ondragleave = () => area.classList.remove('over');
      area.ondrop = e => { e.preventDefault(); area.classList.remove('over'); const file = e.dataTransfer.files[0]; if (file) loadImage(a, file); };
      area.onpaste = e => { const file = [...e.clipboardData.files][0]; if (file) loadImage(a, file); };
      parent.append(area);
    }
  }
}
render(SCHEMA, form);

function loadImage(key, file) {
  if (!file.type.startsWith('image/')) return alert(tr('Please choose an image file.'));
  const r = new FileReader();
  r.onload = () => { setImage(key, r.result); changed(); };
  r.readAsDataURL(file);
}

function setImage(key, dataUrl) {
  const area = form.querySelector(`.draw-area[data-field="${key}"]`);
  if (!area) return;
  area.querySelector('img')?.remove();
  if (!dataUrl) { delete images[key]; return; }
  images[key] = dataUrl;
  const i = el('img'); i.src = dataUrl; i.alt = key;
  i.onclick = e => e.stopPropagation();
  i.ondblclick = e => { e.stopPropagation(); if (confirm(tr('Remove this image?'))) { setImage(key, null); changed(); } };
  area.prepend(i);
}

// ---- Data
const fields = () => [...form.querySelectorAll('textarea')];
const getData = () => ({ ...Object.fromEntries(fields().map(t => [t.name, t.value])), uploadedImages: { ...images } });
const hasData = d => Object.entries(d).some(([k, v]) => k === 'uploadedImages' ? Object.keys(v).length : String(v).trim());

function setData(d) {
  if (!d || typeof d !== 'object') throw new Error('Not an ARIZ file');
  fields().forEach(t => { t.value = typeof d[t.name] === 'string' ? d[t.name] : ''; grow(t); });
  for (const k of Object.keys(images)) setImage(k, null);
  for (const [k, v] of Object.entries(d.uploadedImages || {}))
    if (typeof v === 'string' && v.startsWith('data:image/')) setImage(k, v); // only accept inline images from files
  progress();
}

const grow = t => { t.style.height = 'auto'; t.style.height = t.scrollHeight + 2 + 'px'; };

function progress() {
  const all = fields(), filled = all.filter(t => t.value.trim()).length + Object.keys(images).length;
  const pct = Math.round(filled / (all.length + 6) * 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '%';
}

// ---- Worksheet library (drakonwidget-style: list in localStorage, seeded from examples/)
// shortcut: all worksheets share the ~5 MB localStorage quota, images fill it fast; move to IndexedDB if users hit it.
const LIST_KEY = 'ariz_worksheets', CUR_KEY = 'ariz_current', WS = id => 'ariz_ws_' + id;
const sel = document.getElementById('wsSelect');
let list = [], current = null, timer = null;
// Each worksheet belongs to the language it was made in; only the current language's worksheets are shown.
const CUR_LANG_KEY = CUR_KEY + '_' + LANG;
const visible = () => list.filter(w => w.lang === LANG);

const readJSON = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } };
const store = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const status = t => { document.getElementById('saved').textContent = t; };
const currentName = () => list.find(w => w.id === current)?.name || tr('Untitled');
const uniqueName = (base, except) => { let n = base, i = 2; while (list.some(w => w.name === n && w.id !== except)) n = `${base} (${i++})`; return n; };
const isWorksheet = o => o && typeof o === 'object' && !Array.isArray(o);

function saveList() { store(LIST_KEY, list); localStorage.setItem(CUR_LANG_KEY, current); }

function renderSelect() {
  sel.replaceChildren(...visible().map(w => { const o = el('option', '', w.name); o.value = w.id; return o; }));
  sel.value = current;
  document.getElementById('wsTitle').textContent = currentName();
  document.title = currentName() + ' – ' + tr('ARIZ-85C');
}

function persist() {
  try { store(WS(current), getData()); status(tr('Autosaved ') + new Date().toLocaleTimeString()); }
  catch { status(tr('Autosave failed — storage full. Remove large images or delete worksheets.')); }
}
function flush() { if (timer) { clearTimeout(timer); timer = null; persist(); } }

function changed() {
  progress();
  clearTimeout(timer);
  timer = setTimeout(() => { timer = null; persist(); }, 1000);
}
form.addEventListener('input', e => { if (e.target.tagName === 'TEXTAREA') grow(e.target); changed(); });
addEventListener('pagehide', flush);

function addWorksheet(name, data = {}) {
  flush();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  try { store(WS(id), data); } catch { return alert(tr('Not enough browser storage. Delete some worksheets or images first.')); }
  list.push({ id, name: uniqueName(name), lang: LANG });
  current = id; saveList(); setData(data); renderSelect();
  status('');
}

function switchTo(id) {
  flush();
  current = id; saveList(); setData(readJSON(WS(id), {})); renderSelect();
  status('');
}
sel.onchange = () => switchTo(sel.value);

// ---- Examples: examples/index.json lists [{file, lang, name, description}].
let examples = null;
const getExamples = async () => examples ??= await fetch('examples/index.json').then(r => r.json());
const langExamples = async () => (await getExamples()).filter(e => e.lang === LANG);
async function loadExample(ex) {
  const data = await fetch('examples/' + ex.file).then(r => r.json());
  addWorksheet(ex.name, data);
}

const exDialog = document.getElementById('exDialog');
async function showExamples() {
  const ul = document.getElementById('exList');
  try {
    ul.replaceChildren(...(await langExamples()).map(ex => {
      const li = el('li'), info = el('div'), b = el('button', 'primary', tr('Open copy'));
      const name = el('strong', '', ex.name);
      if (FLAGS[ex.lang]) name.insertAdjacentHTML('afterbegin', FLAGS[ex.lang]); // static SVG from i18n.js
      info.append(name, el('p', 'muted', ex.description || ''));
      b.type = 'button';
      b.onclick = async () => { exDialog.close(); try { await loadExample(ex); } catch { alert(tr('Could not load example.')); } };
      li.append(info, b); return li;
    }));
  } catch { ul.replaceChildren(el('li', 'muted', tr('Examples are not available (offline before first load?).'))); }
  exDialog.showModal();
}

const slug = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'ariz';

function exportExample() {
  const description = prompt(tr('Short description of this example:'), '');
  if (description === null) return;
  flush();
  download({ _name: currentName(), _description: description, _lang: LANG, ...getData() }, slug(currentName()));
}

const menuActions = {
  rename() {
    const n = prompt(tr('Worksheet name:'), currentName());
    if (!n || !n.trim()) return;
    list.find(w => w.id === current).name = uniqueName(n.trim(), current);
    saveList(); renderSelect();
  },
  duplicate() { flush(); addWorksheet(currentName() + tr(' copy'), getData()); },
  exportExample,
  clear() { if (confirm(trf('Clear all fields and images in "{0}"?', currentName()))) { setData({}); persist(); } },
  delete() {
    if (!confirm(trf('Delete worksheet "{0}"? Save it first if you need it.', currentName()))) return;
    clearTimeout(timer); timer = null;
    localStorage.removeItem(WS(current));
    list = list.filter(w => w.id !== current);
    const [next] = visible();
    if (next) switchTo(next.id); else addWorksheet(tr('Untitled'));
  },
};
const menu = document.querySelector('.bar .menu');
menu.addEventListener('click', e => {
  const act = e.target.dataset?.act;
  if (act) { menu.open = false; menuActions[act](); }
});
document.addEventListener('click', e => { if (!menu.contains(e.target)) menu.open = false; });

// ---- Crypto (AES-GCM 256, key from PBKDF2-SHA256; file is {salt, iv, data} as byte arrays)
async function deriveKey(password, salt, usage) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ ...PBKDF2, salt }, base, { name: 'AES-GCM', length: 256 }, false, [usage]);
}
async function encrypt(obj, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt, 'encrypt');
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(obj)));
  return { salt: [...salt], iv: [...iv], data: [...new Uint8Array(ct)] };
}
async function decrypt(enc, password) {
  const key = await deriveKey(password, new Uint8Array(enc.salt), 'decrypt');
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(enc.iv) }, key, new Uint8Array(enc.data));
  return JSON.parse(new TextDecoder().decode(pt));
}

// ---- Password dialog: resolves {action: 'ok'|'plain'|'cancel', password}
const dlg = document.getElementById('pwDialog'), pw1 = document.getElementById('pw1'), pw2 = document.getElementById('pw2');
function askPassword(saving) {
  document.getElementById('pwTitle').textContent = tr(saving ? 'Save file' : 'Encrypted file');
  document.getElementById('pwMsg').textContent = tr(saving
    ? 'Optional: set a password (min 4 chars) to encrypt the file. It cannot be recovered if lost.'
    : 'Enter the password to decrypt this file.');
  pw2.hidden = document.getElementById('pwPlain').hidden = !saving;
  pw1.value = pw2.value = '';
  dlg.showModal();
  return new Promise(res => dlg.addEventListener('close', () => res({ action: dlg.returnValue, password: pw1.value }), { once: true }));
}

function download(obj, base) {
  const name = `${base}-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}.ariz`;
  const a = el('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(obj)], { type: 'application/octet-stream' }));
  a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

async function save() {
  flush();
  const data = { _name: currentName(), ...getData() };
  if (!hasData(getData())) return alert(tr('The worksheet is empty.'));
  for (;;) {
    const r = await askPassword(true);
    if (r.action === 'cancel' || !r.action) return;
    if (r.action === 'plain') { download(data, slug(currentName())); break; }
    if (r.password.length < 4) { alert(tr('Password must be at least 4 characters.')); continue; }
    if (r.password !== pw2.value) { alert(tr('Passwords do not match.')); continue; }
    download(await encrypt(data, r.password), slug(currentName())); break;
  }
}

// Imports a file as a new worksheet, so nothing is overwritten.
async function openFile(file) {
  let obj;
  try { obj = JSON.parse(await file.text()); } catch { return alert(tr('Invalid file — expected a .ariz file.')); }
  if (Array.isArray(obj?.salt) && Array.isArray(obj.iv) && Array.isArray(obj.data)) {
    const r = await askPassword(false);
    if (r.action !== 'ok') return;
    try { obj = await decrypt(obj, r.password); } catch { return alert(tr('Wrong password or corrupted file.')); }
  }
  if (!isWorksheet(obj)) return alert(tr('Invalid file — expected a .ariz file.'));
  const name = typeof obj._name === 'string' && obj._name.trim() ? obj._name.trim() : file.name.replace(/\.ariz$/i, '');
  addWorksheet(name, obj);
}

// ---- Toolbar
const openInput = document.getElementById('openFile');
document.getElementById('openBtn').onclick = () => openInput.click();
openInput.onchange = () => { if (openInput.files[0]) openFile(openInput.files[0]); openInput.value = ''; };
document.getElementById('saveBtn').onclick = save;
document.getElementById('newBtn').onclick = () => addWorksheet(tr('Untitled'));
document.getElementById('examplesBtn').onclick = showExamples;
document.getElementById('printBtn').onclick = () => { fields().forEach(grow); print(); };
document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); save(); } });

// ---- Start: restore library; a language with no worksheets yet gets its examples (DrakonWidget-style).
(async () => {
  list = readJSON(LIST_KEY, []);
  if (!Array.isArray(list)) list = [];
  let all = [];
  try { all = await getExamples(); } catch (e) { console.warn('Examples unavailable', e); }
  // v02.02 and older had no language per worksheet: take it from the example it came from, else the current one.
  const base = n => n.replace(/ \(\d+\)$/, '');
  for (const w of list) if (!LANGS[w.lang]) w.lang = all.find(e => e.name === base(w.name))?.lang || LANG;
  const id = localStorage.getItem(CUR_LANG_KEY) || localStorage.getItem(CUR_KEY); // read before seeding moves it
  const fresh = !list.length;
  if (fresh) {
    const old = readJSON(AUTOSAVE_KEY, null); // v01.00 single-form autosave
    if (isWorksheet(old)) { addWorksheet(tr('My worksheet'), old); localStorage.removeItem(AUTOSAVE_KEY); }
  }
  if (fresh || !visible().length) {
    const mine = all.filter(e => e.lang === LANG);
    for (const ex of mine.length ? mine : all.slice(0, 1))
      try { await loadExample(ex); } catch (e) { console.warn('Example unavailable', ex.file, e); }
  }
  const shown = visible();
  if (shown.length) switchTo((shown.find(w => w.id === id) || shown[0]).id);
  else addWorksheet(tr('Untitled'));
  // Opening a .ariz file via OS "Open with" when installed (Chromium file handling)
  if ('launchQueue' in window) launchQueue.setConsumer(async p => { if (p.files[0]) openFile(await p.files[0].getFile()); });
})();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  // A new sw.js takes over at once (skipWaiting + clients.claim): reload once so the page matches it.
  // Only when a worker already controlled the page, so the very first install doesn't reload.
  if (navigator.serviceWorker.controller)
    navigator.serviceWorker.addEventListener('controllerchange', () => { flush(); location.reload(); }, { once: true });
  navigator.serviceWorker.register('sw.js');
}
