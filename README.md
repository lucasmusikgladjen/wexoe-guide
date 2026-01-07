# Wexoe WordPress/Enfold Guide

Guide för att utveckla på Wexoes WordPress-sajt med Enfold-temat.

## Struktur

```
wexoe-guide/
├── CLAUDE.md              # LÄS FÖRST - instruktioner för LLMs
├── docs/
│   ├── design-tokens.md   # Wexoes färger och variabler
│   └── common-pitfalls.md # Vanliga problem och lösningar
└── theme-reference/
    └── wexoe-css-reference.md  # Enfold CSS quick reference
```

## Snabbstart

**Problem: CSS appliceras inte**
```css
.my-element { color: #11325D !important; }
```

**Problem: Listor har konstiga ikoner**
```css
.my-list li::before { content: none !important; display: none !important; }
.my-list ul { list-style-type: disc !important; }
```

**Problem: Behöver total isolering**
→ Använd Shadow DOM, se `theme-reference/wexoe-css-reference.md`

## Viktigt

- Enfold använder `!important` överallt - du måste också
- Breakpoints: Desktop >989px, Tablet 768-989px, Mobile <768px
- Lägg CSS i Enfold → Quick CSS eller WordPress Customizer → Ytterligare CSS
