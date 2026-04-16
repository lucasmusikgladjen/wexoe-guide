# Wexoe Core

Unified Airtable data layer for Wexoe's WordPress plugins.

## Status

**Fas 0** — plugin-skelett + API-nyckelhantering.

Kommande faser bygger ut: Airtable-klient, cache, schema-registrering, entity-repository, och migrering av befintliga feature-plugins.

## Installation

1. Ladda upp `wexoe-core`-mappen (eller zip:en) till `/wp-content/plugins/`
2. Aktivera via **Plugins → Installerade plugins**
3. Gå till **Verktyg → Wexoe Core** för att konfigurera API-nyckel

## Struktur

```
wexoe-core/
├── wexoe-core.php          # Huvudfil: WP header, constants, autoloader, bootstrap
├── src/
│   ├── Plugin.php          # Singleton bootstrap + API key management
│   └── Admin/
│       └── Page.php        # Admin page under Tools → Wexoe Core
├── .gitignore
└── README.md
```

## Utveckling

Se `wexoe-core-arkitektur.md` och `wexoe-core-utvecklingsplan.md` för arkitektur och roadmap.

### Namespace

All PHP-kod i `src/` lever under namespace `Wexoe\Core\`. Autoloadern i huvudfilen mappar klassnamn till filvägar enligt PSR-4-konvention:

- `Wexoe\Core\Plugin` → `src/Plugin.php`
- `Wexoe\Core\Admin\Page` → `src/Admin/Page.php`

### Version

Nuvarande: **0.1.0** (Fas 0)

## Licens

Proprietär — intern användning av Wexoe Industry AB.
