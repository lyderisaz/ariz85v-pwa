import json, sys, urllib.parse

def svg(body, h=170):
    s = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 {h}" font-family="Arial,sans-serif" font-size="14">
<defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#333"/></marker>
<marker id="r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#c62828"/></marker></defs>
<rect width="420" height="{h}" fill="#fff"/>{body}</svg>'''
    return 'data:image/svg+xml;charset=utf-8,' + urllib.parse.quote(s)

def pair(tool, product, good, bad, title):
    return svg(f'''<text x="210" y="22" text-anchor="middle" font-weight="bold">{title}</text>
<rect x="20" y="60" width="130" height="44" rx="6" fill="#e8eefc" stroke="#1f2f57"/><text x="85" y="87" text-anchor="middle">{tool}</text>
<rect x="270" y="60" width="130" height="44" rx="6" fill="#f3f3f3" stroke="#555"/><text x="335" y="87" text-anchor="middle">{product}</text>
<line x1="152" y1="72" x2="266" y2="72" stroke="#333" stroke-width="2" marker-end="url(#a)"/><text x="210" y="64" text-anchor="middle" font-size="12">{good}</text>
<path d="M85,106 q-20,40 0,46 q20,6 10,-40" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#r)"/>
<text x="110" y="150" fill="#c62828" font-size="12">{bad}</text>''')

d = {
  "_name": "Pencil: sharp tip vs. strong tip",
  "_description": "Classic training case: a thin graphite tip draws fine lines but breaks and wears fast. Parts 1–3 filled in.",
  "keyProblem": "A wooden graphite pencil loses its fine line quickly: the sharp tip breaks under writing pressure or wears down, so the user has to sharpen it again and again.",
  "mainFunction": "leaving a thin, even graphite line on paper",
  "systemComponents": "graphite lead (graphite + clay binder), wooden casing, glue, lacquer paint, ferrule, eraser.\nSupersystem: paper, user's hand, sharpener, desk, air.",
  "ec1If": "the lead tip is thin (sharp)",
  "ec1Then": "the tip leaves a thin line on the paper",
  "ec1But": "the tip breaks under pressure and wears down fast",
  "ec2If": "the lead tip is thick (blunt)",
  "ec2Then": "the tip withstands pressure and lasts long",
  "ec2But": "the tip leaves a thick, blurred line",
  "miniProblemNecessary": "leave a thin line on the paper",
  "miniProblemAnd": "keep the tip strong and long-lasting",
  "product": "paper (the line on it)",
  "tool": "lead tip",
  "toolState1": "thin (sharp) tip",
  "toolState2": "thick (blunt) tip",
  "basicECIf": "the lead tip is thin (sharp)",
  "basicECThen": "the tip leaves a thin line on the paper",
  "basicECBut": "the tip breaks under pressure and wears down fast",
  "selectedProduct": "paper",
  "selectedTool": "thin lead tip",
  "intensifiedIf": "the lead tip is infinitely thin (a point with no width)",
  "intensifiedThen": "the line is as thin as needed",
  "intensifiedBut": "the tip has no strength at all: it breaks at the first touch and is gone after one stroke",
  "modelProduct": "paper",
  "modelTool": "infinitely thin lead tip",
  "modelIntensifiedIf": "the lead tip is infinitely thin",
  "modelIntensifiedThen": "the line is as thin as needed",
  "modelIntensifiedBut": "the tip breaks immediately and wears away at once",
  "ifrUseful": "leave a thin line on the paper",
  "ifrWithout": "the tip breaking or wearing down",
  "oz1": "contact point of the tip and the paper, where the line is formed",
  "oz2": "the thin cone of the tip just above the contact, where bending stress breaks it and friction wears it",
  "ot1": "during the writing stroke, while the tip touches and moves over the paper",
  "ot2": "during the same stroke (pressure peaks); wear adds up over many strokes",
  "toolResourcesSubstance": "graphite (layered, slippery)\nclay binder\nwax / polymer impregnation\nwood around the lead\nlacquer",
  "toolResourcesField": "elastic forces in the lead\nfriction against paper\nsupport from the wooden casing",
  "toolResourcesParameter": "lead diameter\nlead cross-section shape (round / flat)\nhardness grade (9H…9B)\nlength of exposed lead\ncone angle\nlayer structure / anisotropy",
  "productResourcesSubstance": "paper fibres\nfiller and sizing\ngraphite particles already deposited",
  "productResourcesField": "friction (abrasion)\nadhesion of graphite",
  "productResourcesParameter": "surface roughness\nhardness of paper\nabsorbency",
  "supersystemResourcesSubstance": "user's hand and fingers\nsharpener\nair\ndesk",
  "supersystemResourcesField": "hand pressure\nrotation of the pencil between fingers\ngravity",
  "supersystemResourcesParameter": "writing angle\nwriting pressure\nstroke direction\ntime between strokes",
  "ifr1Useful": "leave a thin line on the paper",
  "ifr1Zone": "at the contact point of the tip and the paper",
  "ifr1Time": "during the writing stroke",
  "ifr1Eliminates": "breaking and wearing down of the tip",
  "intensifiedIFR1Resource": "lead itself (thin lead fed out from a holder in small steps)",
  "intensifiedIFR1Useful": "leave a thin line — only a tiny, well-supported length sticks out",
  "intensifiedIFR1Zone": "at the contact point",
  "intensifiedIFR1Time": "during the stroke; more lead is pushed out between strokes",
  "intensifiedIFR1Eliminates": "breaking (short lever) and sharpening (constant thin diameter) → mechanical pencil",
  "intensifiedIFR2Resource": "friction with the paper (wear)",
  "intensifiedIFR2Useful": "leave a thin line — wear itself keeps the tip sharp",
  "intensifiedIFR2Zone": "at the contact point",
  "intensifiedIFR2Time": "during every stroke",
  "intensifiedIFR2Eliminates": "blunting: a lead made of a hard core and a soft shell wears into a point by itself (self-sharpening, like rodent teeth)",
  "intensifiedIFR3Resource": "rotation of the pencil by the user's fingers",
  "intensifiedIFR3Useful": "leave a thin line",
  "intensifiedIFR3Zone": "at the contact point",
  "intensifiedIFR3Time": "between and during strokes",
  "intensifiedIFR3Eliminates": "one-sided wear: turning the lead (manually or by a rotating mechanism) keeps the cone symmetric and sharp",
  "intensifiedIFR4Resource": "cross-section shape of the lead (flat lead)",
  "intensifiedIFR4Useful": "leave a thin line with the narrow edge",
  "intensifiedIFR4Zone": "at the contact point",
  "intensifiedIFR4Time": "during the stroke",
  "intensifiedIFR4Eliminates": "breaking: the lead is thin in the line-width direction and thick in the bending direction (carpenter's pencil)",
  "intensifiedIFR5Resource": "wood of the casing",
  "intensifiedIFR5Useful": "leave a thin line",
  "intensifiedIFR5Zone": "right next to the contact point",
  "intensifiedIFR5Time": "during the stroke",
  "intensifiedIFR5Eliminates": "breaking: the wood supports the lead almost to the very tip (shorter exposed lead, steeper cone)",
  "physicalContradiction1Parameter": "thickness",
  "physicalContradiction1Resource": "the lead tip",
  "physicalContradiction1Value1": "thin",
  "physicalContradiction1UsefulFunction": "leave a thin line",
  "physicalContradiction1Value2": "thick",
  "physicalContradiction1HarmfulFunction": "breaking under pressure and fast wear",
  "physicalContradiction2Parameter": "hardness",
  "physicalContradiction2Resource": "the lead",
  "physicalContradiction2Value1": "high (hard)",
  "physicalContradiction2UsefulFunction": "keep a fine tip for a long time",
  "physicalContradiction2Value2": "low (soft)",
  "physicalContradiction2HarmfulFunction": "a pale, hard-to-see line",
  "physicalContradiction3Parameter": "length of exposed lead",
  "physicalContradiction3Resource": "the tip",
  "physicalContradiction3Value1": "long",
  "physicalContradiction3UsefulFunction": "write a long time without sharpening",
  "physicalContradiction3Value2": "short",
  "physicalContradiction3HarmfulFunction": "breaking (long lever under bending)",
  "uploadedImages": {
    "graphicalEC1": pair("thin tip", "paper", "thin line (+)", "breaks, wears fast (−)", "EC-1: thin tip"),
    "graphicalEC2": pair("thick tip", "paper", "strong, lasts (+)", "thick blurred line (−)", "EC-2: thick tip"),
    "selectedContradictionGraphical": pair("thin tip", "paper", "thin line (+)", "breaks, wears fast (−)", "Selected: EC-1"),
    "ozSketch": svg('''<text x="210" y="22" text-anchor="middle" font-weight="bold">Operating zone</text>
<polygon points="60,40 230,40 300,120 230,120" fill="#f0d9b5" stroke="#8a6d3b"/>
<polygon points="230,40 300,120 230,120" fill="#e8c99a" stroke="#8a6d3b"/>
<polygon points="275,92 330,128 275,128" fill="#555"/>
<line x1="20" y1="132" x2="400" y2="132" stroke="#999" stroke-width="2"/><text x="30" y="150" fill="#777" font-size="12">paper</text>
<circle cx="328" cy="129" r="9" fill="none" stroke="#1f2f57" stroke-width="2"/><text x="342" y="118" fill="#1f2f57" font-size="12">OZ-1 contact</text>
<ellipse cx="302" cy="112" rx="16" ry="10" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="4 3"/><text x="250" y="80" fill="#c62828" font-size="12">OZ-2 cone</text>''', 165),
  },
}

with open(sys.argv[1], 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=1)
print('ok', len(d) - 3, 'text fields')
