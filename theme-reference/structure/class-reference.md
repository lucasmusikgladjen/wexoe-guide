# Enfold CSS Class Reference

Dokumentation av vanliga CSS-klasser i Enfold-temat.

---

## Layout-klasser

### Wrappers

| Klass | Beskrivning |
|-------|-------------|
| `#wrap_all` | Yttersta wrapper för hela sidan |
| `#main` | Huvudcontainer |
| `.container` | Centrerad content-wrapper |
| `.content` | Primär innehållsarea |
| `.sidebar` | Sidofält |

### Avia Page Builder

| Klass | Beskrivning |
|-------|-------------|
| `.avia-section` | Section-wrapper |
| `.av_section` | Alternativ section-klass |
| `.flex_column` | Kolumn i rad |
| `.av_one_full` | Hel bredd kolumn |
| `.av_one_half` | Halv bredd |
| `.av_one_third` | Tredjedel |
| `.av_two_third` | Två tredjedelar |
| `.av_one_fourth` | Fjärdedel |
| `.av_three_fourth` | Tre fjärdedelar |

---

## Typografi-klasser

| Klass | Beskrivning |
|-------|-------------|
| `.av-special-heading` | Stiliserade rubriker |
| `.av_textblock` | Textblock-wrapper |
| `.av-subheading` | Underrubriker |

---

## Komponenter

### Knappar

| Klass | Beskrivning |
|-------|-------------|
| `.avia-button` | Bas-knapp |
| `.avia-button-large` | Stor knapp |
| `.avia-button-small` | Liten knapp |
| `.avia-color-theme-color` | Tema-färgad knapp |
| `.avia-color-theme-color-highlight` | Highlight-färgad |

### Ikoner

| Klass | Beskrivning |
|-------|-------------|
| `.av-icon-char` | Ikon-wrapper |
| `.avia-font-entypo-fontello` | Entypo-ikoner |

### Bilder

| Klass | Beskrivning |
|-------|-------------|
| `.avia-image-container` | Bild-wrapper |
| `.av-image-caption` | Bildtext |

### Listor

| Klass | Beskrivning |
|-------|-------------|
| `.avia-bullet-list` | Stylad lista |
| `.iconlist` | Ikon-lista |

---

## State-klasser

| Klass | Beskrivning |
|-------|-------------|
| `.avia-hidden` | Dold |
| `.avia-visible` | Synlig |
| `.active` | Aktiv tab/element |
| `.hover` | Hover-state |

---

## Responsive-klasser

| Klass | Beskrivning |
|-------|-------------|
| `.av-desktop-hide` | Dölj på desktop |
| `.av-mobile-hide` | Dölj på mobil |
| `.av-tablet-hide` | Dölj på tablet |

---

## Breakpoints

```css
/* Desktop */
@media only screen and (min-width: 990px) { }

/* Tablet */
@media only screen and (min-width: 768px) and (max-width: 989px) { }

/* Mobile */
@media only screen and (max-width: 767px) { }

/* Small mobile */
@media only screen and (max-width: 479px) { }
```

---

## Att undvika

Dessa klasser är ofta problematiska att överskrida:

- `#top` - Används med hög specificitet
- `#wrap_all` - Har !important på vissa properties
- `.avia-section` med inline styles

---

## Tips

### Hitta klasser på live-sajten

1. Högerklicka på element → Inspektera
2. Se klasserna i Elements-panelen
3. Sök efter klassen i Styles för att se alla regler

### Se vilka klasser ett Avia-element genererar

1. Lägg till elementet i page builder
2. Spara och förhandsgranska
3. Inspektera elementet
4. Notera klasserna för dokumentation
