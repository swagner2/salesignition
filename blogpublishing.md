# Sales Ignition Blog — Article Writing & Publishing Guide

Everything you need to write, format, and publish a new article at `salesignition.com/blog/`.

---

## Table of Contents

1. [Quick Start (TL;DR)](#1-quick-start-tldr)
2. [File Naming](#2-file-naming)
3. [Article Structure Overview](#3-article-structure-overview)
4. [Metadata — Title, Description, Canonical URL](#4-metadata)
5. [Article Header Fields](#5-article-header-fields)
6. [Categories & Tags](#6-categories--tags)
7. [Typography & Font Sizes](#7-typography--font-sizes)
8. [Content Components](#8-content-components)
9. [Images — Sizes, Naming, Placement](#9-images)
10. [The Sidebar — Customizing Promo Cards](#10-the-sidebar)
11. [Adding the Article to the Index Page](#11-adding-the-article-to-the-index-page)
12. [Deploying](#12-deploying)
13. [Full New Article Checklist](#13-full-new-article-checklist)

---

## 1. Quick Start (TL;DR)

1. Copy `why-emails-go-to-spam.html` → rename to your slug (e.g. `klaviyo-abandoned-cart.html`)
2. Update the 8 header fields (title, meta description, canonical URL, category, h1, intro, date, tags)
3. Write your content using the component blocks below
4. Save your images to `blog/images/blog/` at the correct sizes
5. Add a card to `blog/index.html`
6. Run `wrangler pages deploy . --project-name=sales-ignition-blog`

---

## 2. File Naming

### Article HTML files
Save all article files directly in the `blog/` folder — not in subfolders.

**Format:** `[topic-slug].html`
**Rules:**
- Lowercase only
- Words separated by hyphens (`-`), never underscores or spaces
- Keep it short — 3 to 6 words maximum
- Should match the core topic of the article, not the full title

| Article title | File name |
|---|---|
| Why Your Emails Are Going to Spam | `why-emails-go-to-spam.html` |
| The 5 Klaviyo Segments Every DTC Brand Needs | `klaviyo-segments-dtc.html` |
| SPF, DKIM, and DMARC Setup Guide | `spf-dkim-dmarc-guide.html` |
| How to Build an AI Email Copy System | `ai-email-copy-system.html` |
| Vurbmoto Deliverability Case Study | `vurbmoto-deliverability-case-study.html` |

### Image files
See [Section 9](#9-images) for image naming conventions.

---

## 3. Article Structure Overview

Each article page (`why-emails-go-to-spam.html` and all copies of it) has this structure:

```
<head>           ← SEO metadata, canonical URL, page title
<nav>            ← Site nav (same on every page — do not change)
<breadcrumb>     ← Back links: Blog > Category > Article title
<article-header> ← Category badge, H1, intro paragraph, byline, tags
<article-hero-img> ← Full-width hero image (optional)
<article-layout> ← Two-column layout
  ├── <article-content>  ← LEFT: your article body
  │     ├── .toc         ← Table of contents
  │     ├── h2 / h3      ← Section headings
  │     ├── p            ← Body paragraphs
  │     ├── .callout     ← Highlighted callout boxes
  │     ├── .step        ← Numbered step boxes
  │     ├── .stat-pull   ← Big-number pull quotes
  │     ├── .check-list  ← Arrow bullet lists
  │     ├── .author-card ← Author bio (bottom, same on every article)
  │     └── .related     ← 4 related article links
  └── <aside.sidebar>    ← RIGHT: promo cards (customizable per article)
<footer>
```

---

## 4. Metadata

At the top of every article, update these four lines inside `<head>`:

```html
<title>Your Article Title (Under 60 Chars) | Sales Ignition Blog</title>
<meta name="description" content="One or two sentences. Around 150–160 characters. Plain language summary of what the reader will get.">
<link rel="canonical" href="https://blog.salesignition.com/your-slug.html">
```

**Title rules:**
- Under 60 characters total (including " | Sales Ignition Blog")
- Front-load the main keyword (e.g. "Klaviyo Abandoned Cart..." not "How to Set Up Your Klaviyo...")
- No clickbait — match what the article actually delivers

**Meta description rules:**
- 140–160 characters
- Should make someone want to click from a Google search result
- Mention the main outcome or takeaway

**Canonical URL:**
- Always `https://blog.salesignition.com/` + your exact filename
- Must match the filename exactly, including `.html`

---

## 5. Article Header Fields

Inside `<header class="article-header">`, update these in order:

### Category badge
```html
<span class="article-header__cat">Deliverability</span>
```
Use one of the 6 exact category values — see [Section 6](#6-categories--tags).

### H1 — Article title
```html
<h1>Your Full Article Title Goes Here</h1>
```
- This can be longer and more descriptive than the `<title>` tag
- 10 to 18 words is the ideal range
- Should immediately communicate the specific value the reader will get
- The font size is set automatically by CSS (`clamp(2rem, 4vw, 3rem)`) — do not add inline styles

### Intro paragraph
```html
<p class="article-header__intro">One or two sentences...</p>
```
- 2–3 sentences max
- Expand on the h1 — tell them what they'll know or be able to do by the end
- Do not repeat the title word for word
- This shows above the byline and sets the expectation for the whole piece

### Byline & date
```html
<strong>Steven Wagner</strong> · April 8, 2025 · 12 min read
```
- Date format: `Month D, YYYY` (e.g. `April 8, 2025`)
- Read time: estimate roughly 200 words per minute (a 2,000-word article = 10 min read)

### Article tags (end of header)
```html
<span class="article-header__tag">Deliverability</span>
<span class="article-header__tag">Klaviyo</span>
<span class="article-header__tag">Authentication</span>
```
- 2 to 4 tags per article
- Tags are display-only (not linked) in the header
- Use title case, plain descriptive words

---

## 6. Categories & Tags

### The 6 valid categories

Every article must use **exactly one** of these category values. It must be consistent in three places: the article header badge, the `data-cat` attribute on the article card in `index.html`, and the breadcrumb nav.

| Display label | `data-cat` value | Use for |
|---|---|---|
| Deliverability | `deliverability` | SPF/DKIM/DMARC, inbox placement, blacklists, warm-up |
| Klaviyo | `klaviyo` | Flows, segments, automations, Klaviyo-specific guides |
| AI & Systems | `ai` | AI tools, copy systems, testing frameworks, automation |
| Strategy | `strategy` | Email revenue strategy, frameworks, program structure |
| Campaigns | `campaigns` | Campaign calendars, send cadence, subject lines, design |
| Case Studies | `casestudy` | Client results, before/after breakdowns |

### Category badge in article header
```html
<span class="article-header__cat">Deliverability</span>
```
Use the display label (title case), not the `data-cat` value.

### Category in breadcrumb nav
```html
<a href="/?cat=deliverability">Deliverability</a>
```
The `?cat=` value must match the `data-cat` value exactly (lowercase).

### Tags at the end of the article
```html
<div class="article-end__tags">
  <a class="article-end__tag" href="/?cat=deliverability">Deliverability</a>
  <a class="article-end__tag" href="/?cat=klaviyo">Klaviyo</a>
</div>
```
These tags are linked and filter the index page. Use the same `data-cat` values in the `href`.

---

## 7. Typography & Font Sizes

All font sizes are controlled by CSS — **do not add `font-size` inline styles** to headings or paragraphs. Just use the right HTML element.

| Element | CSS size | Use for |
|---|---|---|
| `<h1>` | `clamp(2rem, 4vw, 3rem)` | Article title (one per page, in the header) |
| `<h2>` | `1.5rem` | Major section headings inside the article body |
| `<h3>` | `1.15rem` | Sub-section headings, named items within a section |
| `<h4>` | `1rem` | Labels inside component boxes (`.step`, sidebar cards) |
| `<p>` (body) | `17px` | Main body paragraphs |
| `<p>` (intro) | `1.1rem` | Article intro paragraph (class `article-header__intro`) |
| `.eyebrow` | `11px` | Small all-caps label above a heading |
| `.acard__excerpt` | `14px` | Excerpt text on index page cards |

**Heading IDs for TOC linking:**
Every `h2` and `h3` that appears in the Table of Contents needs an `id` attribute:
```html
<h2 id="your-section-slug">Section Heading</h2>
```
The id should be a lowercase hyphenated version of the heading text.

**Bold text:**
Use `<strong>` to bold a phrase inside a paragraph. It renders in near-black (`#1a1a1a`) which creates contrast against the muted gray body text.

---

## 8. Content Components

These are the custom-styled blocks you can drop into the article body. Copy and paste the HTML snippets below.

---

### Standard body paragraph
```html
<p>Your paragraph text here. Standard 17px body copy, muted gray color.</p>
```

---

### H2 section heading (with TOC anchor)
```html
<h2 id="section-slug">Section Heading</h2>
```

---

### H3 sub-heading
```html
<h3>Sub-Heading</h3>
```

---

### Callout box — 3 styles

**Default (orange/red — use for key insights):**
```html
<div class="callout">
  <p><strong>Key point label:</strong> Your callout text here. Keep it to 2–3 sentences max.</p>
</div>
```

**Warning (yellow — use for "watch out" moments):**
```html
<div class="callout callout--warn">
  <p>⚠️ <strong>Warning:</strong> Your warning text here.</p>
</div>
```

**Tip (green — use for actionable quick wins):**
```html
<div class="callout callout--tip">
  <p>💡 <strong>Tip:</strong> Your tip text here.</p>
</div>
```

---

### Step box (numbered steps)
```html
<div class="step">
  <span class="step__num">Step 1</span>
  <h3>Step Title</h3>
  <p>Explanation of this step. Can include multiple paragraphs.</p>
  <p>Second paragraph if needed.</p>
</div>
```
Change `Step 1` to `Step 2`, `Step 3`, etc. You can also use other labels like `Phase 1`, `Check 1`, etc.

---

### Stat pull quote (big number, dark background)
```html
<div class="stat-pull">
  <span class="stat-pull__num">34%</span>
  <p>One or two sentences of context explaining what this number means and why it matters.</p>
</div>
```
The number can include symbols: `+34%`, `~73%`, `$240K`, `3×`, etc.

---

### Arrow check list
```html
<ul class="check-list">
  <li>First item — use for outcomes, criteria, or sequential steps</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```
Each `li` automatically gets a `→` arrow prefix in the accent color.

---

### Inline image
```html
<img src="images/blog/your-image.png" alt="Descriptive alt text"
  class="article-img"
  onerror="this.style.display='none';">
<p class="article-img-caption">Optional caption text below the image.</p>
```
See [Section 9](#9-images) for image size requirements.

---

### Image placeholder (while you find the real screenshot)
```html
<div class="article-img-placeholder">📊 Placeholder: images/blog/your-image.png</div>
```
Replace with a real `<img>` tag once you have the screenshot.

---

### Inline code
```html
<code style="background:var(--bg-card);padding:2px 6px;border-radius:3px;font-size:13px;">your-code-here</code>
```

---

### Author card (bottom of every article — do not change)
The `.author-card` block at the bottom of the article is the same on every page. Do not edit it per article — it auto-pulls the headshot from `images/steven-headshot.png`.

---

### Related articles (4 links, update per article)
```html
<div class="related">
  <h3>Related Articles</h3>
  <div class="related__grid">
    <a class="related-card" href="slug-one.html">
      <span class="related-card__cat">Category</span>
      <span class="related-card__title">Article Title Here</span>
      <span class="related-card__meta">X min read</span>
    </a>
    <!-- repeat 3 more times -->
  </div>
</div>
```
Pick 4 articles that are genuinely related. At least 2 should be from the same category.

---

### Table of Contents
Update the TOC to match your actual `h2` and `h3` ids:
```html
<nav class="toc" aria-label="Table of contents">
  <span class="toc__title">In this article</span>
  <ol>
    <li><a href="#section-one">Section One Heading</a></li>
    <li><a href="#section-two">Section Two Heading</a></li>
    <li><a href="#step-1">Step 1: Name</a></li>
  </ol>
</nav>
```
The TOC auto-highlights the active section as the reader scrolls (via IntersectionObserver). No extra JavaScript needed.

---

## 9. Images

### Folder structure
All blog images live in:
```
sales-ignition-site/
└── blog/
    └── images/
        └── blog/
            ├── featured-deliverability.png
            ├── spf-dkim-dmarc.png
            └── [article-slug]-[descriptor].png
```

### Image naming
**Format:** `[article-slug]-[descriptor].png`

| Image | Example filename |
|---|---|
| Hero/featured image for deliverability article | `why-emails-go-to-spam-hero.png` |
| Inline screenshot of SPF record | `spf-dkim-dmarc-spf-record.png` |
| Klaviyo segments dashboard | `klaviyo-segments-dashboard.png` |
| Results chart | `abandoned-cart-results.png` |

Rules:
- Lowercase, hyphens only, no spaces
- `.png` for screenshots and diagrams; `.jpg` for photos
- Always use descriptive names — not `screenshot1.png` or `image-2.png`

### Required sizes

| Image slot | Dimensions | Max file size | Format |
|---|---|---|---|
| Hero / featured image (top of article) | 1400 × 600px | 400KB | PNG or JPG |
| Hero on index featured section | 1200 × 750px | 350KB | PNG or JPG |
| Inline article image (full content width) | 1000 × 560px | 300KB | PNG |
| Article card thumbnail (index page) | 800 × 500px | 200KB | PNG or JPG |
| Author headshot (nav + byline) | 200 × 200px | 50KB | PNG |

### Aspect ratios
- Hero image: **21:9** (very wide banner)
- Featured index image: **16:10**
- Inline article images: **16:9**
- Article card thumbnails: **16:10**

### Quick resize workflow
Use **Squoosh** (free, browser-based at squoosh.app) or **CleanShot X** on Mac:
1. Export/screenshot your source image at full resolution
2. Open in Squoosh → resize to target width → export as PNG
3. For Klaviyo screenshots: capture at 1× zoom (not retina) so text stays readable

### Alt text
Every `<img>` must have a descriptive `alt` attribute:
```html
<!-- Good -->
<img alt="Klaviyo segment builder showing engaged subscribers filter">

<!-- Bad -->
<img alt="screenshot">
<img alt="">
```

### What makes a good blog image
- **Klaviyo screenshots:** Show the actual UI — flows canvas, segment builder, analytics dashboard. Zoom out enough to show context but zoom in enough to read labels.
- **Results charts:** Screenshot directly from Klaviyo revenue dashboards with a date range visible.
- **Deliverability screenshots:** MXToolbox, Google Postmaster Tools, EmailDelivery.co reports.
- **Diagrams:** Simple flowcharts created in Figma or Canva work well — export at 2× for sharpness.
- **Avoid:** Generic stock photos, AI-generated illustrations, anything without real data.

---

## 10. The Sidebar

Each article has a sticky right-column sidebar with 5 swappable blocks. You can customize the sidebar per article to promote whatever is most relevant to that article's reader.

### Default sidebar blocks (in order)

| Block | Class | Default content |
|---|---|---|
| 1 | `.sidebar-promo` | Email Revenue Accelerator program CTA (dark card) |
| 2 | `.sidebar-audit` | Free EmailDelivery.co audit tool |
| 3 | `.sidebar-services` | Links to all services |
| 4 | `.sidebar-newsletter` | Email subscribe form |
| 5 | `.sidebar-popular` | Top 5 popular articles (update manually) |

### Swapping a sidebar block

To replace a block, swap out the inner `<div>` while keeping the outer `.sidebar-card` wrapper:

```html
<!-- Example: replace promo block with a specific offer -->
<div class="sidebar-card">
  <div class="sidebar-promo">   <!-- keep this class for dark styling -->
    <span class="sidebar-promo__eyebrow">Free Resource</span>
    <h4>Title of your offer</h4>
    <p>Short description — 2 sentences max.</p>
    <a class="btn" href="/your-link.html">CTA Text →</a>
  </div>
</div>
```

### Updating popular posts
The "Popular Articles" block (#5) is a manually maintained list. Update it every few months, or when you notice an article getting strong traffic. Edit the `<ol class="popular-list">` in each article file.

---

## 11. Adding the Article to the Index Page

After writing the article file, add a card to `blog/index.html` inside `<div class="articles__grid" id="articles-grid">`.

Copy this template and fill in your details:

```html
<article class="acard" data-cat="deliverability">
  <div class="acard__img">
    <img src="images/blog/your-thumbnail.png" alt="Brief description"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
    <div class="acard__img-placeholder">📬</div>
  </div>
  <div class="acard__body">
    <span class="acard__cat">Deliverability</span>
    <a class="acard__title" href="your-slug.html">Your Full Article Title Here</a>
    <p class="acard__excerpt">1–2 sentence excerpt. Should be punchy and outcome-focused. Under 140 characters ideally.</p>
    <div class="acard__footer">
      <span class="acard__meta">Apr 2025 · 10 min read</span>
      <a class="acard__read" href="your-slug.html">Read →</a>
    </div>
  </div>
</article>
```

**Checklist for the card:**
- `data-cat` value matches one of the 6 valid category slugs (lowercase, no spaces)
- `acard__cat` display label matches (title case)
- `href` on both the title and "Read →" link matches the article filename exactly
- Thumbnail image is at `images/blog/` at 800 × 500px
- Emoji fallback in `.acard__img-placeholder` if image is missing
- Date format: `MMM YYYY` (e.g. `Apr 2025`)

**Where to insert the new card:**
Add it at the top of the grid so newest articles appear first.

### If you need to add a new category
1. Add a new filter button in `blog/index.html`:
   ```html
   <button class="cat-btn" data-cat="newcat">New Category</button>
   ```
2. Use `data-cat="newcat"` on article cards in that category
3. Use `newcat` in the `href="/?cat=newcat"` links on article tag chips

---

## 12. Deploying

### First time setup
```bash
npm install -g wrangler
wrangler login
```

### Every time you publish or update
```bash
# From the sales-ignition-site/ root (the blog is in the blog/ subfolder)
cd sales-ignition-site
wrangler pages deploy . --project-name=sales-ignition-blog
```

The deploy takes about 30 seconds. Your article is live immediately at:
```
salesignition.com/blog/your-slug.html
```

### What gets deployed
Everything in `sales-ignition-site/blog/` — all HTML files and the entire `blog/images/` folder. You don't need to specify individual files; Cloudflare Pages picks up the whole directory.

### Checking your deploy
After deploying, visit the article URL directly and check:
- Page title in browser tab matches `<title>` tag
- Hero image loads (or falls back to placeholder gracefully)
- Sidebar renders at full width on desktop, stacks below article on mobile
- TOC links scroll to the correct sections
- Related article links are not 404s

---

## 13. Full New Article Checklist

Use this every time you publish:

### Setup
- [ ] Copied `why-emails-go-to-spam.html` → renamed to `[your-slug].html`
- [ ] File saved in `blog/` folder (not a subfolder)

### Metadata (`<head>`)
- [ ] `<title>` updated — under 60 chars, ends with `| Sales Ignition Blog`
- [ ] `<meta name="description">` updated — 140–160 chars
- [ ] `<link rel="canonical">` updated with correct full URL

### Article header
- [ ] Category badge updated (one of the 6 categories, title case)
- [ ] `<h1>` updated with article title
- [ ] `.article-header__intro` updated (2–3 sentences)
- [ ] Byline date updated (`Month D, YYYY`)
- [ ] Read time updated (word count ÷ 200, rounded to nearest minute)
- [ ] Header tags (2–4 tags using `<span class="article-header__tag">`)

### Breadcrumb nav
- [ ] Category link updated (`href="/?cat=yourcategory"`)
- [ ] Article title text updated at end of breadcrumb

### Content
- [ ] TOC items match actual `h2`/`h3` IDs in the article
- [ ] All `h2` section headings have `id` attributes for TOC linking
- [ ] Hero image referenced at top of layout (or placeholder div present)
- [ ] Related articles section updated with 4 real article links
- [ ] Article end tags updated with correct category `href` values
- [ ] Author card is intact (no edits needed)

### Images
- [ ] Hero image saved to `blog/images/blog/` at 1400 × 600px
- [ ] Article card thumbnail saved at 800 × 500px
- [ ] All inline images saved at 1000 × 560px
- [ ] All `alt` attributes are descriptive

### Sidebar
- [ ] Block 1 (promo) is relevant to this article's topic
- [ ] Popular posts list is current (update if older than 2 months)

### Index page (`blog/index.html`)
- [ ] New article card added at the top of `.articles__grid`
- [ ] `data-cat` attribute matches the correct category slug
- [ ] Both `href` links in the card point to the correct filename
- [ ] Card thumbnail image is the right path and file exists

### Deploy
- [ ] Run `wrangler pages deploy . --project-name=sales-ignition-blog` from `sales-ignition-site/` root
- [ ] Visit the live article URL and verify it loads correctly
- [ ] Visit `salesignition.com/blog/` and confirm the card appears at the top

---

*Last updated: March 2026 · Questions? hello@salesignition.com*
