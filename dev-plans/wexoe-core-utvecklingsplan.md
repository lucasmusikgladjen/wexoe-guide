# Utvecklingsplan — Wexoe Core

Baserad på arkitekturgenomgången. Kort, testcentrerad, bygg nedifrån och upp.

---

## Förtydligande: Core serverar både SSOT- och CMS-data

Core behandlar alla entiteter lika. En SSOT-entitet (`partners`, `coworkers`) och en CMS-entitet (`product_area`, `landing_page`) går genom samma pipeline. Distinktionen SSOT/CMS är bara ett namnkonvention för människor — `_core_*` vs `page_*` prefix i Airtable.

Det här har en praktisk konsekvens: **schema-lagret måste klara det svåraste fallet, inte bara det enklaste**. Product_area har 54 fält inklusive numrerade pseudo-arrays (`Normal 1 H2`, `Normal 1 Text`, `Normal 1 Bullets`…). Om Core klarar det klarar den allt. Därför testar vi mot product_area redan i fas 2.

---

## Testprincip genomgående

Ingen TDD eller formella unit tests. Varje fas har en **manuell acceptanstest-checklista** som du faktiskt går igenom innan du går vidare. Lägg testerna i WP-admin-sidan där det går — "kör diagnostik"-knappar som visar om varje lager fungerar. Det blir också ditt monitorerings-UI i produktion.

---

## Fas 0: Förberedelser

**Byggs:**

- Plugin-skelettet: mapp `wexoe-core/`, huvudfil `wexoe-core.php` med plugin header, tom admin-sida registrerad under Verktyg.
- API-nyckel flyttas från hårdkodad constant till WP options. Admin-sida har fält för att sätta den.
- `.gitignore` och grundläggande repo-struktur.
- Namespace-konvention: `Wexoe\Core`.

**Acceptanstester:**

- [ ] Plugin kan aktiveras och avaktiveras utan WP-fel.
- [ ] Admin-sidan syns under Verktyg → Wexoe Core.
- [ ] API-nyckel kan sparas via admin och hämtas tillbaka.
- [ ] Nyckeln sparas krypterad eller åtminstone maskerad i UI.
- [ ] Inga PHP-varningar i `debug.log`.

**Tidsuppskattning:** 1 dag.

---

## Fas 1: Grundinfrastruktur (ingen domänkunskap)

Bygg lagren som inte vet något om entiteter — bara tekniska primitiver.

### 1a. AirtableClient

Tunn wrapper runt `wp_remote_get`. Tar tableId, eventuella filter, returnerar parsad array eller fel-objekt. Ingen cache, ingen normalisering, ingen kunskap om schema.

**Acceptanstester (admin-knapp: "Test Airtable connection"):**

- [ ] Anrop mot känd tabell (t.ex. Partners) returnerar records.
- [ ] Anrop mot ogiltig tableId returnerar fel-objekt, kraschar inte.
- [ ] Anrop utan nätverk (simulerat) timar ut, returnerar fel-objekt.
- [ ] Status-kod 401 (fel API-nyckel) hanteras separat från 500.
- [ ] Pagination fungerar — tabell med >100 records returnerar alla.

### 1b. Cache-lagret

Wrapper runt `set_transient`/`get_transient`/`delete_transient`. Bonus: `deleteByPrefix` via direkt SQL eftersom WP saknar det.

**Acceptanstester:**

- [ ] `set` följt av `get` returnerar samma data.
- [ ] TTL respekteras — manuellt satt 5-sek-TTL är `null` efter 6 sek.
- [ ] `delete` tar bort en nyckel utan att påverka andra.
- [ ] `deleteByPrefix('core_partners_')` tar bort alla med det prefixet, inget annat.
- [ ] Stor JSON-payload (~500KB) kan sparas och hämtas intakt.

### 1c. Logger

Ring-buffer i WP options (max ~500 entries). Metoderna `log($level, $message, $context)` och `getEntries($limit)`.

**Acceptanstester:**

- [ ] Loggade rader visas i admin-sidan.
- [ ] När max nås skrivs äldsta över, inte nyaste.
- [ ] Nivåer (info/warning/error) färgkodas i admin.
- [ ] Kontext-data (t.ex. tableId) visas expanderbart.

### 1d. Admin-sida — grundläggande

- Fält för API-nyckel
- "Test Airtable connection"-knapp
- Log-visning
- "Rensa all cache"-knapp (fungerar inte förrän fas 2, men finns där)

**Acceptanstester:**

- [ ] Alla knappar gör vad de säger.
- [ ] Sidan renderas snabbt även när loggen är full.

**Tidsuppskattning:** 3–4 dagar för hela fas 1.

---

## Fas 2: Domänlagret — där det blir intressant

### 2a. SchemaRegistry

Laddar `entities/*.php`-filer lat (bara när de efterfrågas). Håller ett internt per-request-minne av laddade scheman.

**Acceptanstester:**

- [ ] Anrop till `SchemaRegistry::get('partners')` laddar `entities/partners.php`.
- [ ] Samma anrop inom samma request läser inte filen igen.
- [ ] Anrop till icke-existerande schema returnerar `null`, kraschar inte.
- [ ] Schema-fil med syntaxfel loggas tydligt, kraschar inte.

### 2b. EntityRepository — den viktigaste klassen

Tar ett schema, använder cache + AirtableClient, normaliserar via schemat, returnerar ren data. Implementerar `find`, `all`, `findBy`, samt den asynkrona refresh-logiken.

**Registrera två entiteter för testning:**

- `partners` — enkel SSOT-entitet, few fields, simple types
- `product_areas` — det svåra fallet: 54 fält, länkar, numrerade pseudo-arrays

**Schema för numrerade pseudo-arrays** — designbeslut i denna fas:

```php
'sections' => [
    'source' => 'pseudo_array',
    'prefix' => 'Normal',
    'count' => 4,
    'fields' => [
        'h2' => 'H2',           // blir "Normal 1 H2", "Normal 2 H2"…
        'text' => 'Text',
        'bullets' => 'Bullets',
        'image' => 'Image',
        'reversed' => 'Reversed',
        'bg' => 'BG',
        'visible_top' => 'upp',  // "Normal 1 upp" → visa före toggle
    ],
],
```

Repositoryt ska returnera en array av section-objekt, inte 20 platta fält.

**Acceptanstester:**

- [ ] `Core::entity('partners')->find('rockwell')` returnerar normaliserad data första gången (cache-miss → Airtable → cache).
- [ ] Andra anropet samma request hämtas från cache (mät tiden — ska vara <1ms).
- [ ] Fältnamn i output följer schemat, inte Airtable (`logo_url`, inte "Logo transparent").
- [ ] Länkfält (partners → divisions) är slug-referenser, inte Airtable record-IDs.
- [ ] Product_area returnerar en `sections`-array med 4 element, inte 20 platta fält.
- [ ] Tomma sektioner (ingen H2, ingen Text) filtreras bort.
- [ ] Förväntat fält saknas i Airtable → loggas som warning, fältet blir `null`, sidan kraschar inte.
- [ ] TTL-utgång triggar async refresh (verifiera via logg).
- [ ] Airtable down + stale cache → stale data returneras, TTL förlängs 6h, alert loggas.
- [ ] Stale cache äldre än TTL + "hård takhöjd" (7 dygn?) loggas som kritisk fel.

### 2c. Core facade

Statisk klass med `entity()`, `copy()`, `company()`, `log()`. Tunn — delegerar till repositoryt.

**Acceptanstester:**

- [ ] `Core::entity('partners')->find('rockwell')` fungerar identiskt som det underliggande repositoryt.
- [ ] `Core::copy('mission')` returnerar rätt värde (kräver att `_core_copy`-tabellen är skapad).
- [ ] `Core::copy('nonexistent_key')` returnerar tom sträng, inte fel.

### 2d. Admin — cache-management fungerar

- Lista över registrerade entiteter med cache-status och ålder
- Per-entity "rensa cache"-knapp
- "Force refresh" som triggar refresh synkront (för debug)

**Acceptanstester:**

- [ ] Admin-sidan visar alla registrerade entiteter.
- [ ] "Rensa cache för partners" tar bort partner-transients utan att röra andra.
- [ ] "Force refresh partners" triggar Airtable-anrop, uppdaterar cache, visar ny tidsstämpel.

**Tidsuppskattning:** 5–7 dagar. Det här är hjärtat av Core.

---

## Fas 3: Helpers-migration

Flytta de rena hjälpfunktionerna från `wexoe-product-area.php` till `helpers/`:

- `markdown.php` — från `wexoe_pa_md()`
- `color.php` — från `wexoe_pa_is_dark_bg()`, `wexoe_pa_text_color()`, `wexoe_pa_hex()`
- `youtube.php` — från `wexoe_pa_youtube_id()`, `wexoe_pa_render_media()`
- `lines.php` — från `wexoe_pa_lines_to_array()`

Gör dem till `Wexoe\Core\Helpers\*`-funktioner eller statiska klassmetoder.

**Acceptanstester:**

- [ ] Enhetstest-sida i admin: kör varje helper med 3–5 kända inputs, verifiera output.
- [ ] Product_area-pluginet fortsätter fungera — det använder fortfarande sina lokala varianter (vi byter senare i fas 4+).

**Tidsuppskattning:** 1–2 dagar.

---

## Fas 4: Första feature-plugin-refaktorering — `wexoe_team_rack`

Det här är beviset att hela stacken fungerar end-to-end på en riktig use-case. Välj team_rack för att:

- Enkel: en tabell (Coworkers), ingen pseudo-array-komplexitet
- Visuellt distinkt: lätt att göra visuell diff
- Liten: ~400 rader → refaktoreringen är gripbar

**Steg:**

1. Registrera `coworkers`-entiteten i Core.
2. Skapa ny plugin-version som använder `Core::entity('coworkers')->all()`.
3. Behåll shortcode-namn och HTML-output pixel-identiskt.
4. Aktivera nya versionen på en test-sida först, jämför med gamla.
5. När allt stämmer — byt över produktionssidan.
6. Ta bort gamla plugin-koden.

**Acceptanstester:**

- [ ] Visuell diff mellan gamla och nya renderingen = pixel-identisk.
- [ ] Sidans laddningstid ≤ gamla versionen (mät med PageSpeed).
- [ ] Disable Airtable (byt API-nyckel tillfälligt) → sidan renderar fortfarande med stale data.
- [ ] Rensa cache via admin → nästa sidladdning hämtar färskt.
- [ ] Lägg till en ny coworker i Airtable → inom 24h (eller efter manuell cache-rensning) syns den på sajten.

**Tidsuppskattning:** 2–3 dagar.

---

## Fas 5: Andra refaktorering — bekräfta mönstret

Välj en av: `wexoe_product_cards`, `wexoe_hero_automation`, eller `wexoe_product_nav`. Alla är små-till-medium och täcker olika mönster.

Syftet: bevisa att mönstret håller för en andra plugin utan att behöva tänka om arkitekturen. Om det gör det är Core validerad.

**Acceptanstester:** samma som fas 4.

**Tidsuppskattning:** 2 dagar (snabbare än första eftersom mönstret är etablerat).

---

## Efter fas 5 — rullande migration

Resten av pluginsen tas i prioritetsordning, en per sprint:

1. `wexoe_team_switch`, `wexoe_team_cabinet` — triviala varianter av team_rack
2. `wexoe_news` + `wexoe_news_mobile`
3. `wexoe_contact_form` — ny territorium: formulär-infrastruktur. Överväg separat Forms-plugin.
4. `wexoe_product_nav`
5. **Den stora:** `wexoe_product_area` + `wexoe_order_page` + `wexoe_landing_page` — konsolideras till en feature-plugin med tre entry points. ~60% kodreduktion förväntas.

**Tidsuppskattning:** 4–8 veckor beroende på tempo. Kan köras parallellt med annat arbete.

---

## Övergripande kvalitetsgrindar

Innan varje fas markeras som klar:

- [ ] Alla fasens acceptanstester ✅
- [ ] Ingen regression i befintliga plugins (kör visuell diff på en handfull sidor)
- [ ] Ingen ökning av Airtable-API-anrop per dygn (mät via Airtable dashboard)
- [ ] Kod committad med tydligt commit-message
- [ ] Admin-sidans "diagnostics"-sektion uppdaterad med nya fasens tester

---

## Tidsram sammanfattning

| Fas | Tid | Leverabel |
|---|---|---|
| 0 | 1d | Plugin-skelett, API-nyckel i config |
| 1 | 3–4d | AirtableClient + Cache + Logger + admin-stub |
| 2 | 5–7d | Schema + Repository + Facade, två entiteter registrerade |
| 3 | 1–2d | Helpers migrerade |
| 4 | 2–3d | team_rack refaktorerad |
| 5 | 2d | Andra plugin refaktorerad |
| **Total (MVP)** | **~3 veckor** | Core fullt fungerande + 2 plugins migrerade |
| Rullande | 4–8v | Resten av pluginerna |

Tre veckor till en Core som är validerad och i produktion. Efter det är varje ny plugin billigare än förut.

---

## Risker att hålla ögon på

- **API-nyckel-rotering.** Om nyckeln byts måste alla transients förbli giltiga. Cache-nycklar får aldrig bero på API-nyckeln.
- **Transient size limit.** WP har en default på 1MB per transient. Product_area kan bli nära det. Testa tidigt.
- **Rate limit vid samtidig expiry.** Jitter på TTL är viktigt — annars kan alla entiteter försöka refresh samtidigt efter 24h.
- **Namespace-kollisioner.** När feature-plugins börjar använda `Wexoe\Core` måste det vara korrekt autoloadat. Composer eller manuell autoloader i Core's huvudfil.
