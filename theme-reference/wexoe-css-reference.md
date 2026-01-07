# Enfold CSS Quick Reference

Enfolds CSS är aggressiv och använder `!important` överallt. Här är det viktigaste du behöver veta.

## Vanliga problem

### 1. CSS appliceras inte
```css
/* Enfold vinner alltid - använd !important */
.my-element {
  color: #11325D !important;
}

/* Eller öka specificitet */
body #top .my-element {
  color: #11325D;
}
```

### 2. Listor har ikoner istället för bullets
```css
/* Döda Enfolds list-ikoner */
.my-list li::before {
  content: none !important;
  display: none !important;
}
.my-list ul {
  list-style-type: disc !important;
  padding-left: 2em !important;
}
```

### 3. Marginaler/padding är fel
```css
/* Nollställ explicit */
.my-container * {
  margin: 0 !important;
  padding: 0 !important;
}
```

### 4. Typsnitt ignoreras
```css
body .my-element,
body .my-element * {
  font-family: inherit !important;
}
```

## Breakpoints

```css
/* Desktop: > 989px */
@media (min-width: 990px) { }

/* Tablet: 768-989px */
@media (min-width: 768px) and (max-width: 989px) { }

/* Mobile: < 768px */
@media (max-width: 767px) { }
```

## Viktiga Enfold-klasser

| Klass | Beskrivning |
|-------|-------------|
| `#top` | Hög specificitet wrapper |
| `#wrap_all` | Yttersta wrapper |
| `.container` | Centrerad content |
| `.flex_column` | Page builder kolumn |
| `.av_textblock` | Textblock |
| `.avia-button` | Knapp |

## Shadow DOM (total isolering)

När inget annat funkar, använd Shadow DOM för 100% isolering:

```html
<div id="my-component"></div>
<script>
const host = document.getElementById('my-component');
const shadow = host.attachShadow({mode: 'open'});
shadow.innerHTML = `
  <style>
    /* Din CSS här - helt isolerad */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .btn {
      background: #11325D;
      color: white;
      padding: 0.75em 1.5em;
      border: none;
      border-radius: 4px;
    }
  </style>
  <button class="btn">Min knapp</button>
`;
</script>
```
