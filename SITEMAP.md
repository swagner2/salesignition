# Sales Ignition — Site Map & Page Inventory

> Last updated: 2026-04-01

## Pages in This Repo (salesignition.crmr.workers.dev)

| # | Page | File | Status | Nav Style | Font Stack |
|---|------|------|--------|-----------|------------|
| 1 | **Homepage** | `index.html` | Live | SI nav (dropdown) | Open Sans |
| 2 | **Homepage V2** (AI focus) | `index2.html` | Live | SI nav (simple) | Open Sans |
| 3 | **Work With Me** → Close.io | `work-with-me.html` | Live | SI nav (dropdown) | Open Sans |
| 4 | **Webinar** | `webinar.html` | Live | Custom (badge nav) | Open Sans + DM Serif Display |
| 5 | **Lifecycle Scorecard** (lead magnet) | `life.html` | Live | Custom (standalone) | Inter |
| 6 | **Email Template Swipes** | `swipes.html` | Live | None (sales page) | Google Sans + Roboto |
| 7 | **Mobile Checkout – Journeys** | `journeys.html` | Live | None (sales page) | Bebas Neue + Source Sans 3 |
| 8 | ~~Templates (Dark)~~ | ~~`templates.html`~~ | **Removed** | — | — |
| 9 | **Figma Templates V2** | `templates.html` | Live | Custom | Outfit |
| 10 | **Blog** | `blog/index.html` | Partial (1 article) | Custom | — |

### Case Studies (all use `style.css` + SI nav)

| Page | File | Copy | Images | Issues |
|------|------|------|--------|--------|
| True Citrus | `true-citrus.html` | Done | 4 placeholders | — |
| Milton's Craft Bakers | `miltons.html` | Done | 4 placeholders | — |
| TaxQuotes | `taxquotes.html` | Done | 4 placeholders | — |
| EmailDelivery.co | `emaildelivery.html` | Done | 4 placeholders | — |
| Little Hunter | `little-hunter.html` | Done | 4 placeholders | Fixed — correct paths + active state |
| Tumblerware | `tumblerware.html` | Done | 4 placeholders | — |
| Hear.com | `hear.html` | Done | 4 placeholders | — |
| Blaze N Chill | `blaze-n-chill.html` | Done | 4 placeholders | — |
| Enchant Brands | `enchant-brands.html` | Done | 4 placeholders | — |
| VurbMoto | `vurbmoto.html` | Done | 4 placeholders | Fixed — proper VurbMoto content |
| Therapy Clean | `therapy-clean.html` | Done | 4 placeholders | — |

---

## External Properties (NOT in this repo)

| # | Product | URL | Stack | Notes |
|---|---------|-----|-------|-------|
| 3 | **Audit** | `audit.salesignition.com` | Cloudflare Worker? | Separate deployment |
| 6 | **Cart SOS** | `cart.salesignition.com` | Cloudflare Worker? | Separate deployment |
| 7 | **Retention Dashboard** | `retentiondash.crmr.workers.dev/#pricing` | Cloudflare Worker | Separate deployment |
| 8 | **Deliverability Audit ($999)** | `emaildeliveryaudit2.crmr.workers.dev` | Cloudflare Worker | Separate deployment |
| 9 | **Email Delivery Self Checker** | `emaildelivery.co` | Cloudflare Worker | Owned tool / lead gen |

---

## Known Issues

### Critical
- [x] ~~**vurbmoto.html** is a copy of therapy-clean.html~~ — rewritten with correct VurbMoto content
- [x] ~~**templates.html** has placeholder GoHighLevel URLs~~ — file removed
- [ ] **templates.html** has placeholder email (`YOUR_EMAIL@yourdomain.com`)
- [x] ~~**little-hunter.html** data-replace attributes reference "tumblerware" paths~~ — fixed to little-hunter

### Images
- [ ] No `images/case-studies/` directory — all 44 case study image slots are external placeholders
- [ ] Several files in `images/portfolio/` are 2-byte stubs (corrupted)
- [ ] Hero/product images are very large (1.7–5.4 MB) — need optimization

### Consistency
- [ ] 6+ different font stacks across pages
- [ ] 3 different nav patterns (SI nav, standalone, none)
- [ ] All non-case-study pages use inline CSS (no shared stylesheet)
- [ ] Case study nav links to `index.html#contact` but other pages link to `work-with-me.html`
- [ ] Footer links inconsistent (`#` placeholders for Privacy/Terms on product pages)

---

## Shared Architecture (`/shared/`)

The `shared/` directory centralizes components that repeat across pages.
When editing the nav, footer, or common styles — **edit here first**, then
propagate to pages.

| File | Purpose | Used By |
|------|---------|---------|
| `shared/nav.html` | Canonical navigation HTML | Copy into every page |
| `shared/footer.html` | Canonical footer HTML | Copy into every page |
| `shared/nav.js` | Hamburger toggle + mobile nav | `<script src="shared/nav.js">` at bottom of `<body>` |
| `shared/base.css` | Resets, typography, buttons, nav, footer CSS | Link from every page |
| `shared/theme-light.css` | Light theme CSS variables | Homepage, Work With Me, Blog |
| `shared/theme-dark.css` | Dark theme CSS variables | All case studies |
| `style.css` | Case study–specific layout (hero, body, images, sidebar) | All 11 case studies |

### How to add a new page (light theme)

```html
<link href="shared/theme-light.css" rel="stylesheet">
<link href="shared/base.css" rel="stylesheet">
<!-- page-specific CSS below -->

<!-- paste shared/nav.html here -->
<!-- page content -->
<!-- paste shared/footer.html here -->

<script src="shared/nav.js"></script>
```

### How to add a new case study (dark theme)

```html
<link href="shared/theme-dark.css" rel="stylesheet">
<link href="shared/base.css" rel="stylesheet">
<link href="style.css" rel="stylesheet">

<!-- paste shared/nav.html here -->
<!-- case study content -->
<!-- paste shared/footer.html here -->

<script src="shared/nav.js"></script>
```

### Standalone product pages

Pages like `life.html`, `swipes.html`, `journeys.html`, `templates.html`, and
`templates.html` are **standalone sales/product pages** with their own branding.
They intentionally use different fonts and layouts. These do NOT share the SI
nav — they have their own navigation suited to their sales funnel.

---

## Shared Assets

| Asset | Used By | Path |
|-------|---------|------|
| `style.css` | All 11 case studies | `/style.css` |
| Steven headshot | Nav across site | `/images/Steve-SR-Crop.png` (66KB, use this one) |
| Open Sans | All SI-branded pages | Google Fonts CDN |

## External Services

| Service | Used By | Purpose |
|---------|---------|---------|
| Spiffy (`saleignite.spiffy.co`) | journeys, templates, swipes | Checkout/payments |
| GoHighLevel | templates.html | Checkout (NOT configured) |
| Google Fonts | All pages | Typography |
| conversion.design | Case study placeholders | Image CDN (temporary) |
| Cloudflare Email Protection | Footer emails | Anti-scrape |

---

## Page Categories

### SI-branded pages (shared nav + footer + base.css)
These should all use the shared architecture:
- `index.html` (light theme)
- `index2.html` (light theme, slightly different nav)
- `work-with-me.html` (light theme)
- `webinar.html` (light theme)
- `blog/index.html` (light theme)
- All 11 case study pages (dark theme)

### Standalone product/sales pages (own branding)
These are self-contained and intentionally different:
- `life.html` — Lifecycle Scorecard (Inter font, unique design)
- `swipes.html` — Email Swipe Files (Google Sans + Roboto)
- `journeys.html` — Mobile Checkout (Bebas Neue + Source Sans 3)
- `templates.html` — StealFlows V2 (Outfit font)
