# Wexoe WordPress/Enfold Guide

En samling dokumentation, kodsnippets och lösningar för att arbeta med Wexoes WordPress-sajt som använder Enfold-temat.

**Syfte:** Ge utvecklare (och LLMs) snabb förståelse för hur sajten fungerar, vanliga fallgropar, och beprövade lösningar.

---

## 📁 Struktur

```
wexoe-guide-och-samling/
├── README.md                 # Du är här
├── docs/                     # Dokumentation
│   ├── enfold-overview.md    # Hur Enfold fungerar
│   ├── common-pitfalls.md    # Vanliga problem och lösningar
│   ├── css-isolation.md      # Tekniker för att isolera custom CSS
│   └── development-setup.md  # Kom igång med utveckling
├── snippets/                 # Färdiga kodsnippets
│   ├── css/                  # CSS-lösningar
│   ├── js/                   # JavaScript-lösningar
│   └── php/                  # PHP/WordPress-lösningar
├── theme-reference/          # Temafiler för referens
│   ├── css/                  # Exporterad CSS från sajten
│   ├── structure/            # Dokumentation av temats struktur
│   └── screenshots/          # Screenshots av UI-komponenter
└── templates/                # Färdiga templates att utgå från
    ├── blank-canvas.php      # Ren page template
    └── component-starter.html # Starter för nya komponenter
```

---

## 🚀 Snabbstart

### Problem: Enfold överskrider min CSS
→ Se [CSS Isolation Guide](docs/css-isolation.md)

### Problem: Vill bygga något helt custom
→ Se [Blank Canvas Template](templates/blank-canvas.php)

### Problem: Förstår inte varför något ser konstigt ut
→ Se [Common Pitfalls](docs/common-pitfalls.md)

---

## 🎯 Viktigt att veta

1. **Enfold använder `!important` överallt** - Vanlig CSS-specificitet räcker ofta inte
2. **Avia Layout Builder** - Enfolds page builder, genererar egen markup
3. **Inget child theme finns (ännu)** - All custom kod läggs i theme options eller plugins
4. **Ingen på teamet kan koda** - Dokumentera allt tydligt för framtida dig

---

## 📖 Dokumentation

| Dokument | Beskrivning |
|----------|-------------|
| [Enfold Overview](docs/enfold-overview.md) | Grundläggande förståelse för temat |
| [Common Pitfalls](docs/common-pitfalls.md) | Problem du kommer stöta på |
| [CSS Isolation](docs/css-isolation.md) | Hur du skriver CSS som faktiskt fungerar |
| [Development Setup](docs/development-setup.md) | Sätta upp lokal utvecklingsmiljö |

---

## 🔧 Snippets

### CSS
- [`custom-zone.css`](snippets/css/custom-zone.css) - Isolerad CSS-zon
- [`shadow-dom.css`](snippets/css/shadow-dom.css) - Shadow DOM styling

### JavaScript
- [`shadow-dom-init.js`](snippets/js/shadow-dom-init.js) - Initiera Shadow DOM-komponenter
- [`css-dump.js`](snippets/js/css-dump.js) - Exportera all CSS från sidan

### PHP
- [`enqueue-custom-styles.php`](snippets/php/enqueue-custom-styles.php) - Ladda CSS rätt i WordPress

---

## 📸 Lägga till tema-referens

För att dumpa sajtens CSS och spara som referens:

1. Öppna sajten i Chrome
2. Öppna DevTools → Console
3. Kör scriptet i [`snippets/js/css-dump.js`](snippets/js/css-dump.js)
4. Spara filen i `theme-reference/css/`

---

## 🤝 Bidra

Hittar du ett nytt problem och en lösning? Lägg till det i relevant dokument och skapa en PR.

---

## 📅 Changelog

- **2025-01-07** - Initial struktur skapad
