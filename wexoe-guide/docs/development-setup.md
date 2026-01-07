# Development Setup

Hur du sätter upp en utvecklingsmiljö för Wexoe-sajten.

---

## Utan server-åtkomst

Om du bara har tillgång till WordPress admin:

### Lägga till CSS

**Alternativ 1: WordPress Customizer**
1. Gå till Utseende → Anpassa → Ytterligare CSS
2. Lägg till din CSS
3. Publicera

**Alternativ 2: Enfold Quick CSS**
1. Gå till Enfold → General Styling → Quick CSS
2. Lägg till din CSS
3. Spara

### Lägga till JavaScript

**Enfold Theme Options:**
1. Gå till Enfold → Theme Options
2. Hitta "Header" eller "Footer" scripts
3. Lägg till din `<script>` tag
4. Spara

### Skapa Child Theme via plugin

1. Installera "Child Theme Configurator" plugin
2. Gå till Verktyg → Child Themes
3. Följ guiden för att skapa child theme
4. Aktivera child theme

---

## Med server-åtkomst (FTP/SSH)

### Skapa Child Theme manuellt

1. Anslut via FTP till `/wp-content/themes/`

2. Skapa mappen `enfold-child`

3. Skapa `style.css`:
```css
/*
Theme Name: Enfold Child
Template: enfold
Version: 1.0
*/
```

4. Skapa `functions.php`:
```php
<?php
// Ladda parent theme styles
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('parent-style', 
        get_template_directory_uri() . '/style.css'
    );
}, 10);

// Dina custom functions här
```

5. Aktivera i WordPress admin

### Mappstruktur för child theme

```
enfold-child/
├── style.css           # Required
├── functions.php       # Required
├── assets/
│   ├── css/
│   │   ├── custom.css
│   │   └── blank.css
│   └── js/
│       └── custom.js
├── templates/
│   ├── blank-canvas.php
│   └── custom-page.php
└── components/
    └── (återanvändbara komponenter)
```

---

## Lokal utveckling (rekommenderat)

### Med Local by Flywheel

1. Ladda ner [Local](https://localwp.com/)
2. Skapa ny site
3. Importera live-sajten (via plugin eller manuellt)
4. Utveckla lokalt
5. Synka ändringar tillbaka

### Med MAMP/XAMPP

1. Installera MAMP eller XAMPP
2. Skapa databas
3. Installera WordPress
4. Kopiera Enfold-temat
5. Importera content (via plugin)

---

## Git-workflow

### .gitignore för WordPress

```gitignore
# WordPress core
/wp-admin/
/wp-includes/
/wp-content/uploads/
wp-config.php

# Plugins (utom custom)
/wp-content/plugins/*
!/wp-content/plugins/custom-plugin/

# Themes (utom child theme)
/wp-content/themes/*
!/wp-content/themes/enfold-child/

# OS files
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.swp
```

### Versionera bara child theme

```bash
cd wp-content/themes/enfold-child
git init
git add .
git commit -m "Initial child theme setup"
```

---

## Deployment

### Manuell (FTP)

1. Gör ändringar lokalt
2. Testa
3. Ladda upp ändrade filer via FTP

### Via Git + deploy script

```bash
#!/bin/bash
# deploy.sh

REMOTE_PATH="/var/www/html/wp-content/themes/enfold-child"
REMOTE_USER="user"
REMOTE_HOST="server.com"

rsync -avz --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  ./ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH
```

### Via plugin (Duplicator, All-in-One WP Migration)

Enklast för hela sajten, men overkill för små ändringar.

---

## Debugging

### WordPress debug mode

I `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Loggar sparas i `/wp-content/debug.log`

### Query Monitor plugin

Installera "Query Monitor" för att se:
- Alla laddade CSS/JS
- Databasqueries
- PHP errors
- Hooks som körs

### Browser DevTools

- **Elements** - Inspektera DOM och CSS
- **Console** - JavaScript errors och logging
- **Network** - Se alla requests
- **Sources** - Debugga JavaScript

---

## Resurser

- [WordPress Developer Resources](https://developer.wordpress.org/)
- [Enfold Documentation](https://kriesi.at/documentation/enfold/)
- [Local by Flywheel](https://localwp.com/)
- [Child Theme Configurator](https://wordpress.org/plugins/child-theme-configurator/)
