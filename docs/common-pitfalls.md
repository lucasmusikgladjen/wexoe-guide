# Common Pitfalls med Enfold

En samling vanliga problem och hur du löser dem.

---

## 🔴 CSS-problem

### Problem: Min CSS appliceras inte

**Symptom:** Du skriver CSS men inget händer.

**Orsak:** Enfolds CSS har högre specificitet eller använder `!important`.

**Lösning:**
```css
/* Istället för */
.my-element { color: red; }

/* Använd högre specificitet */
body .my-element { color: red; }

/* Eller !important (sista utväg) */
.my-element { color: red !important; }
```

**Bättre lösning:** Använd [CSS Isolation](css-isolation.md) för helt separerad styling.

---

### Problem: Listor har konstiga ikoner istället för bullets

**Symptom:** `<ul>` och `<ol>` visar bockar, pilar eller andra ikoner.

**Orsak:** Enfold ersätter standard list-style med Font Awesome-ikoner via `::before`.

**Lösning:**
```css
.my-container li::before {
  content: none !important;
  display: none !important;
}

.my-container ul {
  list-style-type: disc !important;
  padding-left: 2em !important;
}

.my-container ol {
  list-style-type: decimal !important;
  padding-left: 2em !important;
}
```

---

### Problem: Typsnitt matchar inte det jag angett

**Symptom:** Du sätter `font-family` men det ignoreras.

**Orsak:** Enfold sätter typsnitt på flera ställen med hög specificitet.

**Lösning:**
```css
body .my-element,
body .my-element * {
  font-family: 'Inter', sans-serif !important;
}
```

---

### Problem: Marginaler och padding är fel

**Symptom:** Element har oväntade mellanrum.

**Orsak:** Enfold har bas-styling på nästan alla HTML-element.

**Lösning:** Nollställ explicit:
```css
.my-container * {
  margin: 0;
  padding: 0;
}

/* Lägg sedan till dina egna */
.my-container p {
  margin-bottom: 1em;
}
```

---

## 🟡 Layout-problem

### Problem: Kolumner beter sig konstigt

**Symptom:** Flexbox eller grid fungerar inte som förväntat.

**Orsak:** Enfolds grid-system kan konflikta.

**Lösning:** Använd specifika klasser och överskriv display:
```css
.my-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
}

.my-grid > * {
  width: auto !important;
  float: none !important;
}
```

---

### Problem: Position: fixed/sticky fungerar inte

**Symptom:** Element som ska vara fixed scrollar med sidan.

**Orsak:** Enfolds wrapper-element kan ha `transform` eller `overflow` som bryter fixed positioning.

**Lösning:** Flytta elementet högre upp i DOM:
```javascript
// Flytta element till body
document.body.appendChild(document.querySelector('.my-fixed-element'));
```

---

## 🟠 JavaScript-problem

### Problem: Mina click-handlers triggas inte

**Symptom:** `addEventListener` verkar inte fungera på vissa element.

**Orsak:** Enfold kan ha `stopPropagation()` eller egna handlers.

**Lösning:** Använd capture phase:
```javascript
element.addEventListener('click', handler, true); // true = capture
```

---

### Problem: Element laddas inte när sidan laddat

**Symptom:** `document.querySelector()` returnerar null.

**Orsak:** Enfold lazy-loadar vissa element.

**Lösning:** Använd MutationObserver:
```javascript
const observer = new MutationObserver((mutations) => {
  const element = document.querySelector('.my-element');
  if (element) {
    // Element finns nu
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
```

---

## 🔵 Page Builder-problem

### Problem: Raw HTML renderas fel

**Symptom:** HTML i "Code"-element ser inte ut som förväntat.

**Orsak:** Avia builder kan modifiera din HTML.

**Lösning:** 
1. Använd rätt element-typ ("Raw HTML" eller "Code", inte "Text Block")
2. Avmarkera eventuella "Auto-format" alternativ
3. Wrap i en container med isolerad styling

---

### Problem: Custom element försvinner när jag sparar

**Symptom:** HTML raderas eller modifieras vid save.

**Orsak:** WordPress eller Enfold saniterar HTML.

**Lösning:**
1. Spara som "Text" (inte Visual) i classic editor
2. Eller skapa ett custom shortcode istället
3. Eller använd Advanced Custom Fields för custom content

---

## 🟣 Performance-problem

### Problem: Sidan laddar långsamt

**Symptom:** Mycket CSS/JS laddas.

**Orsak:** Enfold laddar alla sina assets även om de inte används.

**Lösning:** I Enfold → Performance:
1. Aktivera "Merge CSS/JS files"
2. Aktivera lazy loading för bilder
3. Överväg ett caching-plugin (WP Rocket, W3 Total Cache)

---

## Debugging-tips

### Se vilken CSS som påverkar ett element

1. Högerklicka → Inspektera
2. Kolla "Styles"-panelen (visar alla regler)
3. Överstrukna = övertrumfade
4. Kolla "Computed" för slutresultatet

### Hitta var en CSS-regel kommer från

I DevTools Styles-panelen står filnamn och radnummer till höger om varje regel.

### Testa CSS-ändringar live

1. I DevTools, klicka på `element.style {}` högst upp i Styles
2. Skriv dina properties
3. Se ändringen direkt
4. Kopiera fungerande CSS till din stylesheet

### Exportera all CSS för analys

Kör i Console:
```javascript
copy([...document.styleSheets].map(s => {
  try { return [...s.cssRules].map(r => r.cssText).join('\n'); }
  catch(e) { return ''; }
}).join('\n'));
```
Nu finns all CSS i clipboard.
