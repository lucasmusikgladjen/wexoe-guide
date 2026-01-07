# Theme Reference

Denna mapp innehåller exporterade filer från Wexoe-sajten för referens.

---

## Struktur

```
theme-reference/
├── css/                    # Exporterad CSS
│   ├── full-dump.css       # All CSS från sidan
│   ├── enfold-core.css     # Bara Enfolds CSS
│   └── custom-current.css  # Nuvarande custom CSS
├── structure/              # Tema-struktur dokumentation
│   └── class-reference.md  # Vanliga CSS-klasser
└── screenshots/            # UI-referens bilder
    └── (komponenter, layouts, etc.)
```

---

## Hur du exporterar CSS

### Fullständig dump

1. Öppna Wexoe-sajten i Chrome
2. Öppna DevTools → Console
3. Kör scriptet från `/snippets/js/css-dump.js`
4. Spara filen här som `full-dump-YYYY-MM-DD.css`

### Bara Enfold-CSS

Kör detta i Console:

```javascript
const enfoldCSS = [...document.styleSheets]
  .filter(sheet => {
    const href = sheet.href || '';
    return href.includes('enfold') || 
           href.includes('avia') || 
           href.includes('kriesi');
  })
  .map(sheet => {
    try {
      return [...sheet.cssRules].map(rule => rule.cssText).join('\n');
    } catch (e) {
      return '';
    }
  })
  .join('\n\n');

copy(enfoldCSS);
console.log('Kopierat till clipboard!');
```

Klistra in i en ny fil här.

---

## Uppdatera regelbundet

Exportera ny CSS när:
- Enfold uppdateras
- Theme options ändras
- Nya komponenter läggs till

Behåll gamla versioner med datum i filnamnet för att kunna jämföra.
