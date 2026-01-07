(async function() {
  
  // === DEFINIERA VIKTIGA FILER ===
  const priority = {
    enfoldCore: [
      'grid.css',
      'base.css', 
      'layout.css',
      'shortcodes.css',
      'site-main.css',
      'header.css'
    ],
    enfoldComponents: [
      'iconlist.css',
      'buttons.css',
      'buttonrow.css',
      'heading.css',
      'tabs.css',
      'toggles.css',
      'table.css',
      'menu.css',
      'comments.css',
      'contact.css',
      'image.css',
      'gallery.css',
      'icon.css',
      'iconbox.css',
      'hr.css'
    ],
    aviaSnippets: [
      'avia-snippet-fold-unfold.css',
      'avia-snippet-lightbox.css',
      'avia-snippet-widget.css'
    ],
    custom: [
      'wexe.css',
      'wexoe.css',
      'custom.css'
    ]
  };
  
  const allPriority = [
    ...priority.enfoldCore,
    ...priority.enfoldComponents,
    ...priority.aviaSnippets,
    ...priority.custom
  ];
  
  // Hitta alla stylesheet-länkar
  const allLinks = [...document.querySelectorAll('link[rel="stylesheet"]')];
  
  // Filtrera till bara viktiga filer
  const importantLinks = allLinks.filter(link => {
    const filename = link.href.split('/').pop().split('?')[0].toLowerCase();
    return allPriority.some(p => filename.includes(p.toLowerCase()));
  });
  
  console.log(`Hämtar ${importantLinks.length} viktiga CSS-filer...`);
  
  // Hämta innehåll
  const results = {
    enfoldCore: [],
    enfoldComponents: [],
    aviaSnippets: [],
    custom: []
  };
  
  for (const link of importantLinks) {
    try {
      const response = await fetch(link.href);
      const content = await response.text();
      const filename = link.href.split('/').pop().split('?')[0];
      const sizeKB = (content.length / 1024).toFixed(1);
      
      const entry = {
        name: filename,
        url: link.href,
        size: `${sizeKB} KB`,
        content: content
      };
      
      // Kategorisera
      if (priority.enfoldCore.some(f => filename.toLowerCase().includes(f.toLowerCase()))) {
        results.enfoldCore.push(entry);
      } else if (priority.aviaSnippets.some(f => filename.toLowerCase().includes(f.toLowerCase()))) {
        results.aviaSnippets.push(entry);
      } else if (priority.custom.some(f => filename.toLowerCase().includes(f.toLowerCase()))) {
        results.custom.push(entry);
      } else {
        results.enfoldComponents.push(entry);
      }
      
      console.log(`✓ ${filename} (${sizeKB} KB)`);
    } catch (e) {
      console.log(`✗ Kunde inte hämta: ${link.href}`);
    }
  }
  
  // === SKAPA MARKDOWN OUTPUT ===
  const output = `# Wexoe/Enfold CSS Reference

> **För utvecklare och LLMs:** Detta dokument innehåller de CSS-filer som är relevanta för att förstå och överskrida Enfolds styling.

Generated: ${new Date().toISOString()}
URL: ${window.location.href}

---

## 📋 Översikt

| Kategori | Filer | Total storlek |
|----------|-------|---------------|
| Enfold Core | ${results.enfoldCore.length} | ${results.enfoldCore.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1)} KB |
| Enfold Komponenter | ${results.enfoldComponents.length} | ${results.enfoldComponents.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1)} KB |
| Avia Snippets | ${results.aviaSnippets.length} | ${results.aviaSnippets.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1)} KB |
| Custom (Wexoe) | ${results.custom.length} | ${results.custom.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1)} KB |

---

## 🎯 TL;DR - Vanliga problem och lösningar

### Listor visar ikoner istället för bullets
\`\`\`css
/* Enfold sätter ikoner via ::before - döda dem */
.custom-zone li::before {
  content: none !important;
  display: none !important;
}
.custom-zone ul { list-style-type: disc !important; }
.custom-zone ol { list-style-type: decimal !important; }
\`\`\`

### CSS appliceras inte
\`\`\`css
/* Enfold använder !important överallt - du måste också */
.my-element { color: red !important; }

/* Eller använd högre specificitet */
body .my-element { color: red; }
\`\`\`

### Total isolering behövs
Använd Shadow DOM - se snippets i repot.

---

## 🔴 Enfold Core

Dessa filer definierar grundläggande styling som påverkar allt.

${results.enfoldCore.map(f => `
### ${f.name}
**Size:** ${f.size} | **Source:** \`${f.url}\`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

\`\`\`css
${f.content}
\`\`\`

</details>
`).join('\n')}

---

## 🟠 Enfold Komponenter

Styling för specifika element som knappar, listor, rubriker etc.

${results.enfoldComponents.map(f => `
### ${f.name}
**Size:** ${f.size} | **Source:** \`${f.url}\`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

\`\`\`css
${f.content}
\`\`\`

</details>
`).join('\n')}

---

## 🟡 Avia Snippets

Kompletterande Enfold-styling.

${results.aviaSnippets.map(f => `
### ${f.name}
**Size:** ${f.size} | **Source:** \`${f.url}\`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

\`\`\`css
${f.content}
\`\`\`

</details>
`).join('\n')}

---

## 🟢 Custom (Wexoe)

Er egen CSS - detta kan ni modifiera fritt.

${results.custom.map(f => `
### ${f.name}
**Size:** ${f.size} | **Source:** \`${f.url}\`

\`\`\`css
${f.content}
\`\`\`
`).join('\n')}

---

## 🔍 Snabbreferens: Problematiska selektorer

Dessa selektorer från Enfold har hög specificitet eller !important:

${results.enfoldCore.concat(results.enfoldComponents).map(f => {
  const importantRules = [...f.content.matchAll(/([^{}]+)\{[^}]*!important[^}]*\}/g)]
    .map(m => m[1].trim())
    .filter(s => s.length < 100)
    .slice(0, 10);
  
  if (importantRules.length === 0) return '';
  
  return `
**${f.name}:**
${importantRules.map(r => '- \`' + r + '\`').join('\n')}`;
}).filter(Boolean).join('\n')}

---

## 📝 Anteckningar

- **Enfold version:** Kontrollera i Utseende → Teman
- **Senast uppdaterad:** ${new Date().toLocaleDateString('sv-SE')}
- **Genererad från:** ${window.location.href}
`;

  // Ladda ner
  const blob = new Blob([output], { type: 'text/markdown' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'wexoe-css-reference.md';
  a.click();
  
  console.log('');
  console.log('✅ Klar! Fil nedladdad.');
  console.log('');
  console.log('Sammanfattning:');
  console.table({
    'Enfold Core': { Filer: results.enfoldCore.length, Storlek: results.enfoldCore.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1) + ' KB' },
    'Enfold Komponenter': { Filer: results.enfoldComponents.length, Storlek: results.enfoldComponents.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1) + ' KB' },
    'Avia Snippets': { Filer: results.aviaSnippets.length, Storlek: results.aviaSnippets.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1) + ' KB' },
    'Custom': { Filer: results.custom.length, Storlek: results.custom.reduce((a, f) => a + parseFloat(f.size), 0).toFixed(1) + ' KB' }
  });
  
})();
