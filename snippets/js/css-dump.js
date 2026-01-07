/**
 * CSS Dump Utility
 * 
 * Kör i browser console för att exportera all CSS från sidan.
 * 
 * Användning:
 * 1. Öppna sidan i Chrome/Firefox
 * 2. Öppna DevTools (F12)
 * 3. Gå till Console-tabben
 * 4. Klistra in och kör detta script
 */

(function() {
  'use strict';

  // Samla all CSS
  const allCSS = [...document.styleSheets]
    .map((sheet, index) => {
      const source = sheet.href || 'Inline styles';
      let rules = '';
      
      try {
        rules = [...sheet.cssRules]
          .map(rule => rule.cssText)
          .join('\n');
      } catch (e) {
        // CORS-blockerade stylesheets kan inte läsas
        rules = `/* Kunde inte läsa: ${sheet.href} (CORS) */`;
      }
      
      return `/* ============================================
   SOURCE ${index + 1}: ${source}
   ============================================ */

${rules}`;
    })
    .join('\n\n');

  // Lägg till metadata
  const output = `/*
 * CSS DUMP
 * Genererad: ${new Date().toISOString()}
 * URL: ${window.location.href}
 * 
 * Antal stylesheets: ${document.styleSheets.length}
 */

${allCSS}`;

  // Ladda ner som fil
  const blob = new Blob([output], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const filename = `css-dump-${window.location.hostname}-${Date.now()}.css`;
  
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  console.log(`✅ CSS dump sparad som: ${filename}`);
  console.log(`📊 Totalt ${document.styleSheets.length} stylesheets`);
  console.log(`📏 Filstorlek: ~${(output.length / 1024).toFixed(1)} KB`);

})();


/* ============================================
   ALTERNATIV: Kopiera till clipboard istället
   ============================================ */

/*
(function() {
  const allCSS = [...document.styleSheets]
    .map(sheet => {
      try {
        return [...sheet.cssRules].map(rule => rule.cssText).join('\n');
      } catch (e) {
        return '';
      }
    })
    .join('\n');
  
  navigator.clipboard.writeText(allCSS).then(() => {
    console.log('✅ All CSS kopierad till clipboard!');
  });
})();
*/


/* ============================================
   ALTERNATIV: Visa bara Enfold-relaterad CSS
   ============================================ */

/*
(function() {
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
        return `/* Kunde inte läsa: ${sheet.href} */`;
      }
    })
    .join('\n\n');
  
  console.log(enfoldCSS);
})();
*/
