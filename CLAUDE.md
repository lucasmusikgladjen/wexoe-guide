# Wexoe LLM Instructions

## Kontext
Wexoe använder WordPress med Enfold-temat. Enfolds CSS är extremt aggressiv och överskrider nästan all custom CSS.

## Regler för CSS

**ALLTID:**
- Använd `!important` på alla CSS-regler
- Använd hög specificitet: `body #top .my-element`
- Döda list-ikoner: `li::before { content: none !important; display: none !important; }`

**ALDRIG:**
- Förvänta dig att vanlig CSS fungerar utan `!important`
- Glöm att Enfold har breakpoints på 989px och 767px

## Wexoe färger

```css
--main-blue: #11325D;    /* Primär - rubriker, knappar */
--dark-blue: #0A1F3B;    /* Bakgrunder, hover */
--light-gray: #E8E8E8;   /* Borders, sekundär bg */
--action-orange: #F28C28; /* CTA-knappar */
```

## Template för ny komponent

```css
/* Alltid börja med reset */
.my-component,
.my-component * {
  all: revert !important;
  box-sizing: border-box !important;
}

.my-component li::before {
  content: none !important;
  display: none !important;
}

/* Sen din styling */
.my-component {
  font-family: system-ui, sans-serif !important;
  color: #11325D !important;
}
```

## Vid total isolering - använd Shadow DOM

```html
<div id="my-widget"></div>
<script>
const shadow = document.getElementById('my-widget').attachShadow({mode: 'open'});
shadow.innerHTML = `
  <style>/* Helt isolerad CSS här */</style>
  <div>Innehåll</div>
`;
</script>
```

## Var läggs koden?
- **CSS:** Enfold → Quick CSS eller WordPress Customizer → Ytterligare CSS
- **JavaScript:** Enfold → Theme Options → Footer scripts
- **HTML:** Avia Page Builder → Raw HTML element
