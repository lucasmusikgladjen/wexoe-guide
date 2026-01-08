# Clean Slate Lösningar för Wexoe

Tre sätt att få helt isolerad styling på nya sidor utan att påverka befintliga.

---

## Alternativ 1: Shadow DOM (Bästa isolering)

**Fördelar:** Total isolering, inga CSS-konflikter alls  
**Nackdelar:** Kräver JavaScript, lite mer komplext

### PHP Snippet (WPCode)

```php
<?php
/**
 * Clean Slate via Shadow DOM
 * Lägg till klassen "clean-slate-host" på en Code Block i Enfold
 * Innehållet renderas i Shadow DOM utan externa stilar
 */
add_action('wp_footer', function() {
?>
<script>
(function() {
    // Hitta alla clean-slate hosts
    document.querySelectorAll('.clean-slate-host').forEach(host => {
        // Flytta befintligt innehåll
        const content = host.innerHTML;
        host.innerHTML = '';
        
        // Skapa shadow root
        const shadow = host.attachShadow({ mode: 'open' });
        
        // Lägg till reset + ditt innehåll
        shadow.innerHTML = `
            <style>
                /* === TOTAL RESET === */
                *, *::before, *::after {
                    all: revert;
                    box-sizing: border-box;
                }
                
                /* === BASTYPER === */
                :host {
                    display: block;
                    font-family: system-ui, -apple-system, sans-serif;
                    font-size: 16px;
                    line-height: 1.5;
                    color: #333;
                }
                
                /* === VANLIGA ELEMENT === */
                a {
                    color: #0066cc;
                    text-decoration: underline;
                }
                a:hover {
                    color: #004499;
                }
                
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0; /* Ändra till vad du vill */
                }
                
                ul, ol {
                    padding-left: 1.5em;
                    margin: 1em 0;
                }
                ul { list-style-type: disc; }
                ol { list-style-type: decimal; }
                li { margin: 0.5em 0; }
                
                button, .btn {
                    all: unset;
                    display: inline-block;
                    padding: 10px 20px;
                    background: #0066cc;
                    color: white;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: 500;
                }
                button:hover, .btn:hover {
                    background: #0055aa;
                }
                
                h1, h2, h3, h4, h5, h6 {
                    font-weight: 600;
                    line-height: 1.2;
                    margin: 1em 0 0.5em;
                }
                h1 { font-size: 2.5em; }
                h2 { font-size: 2em; }
                h3 { font-size: 1.5em; }
                
                p { margin: 1em 0; }
                
                /* === LÄGG TILL EGNA STILAR HÄR === */
                
            </style>
            <div class="shadow-content">${content}</div>
        `;
    });
})();
</script>
<?php
}, 100);
```

### Användning i Enfold

1. Lägg till en **Code Block** i Advanced Layout Builder
2. Ge den Custom CSS Class: `clean-slate-host`
3. Skriv din HTML direkt i Code Block

```html
<div class="my-clean-component">
    <h2>Rubrik utan Enfold-styling!</h2>
    <p>Text med <a href="#">vanliga länkar</a>.</p>
    <ul>
        <li>Vanliga punkter</li>
        <li>Utan checkmarks</li>
    </ul>
    <button>En ren knapp</button>
</div>
```

---

## Alternativ 2: CSS @layer (Modern, ingen JS)

**Fördelar:** Rent CSS, ingen JavaScript  
**Nackdelar:** Fortfarande `!important`-konflikter, kräver modern browser

### PHP Snippet (WPCode)

```php
<?php
/**
 * CSS Layers för clean slate
 * Sätter Enfold/Child theme i lägre layer
 */
add_action('wp_head', function() {
?>
<style>
/* Definiera layer-ordning - clean-slate vinner alltid */
@layer enfold, child-theme, clean-slate;

/* Dina clean-slate stilar */
@layer clean-slate {
    .clean-zone {
        /* Reset allt */
        all: unset;
        display: block;
        font-family: system-ui, -apple-system, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
    }
    
    .clean-zone * {
        all: unset;
        display: revert;
    }
    
    .clean-zone a {
        color: #0066cc;
        text-decoration: underline;
        cursor: pointer;
    }
    
    .clean-zone ul {
        display: block;
        list-style-type: disc;
        padding-left: 1.5em;
        margin: 1em 0;
    }
    
    .clean-zone ol {
        display: block;
        list-style-type: decimal;
        padding-left: 1.5em;
        margin: 1em 0;
    }
    
    .clean-zone li {
        display: list-item;
    }
    
    .clean-zone img {
        display: inline;
        max-width: 100%;
    }
    
    .clean-zone button,
    .clean-zone .btn {
        display: inline-block;
        padding: 10px 20px;
        background: #0066cc;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        border: none;
    }
}
</style>
<?php
}, 1); // Tidigt i head
```

**OBS:** CSS Layers fungerar inte mot `!important`. Child theme har många `!important`, så detta fungerar bara delvis.

---

## Alternativ 3: Page Template utan Child Theme CSS (Bäst för hela sidor)

**Fördelar:** Helt ren sida, laddar aldrig child theme CSS  
**Nackdelar:** Endast för hela sidor, inte enskilda sektioner

### Steg 1: Skapa template-fil

Skapa `/wp-content/themes/enfold_child_by_yanco/page-clean-slate.php`:

```php
<?php
/**
 * Template Name: Clean Slate (Ingen Child Theme CSS)
 * Description: En sidmall som inte laddar child theme styling
 */

// Avregistrera child theme CSS
add_action('wp_enqueue_scripts', function() {
    // Ta bort child theme stylesheets
    wp_dequeue_style('avia-style');
    wp_dequeue_style('child-style');
    
    // Ta bort site-styles
    wp_dequeue_style('site-main');
    wp_dequeue_style('header-css');
    
    // Ladda minimal bas istället
    wp_enqueue_style('clean-base', get_stylesheet_directory_uri() . '/clean-base.css');
}, 100);

// Ladda vanliga Enfold-templaten
get_template_part('page');
```

### Steg 2: Skapa clean-base.css

Skapa `/wp-content/themes/enfold_child_by_yanco/clean-base.css`:

```css
/* Minimal bas - ingen Wexoe-styling */
body {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    margin: 0;
    padding: 0;
}

a {
    color: #0066cc;
    text-decoration: underline;
}

img {
    max-width: 100%;
    height: auto;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Behåll Enfolds grid men ta bort styling */
.av_one_half { width: 48%; }
.av_one_third { width: 31.33%; }
.av_one_fourth { width: 23%; }

/* Lägg till mer efter behov */
```

### Steg 3: Använd template

1. Skapa ny sida
2. I sidoredigeraren → **Sidomall** → välj "Clean Slate (Ingen Child Theme CSS)"
3. Bygg sidan fritt utan konflikter

---

## Rekommendation

| Scenario | Bästa alternativ |
|----------|------------------|
| En sektion på befintlig sida | **Shadow DOM** |
| En helt ny sida | **Page Template** |
| Snabb fix, modern browsers | CSS @layer |

---

## Komplett Shadow DOM-komponent (copy-paste)

För att snabbt skapa en isolerad komponent:

```php
<?php
// Lägg till i WPCode
add_shortcode('clean_slate', function($atts, $content = null) {
    $id = 'cs-' . uniqid();
    return "
        <div id='{$id}' class='clean-slate-host'>{$content}</div>
        <script>
        (function() {
            var host = document.getElementById('{$id}');
            var content = host.innerHTML;
            host.innerHTML = '';
            var shadow = host.attachShadow({mode: 'open'});
            shadow.innerHTML = '<style>*{all:revert;box-sizing:border-box}:host{display:block;font:16px/1.5 system-ui,sans-serif;color:#333}a{color:#0066cc;text-decoration:underline}ul{list-style:disc;padding-left:1.5em}ol{list-style:decimal;padding-left:1.5em}</style>' + content;
        })();
        </script>
    ";
});
```

**Användning i Enfold:**

```
[clean_slate]
<h2>Min rena rubrik</h2>
<p>Text utan Enfold-konflikter!</p>
<ul>
    <li>Vanliga bullets</li>
    <li>Inte checkmarks</li>
</ul>
[/clean_slate]
```

---

## Filer

Lägg dessa i din guide-repo:

```
/clean-slate/
├── shadow-dom-snippet.php      (Alternativ 1)
├── css-layers-snippet.php      (Alternativ 2)  
├── page-clean-slate.php        (Alternativ 3)
├── clean-base.css              (Alternativ 3)
└── README.md                   (Denna fil)
```
