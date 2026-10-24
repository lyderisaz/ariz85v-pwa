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
  "_name": "Pieštukas: aštrus ar tvirtas smaigalys",
  "_description": "Klasikinis mokomasis atvejis: plonas grafito smaigalys braižo plonas linijas, bet lūžta ir greitai dyla. Užpildytos 1–3 dalys.",
  "_lang": "lt",
  "keyProblem": "Medinis grafitinis pieštukas greitai praranda ploną liniją: aštrus smaigalys lūžta nuo rašymo spaudimo arba nudyla, todėl jį tenka vis drožti.",
  "mainFunction": "plonai, tolygiai grafito linijai ant popieriaus palikti",
  "systemComponents": "grafito šerdis (grafitas + molio rišiklis), medinis korpusas, klijai, lako dažai, metalinis žiedas, trintukas.\nSupersistema: popierius, naudotojo ranka, drožtukas, stalas, oras.",
  "ec1If": "šerdies smaigalys plonas (aštrus)",
  "ec1Then": "smaigalys palieka ploną liniją ant popieriaus",
  "ec1But": "smaigalys lūžta nuo spaudimo ir greitai nudyla",
  "ec2If": "šerdies smaigalys storas (bukas)",
  "ec2Then": "smaigalys atlaiko spaudimą ir ilgai tarnauja",
  "ec2But": "smaigalys palieka storą, neryškią liniją",
  "miniProblemNecessary": "palikti ploną liniją ant popieriaus",
  "miniProblemAnd": "išlaikyti smaigalį tvirtą ir ilgaamžį",
  "product": "popierius (linija ant jo)",
  "tool": "šerdies smaigalys",
  "toolState1": "plonas (aštrus) smaigalys",
  "toolState2": "storas (bukas) smaigalys",
  "basicECIf": "šerdies smaigalys plonas (aštrus)",
  "basicECThen": "smaigalys palieka ploną liniją ant popieriaus",
  "basicECBut": "smaigalys lūžta nuo spaudimo ir greitai nudyla",
  "selectedProduct": "popierius",
  "selectedTool": "plonas šerdies smaigalys",
  "intensifiedIf": "šerdies smaigalys be galo plonas (taškas be pločio)",
  "intensifiedThen": "linija tokia plona, kokios reikia",
  "intensifiedBut": "smaigalys visai neturi stiprumo: lūžta vos prisilietęs ir išnyksta po vieno brūkšnio",
  "modelProduct": "popierius",
  "modelTool": "be galo plonas šerdies smaigalys",
  "modelIntensifiedIf": "šerdies smaigalys be galo plonas",
  "modelIntensifiedThen": "linija tokia plona, kokios reikia",
  "modelIntensifiedBut": "smaigalys iškart lūžta ir akimirksniu nudyla",
  "ifrUseful": "palikti ploną liniją ant popieriaus",
  "ifrWithout": "smaigalio lūžimo ir dilimo",
  "oz1": "smaigalio ir popieriaus sąlyčio taškas, kuriame susidaro linija",
  "oz2": "plonas smaigalio kūgis tiesiai virš sąlyčio, kur jį laužia lenkimo įtempis ir dildo trintis",
  "ot1": "rašymo brūkšnio metu, kol smaigalys liečia popierių ir juda juo",
  "ot2": "to paties brūkšnio metu (spaudimo piko); dilimas kaupiasi per daugelį brūkšnių",
  "toolResourcesSubstance": "grafitas (sluoksniuotas, slidus)\nmolio rišiklis\nvaško / polimero impregnacija\nmediena aplink šerdį\nlakas",
  "toolResourcesField": "tamprumo jėgos šerdyje\ntrintis į popierių\nmedinio korpuso atrama",
  "toolResourcesParameter": "šerdies skersmuo\nšerdies skerspjūvio forma (apvali / plokščia)\nkietumas (9H…9B)\nišsikišusios šerdies ilgis\nkūgio kampas\nsluoksnių sandara / anizotropija",
  "productResourcesSubstance": "popieriaus pluoštai\nužpildas ir klijavimo medžiaga\njau paliktos grafito dalelės",
  "productResourcesField": "trintis (abrazija)\ngrafito sukibimas",
  "productResourcesParameter": "paviršiaus šiurkštumas\npopieriaus kietumas\ngeriamumas",
  "supersystemResourcesSubstance": "naudotojo ranka ir pirštai\ndrožtukas\noras\nstalas",
  "supersystemResourcesField": "rankos spaudimas\npieštuko sukimas tarp pirštų\ngravitacija",
  "supersystemResourcesParameter": "rašymo kampas\nrašymo spaudimas\nbrūkšnio kryptis\nlaikas tarp brūkšnių",
  "ifr1Useful": "palikti ploną liniją ant popieriaus",
  "ifr1Zone": "smaigalio ir popieriaus sąlyčio taške",
  "ifr1Time": "rašymo brūkšnio metu",
  "ifr1Eliminates": "smaigalio lūžimą ir dilimą",
  "intensifiedIFR1Resource": "pati šerdis (plona šerdis po truputį stumiama iš laikiklio)",
  "intensifiedIFR1Useful": "palikti ploną liniją – išsikiša tik mažas, gerai paremtas galiukas",
  "intensifiedIFR1Zone": "sąlyčio taške",
  "intensifiedIFR1Time": "brūkšnio metu; tarp brūkšnių išstumiama daugiau šerdies",
  "intensifiedIFR1Eliminates": "lūžimą (trumpas svertas) ir drožimą (pastovus plonas skersmuo) → automatinis pieštukas",
  "intensifiedIFR2Resource": "trintis į popierių (dilimas)",
  "intensifiedIFR2Useful": "palikti ploną liniją – pats dilimas palaiko smaigalį aštrų",
  "intensifiedIFR2Zone": "sąlyčio taške",
  "intensifiedIFR2Time": "kiekvieno brūkšnio metu",
  "intensifiedIFR2Eliminates": "atšipimą: šerdis iš kietos vidinės ir minkštos išorinės dalies pati nudyla į smaigalį (savaime aštrėjanti, kaip graužikų dantys)",
  "intensifiedIFR3Resource": "pieštuko sukimas naudotojo pirštais",
  "intensifiedIFR3Useful": "palikti ploną liniją",
  "intensifiedIFR3Zone": "sąlyčio taške",
  "intensifiedIFR3Time": "tarp brūkšnių ir jų metu",
  "intensifiedIFR3Eliminates": "vienpusį dilimą: sukant šerdį (ranka ar sukimo mechanizmu) kūgis lieka simetriškas ir aštrus",
  "intensifiedIFR4Resource": "šerdies skerspjūvio forma (plokščia šerdis)",
  "intensifiedIFR4Useful": "palikti ploną liniją siauruoju kraštu",
  "intensifiedIFR4Zone": "sąlyčio taške",
  "intensifiedIFR4Time": "brūkšnio metu",
  "intensifiedIFR4Eliminates": "lūžimą: šerdis plona linijos pločio kryptimi ir stora lenkimo kryptimi (dailidės pieštukas)",
  "intensifiedIFR5Resource": "korpuso mediena",
  "intensifiedIFR5Useful": "palikti ploną liniją",
  "intensifiedIFR5Zone": "visai šalia sąlyčio taško",
  "intensifiedIFR5Time": "brūkšnio metu",
  "intensifiedIFR5Eliminates": "lūžimą: mediena remia šerdį beveik iki pat galo (trumpesnė išsikišusi šerdis, statesnis kūgis)",
  "physicalContradiction1Parameter": "storis",
  "physicalContradiction1Resource": "šerdies smaigalio",
  "physicalContradiction1Value1": "plonas",
  "physicalContradiction1UsefulFunction": "palikti ploną liniją",
  "physicalContradiction1Value2": "storas",
  "physicalContradiction1HarmfulFunction": "lūžimą nuo spaudimo ir greitą dilimą",
  "physicalContradiction2Parameter": "kietumas",
  "physicalContradiction2Resource": "šerdies",
  "physicalContradiction2Value1": "didelis (kieta)",
  "physicalContradiction2UsefulFunction": "ilgai išlaikyti ploną smaigalį",
  "physicalContradiction2Value2": "mažas (minkšta)",
  "physicalContradiction2HarmfulFunction": "blyškią, sunkiai matomą liniją",
  "physicalContradiction3Parameter": "išsikišusios šerdies ilgis",
  "physicalContradiction3Resource": "smaigalio",
  "physicalContradiction3Value1": "ilgas",
  "physicalContradiction3UsefulFunction": "ilgai rašyti nedrožiant",
  "physicalContradiction3Value2": "trumpas",
  "physicalContradiction3HarmfulFunction": "lūžimą (ilgas svertas lenkiant)",
  "uploadedImages": {
    "graphicalEC1": pair("plonas smaigalys", "popierius", "plona linija (+)", "lūžta, greitai dyla (−)", "TP-1: plonas smaigalys"),
    "graphicalEC2": pair("storas smaigalys", "popierius", "tvirtas, ilgaamžis (+)", "stora neryški linija (−)", "TP-2: storas smaigalys"),
    "selectedContradictionGraphical": pair("plonas smaigalys", "popierius", "plona linija (+)", "lūžta, greitai dyla (−)", "Pasirinktas: TP-1"),
    "ozSketch": svg('''<text x="210" y="22" text-anchor="middle" font-weight="bold">Operatyvinė zona</text>
<polygon points="60,40 230,40 300,120 230,120" fill="#f0d9b5" stroke="#8a6d3b"/>
<polygon points="230,40 300,120 230,120" fill="#e8c99a" stroke="#8a6d3b"/>
<polygon points="275,92 330,128 275,128" fill="#555"/>
<line x1="20" y1="132" x2="400" y2="132" stroke="#999" stroke-width="2"/><text x="30" y="150" fill="#777" font-size="12">popierius</text>
<circle cx="328" cy="129" r="9" fill="none" stroke="#1f2f57" stroke-width="2"/><text x="342" y="118" fill="#1f2f57" font-size="12">OZ-1 sąlytis</text>
<ellipse cx="302" cy="112" rx="16" ry="10" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="4 3"/><text x="240" y="80" fill="#c62828" font-size="12">OZ-2 kūgis</text>''', 165),
  },
}

with open(sys.argv[1], 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=1)

# Self-check: same fields and drawings as the English example.
en = json.load(open(sys.argv[2], encoding='utf-8'))
assert set(d) - {'_lang'} == set(en), (set(en) ^ (set(d) - {'_lang'}))
assert set(d['uploadedImages']) == set(en['uploadedImages'])
print('ok', len(d) - 4, 'text fields, same keys as EN')
