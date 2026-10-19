# Dove sono?

Allenamento in stile GeoGuessr: vieni lasciato in un punto a caso del mondo in Street View, senza mappa e con la sola bussola. Ti guardi intorno, ti muovi, metti il pin. Poi ti viene detto dov'eri, a che distanza ti sei fermato e come si riconosce quel posto (vegetazione, strade, targhe, lingua, altri indizi).

Niente account, niente multiplayer, niente server: è una pagina statica.

## Come si gioca

1. **Portami da qualche parte** ti lascia in un luogo casuale.
2. Muoviti con le frecce di Street View, ruota la vista trascinando. La bussola in alto a sinistra mostra dove sta il nord.
3. **Torna al punto di partenza** (in alto a destra) ti riporta dove sei partito se ti perdi.
4. **Apri mappa**, tocca il punto in cui pensi di essere, **Conferma**.
5. Vedi la distanza, un punteggio (max 5.000) e la scheda del paese. **Rivedi il posto** ti riporta in Street View con i suggerimenti ancora a portata di mano.

## Chiave API di Google Maps (una volta sola)

Street View arriva dalla Maps JavaScript API di Google, che richiede una chiave.

1. Vai su <https://console.cloud.google.com/>, crea un progetto e collega un account di fatturazione (serve una carta).
2. In **API e servizi → Libreria** abilita **Maps JavaScript API**.
3. In **Credenziali → Crea credenziali → Chiave API**, poi modifica la chiave:
   - **Restrizioni applicazione**: *Siti web* → aggiungi `https://rcarloni93.github.io/*` (e `http://localhost:*` se vuoi provarla in locale).
   - **Restrizioni API**: solo *Maps JavaScript API*.
4. Consigliato: imposta un **avviso di budget** e un **limite giornaliero di quota**, così non ci sono sorprese.

Alla prima apertura l'app ti chiede la chiave e la salva solo nel browser (`localStorage`). Non è scritta nel repository.

**Costi:** Dynamic Street View ha una quota gratuita mensile (al momento circa 5.000 caricamenti, poi circa 14 $ ogni 1.000). Verifica i prezzi aggiornati su <https://developers.google.com/maps/billing-and-pricing/pricing>.

## Pubblicare su GitHub Pages

*Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)`*. Dopo un minuto l'app è su `https://rcarloni93.github.io/dove-sono/`.

## Come funziona

- **Luogo casuale**: si sceglie un paese (con pesi), un punto casuale in una delle sue aree (`box` in `data.js`) e si chiede a Street View il panorama ufficiale Google più vicino. Se non c'è, si riprova.
- **Paese reale**: dopo la conferma, una ricerca inversa su OpenStreetMap (Nominatim) dice in che paese cade il punto. Serve perché vicino ai confini il panorama trovato può essere nel paese accanto.
- **Mappa**: Leaflet con tile OpenStreetMap, quindi non consuma quota Google.
- **Punteggio**: `5000 · e^(−d / 1491,7)`, con d in km (curva simile a quella di GeoGuessr sulla mappa mondiale).

## Aggiungere o correggere paesi

Tutto sta in `data.js`: ogni paese ha le aree di estrazione e cinque schede di indizi. Copia una voce e modificala. Le schede sono un punto di partenza scritto a mano: se noti un dettaglio sbagliato o mancante, correggilo pure.

## Limiti noti

- Il logo Google e i link di Street View in basso restano visibili (non è consentito nasconderli) e possono aprire la posizione su Google Maps: è un allenamento, non barare.
- La copertura Street View non è uniforme: alcuni paesi escono più di rado o solo in certe zone.
- I paesi senza scheda mostrano solo la checklist generale.
