/*
  Paesi usati dal gioco.

  cc     codice ISO a 2 lettere (minuscolo)
  nome   nome in italiano
  guida  "dx" o "sx" (lato di guida)
  tld    dominio internet
  w      peso nell'estrazione (default 1: più alto = esce più spesso)
  r      raggio di ricerca in metri attorno al punto casuale (default 40000)
  box    aree [sud, ovest, nord, est] dove pescare punti casuali
  h      indizi: v vegetazione, s strade, t targhe, l lingua, a altro

  Per aggiungere un paese basta copiare una voce. Le aree "box" non devono
  essere precise: il gioco cerca il panorama più vicino e poi scopre il paese
  reale con una ricerca inversa sulla posizione.
*/
window.COUNTRIES = [

  /* ===================== EUROPA ===================== */
  { cc: "it", nome: "Italia", guida: "dx", tld: ".it", w: 2,
    box: [[44.0, 7.0, 46.3, 13.0], [41.5, 11.5, 44.0, 14.0], [38.2, 14.5, 41.5, 17.5], [36.8, 12.6, 38.2, 15.4], [39.0, 8.3, 40.9, 9.6]],
    h: {
      v: "Macchia mediterranea, ulivi, cipressi e pini marittimi al centro-sud; pianura Padana piatta con pioppi, risaie e campi; Alpi e Appennini a fare da cornice.",
      s: "Linea centrale bianca. Segnali verdi per le autostrade, blu per le strade extraurbane, bianchi in città. Molte strade strette tra muretti e centri storici.",
      t: "Bianca con banda blu UE a sinistra, formato AB 123 CD. Le targhe più vecchie portano la sigla della provincia.",
      l: "Italiano; in Alto Adige anche tedesco, in Valle d'Aosta francese, in parte del Friuli sloveno. Insegne di «Tabacchi» (T bianca su fondo scuro) e «Farmacia» con croce verde.",
      a: "Tetti a coppi, persiane, intonaci color ocra, utilitarie parcheggiate ovunque, santelle e edicole votive ai bordi delle strade." } },

  { cc: "fr", nome: "Francia", guida: "dx", tld: ".fr", w: 2,
    box: [[43.2, -1.5, 47.0, 7.0], [47.0, -4.5, 50.4, 6.5], [44.0, -1.2, 45.8, 1.5]],
    h: {
      v: "Campagna ordinata con siepi, campi di cereali, vigneti e boschi di latifoglie; a sud lavanda, pini e cipressi; rilievi nelle Alpi, nei Pirenei e nel Massiccio Centrale.",
      s: "Linea centrale tratteggiata bianca. Paracarri kilometrici con la testa rossa (strade nazionali) o gialla (dipartimentali). Segnali blu per le autostrade. Rotonde ovunque.",
      t: "Formato AB-123-CD, bianca con banda blu UE a sinistra e, a destra, il logo della regione con il numero del dipartimento.",
      l: "Francese: «boulangerie», «pharmacie», «mairie», «tabac» (rombo rosso). Ai confini compaiono bretone, basco, catalano e alsaziano.",
      a: "Case in pietra o intonaco con persiane e tetti di tegole o ardesia, chiese con piccolo campanile nei villaggi." } },

  { cc: "es", nome: "Spagna", guida: "dx", tld: ".es", w: 2,
    box: [[36.6, -6.5, 38.8, -1.5], [39.5, -4.5, 42.5, -0.5], [41.2, 0.5, 42.3, 3.0], [42.5, -9.0, 43.6, -2.0]],
    h: {
      v: "Altopiano secco con cereali e girasoli, ulivi a perdita d'occhio in Andalusia, sugherete e dehesa a ovest; Galizia e Asturie verdi e piovose; Pirenei a nord.",
      s: "Linea bianca. Segnali blu per autostrade e autovías, verdi per le strade ordinarie. Rotonde frequenti.",
      t: "Formato 1234 ABC (senza vocali), bianca con banda blu E. Le targhe vecchie avevano la sigla della provincia (M, B, V…).",
      l: "Spagnolo (ñ, ¿ ¡). Catalano in Catalogna e Baleari, galiziano in Galizia, basco nei Paesi Baschi: cartelli bilingui.",
      a: "Sagome nere di tori (Osborne) sulle colline, paesi di case bianche in Andalusia, tetti di tegole, bar con prosciutti appesi." } },

  { cc: "pt", nome: "Portogallo", guida: "dx", tld: ".pt",
    box: [[37.0, -9.2, 42.0, -7.0]],
    h: {
      v: "Eucalipti e pini, sugherete e ulivi; nord verde e piovoso, Alentejo con campi dorati, Algarve più secco con mandorli e fichi.",
      s: "Marciapiedi e piazze in calçada portuguesa (piccole pietre bianche e nere). Linea centrale bianca; molte strade strette in pendenza.",
      t: "Formato a coppie con trattini (AB-12-CD), banda blu UE con la P.",
      l: "Portoghese: ã, õ, ç; «rua», «câmara municipal», «pastelaria», «talho».",
      a: "Facciate rivestite di azulejos, tetti rosso scuro, case bianche con bordi colorati, nidi di cicogna sui pali." } },

  { cc: "de", nome: "Germania", guida: "dx", tld: ".de",
    box: [[47.7, 7.0, 50.5, 13.5], [50.5, 6.5, 54.0, 14.0]],
    h: {
      v: "Foreste di abeti e faggi, campi ordinati, vigneti lungo Reno e Mosella; nord pianeggiante con campi e brughiera.",
      s: "Paletti bianchi con fascia nera ai bordi. Segnali blu per le Autobahn, gialli per le Bundesstraße. Strade molto curate.",
      t: "Bianca con banda blu UE e sigla della città o del distretto (M, B, HH, K…) seguita da lettere e cifre.",
      l: "Tedesco: ß, ä, ö, ü; «Straße», «Apotheke», «Bäckerei».",
      a: "Case a graticcio (Fachwerk) e tetti ripidi. In Street View molte facciate sono sfocate: in Germania molti proprietari hanno chiesto di oscurarle." } },

  { cc: "gb", nome: "Regno Unito", guida: "sx", tld: ".uk", w: 2,
    box: [[50.3, -4.8, 53.3, 1.5], [53.3, -3.3, 55.8, -1.2], [55.0, -5.8, 57.5, -2.8], [51.4, -4.5, 52.9, -3.0]],
    h: {
      v: "Prati verdissimi con siepi e muretti in pietra a secco, brughiere nelle Highlands e a Dartmoor, boschi di querce.",
      s: "Si guida a sinistra. Linee gialle doppie ai bordi (divieto di sosta), rotonde, cartelli verdi sulle strade principali, blu sulle autostrade, limiti in miglia orarie.",
      t: "Anteriore bianca, posteriore gialla; formato AB12 CDE. Scozia e Galles possono mostrare bandiera o stemma.",
      l: "Inglese; in Galles cartelli bilingui con il gallese («Araf» = rallentare), in Scozia a volte il gaelico.",
      a: "Case in mattoni rossi con camini, cassette delle lettere rosse, cabine telefoniche rosse, strisce pedonali con globi arancioni lampeggianti." } },

  { cc: "ie", nome: "Irlanda", guida: "sx", tld: ".ie",
    box: [[51.7, -9.8, 55.0, -6.2]],
    h: {
      v: "Prati di un verde intenso, muretti in pietra a secco, cespugli di ginestra e torbiere; pecore e vacche ovunque.",
      s: "Si guida a sinistra. Linee gialle ai bordi, cartelli bilingui, limiti di velocità in km/h. Strade strette fiancheggiate da siepi.",
      t: "Formato 12-D-12345 (anno, contea, numero), bianca con banda blu IRL.",
      l: "Inglese e irlandese (gaeilge): nomi dei luoghi in doppia versione; nella Gaeltacht compare solo l'irlandese.",
      a: "Cottage con tetto di ardesia, pali telefonici di legno, case dai colori vivaci nei villaggi." } },

  { cc: "nl", nome: "Paesi Bassi", guida: "dx", tld: ".nl",
    box: [[51.1, 3.6, 53.3, 6.9]],
    h: {
      v: "Terreno completamente piatto: polder, canali e fossi, prati con mucche, serre, mulini a vento.",
      s: "Piste ciclabili rosse quasi ovunque, strade strette sugli argini, ponti levatoi, molte rotonde.",
      t: "Gialla con banda blu NL; formato con trattini (XX-999-X o 99-XXX-9).",
      l: "Olandese: «straat», «weg», «dijk», «ij»; in Frisia anche il frisone.",
      a: "Case di mattoni rossi con timpani, finestre grandi senza tende, biciclette parcheggiate ovunque." } },

  { cc: "be", nome: "Belgio", guida: "dx", tld: ".be",
    box: [[49.6, 2.6, 51.3, 6.2]],
    h: {
      v: "Fiandre piatte con campi e pioppi, Vallonia più ondulata, Ardenne boscose a sud-est.",
      s: "Asfalto spesso rattoppato, rotonde frequenti; cartelli in lingue diverse a seconda della regione.",
      t: "Bianca con caratteri rossi, formato 1-ABC-123, banda blu UE con B.",
      l: "Olandese nelle Fiandre, francese in Vallonia, tedesco a est; Bruxelles è bilingue.",
      a: "Case di mattoni a schiera strette, con timpani a gradini; lunghe file di case sparse lungo le strade di campagna." } },

  { cc: "ch", nome: "Svizzera", guida: "dx", tld: ".ch",
    box: [[46.1, 6.2, 47.6, 10.0]],
    h: {
      v: "Prati verdissimi con mucche dalle campane, abeti e Alpi; altopiano coltivato tra Giura e Alpi.",
      s: "Segnali verdi per le autostrade (non blu). Strade impeccabili anche in quota; croce bianca su rosso ovunque.",
      t: "Bianca senza banda UE, con stemma del cantone e sigla (ZH, BE, TI, GE…) seguita da un numero.",
      l: "Tedesco (con «ss» al posto della ß), francese, italiano (Ticino) e romancio.",
      a: "Chalet di legno con balconi fioriti, autopostali gialli, tetti ripidi." } },

  { cc: "at", nome: "Austria", guida: "dx", tld: ".at",
    box: [[46.7, 10.0, 48.6, 16.5]],
    h: {
      v: "Alpi con prati e abeti; a est pianura con campi e vigneti; laghi alpini.",
      s: "Segnali simili a quelli tedeschi; autostrade blu; croci e cappelle ai bordi strada.",
      t: "Bianca con banda blu UE e A; sigla del distretto (W Vienna, G Graz, S Salisburgo…) con lo stemma del Land.",
      l: "Tedesco: «Gasse», «Straße», «Bahnhof».",
      a: "Chiese con campanili a cipolla, case con balconi di legno e fiori, rifugi di montagna." } },

  { cc: "pl", nome: "Polonia", guida: "dx", tld: ".pl",
    box: [[49.5, 15.0, 54.3, 23.0]],
    h: {
      v: "Pianura con campi e betulle, pinete, laghi a nord, montagne (Tatra) a sud.",
      s: "Alberi lungo le strade, spesso con la base dipinta di bianco; cartelli blu per le strade principali; croci e santuari ai crocicchi.",
      t: "Bianca con banda blu UE e PL; le prime lettere indicano la provincia (W Varsavia, K Cracovia).",
      l: "Polacco: ł, ą, ę, ć, ś, ź, ż; «ulica», «sklep», «apteka».",
      a: "Nidi di cicogna sui pali, casette con tetti rossi, blocchi prefabbricati in città." } },

  { cc: "cz", nome: "Cechia", guida: "dx", tld: ".cz",
    box: [[48.8, 12.5, 50.6, 18.0]],
    h: {
      v: "Colline coltivate con boschi di abeti, campi di colza gialli, stagni.",
      s: "Paletti bianchi con fascia nera; segnali di forma tedesca; strade in buono stato ma spesso rattoppate.",
      t: "Bianca con banda blu UE e CZ; formato 1AB 1234.",
      l: "Ceco: ř, č, š, ž, ě, ů; «ulice», «potraviny», «lékárna».",
      a: "Castelli e chiese su colline, tetti rossi, facciate color pastello, tram nelle città." } },

  { cc: "sk", nome: "Slovacchia", guida: "dx", tld: ".sk",
    box: [[48.1, 17.5, 49.4, 22.2]],
    h: {
      v: "Montagne (Tatra) e foreste di abeti a nord, pianura coltivata a sud-ovest.",
      s: "Segnali simili alla Cechia; strade con pioppi e alberi da frutto ai bordi.",
      t: "Bianca con banda blu UE e SK, stemma slovacco e sigla del distretto (BA Bratislava, KE Košice).",
      l: "Slovacco: ľ, ŕ, ĺ, ô, ä; «ulica», «potraviny», «lekáreň».",
      a: "Blocchi prefabbricati a Bratislava e Košice, castelli in rovina sulle colline, villaggi di case simili." } },

  { cc: "hu", nome: "Ungheria", guida: "dx", tld: ".hu",
    box: [[46.2, 16.5, 48.3, 22.2]],
    h: {
      v: "Grande pianura (puszta) con mais, girasoli e frumento; colline vitate a Tokaj; lago Balaton.",
      s: "Strade dritte e piatte con alberi ai lati; tratti di asfalto rovinato.",
      t: "Bianca con banda blu UE e H; formato AAA-123 o AB CD-123 (dal 2022).",
      l: "Ungherese (ő, ű, cs, sz, gy): parole lunghissime; «utca», «út», «tér».",
      a: "Case basse con tegole rosse, nidi di cicogna, campanili a cipolla." } },

  { cc: "ro", nome: "Romania", guida: "dx", tld: ".ro",
    box: [[44.0, 22.0, 47.8, 27.5]],
    h: {
      v: "Carpazi boscosi, vaste pianure con mais e girasoli a sud, colline con meli e susini.",
      s: "Strade strette e spesso dissestate, carri trainati da cavalli, cani randagi.",
      t: "Bianca con banda blu UE e RO; sigla del distretto (B Bucarest, CJ Cluj, TM Timișoara) seguita da cifre e lettere.",
      l: "Romeno: ă, â, î, ș, ț; «strada», «magazin», «farmacia».",
      a: "Cancelli di metallo decorati, case dalle facciate colorate, pali elettrici in cemento." } },

  { cc: "bg", nome: "Bulgaria", guida: "dx", tld: ".bg",
    box: [[41.8, 23.0, 43.9, 28.0]],
    h: {
      v: "Colline e montagne (Balcani, Rila), pianure con girasoli e grano, costa del Mar Nero.",
      s: "Cartelli bilingui cirillico e latino; strade dissestate in campagna.",
      t: "Bianca con banda blu UE e BG; due lettere della regione (CB Sofia, PB Plovdiv), quattro cifre, due lettere.",
      l: "Cirillico bulgaro (ъ, щ, ю, я): «улица», «аптека».",
      a: "Blocchi prefabbricati e monumenti dell'epoca comunista, tetti rossi." } },

  { cc: "gr", nome: "Grecia", guida: "dx", tld: ".gr",
    box: [[37.0, 21.5, 40.5, 24.5], [35.1, 24.2, 35.4, 26.0]],
    h: {
      v: "Colline aride con ulivi, cipressi e pini; isole con macchia bassa; montagne rocciose e mare azzurro.",
      s: "Piccole cappelle votive (kandilakia) ai bordi delle strade, guardrail arrugginiti, cartelli bilingui greco e latino.",
      t: "Bianca con banda blu UE e GR; tre lettere e quattro cifre (lettere greche con equivalente latino).",
      l: "Greco: Α, Β, Γ, Δ, Σ, Ω; «οδός», «φαρμακείο», «πλατεία».",
      a: "Case bianche a tetto piatto, cemento con ferri a vista (edifici incompiuti), pali elettrici di legno." } },

  { cc: "se", nome: "Svezia", guida: "dx", tld: ".se",
    box: [[55.5, 12.5, 60.5, 17.5], [60.5, 14.0, 66.0, 21.0]],
    h: {
      v: "Foreste di pini e abeti, laghi, campi aperti a sud, tundra a nord.",
      s: "Cartelli di pericolo con l'alce; strade 2+1 con barriera a cavi al centro; linea centrale bianca; pochi cartelli.",
      t: "Bianca con banda blu UE e S; formato ABC 123 o ABC 12D.",
      l: "Svedese: å, ä, ö; «gatan», «vägen», «kyrka».",
      a: "Case di legno rosso di Falun con gli spigoli bianchi, betulle, cassette postali raggruppate sulle strade." } },

  { cc: "no", nome: "Norvegia", guida: "dx", tld: ".no",
    box: [[58.2, 5.5, 60.8, 11.0], [60.8, 5.0, 69.0, 18.0]],
    h: {
      v: "Fiordi, montagne, boschi di abeti e betulle, case isolate sulla costa; tundra a nord.",
      s: "Linea centrale gialla sulle strade; molti tunnel e traghetti; strade strette e tortuose.",
      t: "Bianca con banda blu NO; due lettere e cinque cifre (AB 12345); EL o EK sulle auto elettriche.",
      l: "Norvegese: æ, ø, å; «vei», «gate», «fjell».",
      a: "Case rosse e bianche di legno, ponti e gallerie, paletti per segnare la carreggiata sotto la neve." } },

  { cc: "fi", nome: "Finlandia", guida: "dx", tld: ".fi",
    box: [[60.2, 22.5, 63.5, 29.5], [63.5, 24.5, 67.5, 28.5]],
    h: {
      v: "Foreste di pini, abeti e betulle, innumerevoli laghi, paesaggio piatto.",
      s: "Linee centrali gialle; cartelli con renne al nord; segnali in finlandese e svedese.",
      t: "Bianca con banda blu UE e FIN; formato ABC-123.",
      l: "Finlandese: parole lunghe con ä, ö; «tie», «katu», «apteekki»; svedese lungo la costa.",
      a: "Case di legno rosse o gialle, saune, cassette postali, stagni e laghetti." } },

  { cc: "dk", nome: "Danimarca", guida: "dx", tld: ".dk",
    box: [[54.8, 8.4, 57.2, 12.4]],
    h: {
      v: "Terra piatta con campi coltivati, grano, faggete, dune lungo le coste.",
      s: "Strade strette con piste ciclabili, pochi cartelli, rotonde, ponti.",
      t: "Bianca con banda blu UE e DK; formato AB 12 345.",
      l: "Danese: æ, ø, å; «vej», «gade», «bageri».",
      a: "Case di mattoni rossi con tetto di tegole, mulini a vento moderni, moltissime biciclette." } },

  { cc: "is", nome: "Islanda", guida: "dx", tld: ".is",
    box: [[63.6, -22.0, 65.8, -14.5]],
    h: {
      v: "Paesaggi vulcanici di lava nera e muschio, quasi nessun albero, ghiacciai e cascate.",
      s: "Strada Ring (Route 1), ponti a corsia unica, tratti sterrati; paletti bianchi con catarifrangenti.",
      t: "Bianca con banda blu IS; due lettere e tre cifre (XX-123).",
      l: "Islandese: þ, ð, æ, ö; «vegur», «foss» (cascata), «jökull» (ghiacciaio).",
      a: "Case con tetto di lamiera colorata, cavalli islandesi e pecore libere, fumarole geotermiche." } },

  { cc: "hr", nome: "Croazia", guida: "dx", tld: ".hr",
    box: [[42.7, 14.0, 45.9, 18.5]],
    h: {
      v: "Costa dalmata con pietra calcarea, pini d'Aleppo, ulivi e isole; interno verde e collinare.",
      s: "Strada costiera panoramica, muretti a secco; segnali verdi sulle autostrade.",
      t: "Bianca con banda blu UE e HR, stemma a scacchi; sigla della città (ZG, ST, RI, OS).",
      l: "Croato (č, ć, š, ž, đ): «ulica», «cesta», «pošta».",
      a: "Case in pietra con tetti rossi, campanili, barche e isole." } },

  { cc: "si", nome: "Slovenia", guida: "dx", tld: ".si",
    box: [[45.6, 13.7, 46.7, 16.2]],
    h: {
      v: "Alpi Giulie, foreste fitte, prati verdi con case sparse; Carso arido a sud-ovest.",
      s: "Strade curatissime; segnali verdi in autostrada; villaggi lungo i fondovalle.",
      t: "Bianca con banda blu UE e SLO; sigla (LJ, MB, KP) con lo stemma sloveno in mezzo.",
      l: "Sloveno (č, š, ž): «cesta», «ulica», «trgovina».",
      a: "Fienili di legno a doppia struttura (kozolec), chiese con campanile, tetti a due falde." } },

  { cc: "rs", nome: "Serbia", guida: "dx", tld: ".rs",
    box: [[43.2, 19.8, 45.8, 22.2]],
    h: {
      v: "Pianura della Vojvodina con grano e girasoli; colline boscose al centro-sud.",
      s: "Strade secondarie rovinate; segnali bilingui cirillico e latino.",
      t: "Bianca con bandiera serba (non UE), sigla della città (BG Belgrado, NS Novi Sad), cifre e lettere.",
      l: "Serbo in cirillico e latino (ђ, љ, њ, ћ, џ): «улица», «апотека».",
      a: "Case incomplete in mattoni, condomini in stile jugoslavo, murales sportivi sui muri." } },

  { cc: "ee", nome: "Estonia", guida: "dx", tld: ".ee",
    box: [[57.9, 23.0, 59.4, 27.5]],
    h: {
      v: "Foreste di pini e abeti, torbiere e laghi, costa baltica pianeggiante.",
      s: "Moltissime strade secondarie sterrate (ghiaia); strade dritte tra i boschi.",
      t: "Bianca con banda blu UE e EST; formato 123 ABC.",
      l: "Estone: õ, ä, ö, ü; «tee», «maantee», «apteek».",
      a: "Case di legno, villaggi sparsi, edifici sovietici nei centri." } },

  { cc: "lv", nome: "Lettonia", guida: "dx", tld: ".lv",
    box: [[56.5, 21.5, 57.6, 27.0]],
    h: {
      v: "Foreste di betulle, pini e abeti, paesaggio piatto con campi e laghi.",
      s: "Strade secondarie sterrate, cartelli blu sulle strade principali.",
      t: "Bianca con banda blu UE e LV; formato AB-1234.",
      l: "Lettone: ā, ē, ī, ū, ņ, ļ, ķ, ģ; «iela», «ceļš», «aptieka».",
      a: "Case in legno, fienili, edifici sovietici, cicogne." } },

  { cc: "lt", nome: "Lituania", guida: "dx", tld: ".lt",
    box: [[54.4, 21.2, 56.1, 26.2]],
    h: {
      v: "Campi, betulle, pinete e laghi; paesaggio piatto con cicogne.",
      s: "Strade ben tenute; croci di legno scolpite ai crocicchi.",
      t: "Bianca con banda blu UE e LT; formato ABC 123.",
      l: "Lituano: ą, č, ė, ų, ž; «gatvė», «kelias», «vaistinė».",
      a: "Croci di legno scolpite e cappelle ai bordi strada, nidi di cicogna, edifici sovietici." } },

  { cc: "ua", nome: "Ucraina", guida: "dx", tld: ".ua",
    box: [[46.5, 24.5, 50.5, 35.5]],
    h: {
      v: "Steppa e campi di grano e girasoli a perdita d'occhio; Carpazi boscosi a ovest.",
      s: "Strade spesso con buche, cartelli blu e verdi, minibus (marshrutka) comuni.",
      t: "Bianca con banda blu e gialla UA; formato AA 1234 BB (le prime lettere indicano la regione).",
      l: "Ucraino in cirillico: lettere і, ї, є, ґ (assenti in russo); «вулиця», «аптека».",
      a: "Case di campagna con recinzioni di lamiera, condomini sovietici, cupole dorate." } },

  { cc: "tr", nome: "Turchia", guida: "dx", tld: ".tr", w: 2,
    box: [[36.8, 27.0, 41.0, 35.0], [37.5, 35.0, 40.5, 42.5]],
    h: {
      v: "Altopiano anatolico arido con steppa e campi; coste egea e mediterranea con pini e ulivi; costa del Mar Nero verde con tè e nocciole.",
      s: "Bandiere turche molto frequenti; strade principali larghe con linea centrale doppia o continua; minareti all'orizzonte.",
      t: "Bianca con banda blu TR; le prime due cifre sono la provincia (34 Istanbul, 06 Ankara, 35 Smirne).",
      l: "Turco: ı, İ, ş, ğ, ç; «cadde», «sokak», «mahallesi», «eczane».",
      a: "Palazzine in cemento con cisterne dell'acqua sul tetto, parabole, moschee con minareti sottili." } },

  { cc: "ru", nome: "Russia", guida: "dx", tld: ".ru", w: 2,
    box: [[54.0, 36.0, 57.5, 45.0], [59.5, 29.5, 60.5, 31.0], [55.0, 55.0, 57.0, 70.0], [51.0, 83.0, 56.0, 93.0]],
    h: {
      v: "Taiga di betulle e abeti, pianure sconfinate, steppa a sud; poca variazione per chilometri.",
      s: "Strade lunghe e dritte, linee bianche, cartelli con testo cirillico, barriere ai bordi.",
      t: "Bianca con il numero di regione a destra (77/97/99 Mosca, 78/98 San Pietroburgo) e lettere cirilliche in forma latina.",
      l: "Russo in cirillico (ы, э, ъ, ё): «улица», «дом», «магазин».",
      a: "Condomini sovietici, case di legno con finestre decorate, chiese con cupole a cipolla." } },

  /* ===================== AMERICHE ===================== */
  { cc: "us", nome: "Stati Uniti", guida: "dx", tld: ".us", w: 4,
    box: [[34.0, -122.5, 48.0, -117.0], [33.0, -112.5, 41.0, -104.0], [29.0, -98.5, 44.0, -88.0], [36.0, -84.0, 44.5, -70.0], [27.0, -84.0, 35.5, -76.0]],
    h: {
      v: "Cambia da stato a stato: deserti e cactus a sud-ovest, sequoie e pini a ovest, boschi decidui a est, pianure infinite al centro, paludi in Florida.",
      s: "Linea gialla al centro, bianca ai bordi; distanze in miglia; semafori appesi sopra l'incrocio; pali con cavi aerei.",
      t: "Cambiano per stato (colori e slogan); in alcuni stati non c'è la targa anteriore.",
      l: "Inglese, con spagnolo nel sud-ovest e in Florida; «Exit», «Stop», «Yield».",
      a: "Scuolabus gialli, cassette postali sul bordo strada, case con giardino senza muri, pick-up, insegne di catene (Walmart, Dollar General)." } },

  { cc: "ca", nome: "Canada", guida: "dx", tld: ".ca", w: 2,
    box: [[43.2, -80.5, 46.0, -70.5], [49.0, -123.5, 51.0, -114.5], [50.0, -113.5, 53.5, -100.0], [45.2, -67.0, 47.0, -60.5]],
    h: {
      v: "Foresta boreale di abeti, laghi e roccia dello scudo canadese; praterie piatte; Montagne Rocciose a ovest.",
      s: "Linea centrale gialla; limiti in km/h (a differenza degli USA); in Québec cartelli in francese («ARRÊT»).",
      t: "Dipendono dalla provincia; il Québec ha il motto «Je me souviens».",
      l: "Inglese; in Québec solo francese; New Brunswick bilingue.",
      a: "Pali telefonici di legno, case con rivestimento in listelli, pick-up, insegne Tim Hortons." } },

  { cc: "mx", nome: "Messico", guida: "dx", tld: ".mx", w: 2,
    box: [[19.0, -104.0, 22.0, -97.0], [25.0, -103.5, 27.0, -99.0], [20.0, -90.0, 21.5, -87.0], [16.0, -97.0, 17.5, -92.0]],
    h: {
      v: "Deserto con cactus e agavi a nord, altopiano arido con campi di agave, foresta tropicale a sud, coste con palme.",
      s: "Dossi (topes) segnalati, linea gialla centrale, cartelli verdi con distanze in km.",
      t: "Cambiano per stato, spesso bianche con il nome dello stato; formato ABC-123-D.",
      l: "Spagnolo: «calle», «carretera», «tienda», «farmacia»; insegne OXXO, Coca-Cola, Telcel.",
      a: "Case di cemento con tondini che sporgono dal tetto, cisterne nere (tinacos) sui tetti, murales colorati." } },

  { cc: "br", nome: "Brasile", guida: "dx", tld: ".br", w: 3,
    box: [[-23.8, -47.5, -19.5, -42.5], [-30.5, -53.5, -25.0, -48.5], [-13.5, -48.0, -8.5, -38.0], [-16.5, -52.0, -15.0, -47.0]],
    h: {
      v: "Foresta atlantica e tropicale, cerrado, caatinga arida a nord-est, pampas e pini araucaria a sud; terra rossa.",
      s: "Linee gialle centrali, dossi (lombadas) ovunque, cartelli verdi; strade con polvere rossa.",
      t: "Formato Mercosul ABC1D23 con banda blu e BRASIL; le targhe grigie più vecchie portano la città.",
      l: "Portoghese: «rua», «avenida», «padaria», «posto», «farmácia».",
      a: "Case incomplete con mattoni a vista e armature, muri alti con filo spinato, autobus colorati." } },

  { cc: "ar", nome: "Argentina", guida: "dx", tld: ".ar", w: 2,
    box: [[-35.5, -62.0, -31.5, -58.5], [-50.0, -72.5, -40.0, -68.5], [-33.0, -69.5, -31.0, -64.5], [-27.5, -65.5, -24.5, -64.0]],
    h: {
      v: "Pampas piatte e verdi con bestiame, steppa ventosa in Patagonia, vigneti e Ande a ovest, foresta subtropicale a nord-est.",
      s: "Linee gialle centrali; rutas con numero su uno scudo (Ruta 40, 3, 9); strade lunghissime e dritte; recinzioni di filo spinato.",
      t: "Formato Mercosur AB 123 CD (bianca con banda blu); la vecchia targa era ABC 123.",
      l: "Spagnolo rioplatense («che», «vos»); «calle», «ruta», «kiosco», «estación de servicio».",
      a: "Muri con grate e filo spinato, eucalipti, palme; stazioni YPF e Shell." } },

  { cc: "cl", nome: "Cile", guida: "dx", tld: ".cl", w: 2,
    box: [[-37.5, -73.0, -32.5, -70.5], [-42.0, -73.5, -39.0, -72.0], [-30.0, -71.5, -18.0, -69.5]],
    h: {
      v: "Deserto di Atacama a nord, valli vitate al centro, foreste temperate e piogge a sud, Patagonia fredda.",
      s: "La Ruta 5 attraversa tutto il paese; segnali verdi; strade strette nelle valli.",
      t: "Bianca con quattro lettere e due cifre (es. BCDF-12), senza vocali.",
      l: "Spagnolo: «calle», «avenida», «farmacia»; stazioni Copec.",
      a: "Case colorate sui pendii, cani randagi, cavi elettrici aggrovigliati." } },

  { cc: "pe", nome: "Perù", guida: "dx", tld: ".pe",
    box: [[-13.5, -77.5, -11.5, -76.5], [-16.8, -72.5, -14.0, -70.5], [-9.0, -79.5, -6.5, -78.0]],
    h: {
      v: "Costa desertica, Ande aride e ripide, Amazzonia verde e fitta a est.",
      s: "Strade strette e montagnose, mototaxi, scritte politiche dipinte sui muri; cartelli con distanze e «peaje».",
      t: "Bianca con ABC-123 e PERÚ in alto.",
      l: "Spagnolo (e quechua sulle Ande): «jirón», «avenida», «bodega».",
      a: "Case incomplete con tondini sul tetto, mototaxi, bandiere, propaganda elettorale dipinta su muri e rocce." } },

  { cc: "co", nome: "Colombia", guida: "dx", tld: ".co",
    box: [[4.0, -76.5, 7.5, -74.5], [10.4, -75.6, 11.2, -74.7]],
    h: {
      v: "Ande verdi con caffè e banane, costa caraibica calda, foresta tropicale in Amazzonia e Chocó.",
      s: "Strade di montagna strette, tantissime moto, dossi (reductores).",
      t: "Gialla sia davanti che dietro, formato ABC-123.",
      l: "Spagnolo: «carrera», «calle», «tienda», «droguería».",
      a: "Case di mattoni a vista, moto e taxi gialli, murales e autobus colorati (chiva)." } },

  { cc: "bo", nome: "Bolivia", guida: "dx", tld: ".bo",
    box: [[-17.0, -68.5, -15.5, -67.5], [-18.0, -63.5, -17.5, -63.0]],
    h: {
      v: "Altopiano andino arido con erba bassa, valli verdi e terrazzate, pianura tropicale a est.",
      s: "Strade con dossi, minibus colorati, donne con abiti tradizionali (cholitas), lama.",
      t: "Bianca con quattro cifre e tre lettere (1234 ABC).",
      l: "Spagnolo (quechua e aymara): «calle», «avenida», «tienda».",
      a: "Case di mattoni a vista o adobe, edifici incompiuti, bandiere wiphala a quadretti colorati." } },

  { cc: "ec", nome: "Ecuador", guida: "dx", tld: ".ec",
    box: [[-2.5, -79.5, 0.5, -78.0]],
    h: {
      v: "Ande con vulcani e campi terrazzati; costa tropicale con banane; Amazzonia a est.",
      s: "Strade di montagna con molte curve, cartelli verdi, tanti mezzi pubblici colorati.",
      t: "Bianca con tre lettere e quattro cifre; la prima lettera indica la provincia (P Pichincha, G Guayas).",
      l: "Spagnolo: «calle», «avenida», «tienda».",
      a: "Case di mattoni a vista incompiute, bandiere, venditori ambulanti." } },

  { cc: "uy", nome: "Uruguay", guida: "dx", tld: ".uy",
    box: [[-35.0, -58.0, -30.5, -54.0]],
    h: {
      v: "Dolci colline erbose con bestiame, praterie, pochi alberi; eucalipti e palme; costa atlantica.",
      s: "Strade larghe e poco trafficate, filo spinato ai lati, cartelli blu.",
      t: "Bianca con banda blu (Mercosur) e URUGUAY; formato ABC 1234, la prima lettera indica il dipartimento.",
      l: "Spagnolo rioplatense: «calle», «ruta», «kiosko».",
      a: "Persone con mate e termos, gauchos, case basse con grate." } },

  /* ===================== ASIA ===================== */
  { cc: "jp", nome: "Giappone", guida: "sx", tld: ".jp", w: 2,
    box: [[32.5, 129.5, 36.5, 140.5], [41.5, 139.5, 43.8, 144.0], [37.0, 138.0, 40.0, 141.0]],
    h: {
      v: "Foreste dense di cedri (sugi) e bambù, risaie, montagne verdi e ripide; Hokkaido più simile al nord Europa.",
      s: "Si guida a sinistra. Specchi parabolici agli incroci, cavi elettrici fittissimi, cartelli blu sulle autostrade.",
      t: "Bianca (auto private) o gialla (kei car) con i kanji della prefettura; verde per alcuni veicoli commerciali.",
      l: "Giapponese: kanji, hiragana e katakana; cartelli stradali bianchi su verde o blu.",
      a: "Distributori automatici ovunque, case piccole e fitte, kei car, pali con trasformatori." } },

  { cc: "kr", nome: "Corea del Sud", guida: "dx", tld: ".kr",
    box: [[34.8, 126.3, 38.0, 129.4]],
    h: {
      v: "Colline coperte di pini e latifoglie, risaie nelle valli, grande densità urbana.",
      s: "Si guida a destra; palazzi alti; segnali verdi e blu con scritte in hangul e inglese.",
      t: "Bianca (verde o blu per le più vecchie o commerciali); formato 12가 3456 con una lettera hangul al centro.",
      l: "Coreano in hangul (한글): forme di cerchi e linee; «로» e «길» nei nomi delle strade.",
      a: "Croci rosse al neon sui tetti delle chiese, grandi complessi di palazzi residenziali, fitta rete di cavi e insegne." } },

  { cc: "tw", nome: "Taiwan", guida: "dx", tld: ".tw",
    box: [[22.5, 120.0, 25.2, 121.8]],
    h: {
      v: "Giungla subtropicale, risaie, montagne alte coperte di foresta, palme da betel.",
      s: "Scooter ovunque; cartelli con caratteri cinesi tradizionali; pali elettrici con cavi aggrovigliati.",
      t: "Bianca con lettere e numeri neri (ABC-1234); le moto hanno targhe più piccole.",
      l: "Cinese con caratteri tradizionali (繁體字) e talvolta zhuyin; «路», «街», «巷».",
      a: "Finestre con grate, templi con tetti ornati, insegne verticali sui negozi, scooter parcheggiati." } },

  { cc: "th", nome: "Thailandia", guida: "sx", tld: ".th", w: 2,
    box: [[13.0, 99.5, 15.0, 101.5], [17.5, 98.5, 19.5, 100.5], [7.5, 98.0, 9.5, 100.0]],
    h: {
      v: "Palme da cocco, risaie, piantagioni di gomma, giungla e montagne a nord.",
      s: "Si guida a sinistra; linee gialle sul bordo; mototaxi e pick-up; cavi aggrovigliati sui pali.",
      t: "Bianca con lettere thai e il nome della provincia sotto; gialla per i taxi.",
      l: "Thailandese: caratteri tondi con anse; «ถนน» (strada), «ซอย» (vicolo).",
      a: "7-Eleven ovunque, altari degli spiriti (casette), immagini del re, templi dorati, tuk-tuk." } },

  { cc: "id", nome: "Indonesia", guida: "sx", tld: ".id", w: 2,
    box: [[-8.0, 106.0, -6.2, 112.5], [-8.8, 115.0, -8.1, 115.7]],
    h: {
      v: "Giungla tropicale, risaie a terrazza, palme da olio e da cocco, vulcani; Bali con templi e terrazzamenti.",
      s: "Si guida a sinistra; scooter ovunque; linee spesso consumate; pali con cavi.",
      t: "Nera con caratteri bianchi (privati), gialla (trasporto pubblico), rossa (governo). La lettera iniziale indica l'area (B Giacarta, D Bandung, L Surabaya, DK Bali).",
      l: "Indonesiano in alfabeto latino: «jalan», «warung», «toko», «masjid»; a Bali anche scritte balinesi.",
      a: "Moschee con cupola, templi hindu a Bali, warung (piccoli negozi), scooter con più persone sopra." } },

  { cc: "my", nome: "Malesia", guida: "sx", tld: ".my",
    box: [[1.5, 100.5, 6.5, 103.5], [1.5, 110.0, 5.0, 115.0]],
    h: {
      v: "Giungla tropicale e vaste piantagioni di palma da olio; montagne verdi.",
      s: "Si guida a sinistra; autostrade a pedaggio; segnali blu e verdi bilingui malese e inglese.",
      t: "Nera con caratteri bianchi; la lettera iniziale indica lo stato (W Kuala Lumpur, B Selangor, J Johor, P Penang).",
      l: "Malese in alfabeto latino: «jalan», «lorong», «kedai», «masjid».",
      a: "Moschee con cupola, case a schiera in cemento, caffè «mamak», pali con cavi sospesi." } },

  { cc: "ph", nome: "Filippine", guida: "dx", tld: ".ph",
    box: [[14.0, 120.5, 16.0, 121.5], [10.0, 123.0, 11.5, 124.5]],
    h: {
      v: "Palme da cocco, risaie, giungla; clima tropicale con tifoni.",
      s: "Si guida a destra; jeepney colorati, tricicli; linee gialle.",
      t: "Bianca con lettere nere (ABC 1234).",
      l: "Filippino (tagalog) e inglese: «barangay», «sari-sari store».",
      a: "Jeepney e tricicli, cappelle, cavi aggrovigliati, striscioni politici." } },

  { cc: "in", nome: "India", guida: "sx", tld: ".in", w: 2,
    box: [[12.5, 77.0, 19.5, 80.0], [19.0, 72.0, 23.0, 74.0], [26.0, 76.0, 28.8, 80.0]],
    h: {
      v: "Molto varia: risaie e palme al sud, pianura del Gange e campi di grano a nord, deserto del Thar a ovest.",
      s: "Si guida a sinistra. Cordoli dipinti a bande nere e gialle, mucche in strada, camion colorati e decorati, traffico caotico.",
      t: "Bianca (privati) o gialla (taxi e commerciali); le prime due lettere indicano lo stato (MH Maharashtra, DL Delhi, KA Karnataka, TN Tamil Nadu).",
      l: "Hindi (devanagari), inglese e decine di lingue con scritture diverse: tamil, telugu, bengalese, gujarati…",
      a: "Tuk-tuk (auto-rickshaw), mucche, cavi aggrovigliati, muri dipinti con pubblicità." } },

  { cc: "kh", nome: "Cambogia", guida: "dx", tld: ".kh",
    box: [[11.0, 104.0, 13.5, 105.5]],
    h: {
      v: "Pianure con palme da zucchero, risaie, fiumi, foresta tropicale; terra rossa.",
      s: "Scooter e tuk-tuk; strade polverose di terra rossa; cartelli in khmer e inglese.",
      t: "Bianca con il nome della provincia in khmer e in latino.",
      l: "Khmer: scrittura con simboli che «pendono» sotto la riga; «ផ្លូវ» (strada).",
      a: "Case su palafitte, scooter con carretto, templi, pubblicità dipinte a mano." } },

  { cc: "lk", nome: "Sri Lanka", guida: "sx", tld: ".lk",
    box: [[6.0, 79.8, 9.0, 81.5]],
    h: {
      v: "Palme da cocco, piantagioni di tè sulle colline, risaie, giungla e coste tropicali.",
      s: "Si guida a sinistra; tuk-tuk e autobus colorati; strade strette con cavi sospesi.",
      t: "Bianca con lettere nere, formato ABC-1234; le più vecchie portano il simbolo ශ්‍රී (Sri).",
      l: "Singalese (scrittura tondeggiante con ricci) e tamil, con l'inglese sui cartelli.",
      a: "Tuk-tuk, statue di Buddha, stupa bianchi, mercati stradali." } },

  { cc: "sg", nome: "Singapore", guida: "sx", tld: ".sg", r: 5000,
    box: [[1.25, 103.7, 1.45, 103.95]],
    h: {
      v: "Giungla tropicale e parchi tra i grattacieli; vegetazione sempre rigogliosa.",
      s: "Si guida a sinistra; strade ordinatissime; segnali verdi; molti attraversamenti pedonali.",
      t: "Formato SBA 1234 X, con lettera finale di controllo.",
      l: "Inglese, cinese, malese e tamil sui cartelli.",
      a: "Palazzi HDB colorati, parchi, auto nuove." } },

  { cc: "il", nome: "Israele", guida: "dx", tld: ".il",
    box: [[31.0, 34.5, 33.0, 35.5]],
    h: {
      v: "Costa mediterranea con pini e ulivi, deserto del Negev a sud, colline verdi in Galilea.",
      s: "Si guida a destra; segnali in ebraico, arabo e inglese; barriere antirumore.",
      t: "Gialla con numeri neri (7 o 8 cifre) e banda blu IL.",
      l: "Ebraico (alef-bet) e arabo, entrambi scritti da destra a sinistra.",
      a: "Cisterne e pannelli solari sui tetti, edifici in pietra bianca, palazzi in cemento." } },

  { cc: "jo", nome: "Giordania", guida: "dx", tld: ".jo",
    box: [[29.5, 35.0, 32.5, 36.5]],
    h: {
      v: "Deserto e altopiano arido, colline calcaree attorno ad Amman, valle del Giordano più verde.",
      s: "Si guida a destra; segnali in arabo e inglese; cartelli con cammelli; dossi.",
      t: "Bianca con numeri e lettere in arabo.",
      l: "Arabo (da destra a sinistra) e inglese.",
      a: "Edifici in pietra chiara e cemento, cisterne sui tetti, bandiere." } },

  { cc: "ae", nome: "Emirati Arabi Uniti", guida: "dx", tld: ".ae",
    box: [[24.0, 54.0, 25.5, 56.0]],
    h: {
      v: "Deserto di sabbia; vegetazione solo coltivata (palme, siepi irrigate).",
      s: "Si guida a destra; autostrade larghissime; segnali in arabo e inglese; molti lampioni.",
      t: "Bianca con l'emirato scritto in alto (Dubai, Abu Dhabi, Sharjah), numeri e lettere in arabo e inglese.",
      l: "Arabo e inglese, ovunque bilingue.",
      a: "Grattacieli, SUV bianchi, edifici color sabbia, cantieri." } },

  { cc: "kg", nome: "Kirghizistan", guida: "dx", tld: ".kg",
    box: [[42.3, 74.0, 43.2, 76.5]],
    h: {
      v: "Montagne alte, prati d'alta quota, pinete di abete, steppa, laghi come l'Issyk-Kul.",
      s: "Strade dissestate, mucche e cavalli sulla carreggiata, cartelli in cirillico.",
      t: "Bianca con bandiera KG; formato 01 KG 123 ABC (le prime cifre indicano la regione).",
      l: "Kirghiso e russo in cirillico: «көчөсү» (strada), «улица».",
      a: "Yurte, mausolei con cupola, cimiteri, marshrutka (minibus)." } },

  { cc: "mn", nome: "Mongolia", guida: "dx", tld: ".mn",
    box: [[47.5, 105.5, 48.5, 107.5]],
    h: {
      v: "Steppa sconfinata senza alberi, deserto del Gobi, colline e foreste di larici a nord.",
      s: "Strade asfaltate rare, piste sterrate; cartelli con scritte cirilliche.",
      t: "Bianca con quattro cifre e tre lettere cirilliche.",
      l: "Mongolo in cirillico con le lettere Ө e Ү (tipiche).",
      a: "Gher (tende di feltro bianche), cavalli, mucchi di pietre sacre (ovoo); molte Toyota Prius a Ulan Bator." } },

  /* ===================== AFRICA ===================== */
  { cc: "za", nome: "Sudafrica", guida: "sx", tld: ".za", w: 2,
    box: [[-34.2, 18.3, -33.5, 19.5], [-34.0, 25.0, -33.0, 28.0], [-26.5, 27.5, -25.5, 29.0], [-30.0, 30.5, -29.5, 31.5], [-29.0, 24.0, -27.5, 26.5]],
    h: {
      v: "Savana e bush, semi-deserto del Karoo, fynbos al Capo, colline erbose a est; jacarande a Pretoria.",
      s: "Si guida a sinistra; linee gialle continue ai bordi; cartelli di animali; incroci con 4-way stop; lunghe distanze.",
      t: "Bianca con sigla provinciale a destra (GP Gauteng, WC Western Cape, KZN KwaZulu-Natal); a Città del Capo CA 123-456.",
      l: "Inglese e afrikaans («straat», «pad»), più zulu, xhosa e altre lingue.",
      a: "Muri alti con fili elettrici, minibus-taxi bianchi, township con lamiere, insegne Shoprite, Spar, Pick n Pay." } },

  { cc: "ke", nome: "Kenya", guida: "sx", tld: ".ke",
    box: [[-1.5, 36.5, -0.5, 37.5], [-4.2, 39.5, -3.8, 39.8]],
    h: {
      v: "Savana con acacie, altopiani verdi con tè e caffè, costa tropicale con palme.",
      s: "Si guida a sinistra; dossi frequenti; matatu (minibus decorati) e boda-boda (moto-taxi); strade di terra rossa.",
      t: "Bianca davanti e gialla dietro; formato KAA 123A.",
      l: "Inglese e swahili: «barabara», «duka», «hoteli», «mkahawa».",
      a: "Matatu colorati, negozi dipinti con pubblicità Safaricom (verde) e Airtel (rosso), terra rossa." } },

  { cc: "ng", nome: "Nigeria", guida: "dx", tld: ".ng",
    box: [[6.3, 3.0, 7.6, 4.0], [9.0, 7.2, 9.3, 7.6]],
    h: {
      v: "Fitta vegetazione tropicale a sud, savana a nord; palme e banani.",
      s: "Si guida a destra; strade sconnesse; moto-taxi (okada), minibus gialli (danfo) a Lagos.",
      t: "Bianca con striscia colorata e il nome dello stato (LAGOS); formato ABC-123DE.",
      l: "Inglese, hausa, yoruba e igbo.",
      a: "Generatori, pubblicità murali, tricicli (keke), cavi elettrici sospesi." } },

  { cc: "gh", nome: "Ghana", guida: "dx", tld: ".gh",
    box: [[5.4, -1.0, 6.8, 0.5], [6.5, -2.0, 7.5, -1.3]],
    h: {
      v: "Costa tropicale umida e foreste con cacao a sud, savana a nord.",
      s: "Si guida a destra; tro-tro (minibus) e mototaxi; molte strade rosse.",
      t: "Bianca con sigla di regione, numero e anno (es. GR 1234-20).",
      l: "Inglese e lingue locali come il twi; negozi con nomi religiosi («God is Good Enterprise»).",
      a: "Pubblicità MTN gialla, tro-tro, bandierine, muri dipinti." } },

  { cc: "sn", nome: "Senegal", guida: "dx", tld: ".sn",
    box: [[14.5, -17.5, 15.0, -16.8], [14.5, -16.5, 15.6, -15.5]],
    h: {
      v: "Savana arida con baobab, sabbia e coste; vegetazione più verde in Casamance.",
      s: "Si guida a destra; strade sabbiose, carretti con cavalli, minibus dipinti (car rapide) a Dakar.",
      t: "Bianca con sigla regionale (DK Dakar), formato AA-123-AA.",
      l: "Francese e wolof: «boulangerie», «boutique».",
      a: "Moschee, baobab, villaggi con muri di cemento, cavalli e carretti." } },

  { cc: "tn", nome: "Tunisia", guida: "dx", tld: ".tn",
    box: [[35.5, 9.7, 37.0, 10.8], [33.0, 10.0, 34.0, 11.0]],
    h: {
      v: "Costa con ulivi, steppa arida al centro, palmeti a sud, Sahara.",
      s: "Si guida a destra; cartelli bilingui arabo e francese.",
      t: "Bianca con la scritta تونس in arabo al centro tra i numeri.",
      l: "Arabo e francese.",
      a: "Case imbiancate con porte blu o azzurre, minareti quadrati, ulivi, edifici in cemento incompiuti." } },

  { cc: "bw", nome: "Botswana", guida: "sx", tld: ".bw",
    box: [[-25.5, 25.5, -24.0, 26.0], [-21.5, 27.0, -20.0, 28.0]],
    h: {
      v: "Savana semiarida del Kalahari con cespugli e acacie; terreno sabbioso e piatto.",
      s: "Si guida a sinistra; strade dritte e lunghissime; bestiame (asini, mucche, capre) libero; cartelli per gli elefanti.",
      t: "Bianca con la lettera B e numeri (B 123 ABC).",
      l: "Inglese e setswana.",
      a: "Villaggi di capanne e case basse, capre sulla strada, recinzioni veterinarie." } },

  { cc: "ug", nome: "Uganda", guida: "sx", tld: ".ug",
    box: [[0.0, 32.0, 0.6, 33.0], [-0.7, 30.0, -0.2, 30.8]],
    h: {
      v: "Verde brillante con banani, campi di tè, laghi, savana a nord.",
      s: "Si guida a sinistra; boda-boda (moto-taxi) ovunque; terra rossa; dossi.",
      t: "Bianca con la lettera U e tre lettere con numero (UAA 123A).",
      l: "Inglese, swahili e luganda.",
      a: "Pubblicità MTN (gialla) e Airtel (rossa), piccoli negozi con muri dipinti." } },

  /* ===================== OCEANIA ===================== */
  { cc: "au", nome: "Australia", guida: "sx", tld: ".au", w: 2,
    box: [[-34.2, 150.7, -33.5, 151.4], [-38.2, 144.5, -37.5, 145.5], [-27.8, 152.8, -27.2, 153.5], [-32.2, 115.7, -31.7, 116.1], [-35.0, 138.3, -34.7, 138.8], [-37.5, 141.0, -35.0, 148.0]],
    h: {
      v: "Eucalipti e bush secco, terra rossa nell'outback, coste con palme e foresta pluviale a nord-est; Victoria e Tasmania più verdi.",
      s: "Si guida a sinistra; paletti bianchi con catarifrangenti rossi; cartelli con canguri e koala; strade sterrate di terra rossa nell'interno.",
      t: "Cambiano per stato (NSW, VIC, QLD, WA, SA, TAS, NT, ACT) con il nome dello stato in alto.",
      l: "Inglese: «Rd», «St», «Ave», «Hwy».",
      a: "Case basse con veranda e tetti di lamiera, serbatoi dell'acqua, cassette postali, road train, supermercati Woolworths e Coles." } },

  { cc: "nz", nome: "Nuova Zelanda", guida: "sx", tld: ".nz",
    box: [[-46.2, 168.5, -45.0, 171.0], [-43.8, 171.5, -43.3, 172.8], [-41.4, 174.6, -40.9, 175.7], [-37.2, 174.5, -36.7, 175.0]],
    h: {
      v: "Prati verdissimi con pecore, felci arboree, foreste pluviali, montagne e coste; Alpi del Sud.",
      s: "Si guida a sinistra; ponti a una corsia, curve segnalate con cartelli gialli; strade strette con pochi guardrail.",
      t: "Formato ABC123 (tre lettere e tre cifre).",
      l: "Inglese e maori: toponimi con «wh», «ng», «aki».",
      a: "Case con tetto di lamiera, supermercati Four Square e Pak'nSave, pecore, ponti stretti." } },
];
