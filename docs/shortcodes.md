# Wexoe Custom Shortcodes

> Dokumentation för custom WordPress-plugins skapade för wexoe.se

**Senast uppdaterad:** 2026-01-12

---

## Översikt

| Plugin | Shortcode | Beskrivning | Version |
|--------|-----------|-------------|---------|
| Wexoe News Feed | `[wexoe_news]` | Nyhetsflöde med utvald artikel + 3 nyheter, kategori-tabs | 1.1.1 |
| Wexoe News Mobile | `[wexoe_news_mobile]` | Kompakt mobilvariant av nyhetsflödet | 1.1.1 |
| Wexoe Product Cards | `[wexoe_product_cards]` | Produktkort från Airtable | 1.0.2 |
| Wexoe Hero Automation | `[wexoe_hero_automation]` | Hero-sektion med diagonal bildklippning | 1.0.7 |
| Wexoe Product Nav | `[wexoe_product_nav]` | Produktnavigation med event & kampanj | 1.0.6 |
| Wexoe Team Rack | `[wexoe_team_rack]` | Teammedlemmar i Allen-Bradley PLC-rack tema | 1.1.2 |
| Wexoe Team Switch | `[wexoe_team_switch]` | Teammedlemmar i managed switch-tema | 1.0.0 |
| Wexoe Team Cabinet | `[wexoe_team_cabinet]` | Teammedlemmar i serverrack/datacenter-tema | 1.0.0 |
| Wexoe Contact Form | `[wexoe_contact_form]` | Konverteringsoptimerat kontaktformulär | 1.3.0 |

---

## Installation

1. Ladda upp `.zip`-filen via **Plugins → Lägg till ny → Ladda upp plugin**
2. Aktivera pluginet
3. Använd shortcoden i valfri sida/post eller Enfold-element

---

## Wexoe Product Nav

**Shortcode:** `[wexoe_product_nav]`

**Beskrivning:** Visar en navigationssektion med 8 produktområden, ett utvalt event från WordPress och en utvald kampanj från Airtable.

### Användning

```
[wexoe_product_nav]
```

### Med parametrar

```
[wexoe_product_nav 
  title="Utforska våra produktområden" 
  subtitle="Hitta rätt lösning för ditt automationsprojekt"
  show_event="true"
  show_campaign="true"
]
```

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `title` | *(tom)* | Rubrik ovanför produktkorten (valfri) |
| `subtitle` | *(tom)* | Underrubrik (valfri) |
| `show_event` | `true` | Visa/dölj event-kortet |
| `show_campaign` | `true` | Visa/dölj kampanj-kortet |

> **OBS:** Om `title` och `subtitle` lämnas tomma visas ingen header-sektion.

### Produktområden

8 hårdkodade produktkort med SVG-ikoner:

| Produktområde | URL |
|---------------|-----|
| PLC | https://wexoe.se/produkt/styrsystem-plc/ |
| I/O System | https://wexoe.se/produkt/io-moduler/ |
| HMI | https://wexoe.se/produkt/operatorsterminaler-hmi/ |
| Frekvensomriktare | https://wexoe.se/produkt/frekvensomriktare/ |
| Servokontroll | https://wexoe.se/produkt/servokontroll/ |
| Safety | https://wexoe.se/produkt/maskinsakerhet/ |
| Mjukvaror | https://wexoe.se/produkt/rockwell-automation-mjukvaror/ |
| Kapslingar & tillbehör | https://wexoe.se/produkt/kapslingar-for-industriella-andamal/ |

### Utvalt Event

Hämtas från WordPress post type `arrangement`.

**Markera ett event som utvalt:**
1. Redigera eventet i WordPress admin
2. I högerspalten, hitta meta-boxen "Produktnavigation"
3. Bocka i "Utvalt event i produktnavigation"

> **OBS:** Endast ett event kan vara utvalt åt gången. Om du bockar i ett nytt event avmarkeras det tidigare automatiskt.

**Fält som visas:**
- Titel (post title)
- Beskrivning (excerpt eller content, max 3 rader)
- Bild (featured image)
- "Läs mer"-knapp (länk till eventet)

### Utvald Kampanj (Airtable)

Hämtas från Airtable-tabellen "Webpage campaigns".

**Airtable-konfiguration:**
- **Base ID:** `appXoUcK68dQwASjF`
- **Table ID:** `tblRXWGkh7MCKt6Az`
- **Filter:** `Utvald = TRUE()`

**Fält som används:**

| Airtable-fält | Användning |
|---------------|------------|
| `Name` | Titel på kampanjkortet |
| `Description` | Beskrivning (max 3 rader på desktop, dold på mobil) |
| `Benefit 1` | Första fördel med grön checkmark |
| `Benefit 2` | Andra fördel med grön checkmark |
| `URL` | Länk för hela kortet |
| `Button text` | Text på CTA-knappen |
| `Video link` | YouTube-länk → används som thumbnail |
| `Image` | Fallback-bild om ingen video finns |

**Markera en kampanj som utvald:**
1. Öppna Airtable-basen
2. Gå till "Webpage campaigns"
3. Bocka i "Utvald"-checkboxen på den kampanj du vill visa

### Design

**Produktkort:**
- Mörkblå bakgrund (#11325D)
- Vit text och SVG-ikoner
- Orange vänsterkant på hover
- Ikonen blir orange på hover

**Event & Kampanj-kort:**
- Ljusgrå bakgrund (#f8f9fa)
- Bild överst (200px höjd)
- Orange badge ("EVENT" / "KAMPANJ")
- Hela kortet klickbart
- Enhetlig hover: kort lyfts 4px + skugga

**Beskrivning:**
- Max 3 rader med ellipsis (...)
- `line-clamp: 3` + `max-height: 4.5em`

### Responsiv design

**Desktop (>1270px):**
- 4 kolumner produktkort
- 2 kolumner för event + kampanj
- Alignar med sidans 1270px container

**Tablet (768px - 1270px):**
- 3-4 kolumner produktkort
- 2 kolumner för event + kampanj

**Mobil (≤768px):**
- 2 kolumner produktkort
- Event + kampanj: horisontell swipe
  - Varje kort tar 85% bredd
  - Nästa kort syns delvis (~15%)
  - Snap-scroll till närmaste kort
- Kampanj: beskrivning dold, bara benefits visas
- Knappar alltid längst ner på kortet

### Tekniska detaljer

- **CSS-isolering:** Unik ID per instans + `!important`
- **Break-out:** `width: 100vw` + negativ margin för full bredd
- **Alignment:** `padding: calc((100vw - 1270px) / 2 + 40px)` för att matcha sidans container
- **Meta box:** Registreras automatiskt för post type `arrangement`

### Felsökning

**Event visas inte:**
- Kontrollera att post type `arrangement` existerar
- Kontrollera att ett event har `utvalt_event` meta = `1`
- Verifiera att eventet är publicerat (inte utkast)

**Kampanj visas inte:**
- Kontrollera Airtable API-nyckel (giltig?)
- Kontrollera att en kampanj har `Utvald` = ✓
- Kör [wexoe_product_cards debug="true"] för att testa API-anslutningen

**Alignment ser fel ut:**
- Enfold-containern kan ha annan bredd
- Justera `1270px` värdet i CSS om behövs

---

## Wexoe News Feed

**Shortcode:** `[wexoe_news]`

**Beskrivning:** Visar en utvald nyhet (stor) + 3 mindre nyheter i ett grid. Inkluderar kategori-tabs för filtrering.

### Användning

```
[wexoe_news]
```

Inga parametrar behövs - pluginet hämtar automatiskt inlägg baserat på:
- **Utvald artikel:** Inlägg med meta-fältet `_wexoe_utvald` satt till `1`
- **Kategorier:** Wexoe, Automation, IT Infra (mappas via kategori-slugs)

### Funktioner

- Featured article med blå bakgrund (#11325D)
- 3 nyhetsartiklar under
- AJAX-filtrering via kategori-tabs (ingen sidladdning)
- Hämtar manchet-text från ACF-fält `acf_manchet_text`
- Exkluderar utvald artikel från listan automatiskt

### Markera en artikel som utvald

I WordPress admin, redigera artikeln och bocka i "Utvald på startsidan" (custom meta box).

### Tekniska detaljer

- **Post types:** `post`, `arrangement`
- **ACF-fält:** `acf_manchet_text` (fallback till excerpt/content)
- **CSS:** ID-scopad med `!important` för att överrida Enfold

---

## Wexoe News Mobile

**Shortcode:** `[wexoe_news_mobile]`

**Beskrivning:** Kompakt mobilvariant som visar endast den utvalda nyheten med en CTA-knapp.

### Användning

```
[wexoe_news_mobile]
```

### Med parametrar

```
[wexoe_news_mobile 
  button_text="Läs artikeln" 
  more_text="Alla nyheter" 
  more_url="https://wexoe.se/aktuellt/"
]
```

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `button_text` | Läs mer | Text på primär-knappen |
| `more_text` | Fler nyheter | Text på sekundär-länken |
| `more_url` | https://wexoe.se/aktuellt/ | URL för "Fler nyheter" |

### Design

- Full-bleed blå bakgrund (#11325D)
- Innehåll centrerat till 85% på mobil (matchar Enfolds layout)
- Vit CTA-knapp med blå text
- Diskret "Fler nyheter →" länk till höger

### Tekniska detaljer

- Använder samma `_wexoe_utvald` meta som desktop-versionen
- Full-width via `100vw` + negativ margin (bryter ut ur container)
- Inre wrapper med `max-width: 85%` på mobil

---

## Wexoe Product Cards

**Shortcode:** `[wexoe_product_cards]`

**Beskrivning:** Hämtar och visar produktnyheter från Airtable som klickbara kort.

### Användning

```
[wexoe_product_cards]
```

### Debug-läge

```
[wexoe_product_cards debug="true"]
```

Visar API-anrop, HTTP-status och eventuella fel.

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `debug` | false | Visa debug-information |

### Airtable-konfiguration

Pluginet är konfigurerat för:

- **Base ID:** `appXoUcK68dQwASjF`
- **Table ID:** `tbldSw6dkgNpTCovg`
- **Fält som används:**
  - `Name` - Produktnamn
  - `Benefit 1`, `Benefit 2`, `Benefit 3` - Fördelar (visas med gröna checkmarks)
  - `URL` - Länk till produktsida
  - `Image` - Produktbild (Airtable attachment)

### Design

- Grid med kort (280px bredd, wraps responsivt)
- Vit bakgrund, subtil border, 12px rundade hörn
- Hover: lyft 4px, skugga, titel blir orange
- Gröna checkmarks (#10B981) för benefits

### Felsökning

**403 / INVALID_PERMISSIONS:**
- Kontrollera att API-nyckeln har `data.records:read` scope
- Kontrollera att rätt base är tillagd i token-inställningarna

**Inga produkter visas:**
- Kör med `debug="true"` för att se API-response
- Verifiera att tabellen har records med alla required fields

---

## Wexoe Hero Automation

**Shortcode:** `[wexoe_hero_automation]`

**Beskrivning:** Hero-sektion för landningssidor med diagonal bildklippning, bakgrundsformer och CTA-knappar.

### Användning

```
[wexoe_hero_automation]
```

### Med parametrar

```
[wexoe_hero_automation 
  title="Industriell Automation och Styrsystem" 
  description="Bygg skalbara, smarta maskiner och möjliggör smart tillverkning." 
  image="https://wexoe.se/wp-content/uploads/2025/12/dsc00286-edit.jpg"
  btn1_text="Kontakta oss"
  btn1_url="/kontakt"
  btn2_text="Utforska produkter"
  btn2_url="/produkter"
  show_btn2="true"
]
```

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `title` | Industriell Automation och Styrsystem | H1-rubrik |
| `description` | Bygg skalbara, smarta maskiner... | Brödtext under rubriken |
| `image` | robot-bilden | URL till hero-bilden |
| `btn1_text` | Kontakta oss | Primär knapp (orange) |
| `btn1_url` | #kontakt | Länk för primär knapp |
| `btn2_text` | Utforska produkter | Sekundär knapp (transparent) |
| `btn2_url` | #produkter | Länk för sekundär knapp |
| `show_btn2` | true | Visa/dölj sekundär knapp |

### Design

**Desktop (>767px):**
- 55/45 split mellan text och bild
- Diagonal klippning på bilden via CSS `clip-path`
- Gradient overlay för mjuk övergång
- 5 bakgrundsformer (roterade rutor) för djup

**Mobil (≤767px):**
- Staplad layout (bild ovanför)
- Innehåll 85% centrerat (matchar Enfold)
- Gradient-fade från bild till blå bakgrund
- Full-width knappar

### Bakgrundsformer

| Form | Position | Färg |
|------|----------|------|
| Shape 1 | Övre vänster | Vit 2.5% opacity |
| Shape 2 | Nedre mitten | Vit 1.8% opacity |
| Shape 3 | Mitten | Vit kontur 3.5% opacity |
| Shape 4 | Vänster | Blå 7% opacity |
| Shape 5 | Övre höger av text | Vit 1.2% opacity |

---

## Wexoe Team Rack

**Shortcode:** `[wexoe_team_rack]`

**Beskrivning:** Visar teammedlemmar i ett industriellt CompactLogix PLC-rack tema med Allen-Bradley styling. Hämtar data från Airtable.

### Användning

```
[wexoe_team_rack]
```

### Med parametrar

```
[wexoe_team_rack tag="Automation" title="Vårt automationsteam" subtitle="Experter på Rockwell"]
```

### Debug-läge

```
[wexoe_team_rack debug="true"]
```

Visar API-svar och fältnamn.

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `tag` | *(tom)* | Filtrera på specifik tag från Airtable |
| `title` | *(tom)* | Rubrik ovanför racket |
| `subtitle` | *(tom)* | Underrubrik |
| `debug` | `false` | Visa debug-info (API-svar, fältnamn) |

### Airtable-fält

| Fält | Beskrivning |
|------|-------------|
| `Name` | Personens namn |
| `Title` | Jobbtitel |
| `Image` | Profilbild (URL från Airtable attachment) |
| `Email` | E-postadress |
| `Phone` | Telefonnummer |
| `Tags` | För filtrering |
| `Responsibility` | Avgör modul-ID (OEM, Systemintegratörer, etc.) |
| `Module name` | Text som visas på modulens tab |
| `Visa` | Checkbox - måste vara TRUE för att visas |
| `Order` | Sorteringsordning (lägst först) |

### Modul-ID mappning

| Responsibility | Modul-ID |
|---------------|----------|
| OEM | 1769-OEM |
| Systemintegratörer | 1769-SI |
| Slutanvändare | 1769-END |
| *(standard)* | 1769-IO |

---

## Wexoe Team Switch

**Shortcode:** `[wexoe_team_switch]`

**Beskrivning:** Visar teammedlemmar i ett managed network switch-tema med mörk cyberpunk-estetik. Hämtar data från samma Airtable som Team Rack.

### Användning

```
[wexoe_team_switch]
```

### Med parametrar

```
[wexoe_team_switch tag="Nätverk" title="Nätverksteamet" subtitle="Experter på IT-infrastruktur"]
```

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `tag` | *(tom)* | Filtrera på specifik tag från Airtable |
| `title` | *(tom)* | Rubrik ovanför switchen |
| `subtitle` | *(tom)* | Underrubrik |
| `debug` | `false` | Visa debug-info |

### Design

- **Färgschema:** Mörk bakgrund (#0a0a0a till #1a1a2e) med cyan accenter (#00d4aa)
- **Status-LEDs:** PWR, SYS, ACT, STACK, LINK
- **Port-moduler:** Varje teammedlem visas som en switch-port
- **Port-typer:** SFP+, 10GbE, GbE, QSFP (baserat på Responsibility-fält)
- **Animationer:** Blinkande aktivitets-LEDs, hover-effekter

### Port-typ mappning

| Responsibility | Port-typ |
|---------------|----------|
| OEM | SFP+ |
| Systemintegratörer | 10GbE |
| Slutanvändare | GbE |
| IT Infra | QSFP |
| Nätverk | SFP28 |
| *(standard)* | GbE |

### Jämförelse: Team Rack vs Team Switch

| Feature | Team Rack | Team Switch |
|---------|-----------|-------------|
| Tema | Industriellt PLC | Managed Switch |
| Färger | Allen-Bradley grå/orange | Mörk cyberpunk cyan |
| Layout | Horisontella moduler | Grid med port-kort |
| Bäst för | Automation-team | IT/Nätverks-team |

---

## Wexoe Team Cabinet

**Shortcode:** `[wexoe_team_cabinet]`

**Beskrivning:** Visar teammedlemmar i ett serverrack/datacenter-tema med patchpaneler, switchar och server blades. Hämtar data från samma Airtable som övriga team-plugins.

### Användning

```
[wexoe_team_cabinet]
```

### Med parametrar

```
[wexoe_team_cabinet tag="Nätverk" title="Nätverksteamet" subtitle="IT-infrastruktur & Datacenter"]
```

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `tag` | *(tom)* | Filtrera på specifik tag från Airtable |
| `title` | *(tom)* | Rubrik ovanför racket |
| `subtitle` | *(tom)* | Underrubrik |
| `debug` | `false` | Visa debug-info |

### Design

- **Färgschema:** Mörk datacenter-estetik (#0a0a0a till #111)
- **Rack-ram:** Vertikala rack rails med skruvhål
- **Patchpanel:** CAT6A med färgkodade kablar (blå, grön, röd, gul)
- **TRENDnet Switch:** Med blinkande port-LEDs
- **Server Blades:** 2U-moduler med LED-panel (Power/HDD/NIC), drive bays
- **PDU:** I botten med uttag och load-stats
- **Bakgrundskablar:** Subtila SVG-kurvor för djup

### Airtable-fält

| Fält | Beskrivning |
|------|-------------|
| `Name` | Personens namn |
| `Title` | Jobbtitel |
| `Image` | URL till bild i WordPress (eller Airtable attachment) |
| `Email` | E-postadress (visas som text) |
| `Phone` | Telefonnummer (visas som text, formateras automatiskt) |
| `Tags` | För filtrering |
| `Visa` | Checkbox - måste vara TRUE för att visas |
| `Order` | Sorteringsordning (lägst först) |

### Kontaktinfo

Till skillnad från Team Rack visas e-post och telefonnummer som klickbar text:
- 📧 email@wexoe.se
- 📞 +46 70 123 45 67

### Jämförelse: Team Rack vs Team Cabinet

| Feature | Team Rack | Team Cabinet |
|---------|-----------|--------------|
| Tema | PLC/Automation | Datacenter/Server |
| Färger | Allen-Bradley grå/orange | Mörk med blå accenter |
| Layout | Horisontella I/O-moduler | Vertikalt rack med blades |
| Kontaktinfo | Endast ikoner | Text + ikoner |
| Bäst för | Automation-team | IT/Nätverks-team |

---

## Wexoe Contact Form

**Shortcode:** `[wexoe_contact_form]`

**Beskrivning:** Konverteringsoptimerat kontaktformulär med mörkblå/vit design. Skickar data till Make.com webhook.

### Användning

**Standard (mörkblå bakgrund):**
```
[wexoe_contact_form]
```

**Inverterad (vit bakgrund):**
```
[wexoe_contact_form inverted="true"]
```

### Helt anpassad

```
[wexoe_contact_form
  title="Kontakta nätverksteamet"
  subtitle="Vi hjälper dig med switches och infrastruktur"
  inverted="true"
  trust1="Cisco-certifierade|nätverkstekniker"
  trust2="Snabb leverans|från lager i Köpenhamn"
  trust3="Support samma dag|vi finns här för dig"
  options="Nätverksdesign,Switch-konfiguration,Felsökning,Offert,Övrigt"
]
```

**Utan trust signals:**
```
[wexoe_contact_form trust1="" trust2="" trust3=""]
```

### Parametrar

| Parameter | Default | Beskrivning |
|-----------|---------|-------------|
| `title` | "Prata med någon som kan automation" | Huvudrubrik |
| `subtitle` | *(tom)* | Underrubrik (visas ej om tom) |
| `inverted` | `false` | `true` = vit bakgrund, mörkblå text |
| `trust1` | "30+ års erfarenhet\|av Rockwell och svensk industri" | Första trust signal |
| `trust2` | "Vi säljer inte bara produkter\|vi löser problem" | Andra trust signal |
| `trust3` | "Lager i Köpenhamn\|snabb leverans när det krisar" | Tredje trust signal |
| `options` | "Generell fråga,Diskutera ett projekt,..." | Dropdown-alternativ |

### Trust signals format

Använd `|` för att separera **fetstil** och vanlig text:

```
trust1="Fetstilad del|resten av texten"
```

Resultat: **Fetstilad del** resten av texten

### Dropdown-alternativ format

Kommaseparerad lista. Values genereras automatiskt från labels:

```
options="Teknisk support,Offertförfrågan,Övrigt"
```

Genererar:
- teknisk-support → "Teknisk support"
- offertforfragan → "Offertförfrågan"
- ovrigt → "Övrigt"

### Formulärfält

Alla fält utom "Berätta mer" är obligatoriska:
- Namn *
- Företag *
- E-post *
- Telefon *
- Vad kan vi hjälpa dig med? (dropdown)
- Berätta mer (valfritt)
- GDPR-checkbox för marknadskommunikation

### Webhook-data

Skickas som JSON till Make.com:

```json
{
  "namn": "...",
  "foretag": "...",
  "telefon": "...",
  "epost": "...",
  "behov": "teknisk-support",
  "meddelande": "...",
  "gdpr_consent": true,
  "submitted_at": "2026-01-12 10:30:00",
  "page_url": "https://wexoe.se/kontakt/",
  "user_agent": "..."
}
```

### Responsiv design

- **Desktop (>800px):** Två kolumner - trust signals till vänster, formulär till höger
- **Mobil (<800px):** En kolumn - endast rubrik och formulär (trust signals döljs)

---

## Designsystem

### Färger

| Namn | Hex | Användning |
|------|-----|------------|
| Wexoe Blå (primär) | `#11325D` | Bakgrunder, rubriker |
| Wexoe Blå (sekundär) | `#3974B5` | Hover, accenter |
| Action Orange | `#F28C28` | CTA-knappar, badges |
| Grön (checkmarks) | `#10B981` | Bekräftelser, benefits |
| Vit | `#FFFFFF` | Text på mörk bakgrund |
| Ljusgrå | `#f8f9fa` | Kort-bakgrunder |

### Typografi

- **Font:** DM Sans (Google Fonts)
- **Vikt:** 400, 500, 600, 700
- **Importeras automatiskt** av varje plugin

### Knappar

Alla plugins använder samma knapp-stil:
- `border-radius: 4px`
- `padding: 12px 20px`
- Pil-ikon (→) med hover-animation

---

## CSS-isolering

Alla plugins använder samma strategi för att överrida Enfold/child theme:

1. **Unik ID per instans:** `#wexoe-xxx-[uniqid]`
2. **ID-prefix på alla selektorer:** `#id .class-name`
3. **`!important` på alla properties**
4. **Explicit reset:** `border: none`, `background: none`, etc.

### Exempel

```css
#wexoe-pn-abc123 .wexoe-pn-card {
    background: var(--wexoe-main-blue) !important;
    border-radius: 8px !important;
    /* ... */
}
```

---

## Responsiva breakpoints

| Breakpoint | Beskrivning |
|------------|-------------|
| `> 1270px` | Desktop (full container width) |
| `1024px - 1270px` | Tablet landscape |
| `768px - 1024px` | Tablet |
| `< 768px` | Mobil |

Alla plugins anpassar sig automatiskt.

---

## Versionshistorik

### Wexoe Product Nav
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.0.6 | 2026-01-09 | Mobil: dölj kampanj-desc, knappar längst ner |
| 1.0.5 | 2026-01-09 | Förstärkt 3-raders line-clamp |
| 1.0.4 | 2026-01-09 | Mobil: 2-kolumn produktkort, swipe för featured |
| 1.0.3 | 2026-01-09 | Break-out alignment, ta bort datumbadge |
| 1.0.2 | 2026-01-09 | Optional title/subtitle, fixa checkmarks |
| 1.0.1 | 2026-01-09 | Meta box för utvalt event |
| 1.0.0 | 2026-01-09 | Initial release |

### Wexoe Hero Automation
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.0.7 | 2026-01-08 | 55/45 split, 5:e shape, full-bleed bild |
| 1.0.0 | 2026-01-08 | Initial release |

### Wexoe News Feed
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.1.1 | 2026-01-08 | ACF-integration, exkludera featured från lista |
| 1.0.0 | 2026-01-08 | Initial release |

### Wexoe News Mobile
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.1.1 | 2026-01-08 | 85% innehållsbredd på mobil, vit knapp |
| 1.1.0 | 2026-01-08 | Ny design med "Fler nyheter" länk |
| 1.0.0 | 2026-01-08 | Initial release |

### Wexoe Product Cards
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.0.2 | 2026-01-08 | Ny API-nyckel, table ID istället för namn |
| 1.0.1 | 2026-01-08 | Debug-läge tillagt |
| 1.0.0 | 2026-01-08 | Initial release |

### Wexoe Team Rack
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.1.2 | - | Mobil centrering, full-width bakgrund |

### Wexoe Team Switch
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.0.0 | - | Initial release |

### Wexoe Team Cabinet
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.0.0 | - | Initial release |

### Wexoe Contact Form
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.3.0 | - | Redigerbara trust signals och dropdown-alternativ |
| 1.2.2 | - | Uppdaterad bekräftelsetext och telefonnummer |
| 1.2.1 | - | Fältjustering, vit inverterad bakgrund |
| 1.2.0 | - | Inverted mode |
| 1.1.4 | - | Mobilbredd och knappfix |
| 1.1.0 | - | Initial release |

---

## Filer

Alla plugin-filer finns i `/wp-content/plugins/`:

```
plugins/
├── wexoe-news-feed/
│   └── wexoe-news-feed.php
├── wexoe-news-mobile/
│   └── wexoe-news-mobile.php
├── wexoe-product-cards/
│   └── wexoe-product-cards.php
├── wexoe-hero-automation/
│   └── wexoe-hero-automation.php
├── wexoe-product-nav/
│   └── wexoe-product-nav.php
├── wexoe-team-rack/
│   └── wexoe-team-rack.php
├── wexoe-team-switch/
│   └── wexoe-team-switch.php
├── wexoe-team-cabinet/
│   └── wexoe-team-cabinet.php
└── wexoe-contact-form/
    └── wexoe-contact-form.php
```

---

## Support

Vid problem, kontrollera:

1. Att pluginet är aktiverat
2. Att shortcoden är korrekt stavad
3. Att eventuella URL:er är korrekta
4. Kör med `debug="true"` om tillgängligt
5. Kolla browser console för JavaScript-fel
6. Inspektera element för CSS-konflikter
