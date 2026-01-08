# Wexoe Custom Shortcodes

> Dokumentation för custom WordPress-plugins skapade för wexoe.se

**Senast uppdaterad:** 2026-01-08

---

## Översikt

| Plugin | Shortcode | Beskrivning | Version |
|--------|-----------|-------------|---------|
| Wexoe News Feed | `[wexoe_news]` | Nyhetsflöde med utvald artikel + 3 nyheter, kategori-tabs | 1.1.1 |
| Wexoe News Mobile | `[wexoe_news_mobile]` | Kompakt mobilvariant av nyhetsflödet | 1.1.1 |
| Wexoe Product Cards | `[wexoe_product_cards]` | Produktkort från Airtable | 1.0.2 |
| Wexoe Hero Automation | `[wexoe_hero_automation]` | Hero-sektion med diagonal bildklippning | 1.0.0 |

---

## Installation

1. Ladda upp `.zip`-filen via **Plugins → Lägg till ny → Ladda upp plugin**
2. Aktivera pluginet
3. Använd shortcoden i valfri sida/post eller Enfold-element

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
- 50/50 split mellan text och bild
- Diagonal klippning på bilden via CSS `clip-path`
- Gradient overlay för mjuk övergång
- 4 bakgrundsformer (roterade rutor) för djup

**Mobil (≤767px):**
- Staplad layout (bild ovanför)
- Innehåll 85% centrerat (matchar Enfold)
- Gradient-fade från bild till blå bakgrund
- Full-width knappar

### Bakgrundsformer

| Form | Position | Färg |
|------|----------|------|
| Shape 1 | Övre vänster | Vit 6% opacity |
| Shape 2 | Nedre mitten | Vit 4% opacity |
| Shape 3 | Mitten | Vit kontur 8% opacity |
| Shape 4 | Vänster | Blå 15% opacity |

---

## Designsystem

### Färger

| Namn | Hex | Användning |
|------|-----|------------|
| Wexoe Blå (primär) | `#11325D` | Bakgrunder, rubriker |
| Wexoe Blå (sekundär) | `#3974B5` | Hover, accenter |
| Action Orange | `#F28C28` | CTA-knappar |
| Grön (checkmarks) | `#10B981` | Bekräftelser, benefits |
| Vit | `#FFFFFF` | Text på mörk bakgrund |

### Typografi

- **Font:** DM Sans (Google Fonts)
- **Vikt:** 400, 500, 600, 700
- **Importeras automatiskt** av varje plugin

### Knappar

Alla plugins använder samma knapp-stil:
- `border-radius: 2px` (matchar Wexoe CTAs)
- `padding: 14px 24px`
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
#wexoe-hero-abc123 .wexoe-hero-title {
    font-size: 2.75rem !important;
    color: #ffffff !important;
    margin: 0 0 1.25rem 0 !important;
    /* ... */
}
```

---

## Responsiva breakpoints

| Breakpoint | Beskrivning |
|------------|-------------|
| `> 989px` | Desktop |
| `768px - 989px` | Tablet |
| `< 768px` | Mobil |

Alla plugins anpassar sig automatiskt.

---

## Versionshistorik

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

### Wexoe Hero Automation
| Version | Datum | Ändringar |
|---------|-------|-----------|
| 1.0.0 | 2026-01-08 | Initial release |

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
└── wexoe-hero-automation/
    └── wexoe-hero-automation.php
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
