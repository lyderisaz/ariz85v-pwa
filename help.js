'use strict';
// Help: "?" menu (worksheets & examples, ARIZ guide) and ⓘ callouts per step/field.
// Texts are own-words summaries of ARIZ-85C (G. S. Altshuller, 1985), not translations of the original.

// Callouts keyed by step number (matched from heading/label text) or by field name. [explanation, guiding question]
const FIELD_HELP_EN = {
  keyProblem: ['ARIZ works on one well-chosen problem. If the situation holds several, pick the one whose solution helps most — others often disappear with it.',
    'Which single problem, if solved, removes the most trouble?'],
  '1.1': ['Restate the situation as a mini-problem in plain words: the system stays as it is or gets simpler, yet the needed action appears (or the harmful one disappears). This sharpens the conflict and rules out compromises early.',
    'What must change, if nothing else may change?'],
  '1.1.1': ['Name what the system is for — the main function of the part where the problem sits. Write it as verb + object.',
    'What must this system do, and to what?'],
  '1.1.2': ['List all parts, including natural elements that interact with technical ones (e.g. lightning, radio waves). Replace jargon with simple words: "conducting rod", not "lightning rod" — terms carry the old solution and hide properties.',
    'What does the system consist of, including what it touches in its environment?'],
  '1.1.3': ['Describe one state of an element: what gets better (THEN) and what gets worse (BUT).',
    'If I change this, what improves and what gets worse?'],
  '1.1.4': ['Take the opposite state of the same element. If only the product is given, EC-2 may be formal or even unacceptable — it still adds requirements.',
    'What happens in the opposite state?'],
  '1.1.5': ['Combine the THEN lines of EC-1 and EC-2: get both benefits with minimal changes to the system.',
    'Can I state both wanted results in one sentence?'],
  '1.2': ['Conflicting pair = product + tool. Rule 1: if the tool can have two states, name both. Rule 2: among several identical pairs, one is enough. One element of the pair may be double (two tools or two products interfering with each other).',
    'Which two elements are actually in conflict?'],
  '1.2.1': ['Product: the element that must be processed — made, moved, changed, protected, detected or measured. In detection/measurement problems the product can be something that is a tool by function (e.g. a grinding wheel).',
    'What is being processed?'],
  '1.2.2': ['Give the product\'s two states only if it really has them (e.g. hot / cold).', 'Does the product change between two states?'],
  '1.2.4': ['Tool: the element that interacts with the product directly — the cutter, not the machine; the flame, not the burner. Standard parts a product is assembled from also count as tools.',
    'What touches the product directly?'],
  '1.2.5': ['Two opposite states of the tool, matching EC-1 and EC-2 (e.g. many rods / few rods).', 'What are the two extreme states of the tool?'],
  '1.3': ['Draw each contradiction as a scheme: tool A, product B; solid arrow = useful action, wavy = harmful, dashed = needed, dash-dot = controlled. See Table 1 in the ARIZ guide for typical schemes. Afterwards go back to 1.1 and check the chain 1.1–1.3 is logical.',
    'Which typical conflict scheme does this look like?'],
  '1.4': ['Choose the scheme that best serves the main production process (MPP) — and name it. From now on keep the chosen tool state; do not swap it for an "optimal" middle. The goal is to get the opposite state\'s advantage inside this state. In measurement problems the MPP is the whole system\'s process, not the measurement.',
    'Which EC delivers the main process better?'],
  '1.5': ['Push the elements to extreme states. Rule 3: conflicts of "many / few" (strong / weak) are pushed to zero — "few elements" becomes "no element".',
    'What happens at the absolute extreme?'],
  '1.6': ['Problem model: the conflicting pair, the intensified conflict, and what the X-element must do. The model is deliberately partial — only some elements are kept. The X-element need not be a new part: it can be any change (temperature, phase, shape…). Afterwards go back to 1.1 and re-check the chain.',
    'What must the X-element keep, and what must it remove?'],
  '1.6.3': ['State what the X-element must preserve and what it must remove, without complicating the system or causing harm.',
    'Can I say what X does without naming how?'],
  '1.7': ['Check the model against the system of standard inventive solutions. Part 1 often reveals standard features inside non-standard problems, so standards work better on the model than on the original wording.',
    'Does a standard solution fit this model?'],
  '2.1': ['Operating zone (OZ): in the simplest case, the space where the conflict happens. Sketch it, and show whether OZ-1 and OZ-2 overlap.',
    'Where exactly does the conflict happen?'],
  '2.2': ['Operating time (OT): T1 = time of the conflict, T2 = time before it. A short conflict can sometimes be prevented during T2.',
    'When does the conflict happen — and what happens just before?'],
  '2.3': ['Substance-field resources (SFR). Internal: tool, product. External: the specific environment, plus background fields present anywhere (gravity, Earth\'s magnetic field). Supersystem: waste of other systems, near-free elements. For a mini-problem use internal first, then external, then supersystem. The product is usually not changed, but can become a resource if it changes itself, is plentiful, allows a move to the supersystem or to microstructures, can be combined with void, or allows a temporary change.',
    'What is already here that could do the job?'],
  '3.1': ['IFR-1: the X-element, without complicating the system and without harm, removes the harmful action inside the OZ during the OT, while keeping the tool\'s useful action. General idea: gain a useful property without anything else getting worse.',
    'What would the perfect result look like if it happened "by itself"?'],
  '3.2': ['Intensified IFR: replace the X-element with resources only — no new substances or fields. Check lines in order: tool → environment → by-product resources → product. For a mini-problem the first line that gives an idea is enough. Use simple, even childish words.',
    'Which existing resource could be the X-element?'],
  '3.3': ['Macro physical contradiction: the OZ during the OT must have property P to perform one action, and anti-P to perform the other. Short form: "must be …, so that …, and must not be, so that …". Resolve it with the separation principles (Table 2 in the guide).',
    'Which single property must have opposite values?'],
};

const EXAMPLES_HELP_EN = `
<h3>Worksheets</h3>
<ul>
  <li>The list in the toolbar holds all your worksheets in this browser. Each one <b>autosaves</b> as you type.</li>
  <li><b>New</b> starts a blank worksheet. <b>⋯</b> → Rename, Duplicate, Clear or Delete the current one.</li>
  <li><b>Save</b> exports the current worksheet as a <code>.ariz</code> file, optionally with a password (it cannot be recovered if lost). <b>Open</b> imports a file as a <i>new</i> worksheet — nothing is overwritten.</li>
  <li><b>PDF / Print</b> prints the current worksheet; notes and help are left out.</li>
  <li><b>Language</b> (flag, top right) switches the interface; your worksheet texts stay as you wrote them.</li>
</ul>
<h3>Examples</h3>
<ul>
  <li><b>Examples</b> lists worked cases. <b>Open copy</b> adds a copy to your worksheets — change it freely, the original stays as it is and can be opened again.</li>
  <li>On the very first visit the first example (<i>Pencil</i>) is opened for you.</li>
  <li>Click <b>ⓘ</b> next to a step to see what it asks for, then compare with how the example answers it.</li>
</ul>
<h3>Create an example</h3>
<ol>
  <li>Fill a worksheet, give it a clear name (⋯ → Rename).</li>
  <li>⋯ → <b>Export as example…</b>, write a one-line description. You get an unencrypted <code>.ariz</code> with name and description inside.</li>
  <li>To publish it for everyone: put the file in the repository folder <code>examples/</code>, add an entry to <code>examples/index.json</code> and to <code>FILES</code> in <code>sw.js</code>, bump <code>VERSION</code>, release.</li>
  <li>To share privately, just send the file — the receiver uses <b>Open</b>.</li>
</ol>
<h3>Good to know</h3>
<ul>
  <li>Everything stays in this browser; nothing is sent anywhere. Clearing browser data deletes the worksheets — save important ones as files.</li>
  <li>All worksheets share about 5 MB of browser storage. Large photos fill it quickly; prefer small drawings.</li>
  <li><code>.ariz</code> files are JSON: field name → text, <code>uploadedImages</code> for drawings, optional <code>_name</code> / <code>_description</code>.</li>
</ul>`;

const GUIDE_HELP_EN = `
<nav><a href="#g-what">What ARIZ is</a><a href="#g-p1">Part 1</a><a href="#g-p2">Part 2</a><a href="#g-p3">Part 3</a><a href="#g-t1">Conflicts</a><a href="#g-t2">Separation</a><a href="#g-next">Parts 4–9</a><a href="#g-terms">Terms</a></nav>
<h3 id="g-what">What ARIZ is</h3>
<p>ARIZ — the Algorithm of Inventive Problem Solving — is a step-by-step programme for analysing and solving inventive problems, built on the laws of technical system evolution. Its author is <b>Genrikh S. Altshuller</b>; versions are named by year (ARIZ-68, -71, -77, -82, -85). This worksheet follows <b>ARIZ-85C</b> (Russian: АРИЗ-85В), Parts 1–3.</p>
<p>Work in plain words, follow the steps in order, and don't stop at the first hint — the answer becomes clearer step by step. Click <b>ⓘ</b> next to any step for a short explanation and a guiding question.</p>
<p class="muted">Running example in the classic texts: lightning protection of a radio telescope. Many lightning rods protect the antenna but absorb radio waves; few rods let the waves through but no longer protect.</p>

<h3 id="g-p1">Part 1. Analysing the problem</h3>
<p>Goal: turn a vague situation into a clear, simple problem model.</p>
<table><tr><th>Step</th><th>What to do</th></tr>
<tr><td>1.1</td><td>Mini-problem without jargon: the system for <i>[purpose]</i> consists of <i>[parts]</i>; EC-1, EC-2; with minimal changes achieve <i>[result]</i>.</td></tr>
<tr><td>1.2</td><td>Conflicting pair: product and tool.</td></tr>
<tr><td>1.3</td><td>Graphical schemes of EC-1 and EC-2 (Table 1).</td></tr>
<tr><td>1.4</td><td>Choose the scheme that best serves the main production process; name it.</td></tr>
<tr><td>1.5</td><td>Intensify the conflict: extreme states of the elements.</td></tr>
<tr><td>1.6</td><td>Problem model: pair, intensified conflict, what the X-element must do.</td></tr>
<tr><td>1.7</td><td>Check standard solutions. Solved → Part 7 is allowed, but continuing with Part 2 is recommended.</td></tr></table>
<p><b>Rules.</b> R1: if the tool can have two states, name both. R2: of identical pairs, take one. R3: "few" is intensified to "none".</p>
<p><b>Loops.</b> After 1.3 and after 1.6 go back to 1.1 and check that the chain is logical. After 1.4, keep the chosen state — never replace it with an "optimal" one.</p>

<h3 id="g-p2">Part 2. Analysing the problem model</h3>
<p>Goal: take stock of available space, time, substance and field resources.</p>
<table><tr><th>Step</th><th>What to do</th></tr>
<tr><td>2.1</td><td>Operating zone (OZ): the space where the conflict occurs.</td></tr>
<tr><td>2.2</td><td>Operating time (OT): T1 conflict time, T2 time before the conflict.</td></tr>
<tr><td>2.3</td><td>Substance-field resources (SFR) of the system, environment and product.</td></tr></table>
<table><tr><th>Kind</th><th>Sub-types</th></tr>
<tr><td>Internal</td><td>a) tool; b) product</td></tr>
<tr><td>External</td><td>a) specific to this environment; b) background fields everywhere (gravity, Earth's magnetic field)</td></tr>
<tr><td>Supersystem</td><td>a) waste of other systems; b) near-free elements</td></tr></table>
<p>Mini-problem: use internal → external → supersystem, spending as little as possible. Maxi-problem or forecasting: use as many as possible. The SFR list here is preliminary.</p>

<h3 id="g-p3">Part 3. Ideal final result and physical contradiction</h3>
<table><tr><th>Step</th><th>What to do</th></tr>
<tr><td>3.1</td><td>IFR-1: X, without complicating the system or harm, removes the harmful action in the OZ during the OT, keeping the useful one.</td></tr>
<tr><td>3.2</td><td>Intensified IFR-1: no new substances or fields — resources only.</td></tr>
<tr><td>3.3</td><td>Macro PC: the OZ during the OT must be P for one action and anti-P for the other.</td></tr>
<tr><td>3.4*</td><td>Micro PC: particles of a certain state must be present for one macro state and absent (or opposite) for the other.</td></tr>
<tr><td>3.5*</td><td>IFR-2: the OZ during the OT <i>itself</i> provides the opposite states. From here on it is a physical problem.</td></tr>
<tr><td>3.6*</td><td>Check standards for IFR-2. Solved → Part 7 allowed; continuing with Part 4 recommended.</td></tr></table>
<p class="muted">* Not yet in this worksheet — note them in 3.3 or on paper.</p>
<p>Check resource lines in order: tool → environment → by-products → product (multi-screen thinking when done in parallel). Use simple, even childish words — terms increase psychological inertia.</p>

<h3 id="g-t1">Table 1. Typical conflicts in problem models</h3>
<p class="muted">A = tool, B = product.</p>
<table><tr><th>#</th><th>Conflict</th><th>Needed</th></tr>
<tr><td>1</td><td>Counter-action: A acts usefully on B, B acts harmfully back on A.</td><td>Remove harm, keep the useful action.</td></tr>
<tr><td>2</td><td>The same action of A on B is both useful and harmful (e.g. at different stages).</td><td>Remove harm, keep the useful action.</td></tr>
<tr><td>3</td><td>A helps one part of B (B1) but harms another (B2).</td><td>Remove harm to B2, keep benefit to B1.</td></tr>
<tr><td>4</td><td>A helps B but harms C (A, B, C form a system).</td><td>Remove harm without destroying the system.</td></tr>
<tr><td>5</td><td>A's useful action on B harms A itself (e.g. complicates it).</td><td>Remove harm, keep the useful action.</td></tr>
<tr><td>6</td><td>Incompatible actions: A's action on B conflicts with C's action on B (e.g. processing and measuring).</td><td>Provide C's action without changing A's.</td></tr>
<tr><td>7</td><td>Incomplete action or none: A does one action where two are needed, or doesn't act, or is absent.</td><td>Act on B with the simplest possible A.</td></tr>
<tr><td>8</td><td>"Silence": information about A, B or their interaction is missing.</td><td>Obtain the information.</td></tr>
<tr><td>9</td><td>Uncontrolled (excessive) action: A acts constantly, but variable control is needed.</td><td>Make A's action controllable.</td></tr></table>

<h3 id="g-t2">Table 2. Resolving physical contradictions</h3>
<table><tr><th>#</th><th>Principle</th></tr>
<tr><td>1</td><td>Separate the opposite properties <b>in space</b>.</td></tr>
<tr><td>2</td><td>Separate the opposite properties <b>in time</b>.</td></tr>
<tr><td>3</td><td>System transition: join identical or different systems into a <b>supersystem</b>.</td></tr>
<tr><td>4</td><td>Move to the <b>anti-system</b> or combine system and anti-system.</td></tr>
<tr><td>5</td><td>The <b>whole has property P, the parts anti-P</b>.</td></tr>
<tr><td>6</td><td>Move to the <b>micro level</b>.</td></tr>
<tr><td>7</td><td>Phase transition: <b>change the phase</b> of part of the system or environment.</td></tr>
<tr><td>8</td><td><b>Dual phase state</b> that switches with conditions.</td></tr>
<tr><td>9</td><td>Use <b>effects accompanying</b> a phase transition.</td></tr>
<tr><td>10</td><td>Replace a single-phase substance with a <b>two-phase</b> one.</td></tr>
<tr><td>11</td><td>Physico-chemical: substance <b>appears and disappears</b> (decomposition / combination, ionisation / recombination).</td></tr></table>

<h3 id="g-next">After Part 3 (not in this worksheet yet)</h3>
<ul>
  <li><b>Part 4</b> — mobilise and apply SFR: smart little people, step back from the IFR, mixtures of resources, void, derived resources, electric field.</li>
  <li><b>Part 5</b> — apply the knowledge base: standards, analogues, separation principles, physical effects.</li>
  <li><b>Part 6</b> — change or replace the problem.</li>
  <li><b>Part 7</b> — analyse how the PC was removed (quality check; if any answer is "no", back to 1.1).</li>
  <li><b>Part 8</b> — apply the answer to other problems.</li>
  <li><b>Part 9</b> — analyse the solution process.</li>
</ul>

<h3 id="g-terms">Terms</h3>
<table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>EC / TC</td><td>engineering (technical) contradiction — техническое противоречие</td></tr>
<tr><td>PC</td><td>physical contradiction — физическое противоречие</td></tr>
<tr><td>Mini / maxi-problem</td><td>keep the system and change minimally / change freely</td></tr>
<tr><td>Product / tool</td><td>изделие / инструмент — the conflicting pair</td></tr>
<tr><td>MPP</td><td>main production process — главный производственный процесс</td></tr>
<tr><td>X-element</td><td>whatever change resolves the conflict (not necessarily a new part)</td></tr>
<tr><td>OZ / OT</td><td>operating zone / operating time (T1, T2)</td></tr>
<tr><td>SFR</td><td>substance-field resources — вещественно-полевые ресурсы</td></tr>
<tr><td>IFR-1, IFR-2</td><td>ideal final result — идеальный конечный результат</td></tr>
<tr><td>SLP</td><td>smart little people modelling — ММЧ</td></tr>
<tr><td>Multi-screen thinking</td><td>looking at system, supersystem and subsystem, past and future at once</td></tr></table>`;

// Lithuanian texts live in help-lt.js (loaded first); English is the fallback.
const LT_HELP = LANG === 'lt' && typeof FIELD_HELP_LT !== 'undefined';
const FIELD_HELP = LT_HELP ? FIELD_HELP_LT : FIELD_HELP_EN;

(function () {
  const $ = id => document.getElementById(id);
  const drawer = $('helpDrawer'), helpMenu = document.querySelector('.help-menu');
  const HELP_SEEN = 'ariz_help_seen';
  const PAGES = {
    examples: [tr('Using worksheets & examples'), LT_HELP ? EXAMPLES_HELP_LT : EXAMPLES_HELP_EN],
    guide: [tr('ARIZ-85C guide'), LT_HELP ? GUIDE_HELP_LT : GUIDE_HELP_EN],
  };

  function openHelp(page) {
    const [title, html] = PAGES[page];
    $('helpTitle').textContent = title;
    $('helpBody').innerHTML = html; // static, trusted strings from this file
    drawer.hidden = false; drawer.scrollTop = 0;
    $('helpClose').focus();
  }
  function closeHelp() {
    drawer.hidden = true;
    try { localStorage.setItem(HELP_SEEN, '1'); } catch {}
  }
  helpMenu.addEventListener('click', e => {
    const page = e.target.dataset?.help;
    if (page) { helpMenu.open = false; openHelp(page); }
  });
  document.addEventListener('click', e => { if (!helpMenu.contains(e.target)) helpMenu.open = false; });
  $('helpClose').onclick = closeHelp;
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) closeHelp(); });
  // In-drawer anchor links scroll inside the drawer instead of changing the page URL.
  drawer.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#g-"]');
    if (a) { e.preventDefault(); drawer.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); }
  });

  // ⓘ callouts: headings "Step 1.2. …" / "1.2 žingsnis. …", "1.1.3. …" and labels "1.2.1. Product" are matched by number.
  const stepOf = text => (text.match(/^\D*?(\d\.\d(?:\.\d)?)[.\s]/) || [])[1];
  function addCallout(anchor, holder, key) {
    const [text, q] = FIELD_HELP[key];
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'ibtn'; btn.textContent = 'i';
    btn.title = tr('What is this step?'); btn.setAttribute('aria-expanded', 'false');
    const box = document.createElement('div');
    box.className = 'callout'; box.hidden = true; box.id = 'help-' + key.replace(/\./g, '-');
    const p = document.createElement('p'); p.textContent = text;
    const pq = document.createElement('p'); pq.className = 'q'; pq.textContent = tr('Ask yourself: ') + q;
    box.append(p, pq);
    btn.setAttribute('aria-controls', box.id);
    btn.onclick = () => { box.hidden = !box.hidden; btn.setAttribute('aria-expanded', String(!box.hidden)); };
    anchor.append(btn);
    holder.after(box);
  }
  const done = new Set();
  for (const h of document.querySelectorAll('#mainForm h3, #mainForm h4')) {
    const k = stepOf(h.textContent);
    if (k && FIELD_HELP[k] && !done.has(k)) { done.add(k); addCallout(h, h, k); }
  }
  for (const row of document.querySelectorAll('#mainForm .row')) {
    const label = row.querySelector('label'), name = row.querySelector('textarea')?.name;
    const k = FIELD_HELP[name] ? name : label && stepOf(label.textContent);
    if (k && FIELD_HELP[k] && !done.has(k)) { done.add(k); addCallout(row, row, k); }
  }

  // First visit: show how worksheets and examples work (same convention as the GBC editor).
  let seen = true;
  try { seen = !!localStorage.getItem(HELP_SEEN); } catch {}
  if (!seen) openHelp('examples');
})();
