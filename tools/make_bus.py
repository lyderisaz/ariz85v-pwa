"""Generate examples/bus.ariz (EN) and examples/bus_lt.ariz (LT).
Classic TRIZ training problem 'bus'; content follows ARIZ-85C Parts 1-3 (own words).
Usage: python -I make_bus.py <examples dir>"""
import json, sys, os, urllib.parse

def svg(body, h=170):
    s = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 {h}" font-family="Arial,sans-serif" font-size="14">
<defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#333"/></marker>
<marker id="r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#c62828"/></marker></defs>
<rect width="420" height="{h}" fill="#fff"/>{body}</svg>'''
    return 'data:image/svg+xml;charset=utf-8,' + urllib.parse.quote(s)

def scheme(title, tool, product, other, to_product, to_other, ec2=False):
    """Table 1, conflict type 4: A acts on B (passengers) and on C (turn).
    EC-1: useful action on B (solid), harmful conflict with C (wavy, red).
    EC-2: action on B insufficient (dashed, red), C passed without conflict (solid, grey)."""
    if ec2:
        a1 = '<line x1="152" y1="74" x2="266" y2="60" stroke="#c62828" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#r)"/>'
        c1 = '#c62828'
        a2 = '<line x1="152" y1="96" x2="266" y2="130" stroke="#777" stroke-width="2" marker-end="url(#a)"/>'
        c2 = '#333'
    else:
        a1 = '<line x1="152" y1="74" x2="266" y2="60" stroke="#333" stroke-width="2" marker-end="url(#a)"/>'
        c1 = '#333'
        a2 = '<path d="M152,96 q14,-10 28,0 t28,0 t28,0 t28,0" fill="none" stroke="#c62828" stroke-width="2" marker-end="url(#r)" transform="translate(0,22) rotate(8,152,96)"/>'
        c2 = '#c62828'
    return svg(f'''<text x="210" y="22" text-anchor="middle" font-weight="bold">{title}</text>
<rect x="20" y="62" width="130" height="44" rx="6" fill="#e8eefc" stroke="#1f2f57"/><text x="85" y="89" text-anchor="middle">{tool}</text>
<rect x="270" y="40" width="130" height="40" rx="6" fill="#f3f3f3" stroke="#555"/><text x="335" y="65" text-anchor="middle">{product}</text>
<rect x="270" y="112" width="130" height="40" rx="6" fill="#f3f3f3" stroke="#555"/><text x="335" y="137" text-anchor="middle">{other}</text>
{a1}<text x="205" y="56" text-anchor="middle" font-size="12" fill="{c1}">{to_product}</text>
{a2}<text x="150" y="160" fill="{c2}" font-size="12">{to_other}</text>''')

def oz_sketch(title, building, oz1, oz2):
    return svg(f'''<text x="210" y="22" text-anchor="middle" font-weight="bold">{title}</text>
<rect x="10" y="34" width="270" height="62" fill="#ddd"/><text x="24" y="60" fill="#777" font-size="12">{building}</text>
<rect x="10" y="96" width="320" height="44" fill="#9e9e9e"/><rect x="280" y="34" width="50" height="106" fill="#9e9e9e"/>
<line x1="10" y1="118" x2="300" y2="118" stroke="#fff" stroke-dasharray="10 8"/>
<g transform="translate(240,100) rotate(-30)"><rect x="-85" y="-12" width="170" height="24" rx="4" fill="#ffd54f" stroke="#000"/>
<line x1="-85" y1="0" x2="85" y2="0" stroke="#b8860b" stroke-dasharray="3 3"/></g>
<circle cx="281" cy="96" r="13" fill="none" stroke="#c62828" stroke-width="2.5"/>
<text x="300" y="30" fill="#c62828" font-size="12">{oz1}</text><line x1="300" y1="34" x2="286" y2="86" stroke="#c62828"/>
<text x="20" y="160" fill="#1f2f57" font-size="12">{oz2}</text><line x1="130" y1="150" x2="200" y2="124" stroke="#1f2f57"/>''', 170)

def ot_sketch(title, t1, t2, axis):
    return svg(f'''<text x="210" y="22" text-anchor="middle" font-weight="bold">{title}</text>
<line x1="20" y1="110" x2="400" y2="110" stroke="#333" stroke-width="2" marker-end="url(#a)"/><text x="395" y="132" text-anchor="end" font-size="12">{axis}</text>
<rect x="30" y="70" width="230" height="30" fill="#e8eefc" stroke="#1f2f57"/><text x="145" y="90" text-anchor="middle" font-size="12">{t1}</text>
<rect x="270" y="70" width="40" height="30" fill="#fde0e0" stroke="#c62828"/><text x="290" y="60" text-anchor="middle" font-size="12" fill="#c62828">{t2}</text>
<rect x="320" y="70" width="70" height="30" fill="#e8eefc" stroke="#1f2f57"/>''', 150)

EN = {
  "_name": "Bus: twice the passengers, same narrow streets",
  "_description": "Classic TRIZ training case: at rush hour a city bus must carry twice as many people, but tunnels and tight turns limit its size. Parts 1–3 filled in.",
  "_lang": "en",
  "keyProblem": "At rush hour a city bus must carry twice as many passengers, but we don't know how to do it: the route has tunnels and narrow streets with tight turns, so the bus cannot simply be made bigger, and safety and comfort must not suffer. (Administrative contradiction.)",
  "mainFunction": "carrying passengers along a city route with tunnels, narrow streets and tight turns",
  "systemComponents": "bus body (passenger space), floor, roof, side walls, seats, aisle, doors, chassis, axles and wheels, steering, engine.\nSupersystem: passengers, stops, streets, tunnels, turns, other traffic, traffic rules, driver, timetable.\nConstraints: streets and tunnels stay as they are; traffic rules stay as they are.",
  "ec1If": "the bus body is long (lengthened)",
  "ec1Then": "the bus carries twice as many passengers",
  "ec1But": "the bus cannot get through tight turns and tunnels",
  "ec2If": "the bus body is short (as now)",
  "ec2Then": "the bus gets through tight turns and tunnels",
  "ec2But": "the bus carries no more passengers — people are crammed at rush hour",
  "miniProblemNecessary": "carry twice as many passengers at rush hour",
  "miniProblemAnd": "get through tight turns and tunnels",
  "product": "passengers (they are carried)",
  "tool": "bus body (the space that holds passengers)",
  "toolState1": "long body",
  "toolState2": "short body",
  "basicECIf": "the bus body is long (lengthened)",
  "basicECThen": "the bus carries twice as many passengers",
  "basicECBut": "the bus cannot get through tight turns and tunnels",
  "selectedProduct": "passengers",
  "selectedTool": "long bus body",
  "selectedTool2": "(conflicts with: the wall / kerb of a tight turn — Table 1, type 4: A helps B but conflicts with C)",
  "intensifiedIf": "the bus body is as long as all waiting passengers need (e.g. three times longer)",
  "intensifiedThen": "every passenger at the stop fits at once",
  "intensifiedBut": "the bus cannot take any turn at all and does not fit in the street",
  "modelProduct": "passengers",
  "modelTool": "very long bus body",
  "modelIntensifiedIf": "the bus body is as long as all waiting passengers need",
  "modelIntensifiedThen": "every passenger fits at once",
  "modelIntensifiedBut": "the bus cannot take any turn at all",
  "ifrUseful": "hold twice as many passengers (the capacity of a very long body)",
  "ifrWithout": "the bus getting stuck in tight turns and tunnels",
  "oz1": "the inner corner of a tight turn, where the middle of a long rigid body cuts across (and the ends swing out)",
  "oz2": "the passenger space along the body, where the extra people must fit",
  "ot1": "loading at stops and driving straight at rush hour (minutes) — a long body is needed",
  "ot2": "passing a tight turn or tunnel entrance (seconds) — a short body is needed",
  "toolResourcesSubstance": "body sections and frame\nfloor and roof\nspace above the floor (height)\nseats and aisle\njoints between parts\naxles and wheels",
  "toolResourcesField": "engine power\nsteering forces\nhydraulics / air suspension\nelectric control",
  "toolResourcesParameter": "length\nheight (number of decks)\nwidth\nwheelbase and overhangs\nturning radius\nseats vs. standing places",
  "productResourcesSubstance": "passengers themselves (can sit, stand, move inside)",
  "productResourcesField": "their own movement (walking in / out)\ntheir weight",
  "productResourcesParameter": "number at the stop\nstanding density\ntravel time\ntime of the peak",
  "supersystemResourcesSubstance": "streets and turns\ntunnels (height limit)\nstops\nother buses, trailers\ndriver",
  "supersystemResourcesField": "gravity\ntraffic signals",
  "supersystemResourcesParameter": "turn radius\ntunnel height\npeak duration\nbus frequency",
  "ifr1Useful": "hold twice as many passengers",
  "ifr1Zone": "at the inner corner of the turn and along the passenger space",
  "ifr1Time": "while passing a tight turn (OT-2), keeping the capacity during loading and straight driving (OT-1)",
  "ifr1Eliminates": "the bus getting stuck — by itself, without extra outside resources and without changing streets or tunnels",
  "intensifiedIFR1Resource": "the body itself, divided into sections",
  "intensifiedIFR1Useful": "hold twice as many passengers — the whole is long",
  "intensifiedIFR1Zone": "at the joints between sections",
  "intensifiedIFR1Time": "only while turning; straight the whole body acts as one",
  "intensifiedIFR1Eliminates": "getting stuck: each section is short and the joint bends in the turn → articulated bus",
  "intensifiedIFR2Resource": "the space above the floor (body height)",
  "intensifiedIFR2Useful": "hold twice as many passengers on a second deck",
  "intensifiedIFR2Zone": "above the passenger space",
  "intensifiedIFR2Time": "all the time",
  "intensifiedIFR2Eliminates": "a longer body: the length stays short → double-decker (check: tunnel height may forbid it)",
  "intensifiedIFR3Resource": "axles and wheels",
  "intensifiedIFR3Useful": "keep a long body",
  "intensifiedIFR3Zone": "at the rear end in the turn",
  "intensifiedIFR3Time": "while turning",
  "intensifiedIFR3Eliminates": "cutting the corner: the rear wheels steer too and follow the front track",
  "intensifiedIFR4Resource": "another vehicle (supersystem: trailer)",
  "intensifiedIFR4Useful": "add capacity at rush hour only",
  "intensifiedIFR4Zone": "behind the bus",
  "intensifiedIFR4Time": "only at the peak; uncoupled otherwise",
  "intensifiedIFR4Eliminates": "a permanently long bus: bus + passenger trailer join into a supersystem (bus train)",
  "intensifiedIFR5Resource": "the passengers' own standing space",
  "intensifiedIFR5Useful": "fit more people in the same body",
  "intensifiedIFR5Zone": "the aisle and seat area",
  "intensifiedIFR5Time": "at rush hour",
  "intensifiedIFR5Eliminates": "need for a longer body — partly: fold-up seats give standing room (a compromise; comfort drops)",
  "physicalContradiction1Parameter": "length",
  "physicalContradiction1Resource": "the bus body",
  "physicalContradiction1Value1": "LARGE",
  "physicalContradiction1UsefulFunction": "hold twice as many passengers",
  "physicalContradiction1Value2": "SMALL",
  "physicalContradiction1HarmfulFunction": "getting stuck in the tight turn radius → whole long, parts short (Table 2, no. 5)",
  "physicalContradiction2Parameter": "stiffness",
  "physicalContradiction2Resource": "the bus body",
  "physicalContradiction2Value1": "rigid",
  "physicalContradiction2UsefulFunction": "carry passengers safely as one strong structure",
  "physicalContradiction2Value2": "flexible",
  "physicalContradiction2HarmfulFunction": "the body not following the curve → separation in space: rigid sections, flexible joint (Table 2, no. 1)",
  "physicalContradiction3Parameter": "height",
  "physicalContradiction3Resource": "the bus body",
  "physicalContradiction3Value1": "high (two decks)",
  "physicalContradiction3UsefulFunction": "hold twice as many passengers on the same length",
  "physicalContradiction3Value2": "low",
  "physicalContradiction3HarmfulFunction": "hitting the tunnel roof",
}
EN_IMG = {
  "graphicalEC1": scheme("EC-1: long body", "long body", "passengers", "tight turn", "carries 2× (+)", "gets stuck in the turn (−)"),
  "graphicalEC2": scheme("EC-2: short body", "short body", "passengers", "tight turn", "carries 1× only (−)", "passes the turn (+)", ec2=True),
  "selectedContradictionGraphical": scheme("Selected: EC-1", "long body", "passengers", "tight turn", "carries 2× (+)", "gets stuck in the turn (−)"),
  "ozSketch": oz_sketch("Operating zone", "building", "OZ-1: inner corner", "OZ-2: passenger space"),
  "otOverlap": ot_sketch("Operating time: OT-1 and OT-2 do not overlap", "OT-1: loading, driving straight", "OT-2: turn", "time"),
}

LT = {
  "_name": "Autobusas: dvigubai daugiau keleivių tomis pačiomis gatvėmis",
  "_description": "Klasikinis TRIZ mokomasis uždavinys: piko metu miesto autobusas turi pervežti dvigubai daugiau žmonių, bet tuneliai ir statūs posūkiai riboja jo dydį. Užpildytos 1–3 dalys.",
  "_lang": "lt",
  "keyProblem": "Piko metu miesto autobusas turi pervežti dvigubai daugiau keleivių, bet nežinome, kaip tai padaryti: maršrute yra tunelių ir siaurų gatvelių su stačiais posūkiais, todėl autobuso tiesiog padidinti negalima, o saugumas ir komfortas neturi nukentėti. (Administracinis prieštaravimas.)",
  "mainFunction": "keleiviams vežti miesto maršrutu su tuneliais, siauromis gatvelėmis ir stačiais posūkiais",
  "systemComponents": "autobuso kėbulas (keleivių erdvė), grindys, stogas, šoninės sienos, sėdynės, praėjimas, durys, važiuoklė, ašys ir ratai, vairo mechanizmas, variklis.\nSupersistema: keleiviai, stotelės, gatvės, tuneliai, posūkiai, kitas eismas, kelių eismo taisyklės, vairuotojas, tvarkaraštis.\nApribojimai: gatvės ir tuneliai nekinta; eismo taisyklės nekinta.",
  "ec1If": "autobuso kėbulas ilgas (pailgintas)",
  "ec1Then": "autobusas perveža dvigubai daugiau keleivių",
  "ec1But": "autobusas neįveikia stačių posūkių ir tunelių",
  "ec2If": "autobuso kėbulas trumpas (kaip dabar)",
  "ec2Then": "autobusas įveikia stačius posūkius ir tunelius",
  "ec2But": "autobusas neperveža daugiau keleivių – piko metu žmonės susigrūdę",
  "miniProblemNecessary": "piko metu pervežti dvigubai daugiau keleivių",
  "miniProblemAnd": "įveikti stačius posūkius ir tunelius",
  "product": "keleiviai (juos veža)",
  "tool": "autobuso kėbulas (erdvė, kurioje telpa keleiviai)",
  "toolState1": "ilgas kėbulas",
  "toolState2": "trumpas kėbulas",
  "basicECIf": "autobuso kėbulas ilgas (pailgintas)",
  "basicECThen": "autobusas perveža dvigubai daugiau keleivių",
  "basicECBut": "autobusas neįveikia stačių posūkių ir tunelių",
  "selectedProduct": "keleiviai",
  "selectedTool": "ilgas autobuso kėbulas",
  "selectedTool2": "(konfliktuoja su: stataus posūkio siena / bortu – 1 lentelė, 4 tipas: A naudingai veikia B, bet konfliktuoja su C)",
  "intensifiedIf": "autobuso kėbulas toks ilgas, kokio reikia visiems laukiantiems keleiviams (pvz., tris kartus ilgesnis)",
  "intensifiedThen": "visi stotelėje laukiantys keleiviai telpa iš karto",
  "intensifiedBut": "autobusas neįveikia jokio posūkio ir netelpa gatvėje",
  "modelProduct": "keleiviai",
  "modelTool": "labai ilgas autobuso kėbulas",
  "modelIntensifiedIf": "autobuso kėbulas toks ilgas, kokio reikia visiems laukiantiems keleiviams",
  "modelIntensifiedThen": "visi keleiviai telpa iš karto",
  "modelIntensifiedBut": "autobusas neįveikia jokio posūkio",
  "ifrUseful": "sutalpinti dvigubai daugiau keleivių (labai ilgo kėbulo talpą)",
  "ifrWithout": "autobuso įstrigimo stačiuose posūkiuose ir tuneliuose",
  "oz1": "vidinis stataus posūkio kampas, kurį kerta ilgo standaus kėbulo vidurys (o galai išsineša į šonus)",
  "oz2": "keleivių erdvė išilgai kėbulo, kur turi tilpti papildomi žmonės",
  "ot1": "įlipimas stotelėse ir važiavimas tiesiai piko metu (minutės) – reikia ilgo kėbulo",
  "ot2": "stataus posūkio ar įvažiavimo į tunelį įveikimas (sekundės) – reikia trumpo kėbulo",
  "toolResourcesSubstance": "kėbulo sekcijos ir rėmas\ngrindys ir stogas\nerdvė virš grindų (aukštis)\nsėdynės ir praėjimas\njungtys tarp dalių\našys ir ratai",
  "toolResourcesField": "variklio galia\nvairavimo jėgos\nhidraulika / pneumatinė pakaba\nelektrinis valdymas",
  "toolResourcesParameter": "ilgis\naukštis (aukštų skaičius)\nplotis\nratų bazė ir iškyšos\nposūkio spindulys\nsėdimos ir stovimos vietos",
  "productResourcesSubstance": "patys keleiviai (gali sėdėti, stovėti, judėti viduje)",
  "productResourcesField": "jų pačių judėjimas (įlipimas / išlipimas)\njų svoris",
  "productResourcesParameter": "skaičius stotelėje\nstovinčiųjų tankis\nkelionės trukmė\npiko laikas",
  "supersystemResourcesSubstance": "gatvės ir posūkiai\ntuneliai (aukščio riba)\nstotelės\nkiti autobusai, priekabos\nvairuotojas",
  "supersystemResourcesField": "gravitacija\nšviesoforų signalai",
  "supersystemResourcesParameter": "posūkio spindulys\ntunelio aukštis\npiko trukmė\nautobusų dažnis",
  "ifr1Useful": "sutalpinti dvigubai daugiau keleivių",
  "ifr1Zone": "vidiniame posūkio kampe ir išilgai keleivių erdvės",
  "ifr1Time": "įveikiant statų posūkį (OL-2), išlaikant talpą įlipimo ir važiavimo tiesiai metu (OL-1)",
  "ifr1Eliminates": "autobuso įstrigimą – pats savaime, be papildomų išorinių išteklių ir nekeičiant gatvių ar tunelių",
  "intensifiedIFR1Resource": "pats kėbulas, padalytas į sekcijas",
  "intensifiedIFR1Useful": "sutalpinti dvigubai daugiau keleivių – visuma ilga",
  "intensifiedIFR1Zone": "jungtyse tarp sekcijų",
  "intensifiedIFR1Time": "tik posūkio metu; važiuojant tiesiai visas kėbulas veikia kaip vienas",
  "intensifiedIFR1Eliminates": "įstrigimą: kiekviena sekcija trumpa, o jungtis posūkyje sulinksta → sujungtinis autobusas („armonika“)",
  "intensifiedIFR2Resource": "erdvė virš grindų (kėbulo aukštis)",
  "intensifiedIFR2Useful": "sutalpinti dvigubai daugiau keleivių antrame aukšte",
  "intensifiedIFR2Zone": "virš keleivių erdvės",
  "intensifiedIFR2Time": "visą laiką",
  "intensifiedIFR2Eliminates": "ilgesnį kėbulą: ilgis lieka trumpas → dviaukštis autobusas (patikrinti: tunelio aukštis gali neleisti)",
  "intensifiedIFR3Resource": "ašys ir ratai",
  "intensifiedIFR3Useful": "išlaikyti ilgą kėbulą",
  "intensifiedIFR3Zone": "posūkyje, ties galine dalimi",
  "intensifiedIFR3Time": "posūkio metu",
  "intensifiedIFR3Eliminates": "kampo kirtimą: galiniai ratai irgi pasisuka ir seka priekinių ratų vėže",
  "intensifiedIFR4Resource": "kita transporto priemonė (supersistema: priekaba)",
  "intensifiedIFR4Useful": "padidinti talpą tik piko metu",
  "intensifiedIFR4Zone": "už autobuso",
  "intensifiedIFR4Time": "tik piko metu; kitu laiku atkabinta",
  "intensifiedIFR4Eliminates": "nuolat ilgą autobusą: autobusas + keleivinė priekaba jungiasi į supersistemą (autotraukinys)",
  "intensifiedIFR5Resource": "pačių keleivių stovėjimo erdvė",
  "intensifiedIFR5Useful": "sutalpinti daugiau žmonių tame pačiame kėbule",
  "intensifiedIFR5Zone": "praėjimas ir sėdynių zona",
  "intensifiedIFR5Time": "piko metu",
  "intensifiedIFR5Eliminates": "ilgesnio kėbulo poreikį – iš dalies: atlenkiamos sėdynės atlaisvina vietos stovintiems (kompromisas; mažėja komfortas)",
  "physicalContradiction1Parameter": "ilgis",
  "physicalContradiction1Resource": "autobuso kėbulo",
  "physicalContradiction1Value1": "DIDELIS",
  "physicalContradiction1UsefulFunction": "sutalpinti dvigubai daugiau keleivių",
  "physicalContradiction1Value2": "MAŽAS",
  "physicalContradiction1HarmfulFunction": "įstrigimą stataus posūkio spindulyje → visuma ilga, dalys trumpos (2 lentelė, Nr. 5)",
  "physicalContradiction2Parameter": "standumas",
  "physicalContradiction2Resource": "autobuso kėbulo",
  "physicalContradiction2Value1": "standus",
  "physicalContradiction2UsefulFunction": "saugiai vežti keleivius kaip vientisa tvirta konstrukcija",
  "physicalContradiction2Value2": "lankstus",
  "physicalContradiction2HarmfulFunction": "kėbulo nepaklusimą posūkio kreivei → atskyrimas erdvėje: standžios sekcijos, lanksti jungtis (2 lentelė, Nr. 1)",
  "physicalContradiction3Parameter": "aukštis",
  "physicalContradiction3Resource": "autobuso kėbulo",
  "physicalContradiction3Value1": "didelis (du aukštai)",
  "physicalContradiction3UsefulFunction": "sutalpinti dvigubai daugiau keleivių tame pačiame ilgyje",
  "physicalContradiction3Value2": "mažas",
  "physicalContradiction3HarmfulFunction": "atsitrenkimą į tunelio lubas",
}
LT_IMG = {
  "graphicalEC1": scheme("TP-1: ilgas kėbulas", "ilgas kėbulas", "keleiviai", "status posūkis", "veža 2× (+)", "įstringa posūkyje (−)"),
  "graphicalEC2": scheme("TP-2: trumpas kėbulas", "trumpas kėbulas", "keleiviai", "status posūkis", "veža tik 1× (−)", "įveikia posūkį (+)", ec2=True),
  "selectedContradictionGraphical": scheme("Pasirinktas: TP-1", "ilgas kėbulas", "keleiviai", "status posūkis", "veža 2× (+)", "įstringa posūkyje (−)"),
  "ozSketch": oz_sketch("Operatyvinė zona", "pastatas", "OZ-1: vidinis kampas", "OZ-2: keleivių erdvė"),
  "otOverlap": ot_sketch("Operatyvinis laikas: OL-1 ir OL-2 nepersidengia", "OL-1: įlipimas, važiavimas tiesiai", "OL-2: posūkis", "laikas"),
}

# Field names of the form (must match app.js; the .ariz format)
FIELDS = set("""keyProblem mainFunction systemComponents ec1If ec1Then ec1But ec2If ec2Then ec2But miniProblemNecessary miniProblemAnd
product productState1 productState2 tool toolState1 toolState2 basicECIf basicECThen basicECBut selectedProduct selectedProduct2
selectedTool selectedTool2 intensifiedIf intensifiedThen intensifiedBut modelProduct modelProduct2 modelTool modelTool2
modelIntensifiedIf modelIntensifiedThen modelIntensifiedBut ifrUseful ifrWithout oz1 oz2 ot1 ot2
toolResourcesSubstance toolResourcesField toolResourcesParameter productResourcesSubstance productResourcesField productResourcesParameter
supersystemResourcesSubstance supersystemResourcesField supersystemResourcesParameter ifr1Useful ifr1Zone ifr1Time ifr1Eliminates""".split())
for i in range(1, 6):
    FIELDS |= {f"intensifiedIFR{i}{k}" for k in ("Resource", "Useful", "Zone", "Time", "Eliminates")}
    FIELDS |= {f"physicalContradiction{i}{k}" for k in ("Parameter", "Resource", "Value1", "UsefulFunction", "Value2", "HarmfulFunction")}
IMAGES = {"graphicalEC1", "graphicalEC2", "selectedContradictionGraphical", "ozSketch", "ozOverlap", "otOverlap"}

# Self-checks: EN and LT fill the same fields; every key is a real form field or image slot.
meta = {"_name", "_description", "_lang"}
assert set(EN) == set(LT), set(EN) ^ set(LT)
assert set(EN) - meta <= FIELDS, (set(EN) - meta) - FIELDS
assert set(EN_IMG) == set(LT_IMG) and set(EN_IMG) <= IMAGES
assert all(v.strip() for v in list(EN.values()) + list(LT.values()))

out = sys.argv[1]
for name, d, im in (("bus.ariz", EN, EN_IMG), ("bus_lt.ariz", LT, LT_IMG)):
    with open(os.path.join(out, name), "w", encoding="utf-8") as fh:
        json.dump({**d, "uploadedImages": im}, fh, ensure_ascii=False, indent=1)
print("ok", len(EN) - len(meta), "fields,", len(EN_IMG), "drawings each")
