# Enfold Theme Overview

## Vad är Enfold?

Enfold är ett "multipurpose" WordPress-tema från Kriesi (ThemeForest). Det är ett av de mest sålda WordPress-temana någonsin och inkluderar:

- **Avia Layout Builder** - Drag-and-drop page builder
- **Omfattande theme options** - Hundratals inställningar
- **Inbyggda element** - Sliders, galleries, tabs, accordions, etc.
- **Eget CSS-ramverk** - Inte Bootstrap eller liknande

---

## Arkitektur

### Filstruktur (förenklad)

```
enfold/
├── style.css                 # Huvud-stylesheet (mest metadata)
├── css/
│   ├── grid.css             # Grid-system
│   ├── base.css             # Bas-styling
│   ├── layout.css           # Layout-regler
│   ├── shortcodes.css       # Styling för alla shortcodes
│   └── dynamic/             # Dynamiskt genererad CSS
├── config-templatebuilder/
│   └── avia-shortcodes/     # Alla page builder-element
├── includes/
│   ├── avia-compat.php      # Kompabilitet med plugins
│   └── admin/               # Admin-funktionalitet
└── functions.php            # Tema-funktioner
```

### CSS-laddningsordning

1. WordPress core CSS
2. Plugin CSS
3. Enfold huvud-CSS (`avia-merged-styles` eller separata filer)
4. Enfold dynamisk CSS (genererad från theme options)
5. Child theme CSS (om det finns)
6. Inline CSS från page builder

**Viktigt:** Enfold slår ofta ihop CSS till en fil för performance. Detta gör debugging svårare.

---

## Avia Layout Builder

Page buildern genererar shortcodes som sparas i post content:

```
[av_section]
  [av_one_half]
    [av_textblock]Innehåll här[/av_textblock]
  [/av_one_half]
  [av_one_half]
    [av_image src='bild.jpg']
  [/av_one_half]
[/av_section]
```

Dessa renderas till HTML med Enfolds egna klasser:

```html
<section class="av_section">
  <div class="av_one_half">
    <div class="av_textblock">Innehåll här</div>
  </div>
  ...
</section>
```

---

## Vanliga CSS-klasser

### Layout
- `.container` - Huvudcontainer
- `.content` - Innehållsarea
- `.sidebar` - Sidofält
- `.av_section` - Section från page builder
- `.flex_column` - Kolumn i page builder

### Typografi
- `.av-special-heading` - Rubriker från builder
- `.av_textblock` - Textblock
- `#wrap_all` - Wrapper för hela sidan

### Komponenter
- `.avia-button` - Knappar
- `.av-icon-char` - Ikoner
- `.avia-image-container` - Bildwrappers

---

## Kända egenheter

### 1. Aggressiv CSS-specificitet

Enfold använder ofta:
```css
#top .element,
.av-section .element,
body .element {
  property: value !important;
}
```

Detta gör det svårt att överskrida utan `!important` eller högre specificitet.

### 2. Dynamisk CSS

Inställningar i theme options genererar CSS som injectas i `<head>`. Denna har ofta högre specificitet än dina styles.

### 3. JavaScript-beroenden

Många element (tabs, accordions, sliders) kräver Enfolds JavaScript. Om du bygger custom-versioner, se till att inte trigga deras scripts.

### 4. Responsive breakpoints

Enfold använder dessa breakpoints:
- Desktop: > 989px
- Tablet: 768px - 989px  
- Mobile: < 768px

---

## Resurser

- [Enfold dokumentation](https://kriesi.at/documentation/enfold/)
- [Enfold support forum](https://kriesi.at/support/)
- [Avia Framework GitHub](https://github.com/KriesiMedia/starter-developer-kit)
