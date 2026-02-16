# Wexoe Product Area Plugin — Dev Plan

> **Plugin name:** `wexoe-product-area`
> **Shortcode:** `[wexoe_product_area slug="plc"]`
> **Version:** 1.0.0
> **Date:** 2026-02-16

---

## 1. Overview

A modular, Airtable-driven WordPress plugin that renders full product area pages (e.g. PLC, HMI, Frekvensomriktare) from structured data. Each section renders **only if its corresponding Airtable fields are populated**. Color theming is overridable per product area.

---

## 2. Airtable Architecture

### 2.1 Table: `Product Areas` (main table)

This is the primary table. One record = one product area page.

#### Identity & Routing

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Name` | Single line text | ✅ | Internal name (e.g. "PLC & Styrsystem") |
| `Slug` | Single line text | ✅ | URL-friendly identifier used in shortcode (e.g. `plc`) |

#### Color Overrides

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Color Main` | Single line text | ❌ | Override primary color (hex, e.g. `#11325D`) — used for section backgrounds, headings |
| `Color Secondary` | Single line text | ❌ | Override secondary color (hex) — used for buttons, accents |
| `Color Tertiary` | Single line text | ❌ | Override tertiary color (hex) — used for subtle highlights, badges |

**Defaults if empty:** Main `#11325D`, Secondary `#F28C28`, Tertiary `#E8E8E8`

#### Section 1: TOP (banner)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `H1` | Single line text | ✅ | Page H1 displayed in top banner |

#### Section 2: HERO

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Hero H2` | Single line text | ❌ | Hero heading |
| `Hero Text` | Long text | ❌ | Hero body text |
| `Hero CTA Text` | Single line text | ❌ | Button label (default: "Kontakta oss") |
| `Hero CTA URL` | URL | ❌ | Button link (default: "/kontakt/") |
| `Hero Benefits` | Long text | ❌ | One benefit per line. Rendered as green checkmark list. |

> **Visibility rule:** Section renders if `Hero H2` OR `Hero Text` is populated.

#### Section 4: SOLUTIONS AND CONCEPTS

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Solutions Title` | Single line text | ❌ | Section heading (default: "Lösningar & Koncept") |
| `Solutions` | Link to another record | ❌ | Links to `Solutions & Concepts` table |

> **Visibility rule:** Section renders if `Solutions` has at least 1 linked record.

#### Section 5: NORMAL sections (×4 max)

For each N in {1, 2, 3, 4}:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Normal N H2` | Single line text | ❌ | Section heading |
| `Normal N Text` | Long text | ❌ | Body text |
| `Normal N Bullets` | Long text | ❌ | One bullet per line |
| `Normal N Image` | URL | ❌ | Image URL |
| `Normal N Reversed` | Checkbox | ❌ | If checked, image on left, text on right |

> **Visibility rule:** Section N renders if `Normal N H2` OR `Normal N Text` is populated.

#### Section 6: OUR GUY

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Contact Name` | Single line text | ❌ | Full name |
| `Contact Title` | Single line text | ❌ | Job title |
| `Contact Email` | Email | ❌ | Email address |
| `Contact Phone` | Phone number | ❌ | Phone number |
| `Contact Image` | URL | ❌ | Photo URL |
| `Contact Text` | Long text | ❌ | Short bio / experience description |

> **Visibility rule:** Section renders if `Contact Name` is populated.

#### Section 7: DOCUMENTATION

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Docs Title` | Single line text | ❌ | Heading (default: "Dokumentation") |
| `Docs Iframe` | URL | ❌ | Full Calameo iframe src URL |

> **Visibility rule:** Section renders if `Docs Iframe` is populated.

#### Section: PRODUCT TOGGLE

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Products` | Link to another record | ❌ | Links to `Products` table |

> **Visibility rule:** Section renders if `Products` has at least 1 linked record.

---

### 2.2 Table: `Products` (linked)

One record = one product within a product area.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Name` | Single line text | ✅ | Product name (H3 in expanded toggle) |
| `Ecosystem Description` | Single line text | ❌ | Short text shown in collapsed toggle header (role in ecosystem) |
| `Description` | Long text | ❌ | Full product description (shown when expanded) |
| `Bullets` | Long text | ❌ | One bullet per line (shown when expanded) |
| `Image` | URL | ❌ | Product image URL |
| `Button 1 Text` | Single line text | ❌ | Primary button label (e.g. "Läs mer på RA") |
| `Button 1 URL` | URL | ❌ | Primary button link |
| `Button 2 Text` | Single line text | ❌ | Secondary button label (default: "Kontakta oss") |
| `Button 2 URL` | URL | ❌ | Secondary button link (default: "/kontakt/") |
| `Product Area` | Link to another record | ✅ | Back-link to Product Areas |
| `Order` | Number | ❌ | Sort order (ascending) |
| `Visa` | Checkbox | ❌ | Must be TRUE to display |

---

### 2.3 Table: `Solutions & Concepts` (linked)

One record = one card in the solutions grid.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Name` | Single line text | ✅ | Card title |
| `Image` | URL | ❌ | Card image URL |
| `URL` | URL | ✅ | Link destination |
| `Product Areas` | Link to another record | ✅ | Which product areas this card appears on |
| `Order` | Number | ❌ | Sort order (ascending) |
| `Visa` | Checkbox | ❌ | Must be TRUE to display |

---

## 3. Section Render Order

The page renders top to bottom in this fixed order:

```
1. TOP          — always shown (H1 required)
2. HERO         — if Hero H2 or Hero Text
3. PRODUCT TOGGLE — if Products linked
4. SOLUTIONS    — if Solutions linked
5. NORMAL 1     — if Normal 1 H2 or Text
6. NORMAL 2     — if Normal 2 H2 or Text
7. NORMAL 3     — if Normal 3 H2 or Text
8. NORMAL 4     — if Normal 4 H2 or Text
9. OUR GUY      — if Contact Name
10. DOCUMENTATION — if Docs Iframe
```

> **Future consideration:** Add a `Section Order` field in Airtable to allow reordering. For v1, fixed order.

---

## 4. Plugin Architecture

### 4.1 File Structure

```
wexoe-product-area/
├── wexoe-product-area.php          # Main plugin file (single-file architecture)
└── readme.txt                       # WP plugin readme (optional)
```

Following existing Wexoe plugin conventions: everything in one PHP file.

### 4.2 Core Structure (PHP)

```
1. Plugin header
2. Constants (API key, base ID, table IDs)
3. Main shortcode handler: wexoe_product_area_shortcode($atts)
4. Airtable fetch functions:
   - wexoe_pa_fetch_product_area($slug)
   - wexoe_pa_fetch_linked_records($table_id, $record_ids)
5. Section render functions (each returns HTML string):
   - wexoe_pa_render_top($data, $colors)
   - wexoe_pa_render_hero($data, $colors)
   - wexoe_pa_render_products($products, $colors)
   - wexoe_pa_render_solutions($solutions, $colors)
   - wexoe_pa_render_normal($data, $n, $colors)
   - wexoe_pa_render_our_guy($data, $colors)
   - wexoe_pa_render_docs($data, $colors)
6. CSS output function (inline <style> with unique ID)
7. Helper functions:
   - wexoe_pa_get_colors($data) — merge defaults with overrides
   - wexoe_pa_lines_to_array($text) — split long text into array of lines
```

### 4.3 CSS Strategy

Following Wexoe conventions:

- **Unique ID per instance:** `#wexoe-pa-{uniqid}`
- **All selectors prefixed** with instance ID
- **`!important` on all properties**
- **Enfold list icon kill** on all `li::before`
- **DM Sans** imported via Google Fonts
- **Breakpoints:** 989px (tablet), 767px (mobile)
- **CSS custom properties** for color theming, set on the wrapper element
- **Full-width breakout** via `width: 100vw` + negative margin where needed

### 4.4 Airtable API

- **Method:** REST API via `wp_remote_get()`
- **Caching:** WordPress transients, 5 minute TTL
- **Lookup:** Filter by `Slug` field: `filterByFormula={Slug}='plc'`
- **Linked records:** Separate API calls per linked table, using record IDs from the link field
- **Error handling:** Graceful fallback — show nothing or admin-only error message

---

## 5. Section Specifications

### 5.1 TOP Banner

- **Height:** ~80px
- **Background:** `var(--pa-main)` (default `#11325D`)
- **Content:** H1 centered, white, uppercase, medium weight
- **Decoration:** Low-opacity SVG geometric shapes (hexagons, circuit lines, or abstract angular shapes) positioned at left and right edges via CSS `::before` / `::after` or inline SVG
- **Full width:** Breaks out of container with `100vw` technique

### 5.2 HERO

- **Layout:** Two columns — 60% text left, 40% benefits box right
- **Left column:**
  - H2 in `var(--pa-main)` color, bold
  - Body text in dark gray
  - CTA button: `var(--pa-secondary)` background (default orange), white text, arrow icon, Wexoe button style
- **Right column:**
  - Light background box (white or very light gray) with subtle border/shadow
  - Each benefit line prefixed with green checkmark (✓ `#10B981`)
  - Benefits parsed from `Hero Benefits` field (one per line)
- **Mobile:** Stack vertically, text above benefits box
- **Background:** White or very light gray

### 5.3 PRODUCT TOGGLE

- **Container:** Light gray background section, full width
- **Each product** is an accordion item:
  - **Collapsed state:**
    - Left: Product `Name` in bold (H3-like) + `Ecosystem Description` in regular weight
    - Right: Chevron icon (▼), rotates to (▲) when open
    - Bottom border separator between items
    - Hover: subtle background change
  - **Expanded state:**
    - Left column (55%): H3 product name, description text, bullet list (if populated)
    - Right column (45%): Product image (if populated), buttons below image
    - Buttons: side by side if two, full width if one
    - Button 1: `var(--pa-secondary)` (orange) background
    - Button 2: outlined style, `var(--pa-main)` border
  - **Multi-open:** Multiple toggles can be open simultaneously (no auto-close)
  - **First product:** Open by default
- **JavaScript:** Vanilla JS click handler, toggle `max-height` + class
- **Mobile:** Full width, buttons stack vertically

### 5.4 SOLUTIONS AND CONCEPTS

- **Section heading:** `Solutions Title` or default "Lösningar & Koncept"
- **Grid:** 4 columns on desktop, 2 on tablet, 1 on mobile (or horizontal scroll on mobile)
- **Each card:**
  - Image at top (aspect ratio 16:9, `object-fit: cover`)
  - Title below image, bold, `var(--pa-main)` color
  - Entire card is an `<a>` tag (fully clickable)
  - Hover: lift 4px + shadow + slight scale (1.02), title turns `var(--pa-secondary)`
  - White background, subtle border-radius (8px), light shadow
- **Mobile:** 2 columns or horizontal swipe (matching product nav pattern)

### 5.5 NORMAL Sections

- **Layout:** Two columns — 50/50 split
  - Default: text left, image right
  - Reversed: image left, text right (controlled by checkbox)
- **Text column:**
  - H2 heading in `var(--pa-main)`
  - Body text
  - Bullet list (if populated) with standard disc bullets (Enfold icon kill applied)
- **Image column:**
  - Image with slight border-radius (8px)
  - `object-fit: cover`, responsive
- **Alternating sections:** Even-numbered normals could have light gray background for visual rhythm
- **Mobile:** Always stack — text above image (regardless of reversed setting)

### 5.6 OUR GUY

- **Height:** Medium-thin (~200px content area)
- **Background:** `var(--pa-main)` or light gray
- **Layout:** Three columns on desktop:
  - Left: Circular/rounded profile image (~120px)
  - Middle: Name (bold), title, email (linked), phone (linked)
  - Right: Bio text describing their experience
- **Mobile:** Stack — image centered above contact + bio
- **Styling:** Warm but professional. If dark background: white text. If light: dark text.

### 5.7 DOCUMENTATION

- **Layout:** Centered, max-width container
- **Content:**
  - H2 heading centered
  - Calameo iframe below, full container width
  - Iframe attributes: `width="100%"`, `height="400"` (or configurable), `frameborder="0"`, `allowfullscreen`, `allowtransparency`
- **Background:** White
- **The Docs Iframe field** stores just the `src` URL, plugin wraps it in `<iframe>` tag

---

## 6. Color System

### 6.1 CSS Custom Properties

Set on the wrapper element, inherited by all children:

```css
#wexoe-pa-XXXXX {
    --pa-main: #11325D;       /* or Airtable override */
    --pa-secondary: #F28C28;  /* or Airtable override */
    --pa-tertiary: #E8E8E8;   /* or Airtable override */
}
```

### 6.2 Usage Mapping

| Property | Default | Used for |
|----------|---------|----------|
| `--pa-main` | `#11325D` | TOP bg, headings, dark sections, OUR GUY bg |
| `--pa-secondary` | `#F28C28` | CTA buttons, hover accents, active toggle indicator |
| `--pa-tertiary` | `#E8E8E8` | Subtle backgrounds, borders, toggle section bg |

---

## 7. Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| **Desktop** (>989px) | Full multi-column layouts as described |
| **Tablet** (768–989px) | 2-column grids, reduced padding, toggle columns may stack |
| **Mobile** (<768px) | Single column, stacked layouts, full-width buttons, horizontal scroll for solution cards |

---

## 8. Implementation Steps

### Phase 1: Setup & Data Layer
1. Create Airtable tables with all fields as specified in Section 2
2. Add 1–2 test records with sample data
3. Scaffold plugin file with header, constants, shortcode registration
4. Implement `wexoe_pa_fetch_product_area()` with transient caching
5. Implement `wexoe_pa_fetch_linked_records()` for Products and Solutions tables
6. Add `debug="true"` mode to dump raw API data

### Phase 2: Section Rendering (HTML + CSS)
7. Build color system helper (`wexoe_pa_get_colors`)
8. Render TOP section
9. Render HERO section
10. Render PRODUCT TOGGLE section (HTML + vanilla JS accordion)
11. Render SOLUTIONS AND CONCEPTS grid
12. Render NORMAL sections (×4, with reversed support)
13. Render OUR GUY section
14. Render DOCUMENTATION section

### Phase 3: Styling & Polish
15. Full CSS with Enfold isolation (unique ID, `!important`, list icon kill)
16. Responsive breakpoints (989px, 767px)
17. Hover effects and transitions
18. TOP banner decorative SVG elements
19. Google Fonts (DM Sans) loading

### Phase 4: Testing & Refinement
20. Test with populated and empty fields (verify conditional rendering)
21. Test all breakpoints
22. Test multiple instances on different pages
23. Performance check (transient caching working)
24. Cross-browser check

---

## 9. Conventions (from Wexoe Guide)

- ✅ Unique ID per instance: `#wexoe-pa-{uniqid}`
- ✅ `!important` on ALL CSS properties
- ✅ Kill Enfold list icons: `li::before { content: none !important; display: none !important; }`
- ✅ DM Sans font (Google Fonts)
- ✅ Breakpoints: 989px, 767px
- ✅ Full-width: `width: 100vw; margin-left: calc(-50vw + 50%);`
- ✅ Airtable API key hardcoded (matching existing plugins)
- ✅ `!important` resets on all inherited Enfold styles

---

## 10. Airtable Setup Checklist

### Create these tables:

- [ ] **Product Areas** — all fields from Section 2.1
- [ ] **Products** — all fields from Section 2.2
- [ ] **Solutions & Concepts** — all fields from Section 2.3

### Link the tables:

- [ ] `Product Areas.Products` → links to `Products` table
- [ ] `Product Areas.Solutions` → links to `Solutions & Concepts` table
- [ ] `Products.Product Area` → back-link to `Product Areas`
- [ ] `Solutions & Concepts.Product Areas` → back-link to `Product Areas`

### Add test data:

- [ ] 1 Product Area with all fields populated (full test)
- [ ] 1 Product Area with minimal fields (conditional rendering test)
- [ ] 2–3 Products linked to test area
- [ ] 2–4 Solutions linked to test area

---

## 11. Open Questions / Future Enhancements

- **Section ordering:** v1 is fixed order. Could add `Section Order` field in Airtable for custom ordering in v2.
- **CTA tracking:** Add UTM parameters or event tracking to buttons.
- **SEO:** Consider generating proper `<title>` and meta description from Airtable fields.
- **Caching TTL:** Currently 5 min. Could make configurable or add a "clear cache" admin button.
- **Multiple shortcodes per page:** Architecture supports it (unique IDs), but unlikely use case.
