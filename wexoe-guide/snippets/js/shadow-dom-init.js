/**
 * Shadow DOM Initializer
 * 
 * Skapar isolerade Shadow DOM-komponenter från template-element.
 * 
 * Användning:
 * <div class="shadow-host">
 *   <template>
 *     <style>CSS här</style>
 *     <div>HTML här</div>
 *   </template>
 * </div>
 */

(function() {
  'use strict';

  function initShadowHosts() {
    const hosts = document.querySelectorAll('.shadow-host:not([data-shadow-initialized])');
    
    hosts.forEach(function(host) {
      const template = host.querySelector('template');
      
      if (template) {
        // Skapa Shadow DOM
        const shadow = host.attachShadow({ mode: 'open' });
        
        // Kopiera template-innehåll
        shadow.innerHTML = template.innerHTML;
        
        // Markera som initierad
        host.setAttribute('data-shadow-initialized', 'true');
        
        // Dispatcha event för eventuella lyssnare
        host.dispatchEvent(new CustomEvent('shadow-ready', {
          bubbles: true,
          detail: { shadowRoot: shadow }
        }));
      }
    });
  }

  // Kör när DOM är redo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShadowHosts);
  } else {
    initShadowHosts();
  }

  // Observera för dynamiskt tillagda shadow-hosts
  const observer = new MutationObserver(function(mutations) {
    let shouldInit = false;
    
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1) {
          if (node.classList && node.classList.contains('shadow-host')) {
            shouldInit = true;
          }
          if (node.querySelector && node.querySelector('.shadow-host')) {
            shouldInit = true;
          }
        }
      });
    });
    
    if (shouldInit) {
      initShadowHosts();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Exponera för manuell initiering
  window.initShadowHosts = initShadowHosts;

})();
