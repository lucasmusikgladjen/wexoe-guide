# CSS Isolation i Enfold

Tekniker för att skriva CSS som inte påverkas av Enfolds styling.

---

## Översikt

| Metod | Isolering | Komplexitet | Användning |
|-------|-----------|-------------|------------|
| `all: revert` | Partiell | Låg | Snabba fixes |
| High specificity | Partiell | Låg | Enstaka element |
| Custom zone | God | Medium | Komponenter |
| Shadow DOM | Total | Medium | Helt isolerade moduler |
| Blank Canvas | Total | Hög | Hela sidor |

---

## Metod 1: all: revert (snabb men begränsad)

Återställer styling till browser defaults. Fungerar inte alltid mot `!important`.

```css
.my-element {
  all: revert;
}

.my-element * {
  all: revert;
}
```

**Begränsning:** Enfolds `!important`-regler vinner fortfarande.

---

## Metod 2: Custom Zone (rekommenderad för komponenter)

En wrapper-klass som nollställer Enfolds styling och ger dig en ren yta.

### CSS (lägg i Ytterligare CSS eller child theme)

```css
/* ================================
   CUSTOM ZONE RESET
   ================================ */

/* Nollställ allt */
.custom-zone,
.custom-zone *,
.custom-zone *::before,
.custom-zone *::after {
  all: revert;
  box-sizing: border-box;
}

/* Döda Enfolds list-ikoner */
.custom-zone li::before {
  content: none !important;
  display: none !important;
}

/* Bas-styling */
.custom-zone {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #1a1a1a;
}

/* Typografi */
.custom-zone h1 { font-size: 2.5rem; margin-bottom: 1rem; }
.custom-zone h2 { font-size: 2rem; margin-bottom: 1rem; }
.custom-zone h3 { font-size: 1.5rem; margin-bottom: 0.75rem; }
.custom-zone p { margin-bottom: 1em; }

/* Listor - explicit styling */
.custom-zone ul,
.custom-zone ol {
  padding-left: 2em !important;
  margin: 1em 0 !important;
}

.custom-zone ul { list-style-type: disc !important; }
.custom-zone ol { list-style-type: decimal !important; }
.custom-zone li { margin: 0.5em 0 !important; }

/* Länkar */
.custom-zone a {
  color: #0066cc;
  text-decoration: underline;
}

.custom-zone a:hover {
  color: #004499;
}
```

### Användning

```html
<div class="custom-zone">
  <h2>Min rubrik</h2>
  <p>Min text, fri från Enfold.</p>
  <ul>
    <li>Punkt ett</li>
    <li>Punkt två</li>
  </ul>
</div>
```

---

## Metod 3: Shadow DOM (total isolering)

Shadow DOM skapar en helt separat DOM-tree där **ingen** extern CSS kan nå in.

### Steg 1: Lägg till JavaScript

I Enfold → Theme Options → Footer (eller i child theme):

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.shadow-host').forEach(function(host) {
    var template = host.querySelector('template');
    if (template) {
      var shadow = host.attachShadow({mode: 'open'});
      shadow.innerHTML = template.innerHTML;
    }
  });
});
</script>
```

### Steg 2: Använd i HTML

```html
<div class="shadow-host">
  <template>
    <style>
      /* === HELT ISOLERAD CSS === */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      :host {
        display: block;
        font-family: system-ui, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #1a1a1a;
      }
      
      h2 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        color: #333;
      }
      
      p {
        margin-bottom: 1em;
      }
      
      ul, ol {
        padding-left: 1.5em;
        margin: 1em 0;
      }
      
      li {
        margin: 0.5em 0;
      }
      
      .btn {
        display: inline-block;
        padding: 0.75em 1.5em;
        background: #0066cc;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        border: none;
        cursor: pointer;
      }
      
      .btn:hover {
        background: #0055aa;
      }
    </style>
    
    <!-- DIN HTML -->
    <h2>Shadow DOM-komponent</h2>
    <p>Denna är 100% isolerad från Enfold.</p>
    <ul>
      <li>Vanliga bullets</li>
      <li>Ingen Enfold-styling</li>
    </ul>
    <button class="btn">En riktig knapp</button>
  </template>
</div>
```

### Shadow DOM fördelar
- **Total isolering** - Enfolds CSS kan bokstavligen inte påverka
- **Encapsulation** - Dina styles läcker inte ut heller
- **Modernt** - Stöds i alla moderna browsers

### Shadow DOM nackdelar
- **SEO** - Innehåll i Shadow DOM indexeras sämre
- **JavaScript-access** - Måste använda `shadowRoot` för att nå element
- **Fonts** - Måste laddas separat eller ärvas via CSS custom properties

---

## Metod 4: Blank Canvas Template (för hela sidor)

Skapar en page template helt utan Enfolds CSS. Kräver child theme.

### blank-canvas.php

```php
<?php
/*
Template Name: Blank Canvas
Template Post Type: page
*/

add_action('wp_enqueue_scripts', function() {
    global $wp_styles, $wp_scripts;
    
    // Avregistrera allt utom 'custom-'
    foreach ($wp_styles->registered as $handle => $style) {
        if (strpos($handle, 'custom-') !== 0) {
            wp_dequeue_style($handle);
            wp_deregister_style($handle);
        }
    }
    
    // Behåll bara jQuery
    foreach ($wp_scripts->registered as $handle => $script) {
        if ($handle !== 'jquery' && strpos($handle, 'custom-') !== 0) {
            wp_dequeue_script($handle);
        }
    }
    
    // Ladda din CSS
    wp_enqueue_style('custom-blank', 
        get_stylesheet_directory_uri() . '/assets/css/blank.css',
        array(),
        filemtime(get_stylesheet_directory() . '/assets/css/blank.css')
    );
}, 9999);
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class('blank-canvas'); ?>>

<?php while (have_posts()) : the_post(); ?>
    <?php the_content(); ?>
<?php endwhile; ?>

<?php wp_footer(); ?>
</body>
</html>
```

### Användning

1. Skapa child theme
2. Lägg `blank-canvas.php` i child theme-mappen
3. Skapa `/assets/css/blank.css` med din styling
4. Skapa ny sida i WordPress, välj "Blank Canvas" som template

---

## Rekommendation

| Situation | Använd |
|-----------|--------|
| Fixar ett element snabbt | `all: revert` + `!important` |
| Bygger en komponent på befintlig sida | Custom Zone |
| Bygger något som MÅSTE vara isolerat | Shadow DOM |
| Bygger en hel landningssida | Blank Canvas |

Börja med **Custom Zone** för de flesta fall. Eskalera till **Shadow DOM** om Enfold fortfarande läcker igenom.
