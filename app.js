/* Dove sono? — allenamento in stile GeoGuessr */
(function () {
  "use strict";

  var $ = function (s) { return document.querySelector(s); };
  var COUNTRIES = window.COUNTRIES;
  var BY_CC = {};
  COUNTRIES.forEach(function (c) { BY_CC[c.cc] = c; });
  var TOTAL_W = COUNTRIES.reduce(function (a, c) { return a + (c.w || 1); }, 0);

  var KEY_NAME = "dovesono.apikey";
  var store = {
    get: function () { try { return localStorage.getItem(KEY_NAME) || ""; } catch (e) { return ""; } },
    set: function (v) { try { localStorage.setItem(KEY_NAME, v); } catch (e) {} },
    del: function () { try { localStorage.removeItem(KEY_NAME); } catch (e) {} }
  };

  var gm = null;               // { StreetViewService, StreetViewPanorama }
  var svService = null;
  var panorama = null;
  var startPano = null;        // id del panorama di partenza
  var target = null;           // { lat, lng, seed }
  var guess = null;            // { lat, lng } (longitudine normalizzata)
  var guessMap = null, guessMarker = null, resultMap = null;
  var roundId = 0;

  /* ------------------------------------------------------------------ */
  /*  Caricamento Google Maps JS                                         */
  /* ------------------------------------------------------------------ */
  var gmPromise = null;
  function loadGoogle(key) {
    if (gmPromise) return gmPromise;
    gmPromise = new Promise(function (resolve, reject) {
      window.__gmReady = function () {
        google.maps.importLibrary("streetView").then(function (lib) {
          resolve({ StreetViewService: lib.StreetViewService, StreetViewPanorama: lib.StreetViewPanorama });
        }).catch(reject);
      };
      window.gm_authFailure = function () {
        store.del();
        showError("Google ha rifiutato la chiave API. Controlla che «Maps JavaScript API» sia abilitata, che la fatturazione sia attiva e che la restrizione sui siti includa questo indirizzo.", "Torna all'inizio", function () { location.reload(); });
      };
      var s = document.createElement("script");
      s.src = "https://maps.googleapis.com/maps/api/js?key=" + encodeURIComponent(key) + "&v=weekly&loading=async&callback=__gmReady";
      s.async = true;
      s.onerror = function () { reject(new Error("script")); };
      document.head.appendChild(s);
    });
    return gmPromise;
  }

  /* ------------------------------------------------------------------ */
  /*  Schermata di caricamento / errori                                  */
  /* ------------------------------------------------------------------ */
  function showLoading(text) {
    $("#loading").hidden = false;
    $("#loading").classList.remove("is-error");
    $("#loadingText").textContent = text;
    $("#loadingBtn").hidden = true;
  }
  function hideLoading() { $("#loading").hidden = true; }
  function showError(text, btnLabel, onClick) {
    $("#start").hidden = true;
    $("#game").hidden = false;
    $("#loading").hidden = false;
    $("#loading").classList.add("is-error");
    $("#loadingText").textContent = text;
    var b = $("#loadingBtn");
    b.textContent = btnLabel;
    b.onclick = onClick;
    b.hidden = false;
  }

  /* ------------------------------------------------------------------ */
  /*  Scelta del luogo                                                   */
  /* ------------------------------------------------------------------ */
  function pickCountry() {
    var r = Math.random() * TOTAL_W;
    for (var i = 0; i < COUNTRIES.length; i++) {
      r -= (COUNTRIES[i].w || 1);
      if (r <= 0) return COUNTRIES[i];
    }
    return COUNTRIES[0];
  }

  function randomPoint(box) {
    var s = box[0], w = box[1], n = box[2], e = box[3];
    var rad = Math.PI / 180;
    var a = Math.sin(s * rad), b = Math.sin(n * rad);
    var lat = Math.asin(a + Math.random() * (b - a)) / rad;
    var lng = w + Math.random() * (e - w);
    return { lat: lat, lng: lng };
  }

  function getPanorama(p, radius) {
    return new Promise(function (resolve) {
      var req = { location: { lat: p.lat, lng: p.lng }, radius: radius, preference: "nearest", source: "outdoor" };
      try {
        var ret = svService.getPanorama(req, function (data, status) {
          resolve(status === "OK" ? data : null);
        });
        if (ret && ret.catch) ret.catch(function () {});
      } catch (e) { resolve(null); }
    });
  }

  async function findLocation() {
    for (var i = 0; i < 30; i++) {
      var c = pickCountry();
      var box = c.box[Math.floor(Math.random() * c.box.length)];
      var data = await getPanorama(randomPoint(box), c.r || 40000);
      if (!data || !data.location || !data.location.latLng) continue;
      if (!/google/i.test(data.copyright || "")) continue;              // solo copertura ufficiale
      if (!data.links || data.links.length === 0) continue;             // niente vicoli ciechi
      return { data: data, seed: c.cc };
    }
    throw new Error("nessun luogo");
  }

  /* ------------------------------------------------------------------ */
  /*  Panorama + bussola                                                 */
  /* ------------------------------------------------------------------ */
  var SVGNS = "http://www.w3.org/2000/svg";
  var compassLetters = [];

  function buildCompass() {
    var dial = $("#dial");
    for (var a = 0; a < 360; a += 10) {
      var major = a % 30 === 0;
      var r1 = major ? 36 : 39, r2 = 43, rad = a * Math.PI / 180;
      var l = document.createElementNS(SVGNS, "line");
      l.setAttribute("x1", (50 + r1 * Math.sin(rad)).toFixed(2));
      l.setAttribute("y1", (50 - r1 * Math.cos(rad)).toFixed(2));
      l.setAttribute("x2", (50 + r2 * Math.sin(rad)).toFixed(2));
      l.setAttribute("y2", (50 - r2 * Math.cos(rad)).toFixed(2));
      l.setAttribute("class", major ? "tick major" : "tick");
      dial.appendChild(l);
    }
    [["N", 0], ["E", 90], ["S", 180], ["O", 270]].forEach(function (p) {
      var rad = p[1] * Math.PI / 180;
      var x = 50 + 26 * Math.sin(rad), y = 50 - 26 * Math.cos(rad);
      var t = document.createElementNS(SVGNS, "text");
      t.setAttribute("x", x.toFixed(2));
      t.setAttribute("y", y.toFixed(2));
      if (p[0] === "N") t.setAttribute("class", "north");
      t.textContent = p[0];
      dial.appendChild(t);
      compassLetters.push({ el: t, x: x, y: y });
    });
  }

  function updateCompass() {
    if (!panorama) return;
    var h = ((panorama.getPov().heading % 360) + 360) % 360;
    $("#dial").setAttribute("transform", "rotate(" + (-h).toFixed(1) + " 50 50)");
    compassLetters.forEach(function (L_) {
      L_.el.setAttribute("transform", "rotate(" + h.toFixed(1) + " " + L_.x.toFixed(2) + " " + L_.y.toFixed(2) + ")");
    });
    $("#heading").textContent = Math.round(h) + "°";
  }

  function initPanorama(pano) {
    var pov = { heading: Math.random() * 360, pitch: 0 };
    if (!panorama) {
      panorama = new gm.StreetViewPanorama($("#pano"), {
        pano: pano, pov: pov, visible: true,
        disableDefaultUI: true,
        linksControl: true, clickToGo: true, scrollwheel: true,
        addressControl: false, showRoadLabels: false,
        panControl: false, zoomControl: false, fullscreenControl: false,
        enableCloseButton: false, motionTracking: false, motionTrackingControl: false
      });
      panorama.addListener("pov_changed", updateCompass);
    } else {
      panorama.setPano(pano);
      panorama.setPov(pov);
      panorama.setVisible(true);
    }
    updateCompass();
  }

  /* ------------------------------------------------------------------ */
  /*  Round                                                              */
  /* ------------------------------------------------------------------ */
  async function newRound() {
    var id = ++roundId;
    $("#result").hidden = true;
    $("#reviewBar").hidden = true;
    $("#guessWrap").hidden = true;
    resetGuess();
    showLoading("Ti porto da qualche parte…");

    var found;
    try { found = await findLocation(); }
    catch (e) {
      if (id !== roundId) return;
      showError("Non sono riuscito a trovare un luogo. Controlla la connessione e riprova.", "Riprova", newRound);
      return;
    }
    if (id !== roundId) return;

    var loc = found.data.location;
    target = { lat: loc.latLng.lat(), lng: loc.latLng.lng(), seed: found.seed };
    startPano = loc.pano;
    initPanorama(startPano);

    $("#guessWrap").hidden = false;
    setTimeout(function () { if (id === roundId) hideLoading(); }, 700);
  }

  /* ------------------------------------------------------------------ */
  /*  Mappa per il pin                                                   */
  /* ------------------------------------------------------------------ */
  function pinIcon(kind) {
    var el = document.createElement("div");
    el.className = "pin " + kind;
    return L.divIcon({ html: el, className: "pin-wrap", iconSize: [20, 20], iconAnchor: [10, 10] });
  }

  function addTiles(map) {
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18, attribution: "© OpenStreetMap"
    }).addTo(map);
  }

  function ensureGuessMap() {
    if (guessMap) return;
    guessMap = L.map("guessMap", { minZoom: 2, worldCopyJump: true, zoomSnap: 0.5 }).setView([30, 10], 2);
    addTiles(guessMap);
    guessMap.on("click", function (e) { setGuess(e.latlng); });
  }

  function setGuess(ll) {
    var w = ll.wrap();
    guess = { lat: w.lat, lng: w.lng };
    if (!guessMarker) guessMarker = L.marker(ll, { icon: pinIcon("guess"), keyboard: false }).addTo(guessMap);
    else guessMarker.setLatLng(ll);
    $("#btnConfirm").disabled = false;
    $("#guessHint").textContent = "Pin messo. Toccando altrove lo sposti.";
  }

  function resetGuess() {
    guess = null;
    if (guessMarker) { guessMarker.remove(); guessMarker = null; }
    $("#btnConfirm").disabled = true;
    $("#guessHint").textContent = "Tocca la mappa per mettere il pin";
    closeMap();
  }

  function openMap() {
    $("#guessPanel").classList.add("open");
    $("#btnMap").textContent = "Chiudi mappa";
    ensureGuessMap();
    setTimeout(function () { guessMap.invalidateSize(); }, 30);
  }
  function closeMap() {
    $("#guessPanel").classList.remove("open");
    $("#btnMap").textContent = "Apri mappa";
  }
  function toggleMap() {
    if ($("#guessPanel").classList.contains("open")) closeMap(); else openMap();
  }

  /* ------------------------------------------------------------------ */
  /*  Risultato                                                          */
  /* ------------------------------------------------------------------ */
  function haversine(a, b) {
    var R = 6371, rad = Math.PI / 180;
    var dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(x)));
  }

  function fmtDist(d) {
    if (d < 1) return { n: Math.round(d * 1000).toLocaleString("it-IT"), u: "m" };
    if (d < 100) return { n: d.toFixed(1).replace(".", ","), u: "km" };
    return { n: Math.round(d).toLocaleString("it-IT"), u: "km" };
  }

  function confirmGuess() {
    if (!guess || !target) return;
    closeMap();
    $("#guessWrap").hidden = true;

    var d = haversine(guess, target);
    var score = d < 0.025 ? 5000 : Math.round(5000 * Math.exp(-d / 1491.7));
    var f = fmtDist(d);

    $("#distNum").textContent = f.n;
    $("#distUnit").textContent = f.u;
    $("#scoreTxt").textContent = score.toLocaleString("it-IT") + " / 5.000";
    $("#scoreBar").style.width = "0%";

    // stato iniziale della scheda (in attesa di sapere dov'era davvero)
    $("#flag").hidden = true;
    $("#placeName").textContent = "Sto cercando il luogo…";
    $("#placeSub").textContent = "";
    $("#chips").hidden = true;
    $("#hints").hidden = true;
    $("#noCountry").hidden = true;
    $("#checklist").open = false;
    $("#resultPanel").scrollTop = 0;

    $("#result").hidden = false;
    buildResultMap();
    setTimeout(function () { $("#scoreBar").style.width = (score / 50) + "%"; }, 80);

    lookupPlace(roundId);
  }

  function buildResultMap() {
    if (resultMap) { resultMap.remove(); resultMap = null; }
    resultMap = L.map("resultMap", { minZoom: 2, worldCopyJump: true });
    addTiles(resultMap);

    var g = L.latLng(guess.lat, guess.lng);
    var t = L.latLng(target.lat, target.lng);

    function tip(text) { var s = document.createElement("span"); s.textContent = text; return s; }
    L.marker(g, { icon: pinIcon("guess"), keyboard: false })
      .bindTooltip(tip("La tua scelta"), { permanent: true, direction: "top", offset: [0, -10], className: "tip" })
      .addTo(resultMap);
    L.marker(t, { icon: pinIcon("real"), keyboard: false })
      .bindTooltip(tip("Luogo reale"), { permanent: true, direction: "top", offset: [0, -10], className: "tip" })
      .addTo(resultMap);
    L.polyline([g, t], { color: "#f4c20d", weight: 3, dashArray: "8 8" }).addTo(resultMap);

    resultMap.invalidateSize();
    resultMap.fitBounds(L.latLngBounds([g, t]), { padding: [70, 70], maxZoom: 14 });
  }

  async function lookupPlace(rid) {
    var t = target, addr = null;
    try {
      var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=10&addressdetails=1&accept-language=it&lat=" +
                t.lat + "&lon=" + t.lng;
      var r = await fetch(url);
      if (r.ok) { var j = await r.json(); addr = j.address || null; }
    } catch (e) { /* ripiego sotto */ }
    if (rid !== roundId) return;

    var cc = addr && addr.country_code ? addr.country_code.toLowerCase() : null;
    var approx = false;
    if (!cc) { cc = t.seed; approx = true; }
    var country = BY_CC[cc] || null;

    var name = (addr && addr.country) || (country && country.nome) || "Luogo sconosciuto";
    var sub = "";
    if (approx) sub = "Posizione indicativa";
    else if (addr) sub = [addr.state || addr.region || addr.county, addr.city || addr.town || addr.village].filter(Boolean).join(", ");

    $("#placeName").textContent = name;
    $("#placeSub").textContent = sub;

    var flag = $("#flag");
    flag.onerror = function () { flag.hidden = true; };
    flag.onload = function () { flag.hidden = false; };
    flag.src = "https://flagcdn.com/w80/" + cc + ".png";

    if (country) {
      ["v", "s", "t", "l", "a"].forEach(function (k) {
        $("#h-" + k + " p").textContent = country.h[k];
      });
      $("#chipDrive").textContent = country.guida === "sx" ? "Si guida a sinistra" : "Si guida a destra";
      $("#chipTld").textContent = "Dominio " + country.tld;
      $("#chips").hidden = false;
      $("#hints").hidden = false;
    } else {
      $("#noCountry").hidden = false;
      $("#checklist").open = true;
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Eventi                                                             */
  /* ------------------------------------------------------------------ */
  function startError(msg) {
    var e = $("#startError");
    e.textContent = msg;
    e.hidden = false;
  }

  async function start() {
    $("#startError").hidden = true;
    var key = store.get() || $("#apiKey").value.trim();
    if (!/^AIza[\w-]{20,}$/.test(key)) {
      startError("La chiave API non sembra valida: dovrebbe iniziare con «AIza». Controlla di averla copiata per intero.");
      return;
    }
    $("#start").hidden = true;
    $("#game").hidden = false;
    showLoading("Carico Street View…");
    try {
      gm = await loadGoogle(key);
      store.set(key);
    } catch (e) {
      showError("Non riesco a caricare Google Maps. Controlla la connessione e la chiave API.", "Torna all'inizio", function () { location.reload(); });
      return;
    }
    svService = new gm.StreetViewService();
    newRound();
  }

  function init() {
    buildCompass();

    if (store.get()) {
      $("#keyBlock").hidden = true;
      $("#btnChangeKey").hidden = false;
    }
    $("#btnChangeKey").addEventListener("click", function () {
      store.del();
      $("#keyBlock").hidden = false;
      $("#btnChangeKey").hidden = true;
      $("#apiKey").focus();
    });
    $("#apiKey").addEventListener("keydown", function (e) { if (e.key === "Enter") start(); });
    $("#btnStart").addEventListener("click", start);

    $("#btnMap").addEventListener("click", toggleMap);
    $("#btnConfirm").addEventListener("click", confirmGuess);
    $("#btnBack").addEventListener("click", function () { if (panorama && startPano) panorama.setPano(startPano); });

    $("#btnNext").addEventListener("click", newRound);
    $("#btnReview").addEventListener("click", function () {
      $("#result").hidden = true;
      $("#reviewBar").hidden = false;
    });
    $("#btnToResult").addEventListener("click", function () {
      $("#reviewBar").hidden = true;
      $("#result").hidden = false;
      if (resultMap) resultMap.invalidateSize();
    });

    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMap(); });
  }

  init();
})();
