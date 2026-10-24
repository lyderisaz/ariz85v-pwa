'use strict';
// Lithuanian help: same keys as the English texts in help.js. Based on the triz-ariz notes
// (ARIZ-85V_konspektas_pilnas_v1.1.md) — own-words summaries, not a translation of the original.

const FIELD_HELP_LT = {
  keyProblem: ['ARIZ dirba su viena gerai pasirinkta problema. Jei situacijoje jų kelios, rinkitės tą, kurios sprendimas duos daugiausia naudos – kitos dažnai išnyksta kartu.',
    'Kurią vieną problemą išsprendus, išnyktų daugiausia nepatogumų?'],
  '1.1': ['Situaciją perrašykite kaip mini uždavinį paprastais žodžiais: sistema lieka tokia pati arba supaprastėja, bet atsiranda reikiamas veiksmas (arba išnyksta žalingas). Taip konfliktas paaštrinamas, o kompromisai atkertami iš anksto.',
    'Kas turi pasikeisti, jei niekas kitas keistis negali?'],
  '1.1.1': ['Įvardykite, kam sistema skirta – pagrindinę funkciją tos dalies, kurioje yra problema. Rašykite: veiksmas + objektas.',
    'Ką ši sistema turi daryti ir su kuo?'],
  '1.1.2': ['Išvardykite visas dalis, įskaitant gamtinius elementus, kurie sąveikauja su techniniais (pvz., žaibas, radijo bangos). Terminus keiskite paprastais žodžiais: „laidus strypas“, ne „žaibolaidis“ – terminai primeta seną sprendimą ir slepia savybes.',
    'Iš ko sistema susideda, įskaitant tai, ką ji liečia aplinkoje?'],
  '1.1.3': ['Aprašykite vieną elemento būseną: kas pagerėja (TAI) ir kas pablogėja (BET).',
    'Jei tai pakeisiu – kas pagerės, o kas pablogės?'],
  '1.1.4': ['Paimkite priešingą to paties elemento būseną. Jei duotas tik gaminys, TP-2 gali būti formalus ar net nepriimtinas – jis vis tiek duoda papildomų reikalavimų.',
    'Kas vyksta priešingoje būsenoje?'],
  '1.1.5': ['Sujunkite TP-1 ir TP-2 eilutes TAI: gauti abi naudas minimaliai keičiant sistemą.',
    'Ar galiu abu norimus rezultatus užrašyti vienu sakiniu?'],
  '1.2': ['Konfliktuojanti pora = gaminys + įrankis. T1: jei įrankis gali turėti dvi būsenas, nurodomos abi. T2: iš kelių vienodų porų užtenka vienos. Vienas poros elementas gali būti dvigubas (du įrankiai ar du gaminiai, trukdantys vienas kitam).',
    'Kurie du elementai iš tikrųjų konfliktuoja?'],
  '1.2.1': ['Gaminys – elementas, kurį reikia apdoroti: pagaminti, perkelti, pakeisti, apsaugoti, aptikti ar išmatuoti. Aptikimo ir matavimo uždaviniuose gaminiu gali būti ir tai, kas pagal funkciją yra įrankis (pvz., šlifavimo diskas).',
    'Kas yra apdorojama?'],
  '1.2.2': ['Dvi gaminio būsenas nurodykite tik tada, kai jos tikrai yra (pvz., karštas / šaltas).', 'Ar gaminys keičiasi tarp dviejų būsenų?'],
  '1.2.4': ['Įrankis – elementas, tiesiogiai sąveikaujantis su gaminiu: freza, o ne staklės; ugnis, o ne degiklis. Įrankiu laikomos ir standartinės detalės, iš kurių surenkamas gaminys.',
    'Kas tiesiogiai liečia gaminį?'],
  '1.2.5': ['Dvi priešingos įrankio būsenos, atitinkančios TP-1 ir TP-2 (pvz., daug strypų / mažai strypų).', 'Kokios dvi kraštutinės įrankio būsenos?'],
  '1.3': ['Kiekvieną prieštaravimą nupieškite schema: įrankis A, gaminys B; ištisinė rodyklė – naudingas veiksmas, banguota – žalingas, punktyrinė – reikalingas, brūkšninė-taškinė – reguliuojamas. Tipinės schemos – vadovo 1 lentelėje. Po to grįžkite į 1.1 ir patikrinkite, ar grandinė 1.1–1.3 logiška.',
    'Į kurią tipinę konflikto schemą tai panašu?'],
  '1.4': ['Pasirinkite schemą, kuri geriausiai užtikrina pagrindinį gamybos procesą (PGP), ir jį įvardykite. Toliau laikykitės pasirinktos įrankio būsenos – keisti ją „optimalia“ draudžiama. Tikslas – kad šioje būsenoje atsirastų ir priešingos būsenos privalumas. Matavimo uždaviniuose PGP yra visos sistemos procesas, o ne matavimas.',
    'Kuris TP geriau užtikrina pagrindinį procesą?'],
  '1.5': ['Nurodykite kraštutines elementų būsenas. T3: konfliktai „daug / mažai“ (stiprus / silpnas) stiprinami iki nulio – „mažai elementų“ virsta „elemento nėra“.',
    'Kas vyksta absoliučiame kraštutinume?'],
  '1.6': ['Uždavinio modelis: konfliktuojanti pora, sustiprintas konfliktas ir ką turi padaryti X elementas. Modelis sąlyginis – paliekama tik dalis elementų. X elementas nebūtinai nauja dalis: tai gali būti bet koks pokytis (temperatūra, agregatinė būsena, forma…). Po to grįžkite į 1.1 ir patikrinkite grandinę.',
    'Ką X elementas turi išsaugoti ir ką pašalinti?'],
  '1.6.3': ['Užrašykite, ką X elementas turi išsaugoti ir ką pašalinti, nesudėtindamas sistemos ir nesukeldamas žalos.',
    'Ar galiu pasakyti, ką X daro, nesakydamas kaip?'],
  '1.7': ['Patikrinkite modelį pagal išradybinių standartų sistemą. 1 dalies analizė dažnai atskleidžia standartinius bruožus nestandartiniuose uždaviniuose, todėl standartus taikyti modeliui efektyviau nei pradinei formuluotei.',
    'Ar šiam modeliui tinka standartas?'],
  '2.1': ['Operatyvinė zona (OZ) – paprasčiausiu atveju erdvė, kurioje kyla konfliktas. Nupieškite ją ir parodykite, ar OZ-1 ir OZ-2 persidengia.',
    'Kur tiksliai vyksta konfliktas?'],
  '2.2': ['Operatyvinis laikas (OL): T1 – konflikto laikas, T2 – laikas iki konflikto. Trumpalaikį konfliktą kartais galima pašalinti dar T2 metu.',
    'Kada vyksta konfliktas – ir kas vyksta prieš pat jį?'],
  '2.3': ['Medžiagų ir laukų ištekliai (MLR). Vidiniai: įrankio, gaminio. Išoriniai: būdingi konkrečiai aplinkai ir foniniai laukai, esantys bet kur (gravitacija, Žemės magnetinis laukas). Supersistemos: pašalinių sistemų atliekos, „kapeikiniai“ elementai. Mini uždaviniui pirmiausia vidiniai, tada išoriniai, galiausiai supersistemos. Gaminys paprastai nekeičiamas, bet gali tapti ištekliumi, jei keičiasi pats, jo yra neribotai daug, leidžia pereiti į supersistemą ar mikrostruktūras, jungtis su tuštuma ar laikinai pasikeisti.',
    'Kas jau yra čia ir galėtų atlikti darbą?'],
  '3.1': ['IGR-1: X elementas, visiškai nesudėtindamas sistemos ir nesukeldamas žalos, OL metu ir OZ ribose pašalina žalingą veiksmą, išlaikydamas įrankio gebėjimą atlikti naudingą veiksmą. Bendroji mintis: įgyjant naudingą savybę, kitos neturi blogėti.',
    'Koks būtų tobulas rezultatas, jei jis atsirastų „pats savaime“?'],
  '3.2': ['Sustiprintas IGR: X elementą pakeiskite tik ištekliais – naujų medžiagų ir laukų įvesti negalima. Tikrinimo linijos iš eilės: įrankis → išorinė aplinka → šalutiniai MLR → gaminys. Mini uždaviniui pakanka pirmos linijos, kuri duoda idėją. Rašykite paprastai, net „vaikiškai“.',
    'Kuris esamas išteklius galėtų būti X elementas?'],
  '3.3': ['Makro fizikinis prieštaravimas: OZ per OL turi turėti savybę P, kad atliktų vieną veiksmą, ir anti-P, kad atliktų kitą. Trumpa forma: „turi būti …, kad …, ir neturi būti, kad …“. Sprendžiama atskyrimo principais (vadovo 2 lentelė).',
    'Kuri viena savybė turi turėti priešingas reikšmes?'],
};

const EXAMPLES_HELP_LT = `
<h3>Darbalapiai</h3>
<ul>
  <li>Įrankių juostos sąraše – visi jūsų darbalapiai šioje naršyklėje. Kiekvienas <b>išsaugomas automatiškai</b>, kai rašote.</li>
  <li><b>Naujas</b> – tuščias darbalapis. <b>⋯</b> → pervadinti, dubliuoti, išvalyti ar ištrinti esamą.</li>
  <li><b>Išsaugoti</b> eksportuoja darbalapį kaip <code>.ariz</code> failą, pasirinktinai su slaptažodžiu (pamiršto atkurti neįmanoma). <b>Atidaryti</b> importuoja failą kaip <i>naują</i> darbalapį – niekas neperrašoma.</li>
  <li><b>PDF / Spausdinti</b> spausdina esamą darbalapį be pastabų ir pagalbos.</li>
  <li><b>Kalba</b> (vėliavėlė viršuje dešinėje) keičia sąsajos kalbą; darbalapių tekstai lieka tokie, kokius parašėte.</li>
</ul>
<h3>Pavyzdžiai</h3>
<ul>
  <li><b>Pavyzdžiai</b> – išnagrinėti atvejai (vėliavėlė rodo kalbą, pasirinktos kalbos – pirmi). <b>Atidaryti kopiją</b> prideda kopiją prie jūsų darbalapių – keiskite drąsiai, originalas lieka ir gali būti atidarytas vėl.</li>
  <li>Pirmą kartą atidarius programą, automatiškai atidaromas pirmasis pavyzdys (<i>Pieštukas</i>).</li>
  <li>Spustelėkite <b>ⓘ</b> prie žingsnio – pamatysite, ko jis klausia, ir palyginkite su pavyzdžio atsakymu.</li>
</ul>
<h3>Kaip sukurti pavyzdį</h3>
<ol>
  <li>Užpildykite darbalapį, suteikite aiškų pavadinimą (⋯ → Pervadinti).</li>
  <li>⋯ → <b>Eksportuoti kaip pavyzdį…</b>, parašykite vienos eilutės aprašymą. Gausite nešifruotą <code>.ariz</code> failą su pavadinimu, aprašymu ir kalba.</li>
  <li>Kad pavyzdys būtų visiems: įdėkite failą į repozitorijos aplanką <code>examples/</code>, įrašykite jį į <code>examples/index.json</code> (su <code>"lang"</code>) ir į <code>FILES</code> faile <code>sw.js</code>, padidinkite <code>VERSION</code>, išleiskite naują versiją.</li>
  <li>Kad pasidalytumėte asmeniškai – tiesiog nusiųskite failą; gavėjas naudoja <b>Atidaryti</b>.</li>
</ol>
<h3>Verta žinoti</h3>
<ul>
  <li>Viskas lieka šioje naršyklėje, niekur nesiunčiama. Išvalius naršyklės duomenis, darbalapiai dingsta – svarbius išsaugokite failais.</li>
  <li>Visi darbalapiai dalijasi apie 5 MB naršyklės saugyklos. Didelės nuotraukos ją greitai užpildo – rinkitės mažus brėžinius.</li>
  <li><code>.ariz</code> failai yra JSON: lauko vardas → tekstas, <code>uploadedImages</code> – brėžiniai, neprivalomi <code>_name</code> / <code>_description</code> / <code>_lang</code>.</li>
</ul>`;

const GUIDE_HELP_LT = `
<nav><a href="#g-what">Kas yra ARIZ</a><a href="#g-p1">1 dalis</a><a href="#g-p2">2 dalis</a><a href="#g-p3">3 dalis</a><a href="#g-t1">Konfliktai</a><a href="#g-t2">Atskyrimas</a><a href="#g-next">4–9 dalys</a><a href="#g-terms">Terminai</a></nav>
<h3 id="g-what">Kas yra ARIZ</h3>
<p>ARIZ – išradybinių uždavinių sprendimo algoritmas – kompleksinė algoritminio tipo programa išradybiniams uždaviniams analizuoti ir spręsti, besiremianti techninių sistemų raidos dėsniais. Autorius – <b>Genrichas S. Altšuleris</b>; versijos žymimos metais (ARIZ-68, -71, -77, -82, -85). Šis darbalapis atitinka <b>ARIZ-85V</b> (angl. ARIZ-85C) 1–3 dalis.</p>
<p><b>Problema</b> – situacija, kuri netenkina, bet dar nežinoma, kaip ją keisti. <b>Uždavinys</b> – jau suformuluotas, TRIZ prasme – prieštaravimu. ARIZ 1 dalis problemą paverčia uždaviniu.</p>
<p>Rašykite paprastais žodžiais, eikite žingsniais iš eilės ir nesustokite ties pirma užuomina – atsakymas ryškėja palaipsniui. Spustelėkite <b>ⓘ</b> prie bet kurio žingsnio – trumpas paaiškinimas ir klausimas sau.</p>
<p class="muted">Bendras klasikinių tekstų pavyzdys – radioteleskopo antenos apsauga nuo žaibo. Daug žaibolaidžių apsaugo anteną, bet sugeria radijo bangas; mažai žaibolaidžių netrukdo bangoms, bet nebeapsaugo.</p>

<h3 id="g-p1">1 dalis. Uždavinio analizė</h3>
<p>Tikslas – neaiškią išradybinę situaciją paversti aiškiu ir kuo paprastesniu uždavinio modeliu.</p>
<table><tr><th>Žingsnis</th><th>Ką daryti</th></tr>
<tr><td>1.1</td><td>Mini uždavinio sąlyga be specialiųjų terminų: techninė sistema, skirta <i>[paskirtis]</i>, susideda iš <i>[dalys]</i>; TP-1, TP-2; minimaliais pakeitimais gauti <i>[rezultatas]</i>.</td></tr>
<tr><td>1.2</td><td>Konfliktuojanti pora: gaminys ir įrankis.</td></tr>
<tr><td>1.3</td><td>TP-1 ir TP-2 grafinės schemos (1 lentelė).</td></tr>
<tr><td>1.4</td><td>Pasirinkti schemą, kuri geriausiai užtikrina pagrindinį gamybos procesą (PGP); jį įvardyti.</td></tr>
<tr><td>1.5</td><td>Sustiprinti konfliktą: kraštutinės elementų būsenos.</td></tr>
<tr><td>1.6</td><td>Uždavinio modelis: pora, sustiprintas konfliktas, ką turi padaryti X elementas.</td></tr>
<tr><td>1.7</td><td>Standartų patikra. Išspręsta → galima į 7 dalį, bet rekomenduojama tęsti 2 dalį.</td></tr></table>
<p><b>Taisyklės.</b> T1: jei įrankis gali turėti dvi būsenas, nurodomos abi. T2: iš vienodų porų užtenka vienos. T3: „mažai“ stiprinama iki „nulio“.</p>
<p><b>Kilpos.</b> Po 1.3 ir po 1.6 grįžkite į 1.1 ir patikrinkite, ar grandinė logiška. Po 1.4 laikykitės pasirinktos būsenos – niekada nekeiskite jos „optimalia“.</p>

<h3 id="g-p2">2 dalis. Uždavinio modelio analizė</h3>
<p>Tikslas – inventorizuoti turimus erdvės, laiko, medžiagų ir laukų išteklius.</p>
<table><tr><th>Žingsnis</th><th>Ką daryti</th></tr>
<tr><td>2.1</td><td>Operatyvinė zona (OZ): erdvė, kurioje kyla konfliktas.</td></tr>
<tr><td>2.2</td><td>Operatyvinis laikas (OL): T1 – konflikto laikas, T2 – laikas iki konflikto.</td></tr>
<tr><td>2.3</td><td>Sistemos, išorinės aplinkos ir gaminio medžiagų ir laukų ištekliai (MLR).</td></tr></table>
<table><tr><th>Rūšis</th><th>Potipiai</th></tr>
<tr><td>Vidiniai</td><td>a) įrankio; b) gaminio</td></tr>
<tr><td>Išoriniai</td><td>a) būdingi konkrečiai aplinkai; b) foniniai laukai bet kurioje aplinkoje (gravitacija, Žemės magnetinis laukas)</td></tr>
<tr><td>Supersistemos</td><td>a) pašalinių sistemų atliekos; b) „kapeikiniai“ – labai pigūs pašaliniai elementai</td></tr></table>
<p>Mini uždaviniui: vidiniai → išoriniai → supersistemos, kad MLR būtų išeikvota kuo mažiau. Maksi uždaviniui ar prognozei – kuo daugiau MLR. 2.3 žingsnio sąrašas preliminarus.</p>

<h3 id="g-p3">3 dalis. IGR ir FP apibrėžimas</h3>
<table><tr><th>Žingsnis</th><th>Ką daryti</th></tr>
<tr><td>3.1</td><td>IGR-1: X, nesudėtindamas sistemos ir nesukeldamas žalos, OZ ribose OL metu pašalina žalingą veiksmą, išlaikydamas naudingą.</td></tr>
<tr><td>3.2</td><td>Sustiprintas IGR-1: naujų medžiagų ir laukų – ne, tik MLR.</td></tr>
<tr><td>3.3</td><td>Makro FP: OZ per OL turi būti P vienam veiksmui ir anti-P kitam.</td></tr>
<tr><td>3.4*</td><td>Mikro FP: OZ turi būti tam tikros būsenos dalelių vienai makrobūsenai ir neturi jų būti (arba turi būti priešingų) kitai.</td></tr>
<tr><td>3.5*</td><td>IGR-2: OZ per OL <i>pati</i> užtikrina priešingas būsenas. Nuo čia sprendžiamas fizikinis uždavinys.</td></tr>
<tr><td>3.6*</td><td>Standartų patikra IGR-2. Išspręsta → galima į 7 dalį; rekomenduojama tęsti 4 dalį.</td></tr></table>
<p class="muted">* Šiame darbalapyje dar nėra – užsirašykite 3.3 laukuose arba popieriuje.</p>
<p>Išteklių linijos iš eilės: įrankis → aplinka → šalutiniai MLR → gaminys (nagrinėjant lygiagrečiai – daugiaekranis mąstymas). Rašykite paprastai, net „vaikiškai“ – terminai didina psichologinę inerciją.</p>

<h3 id="g-t1">1 lentelė. Tipiniai konfliktai uždavinių modeliuose</h3>
<p class="muted">A – įrankis, B – gaminys.</p>
<table><tr><th>#</th><th>Konfliktas</th><th>Ko reikia</th></tr>
<tr><td>1</td><td>Priešveikis: A naudingai veikia B, bet B atgal žalingai veikia A.</td><td>Pašalinti žalą, išsaugoti naudą.</td></tr>
<tr><td>2</td><td>Tas pats A veiksmas į B ir naudingas, ir žalingas (pvz., skirtingais etapais).</td><td>Pašalinti žalą, išsaugoti naudą.</td></tr>
<tr><td>3</td><td>A naudingai veikia vieną B dalį (B1), bet kenkia kitai (B2).</td><td>Pašalinti žalą B2, išsaugoti naudą B1.</td></tr>
<tr><td>4</td><td>A naudingai veikia B, bet kenkia C (A, B, C – sistema).</td><td>Pašalinti žalą, nesuardant sistemos.</td></tr>
<tr><td>5</td><td>Naudingas A poveikis B kenkia pačiam A (pvz., jį sudėtina).</td><td>Pašalinti žalą, išsaugoti naudą.</td></tr>
<tr><td>6</td><td>Nesuderinami veiksmai: A poveikis B nesuderinamas su C poveikiu B (pvz., apdirbimas ir matavimas).</td><td>Užtikrinti C poveikį, nekeičiant A poveikio.</td></tr>
<tr><td>7</td><td>Nepilnas veiksmas ar neveikimas: A atlieka vieną veiksmą, o reikia dviejų; arba A neveikia; arba A nėra.</td><td>Paveikti B kuo paprastesniu A.</td></tr>
<tr><td>8</td><td>„Tyla“: trūksta informacijos apie A, B ar jų sąveiką.</td><td>Gauti reikiamą informaciją.</td></tr>
<tr><td>9</td><td>Nereguliuojamas (perteklinis) veiksmas: A veikia nuolat, o reikia reguliuojamai.</td><td>Padaryti A poveikį reguliuojamą.</td></tr></table>

<h3 id="g-t2">2 lentelė. Fizikinių prieštaravimų sprendimo būdai</h3>
<table><tr><th>#</th><th>Principas</th></tr>
<tr><td>1</td><td>Prieštaringų savybių <b>atskyrimas erdvėje</b>.</td></tr>
<tr><td>2</td><td>Prieštaringų savybių <b>atskyrimas laike</b>.</td></tr>
<tr><td>3</td><td>Sisteminis perėjimas: vienarūšių ar įvairiarūšių sistemų <b>jungimas į supersistemą</b>.</td></tr>
<tr><td>4</td><td>Perėjimas prie <b>antisistemos</b> arba sistemos ir antisistemos derinio.</td></tr>
<tr><td>5</td><td><b>Visuma turi savybę P, dalys – anti-P</b>.</td></tr>
<tr><td>6</td><td>Perėjimas prie <b>mikrolygmens</b>.</td></tr>
<tr><td>7</td><td>Fazinis perėjimas: <b>fazinės būsenos pakeitimas</b> sistemos dalyje ar aplinkoje.</td></tr>
<tr><td>8</td><td><b>Dviguba fazinė būsena</b>, kuri keičiasi pagal sąlygas.</td></tr>
<tr><td>9</td><td><b>Fazinį virsmą lydintys reiškiniai</b>.</td></tr>
<tr><td>10</td><td>Vienfazė medžiaga keičiama <b>dvifaze</b>.</td></tr>
<tr><td>11</td><td>Fizikinis-cheminis perėjimas: medžiagos <b>atsiradimas ir išnykimas</b> (skilimas ir jungimasis, jonizacija ir rekombinacija).</td></tr></table>

<h3 id="g-next">Po 3 dalies (šiame darbalapyje dar nėra)</h3>
<ul>
  <li><b>4 dalis</b> – MLR mobilizavimas ir taikymas: modeliavimas mažais žmogeliukais, žingsnis atgal nuo IGR, išteklių mišiniai, tuštuma, išvestiniai ištekliai, elektrinis laukas.</li>
  <li><b>5 dalis</b> – informacinio fondo taikymas: standartai, analogai, atskyrimo principai, fizikiniai efektai.</li>
  <li><b>6 dalis</b> – uždavinio keitimas ar pakeitimas.</li>
  <li><b>7 dalis</b> – FP pašalinimo būdo analizė (kokybės patikra; bent vienas „ne“ – grįžti į 1.1).</li>
  <li><b>8 dalis</b> – gauto atsakymo taikymas kitiems uždaviniams.</li>
  <li><b>9 dalis</b> – sprendimo eigos analizė.</li>
</ul>

<h3 id="g-terms">Terminai</h3>
<table><tr><th>LT</th><th>RU / EN</th></tr>
<tr><td>TP – techninis prieštaravimas</td><td>ТП / engineering (technical) contradiction, EC</td></tr>
<tr><td>FP – fizikinis prieštaravimas</td><td>ФП / physical contradiction, PC</td></tr>
<tr><td>mini / maksi uždavinys</td><td>мини- / макси-задача / mini- / maxi-problem</td></tr>
<tr><td>gaminys / įrankis</td><td>изделие / инструмент / product / tool</td></tr>
<tr><td>PGP – pagrindinis gamybos procesas</td><td>ГПП / main production process</td></tr>
<tr><td>X elementas</td><td>икс-элемент / X-element</td></tr>
<tr><td>OZ / OL – operatyvinė zona / laikas</td><td>ОЗ / ОВ / operating zone / time</td></tr>
<tr><td>MLR – medžiagų ir laukų ištekliai</td><td>ВПР / substance-field resources, SFR</td></tr>
<tr><td>IGR – idealus galutinis rezultatas</td><td>ИКР / ideal final result, IFR</td></tr>
<tr><td>MMŽ – modeliavimas mažais žmogeliukais</td><td>ММЧ / smart little people, SLP</td></tr>
<tr><td>daugiaekranis mąstymas</td><td>многоэкранное мышление / multi-screen thinking</td></tr>
<tr><td>supersistema / posistemė</td><td>надсистема / подсистема / supersystem / subsystem</td></tr></table>`;
