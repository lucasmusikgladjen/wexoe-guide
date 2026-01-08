# Wexoe Child Theme CSS Specifikation

> **Viktigt för utvecklare och AI-assistenter:** Detta dokument beskriver det anpassade child theme som används på wexoe.se. Många CSS-regler är aggressiva och kan störa nya komponenter om man inte tar hänsyn till dem.

## Översikt

**Theme:** `enfold_child_by_yanco`  
**Parent theme:** Enfold (Kriesi)  
**CSS-filer:**
- `/wp-content/themes/enfold_child_by_yanco/style.css` (huvudfil, ~450 regler)
- `/wp-content/themes/enfold_child_by_yanco/site-styles/site-main.css`
- `/wp-content/themes/enfold_child_by_yanco/site-styles/header.css`

---

## ⚠️ Kritiska globala regler

Dessa regler påverkar **hela sajten** och måste överskrivas explicit för nya komponenter.

### Länkar (alla)

```css
#top a { 
    color: inherit; 
    text-decoration: none; 
}
#top a:hover { 
    color: rgb(17, 50, 93); /* Wexoe-blå */
}
```

**Konsekvens:** Alla länkar ärver färg och har ingen underline. Hover blir alltid Wexoe-blå.

**Överskrivning:**
```css
.my-component a {
    color: #0066cc !important;
    text-decoration: underline !important;
}
```

---

### Bilder (alla)

```css
#top img, #top a.slide-image { 
    border-radius: 0px !important; 
}
```

**Konsekvens:** Omöjligt att ha runda bilder utan `!important`.

**Överskrivning:**
```css
.my-component img {
    border-radius: 8px !important;
}
```

---

### Image overlays (dolda)

```css
.avia_transform a .image-overlay, 
.image-overlay .image-overlay-inside { 
    display: none !important; 
}
```

**Konsekvens:** Enfolds inbyggda hover-overlays på bilder fungerar inte.

---

### Knappar (alla .avia-button)

```css
#top .avia-button { 
    background-color: rgb(57, 116, 181);
    border-radius: 7px;
    border-width: 0px;
    color: rgb(255, 255, 255);
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    padding: 12px 35px;
    text-align: center;
    text-decoration: none;
    transition: opacity 0.3s ease-in 0s;
}

#top input[type="submit"]:not(#searchsubmit):not(#s), 
#top .avia-button {
    border-radius: 0px;
    padding: 13px 0px;
    background-image: url("./assets/images/icon-cta-arrow-right-11x18px-@2.png");
    background-position: right 35px center;
    background-repeat: no-repeat;
    background-size: 11px 18px;
    min-width: 270px !important;
}
```

**Konsekvens:** Alla knappar får:
- Wexoe-blå bakgrund
- Pil-ikon till höger
- Minsta bredd 270px
- Specifik padding och typografi

**Överskrivning:** Kräver hög specificitet + `!important`:
```css
#top .my-component .avia-button {
    all: unset !important;
    display: inline-block !important;
    cursor: pointer !important;
    /* dina egna stilar */
}
```

---

### Listor (ul/ol i content)

```css
.entry-content-wrapper ul li:not(.gfield) { 
    list-style: none;
    background-image: url("./assets/images/icon-checkmark-23x17px-@2.png");
    background-repeat: no-repeat;
    background-position: left 3px;
    padding-left: 35px;
}

.entry-content-wrapper ol li:not(.gfield) { 
    list-style: none;
    background-image: url("./assets/images/icon-arrow-l...");
    /* liknande styling */
}
```

**Konsekvens:** 
- Alla `<ul>` får checkmark-ikoner istället för punkter
- Alla `<ol>` får pil-ikoner istället för siffror

**Överskrivning:**
```css
.my-component ul li {
    list-style: disc !important;
    background-image: none !important;
    padding-left: 1.5em !important;
}
```

---

## 🚫 Dolda element

Dessa element är explicit dolda och syns inte:

```css
/* Sektioner på startsidan */
#after_section_1, 
.home #after_section_2 { 
    display: none; 
}

/* Container på startsidan */
.home #main > .container_wrap_first > .container { 
    display: none; 
}

/* Heading-borders (Enfold-feature) */
.av-special-heading .special-heading-border { 
    display: none; 
}

/* Sökresultat excerpt */
span.ajax_search_excerpt { 
    display: none; 
}

/* After-sections på produktsidor */
#top.single-produkt div.av_default_container_wrap[id^="after_section_"] { 
    display: none; 
}
```

**För att visa igen:**
```css
.my-page #after_section_1 {
    display: block !important;
}
```

---

## 📐 Layout-regler

### Container padding

```css
.container { 
    padding: 0px 40px; 
}
```

**Konsekvens:** Alla `.container` har 40px sidopadding.

### Kolumnbredder (överskriver Enfold)

```css
div .av_one_fourth { 
    width: 22.9%; 
    margin-left: 2.8%; 
}

div .av_one_third { 
    margin-left: 2.5%; 
    width: 31.6667%; 
}
```

**Konsekvens:** Enfolds grid-system fungerar annorlunda än dokumenterat.

### Sektions-padding

```css
#top:not(.single-produkt) #main .avia-section .template-page.content { 
    padding-top: 0px; 
    padding-bottom: 0px; 
}

#top:not(.home) #main .avia-section.avia-section-large .template-page.content { 
    padding-top: 120px; 
    padding-bottom: 120px; 
}
```

**Konsekvens:** Sektions-padding från Enfold-editorn ignoreras delvis.

---

## 🎨 Wexoe designsystem

### Färger

| Namn | Hex | RGB | Användning |
|------|-----|-----|------------|
| Wexoe Blå (primär) | `#11325D` | `rgb(17, 50, 93)` | Headers, knappar, footer |
| Wexoe Blå (sekundär) | `#3974B5` | `rgb(57, 116, 181)` | Hover, länkar |
| Orange (CTA) | `#ED7801` | `rgb(237, 120, 1)` | Vissa hover-states |
| Grå (text) | `#7D7D7D` | `rgb(125, 125, 125)` | Sekundär text |
| Ljusgrå (bakgrund) | `#E1E1E1` | `rgb(225, 225, 225)` | Sektionsbakgrunder |

### Typografi

```css
body { 
    font-family: "Open Sans", sans-serif; 
    font-weight: 300; 
}

h1, h2, h3, h4, h5, h6 { 
    font-family: "Open Sans", sans-serif; 
}
```

### Standardstorlekar

| Element | Storlek | Line-height |
|---------|---------|-------------|
| Body | 16px | 24px |
| H1 (special heading) | 44px | 50px |
| H2 | 24px | 30px |
| H3 | 20px | 24px |
| Knappar | 16px | 23px |

---

## 🧩 Specialkomponenter

### `.aktuelt-wrapper`

```css
#top .aktuelt-wrapper > .container > .content { 
    width: 100% !important; 
}
```

Tvingar full bredd på innehållet.

### `.quote-wrapper`

Centrerad sektion med vit text, special heading-styling, och CTA-knapp.

### `.slider-solutions`

Hero-slider med specifik typografi (60px/66px headings) och caption-positioning.

### `.text-and-image-module-wrapper`

Två-kolumns layout med 80px padding och max-width 570px per kolumn.

### `.checkmark-section`

Sektion med checkmark-ikoner på iconboxes.

---

## 🔧 Rekommendationer för nya komponenter

### Alternativ 1: Hög specificitet

Använd unika klasser med hög specificitet:

```css
#top .page-id-XXXX .my-unique-component {
    /* dina stilar */
}
```

### Alternativ 2: CSS Custom Properties

Skapa variabler som kan överskrivas:

```css
.my-component {
    --link-color: #0066cc;
    --link-hover: #004499;
}

.my-component a {
    color: var(--link-color) !important;
}
```

### Alternativ 3: Shadow DOM (rekommenderas för isolering)

För helt isolerade komponenter, använd Shadow DOM:

```javascript
const host = document.querySelector('.my-component-host');
const shadow = host.attachShadow({ mode: 'open' });
shadow.innerHTML = `
    <style>
        /* Dessa stilar påverkas INTE av child theme */
        a { color: blue; }
        img { border-radius: 50%; }
    </style>
    <div class="content">...</div>
`;
```

### Alternativ 4: `all: unset` reset

```css
.clean-slate {
    all: unset;
    display: block;
}

.clean-slate * {
    all: unset;
}

.clean-slate a {
    all: unset;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
```

---

## 📋 Checklista för nya sidor/komponenter

- [ ] Kontrollera om `.avia-button` behöver custom styling
- [ ] Kontrollera om länkar behöver synlig styling
- [ ] Kontrollera om bilder behöver border-radius
- [ ] Kontrollera om listor behöver standard bullets
- [ ] Kontrollera om padding/margins blir överskrivna
- [ ] Testa på både desktop och mobil (breakpoints: 989px, 767px, 414px)
- [ ] Verifiera att element inte är dolda via `display: none`

---

## 🔗 Relaterade filer

- **Parent theme:** `/wp-content/themes/enfold/`
- **Child theme:** `/wp-content/themes/enfold_child_by_yanco/`
- **Custom icons:** `/wp-content/themes/enfold_child_by_yanco/assets/images/`
- **WPCode snippets:** WordPress Admin → WPCode

---

## Versionshistorik

| Datum | Ändring |
|-------|---------|
| 2026-01-08 | Första versionen skapad |

