# Wexoe Core-pluginet — arkitekturgenomgång

Det här dokumentet beskriver hur Core-pluginet ska fungera — både som mental modell och som teknisk arkitektur. Det är avsett som grund för en utvecklingsplan, inte som implementationsspec. Läs det en gång rakt igenom för helhetsbilden, och återkom till enskilda sektioner när vi bygger.

---

## 1. Den centrala metaforen: bibliotekarien

Innan vi pratar kod, etablera en mental modell. Föreställ dig ett specialiserat arkiv — Riksarkivet eller liknande — med tusentals dokument i märkta lådor. Och en skicklig bibliotekarie i receptionen.

- **Arkivet är Airtable.** Alla rader, alla fält, all data ligger där.
- **Bibliotekarien är Core-pluginet.**
- **Forskarna är dina feature-plugins** (team-rack, product-area, contact-form, osv).

En forskare kommer in och frågar: *"Jag behöver uppgifter om vår partner Rockwell."*

Forskaren vet inte vilken låda Rockwell ligger i, vilket sorteringssystem arkivet använder, eller om arkivet är stängt för inventering idag. Bibliotekarien vet allt det. Hon:

1. **Känner arkivets katalogsystem** — "partner" i forskarspråk betyder "rad i Partners-tabellen, fält X för namn, fält Y för logotyp". Det här är *schema-registret*.
2. **Har en disk med aktuella böcker** — det som ofta efterfrågas ligger redan framme, hon slipper gå ner i arkivet. Det här är *cache-lagret*.
3. **Kan gå ner i arkivet** när diskens exemplar är för gamla. Det här är *Airtable-klienten*.
4. **För dagbok** — varje förfrågan loggas. Det här är *logging*.
5. **Har en rutin för när arkivet är stängt** — behåll det gamla exemplaret lite längre, försök igen senare. Det här är *stale-on-error fallback*.
6. **Ger forskaren ett standardiserat svar** — en välorganiserad mapp med exakt de fält forskaren behöver, inte en råslängt dokumentsamling. Det här är *normalisering*.

Forskaren behöver aldrig lära sig arkivets system. Bibliotekarien lärde sig det en gång och översätter åt alla. Det är Core's hela existensberättigande.

---

## 2. En kort PHP-parentes

Innan vi går djupare — här är syntaxen du kommer möta, minsta-möjliga version så du kan läsa koden längre ned.

**Variabler börjar med `$`.**

```php
$name = "Rockwell";
```

Det betyder "variabeln som heter name har värdet 'Rockwell'". Dollartecknet är bara en markör som säger "detta är en variabel".

**Arrayer med nycklar (associative arrays) — som JSON-objekt.**

```php
$partner = [
    'name' => 'Rockwell',
    'logo' => 'https://...',
];
```

För att hämta värdet: `$partner['name']` returnerar `'Rockwell'`. Pilen `=>` delar nyckel från värde. Det är samma sak som JavaScript `{ name: 'Rockwell', logo: '...' }`.

**Klasser är ritningar, objekt är det som byggs från ritningen.**

```php
class PartnerRepository {
    public function find($slug) {
        // ... kod som hittar partnern
        return $partner;
    }
}
```

`class PartnerRepository` definierar ritningen. `find` är en *metod* — en funktion som hör hemma på ritningen. När du vill använda den skapar du ett objekt från ritningen:

```php
$repo = new PartnerRepository();
$partner = $repo->find('rockwell');
```

Pilen `->` betyder "anropa metoden på detta specifika objekt".

**Statiska metoder — metoder du anropar på själva ritningen, utan att bygga ett objekt först.**

```php
Core::copy('mission');
```

Dubbelkolonet `::` betyder "anropa metoden direkt på klassen". I Core's fall finns det bara *en* Core — du skapar aldrig "en Core" eller "en annan Core". Så vi gör allting statiskt. Det liknar `Math.sqrt(9)` i JavaScript där du inte skapar ett Math-objekt först.

**Namespaces — postadresser för kod.**

```php
namespace Wexoe\Core;
```

Det här förhindrar namnkollisioner. Om ett annat plugin också har en klass som heter `Repository`, så är det deras `Other\Plugin\Repository`, inte din `Wexoe\Core\Repository`. De kan leva sida vid sida i samma WP-installation utan att krocka.

Det är allt du behöver kunna för att läsa resten. Ser du någon annan syntax — fråga.

---

## 3. Core's fem kärnlager

Core består av fem samverkande lager, uppifrån och ned. Forskaren (feature-pluginen) pratar bara med översta lagret. Varje lager under är en abstraktion som tar hand om en specifik komplexitet.

### Lager 1: Facaden — den enda dörren in

Facaden är den *enda* publika ingången till Core. Allt i Core's system döljs bakom den. I praktiken är det en klass som heter `Core` med statiska metoder:

```php
Core::copy('mission');                                     // key/value standardtext
Core::entity('partners')->find('rockwell');                // en specifik post
Core::entity('partners')->all();                           // alla poster
Core::entity('coworkers')->findBy('tag', 'automation');    // filtrerade
Core::company()->phone_main;                               // singleton-objekt
Core::log('error', 'Airtable timeout');                    // loggning
```

Hela poängen är att feature-pluginen ska skriva exakt *en rad* för att hämta vad den vill ha. All komplexitet nedanför är osynlig.

**Metafor:** facaden är bibliotekariens disk. Forskaren står på andra sidan och ställer frågan. Allt bakom disken — kataloger, reservmagasin, arkivrummet — är osynligt. Forskaren ser bara "jag frågar, jag får svar".

### Lager 2: Entity-repositoryt — domänkunskapen

Ett *repository* är en klass som vet allt om en specifik typ av data — t.ex. partners. Den har metoder som `find`, `all`, `findBy`.

```php
class EntityRepository {
    private $entityName;
    private $schema;
    
    public function find($slug) {
        // 1. Fråga cachen
        // 2. Om cache-miss, fråga Airtable-klienten
        // 3. Normalisera svaret enligt schemat
        // 4. Returnera
    }
}
```

När du anropar `Core::entity('partners')` får du tillbaka ett repository som är förkonfigurerat för partners. När du anropar `Core::entity('coworkers')` får du samma typ av objekt men förkonfigurerat för coworkers. Samma logik, olika konfiguration.

**Metafor:** repositoryt är bibliotekariens specialkunskap om en viss avdelning. Hon har en "partner-expert-hatt" som kan Partner-katalogen utantill, och en "coworker-expert-hatt" för Coworker-katalogen. Samma bibliotekarie, olika hattar hon sätter på sig beroende på frågan.

### Lager 3: Schema-registret — översättningen

Schema-registret är en central lista över alla entiteter Core känner till, och för varje entitet: vilken Airtable-tabell den bor i, vilka fält som ska läsas, och hur de ska döpas om till domänspråket.

Här är schemat för partners:

```php
// entities/partners.php
return [
    'table_id' => 'tblsCOF5BPAxN6nmq',     // Airtable-tabellens ID
    'primary_key' => 'Name',
    'cache_ttl' => DAY_IN_SECONDS,
    'fields' => [
        'name' => 'Name',                   // domänfält => Airtable-fält
        'logo_url' => 'Logo transparent',
        'divisions' => [
            'source' => 'Division',
            'type' => 'link',
            'entity' => 'divisions',
        ],
    ],
];
```

Det här är *hela* platsen där Airtable-fältnamn förekommer. Feature-plugins ser aldrig "Logo transparent" eller "Division" — de ser `$partner['logo_url']` och `$partner['divisions']`.

**Metafor:** schema-registret är bibliotekariens fickkatalog. I den står: "När någon frågar om 'partner', gå till hylla 3, låda B. 'Namn' hittar du i översta fliken, 'logotyp' i tredje. Om någon frågar om partnerns 'divisioner', slå upp refererade ID:n i divisions-katalogen."

Om arkivet omorganiseras — "Logo transparent" byts till "Logo SVG" i Airtable — ändrar bibliotekarien *en rad* i sin fickkatalog. Forskarna märker ingenting. Det är det här som gör systemet tåligt.

### Lager 4: Cache-lagret — närminnet

Cache-lagret är Core's lokala kopia av Airtable-data, lagrad i WordPress egen databas via transients-API:et. När en förfrågan kommer frågar Core alltid cachen först. Bara vid miss går den vidare till Airtable.

```php
class Cache {
    public function get($key) { /* ... */ }
    public function set($key, $data, $ttl) { /* ... */ }
    public function delete($key) { /* ... */ }
    public function deleteByPrefix($prefix) { /* ... */ }
}
```

Strategin är den vi diskuterade: 24h TTL med jitter, async-refresh i bakgrunden, stale-fallback om refresh misslyckas, förlängning med 6h på fel, alerts vid varje fail.

**Metafor:** cachen är disken framför bibliotekarien. På disken ligger de vanligaste böckerna, märkta med "gäller tills imorgon klockan 14:00". När någon frågar efter en bok som ligger där räcker hon över den direkt. När boken blir för gammal skickar hon en kollega ner i arkivet för att hämta senaste upplagan — men under tiden kan forskare som frågar få den gamla, för det är bättre än inget svar alls.

### Lager 5: Airtable-klienten — händerna som når ner i arkivet

Klienten är det tunnaste lagret. Den tar ett API-anrop, skickar en HTTPS-request till Airtable, väntar på svar, parsar JSON-svaret. Den vet ingenting om entiteter, schema, eller cache — bara hur man pratar med Airtable rent tekniskt.

```php
class AirtableClient {
    public function fetchRecords($tableId, $filters = []) { /* ... */ }
    public function fetchRecord($tableId, $recordId) { /* ... */ }
}
```

Den här klassen är enkel med flit. Om Airtable byter API-version är det enda stället som behöver ändras. Resten av Core vet inget om HTTP, autentisering, eller retry-logik.

**Metafor:** klienten är bibliotekariens assistent som faktiskt går ner i arkivet och hämtar dokument. Assistenten vet inte vad "partners" betyder — bara "hämta rad 847 från hylla C".

---

## 4. De tre stödsystemen

Utöver de fem kärnlagren finns tre system som inte är på "datavägen" men är viktiga:

### Bootstrap — hur Core vaknar till liv

När WordPress laddar en sida körs alla plugin-filer i tur och ordning. Core's huvudfil (`wexoe-core.php`) registrerar:

- Alla entiteter genom att lat-ladda `entities/*.php` när de efterfrågas (inte direkt vid boot — för prestanda)
- Sin cron-hook för asynkron cache-refresh
- Admin-sidan för cache-management
- API-nyckel-konfiguration (läses från WP options, inte hårdkodad)

Det här händer på *varje* sidladdning. Bootstrapen måste vara snabb — millisekunder, inte sekunder.

### Admin-UI — kontrollpanelen

En WP-admin-sida under Verktyg eller Inställningar med:

- Lista över alla registrerade entiteter, deras cache-status, senaste refresh-tid
- Knappar för "rensa all cache", "rensa cache för [entity]", "force refresh"
- Log-visning (senaste ~100 händelser)
- Konfigurationsfält för API-nyckel (maskerad, inte hårdkodad i kod)
- Status-indikator: senaste Airtable-anrop lyckades/misslyckades

**Metafor:** kontrollpanelen är bibliotekariens dashboard på kontoret. Vem har frågat vad, vilka böcker behöver returneras, hur mår systemet just nu.

### Logging & alerts — dagboken

Core loggar varje Airtable-anrop (lyckades eller ej), varje cache-miss som gick till Airtable, varje fel. Loggen skrivs till WP's options-tabell med en ring-buffer på ~500 poster — när den är full skrivs de äldsta över.

Vid fel skickas alerts via din preferens (troligen Make-webhook → Slack eller mail). Alerts dedupas så du inte drunknar när Airtable är nere i en timme.

---

## 5. Tre walkthroughs — vad händer egentligen?

### Walkthrough 1: Normal förfrågan (happy path)

En besökare landar på leverantörssidan för Rockwell. Shortcoden körs och anropar:

```php
$partner = Core::entity('partners')->find('rockwell');
```

Steg för steg:

1. **Facaden** tar emot anropet och returnerar ett `EntityRepository`-objekt förkonfigurerat för partners.
2. **Repositoryt** räknar ut cache-nyckeln: `core_partners_rockwell`.
3. **Cache-lagret** kollar WP transients efter nyckeln. Träff! Datan är 3 timmar gammal, TTL är 24h → giltig.
4. Cachen returnerar den redan normaliserade datan. Repositoryt returnerar till facaden. Facaden till shortcoden. Shortcoden renderar HTML.

Total tid: ~5ms. Ingen kontakt med Airtable alls.

### Walkthrough 2: Cache-miss vid TTL-utgång

Samma förfrågan, men cachen är 24 timmar och 5 minuter gammal.

1. Facaden → repository → cache. Cache-lagret ser att datan finns men har passerat TTL — den är *stale*.
2. Repositoryt bestämmer: servera stale-datan omedelbart till besökaren. Vänta INTE på Airtable. Men schemalägg en async refresh.
3. Besökaren får sitt svar på ~5ms. Sidan renderas normalt.
4. I bakgrunden: `wp_schedule_single_event` triggar Airtable-klienten inom minuter. Den hämtar färsk data.
5. Airtable-klienten returnerar JSON. Repositoryt normaliserar enligt schemat. Cache-lagret skriver ner den nya datan med ny TTL (23h 47min efter jitter).
6. Nästa besökare får färsk data.

Detta är *stale-while-revalidate*-mönstret. Besökaren väntar aldrig på Airtable.

### Walkthrough 3: Airtable är nere

Samma förfrågan, men Airtable har driftstörning.

1. Facaden → repository → cache. Cachen är stale.
2. Repositoryt serverar stale-data omedelbart + schemalägger async refresh.
3. Besökaren får svar, sidan renderas.
4. I bakgrunden: Airtable-klienten försöker. Airtable svarar 503 eller timar ut.
5. Klienten returnerar fel-objekt. Repositoryt ser felet, skriver *inte* över cachen. Istället förlängs gamla cachens TTL med 6 timmar. Loggen får en post. Alert skickas.
6. Nästa refresh-försök sker om 6h. Om Airtable är uppe då läker systemet sig självt.

Sajten fungerar hela tiden. Besökare märker ingenting. Du får en alert och kan välja att ignorera eller agera.

---

## 6. WordPress-livscykeln — när Core faktiskt körs

Varje gång någon besöker en sida på wexoe.se händer ungefär detta:

1. Nginx/Apache tar emot requesten, skickar till PHP.
2. WordPress bootar. Läser `wp-config.php`, ansluter till MySQL.
3. WordPress laddar *alla aktiva plugins* i alfabetisk ordning. Core-pluginet är ett av dem.
4. Core's huvudfil körs — registreringarna jag beskrev ovan sker här.
5. WordPress laddar temat (Enfold).
6. WordPress bestämmer vilken sida/post det gäller, kör rätt template.
7. Templaten innehåller shortcodes. WordPress kör dem en i taget. Här anropas `Core::entity(...)`.
8. HTML genereras och skickas till besökaren.

Viktigt: steg 3-4 händer på *varje* request. Core's bootstrap måste vara snabb. Därför lat-laddar vi entity-scheman (bara läser filen när en entitet faktiskt efterfrågas) istället för att läsa alla vid boot.

---

## 7. Core's fysiska filstruktur

Så här ser pluginmappen ut på disk:

```
wexoe-core/
├── wexoe-core.php              # Huvudfil — plugin header + bootstrap
├── src/
│   ├── Core.php                # Facaden — den enda dörren in
│   ├── AirtableClient.php      # HTTP-lagret
│   ├── Cache.php               # Transients-wrapper
│   ├── EntityRepository.php    # Repository-klassen (generisk)
│   ├── SchemaRegistry.php      # Schema-laddare och -cache
│   ├── Logger.php              # Logging + alerts
│   └── Admin.php               # WP-admin-sidan
├── entities/
│   ├── partners.php            # Schema för partners
│   ├── coworkers.php
│   ├── divisions.php
│   ├── offices.php
│   ├── copy.php                # Specialschema för key/value-tabellen
│   └── ...
├── helpers/
│   ├── markdown.php            # Från wexoe_pa_md
│   ├── color.php               # Från wexoe_pa_is_dark_bg etc
│   ├── youtube.php             # Från wexoe_pa_youtube_id
│   └── ...
└── admin/
    ├── page.php                # Admin-sidans HTML
    └── assets.css
```

Filerna under `helpers/` är rena hjälpfunktioner vi extraherar från dina befintliga plugins. Lätt att flytta, ger omedelbar nytta när feature-plugins refaktoreras.

---

## 8. Vad Core INTE är ansvarig för

Lika viktig som vad Core *gör* är vad den *inte* gör. Scope creep är den största risken. Core ska explicit *inte* göra:

- **Rendera HTML.** Feature-plugins och sidtyper renderar. Core är ett databibliotek, inte en UI-komponent.
- **Känna till specifika sidtyper.** Core vet om entiteter (partners, coworkers). Att det finns en "leverantörssida" är feature-plugin-nivå.
- **Hantera formulär eller AJAX-submissions.** Det är en separat ansvarsyta — kanske värt ett eget "Wexoe Forms"-plugin senare.
- **Skriva till Airtable.** Core är read-only. Redigering sker via editor-UX:en som pratar direkt med Airtable.
- **Känna till Enfold eller WP-tema.** Core är portabelt över tema.
- **Ersätta WordPress eget cron, options-API, eller databas.** Core bygger *ovanpå* WP's grunder, inte parallellt.

Om du någon gång funderar på att lägga in något som bryter mot en av dessa regler — stanna upp. Det hör förmodligen hemma i ett feature-plugin eller ett nytt separat system.

---

## 9. Några designbeslut som är värda att förstå

### Varför lat-ladda scheman istället för att ladda alla vid boot?

Om Core har 20 registrerade entiteter och alla schemafiler läses vid varje sidladdning, lägger vi på onödig latens även på sidor som inte behöver data. Lat-laddning betyder: schemat för `partners` läses från disk endast när `Core::entity('partners')` faktiskt anropas. Därefter cachas det i minnet under samma request.

Bibliotekarie-motsvarighet: hon har inte alla fickkataloger uppe på disken samtidigt. Hon tar fram rätt katalog när en specifik fråga kommer.

### Varför static facade istället för dependency injection?

En "riktig" objektorienterad design skulle göra Core till en tjänst du injicerar: feature-pluginen skapar en `new PartnerRepository($client, $cache, $schema)`. Det är mer testbart på djupet, men mycket mer boilerplate. För Wexoes skala är det overkill. Statisk facade ger enklast möjliga kod för feature-plugin-författarna, och Core är ett litet system som inte behöver komplex DI.

### Varför 24h TTL och inte kortare?

Kortare TTL betyder fler Airtable-anrop → närmare rate limit, högre latens på cache-misses, fler failure-möjligheter. Längre TTL betyder mer stale data. 24h är ett rimligt val för B2B-sajt där innehåll inte ändras flera gånger per dag. Om redaktören vill se ändring live trycker hon "rensa cache" i admin-UI — det tar 2 sekunder och är en planerad åtgärd, inte en strid mot systemet.

### Varför async refresh istället för att besökaren väntar?

Om en besökare råkar vara den som triggar cache-refresh får hon plötsligt 500ms latens istället för 5ms. Det är dålig UX för en persons räkning för andras skull. Async betyder: besökaren får stale data snabbt (som ändå är nästan färsk), och WP-cron uppdaterar i bakgrunden. Alla vinner.

---

## 10. Från arkitektur till utvecklingsplan

Den här arkitekturen utkristalliserar en naturlig byggordning. Full plan kommer i separat dokument, men principen är:

**Bygg nedifrån och upp.** Börja med de lager som inte har externa beroenden, sluta med de som binder allt samman.

1. **Airtable-klienten** först — den är isolerad, testbar mot en testbase utan resten av systemet.
2. **Cache-lagret** — tunn wrapper runt WP transients, enkel att testa.
3. **Logger + Admin-stub** — så du har insyn tidigt. En minimal admin-sida räcker för att se att logg-raderna kommer in.
4. **Schema-registret + EntityRepository** — nu börjar det bli intressant. Testas genom att registrera *en* entitet (partners) och faktiskt läsa data end-to-end.
5. **Facaden** — tunt offentligt skal ovanpå repositoryt. Lätt att lägga på när resten funkar.
6. **Hjälpfunktionerna** — flytta in från befintliga plugins. Direkt-nytta.
7. **Första feature-plugin-refaktoreringen** — `wexoe_team_rack`. Bevisa att hela stacken fungerar end-to-end på ett riktigt, levande use-case.

Varje steg är testbart för sig. Du bygger aldrig i mörker längre än ett par dagar innan du kan se något fungera.

---

## 11. Avslutande tanke

Core är på sätt och vis ett tråkigt plugin. Det ritar inga pixlar. Det finns inga knappar för användaren. Den stora vinsten är att det tillåter alla *andra* plugins att vara mycket enklare och mindre ömtåliga.

Det är infrastrukturinvestering — vinsten syns på bottom line, inte på skärmen. Men det är också där den arkitektoniska hälsan bor. Varje feature-plugin du skriver på Core är billigare att bygga, billigare att underhålla, och överlever schemaförändringar utan att krascha.

Om ett år har du kanske 15 feature-plugins som alla står på Core's axlar. Varje sån plugin hade kostat 3x mer att bygga utan Core — och skulle ha kraschat vid första fältnamnsändringen.

Det är vad vi bygger.
