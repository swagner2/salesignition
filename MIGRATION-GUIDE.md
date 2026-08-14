# Sales Ignition — Astro + Keystatic Developer & Editor Guide

Welcome to your consolidated, high-performance web platform! Your sites have been migrated from raw, loose HTML into a unified **Astro** project powered by the **Keystatic CMS** and deployed directly to the edge on **Cloudflare**.

---

## 🏗️ Project Structure

This project is built using **Astro** (for ultra-fast page rendering and compilation) and **Keystatic** (for zero-cost, local-first CMS editing).

```text
salesignition/
├── package.json               # Node dependency and script definitions
├── astro.config.mjs           # Astro integration settings (React, Markdoc, Cloudflare)
├── tsconfig.json              # TypeScript compilation setup
├── wrangler.toml              # Cloudflare Worker & Asset configurations
├── keystatic.config.ts        # Keystatic collections configuration (Blog, Pages)
├── public/                    # Global assets mapped to your root url
│   ├── images/                # High-res site graphics, avatars, and portfolio images
│   ├── assets/                # Dynamically loaded third-party asset bundles (e.g., CartSOS)
│   ├── shared/                # Legacy shared components (nav.html, footer.html)
│   └── style.css              # Main legacy stylesheet (served globally)
└── src/
    ├── layouts/
    │   └── Layout.astro       # Core page container with global layouts and styling
    ├── components/
    │   ├── Navigation.astro   # Interactive header (supports hamburger and sub-menus)
    │   └── Footer.astro       # Unified site copyright footer
    ├── content/               # CMS-managed local database files
    │   └── blog/              # Markdown/Markdoc blog posts (e.g., why-emails-go-to-spam.mdoc)
    └── pages/                 # Routing engine. Files here automatically turn into URLs
        ├── index.astro        # Modern homepage (light theme)
        ├── work-with-me.astro # Standard "Work With Me" page (light theme)
        ├── blog/
        │   ├── index.astro    # Blog homepage listing posts
        │   └── [slug].astro   # Dynamic blog post renderer
        ├── cartsos.html       # Newly added CartSOS landing page
        └── [legacy].html      # ~20 individual static marketing / case study pages
```

---

## 💻 Local Development

To run the site locally, edit content, or test pages before publishing:

1. **Install dependencies** (if setting up on a new device):
   ```bash
   npm install
   ```
2. **Start the local development server:**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   * 🌐 **`http://localhost:4321/`** — View the live local site.
   * 📝 **`http://localhost:4321/keystatic`** — Access the visual CMS editor.

---

## 📝 Managing Content (The CMS Way)

For standard blog writing or basic marketing page editing:

1. Start your local environment (`npm run dev`) and visit **`/keystatic`** in your browser.
2. Under **Blog Posts** or **Marketing Pages**, click **Create** or edit an existing entry.
3. Write your content using the rich-text visual editor (bolding, headers, lists, code, etc.).
4. Click **Create & Save**.
5. Keystatic writes the clean Markdown/Markdoc files directly inside your `src/content/` folder and pushes the commit directly to GitHub, which automatically kicks off your production Cloudflare deployment.

---

## 🛠️ Adding Custom Landing Pages (The Developer Way)

If you have a custom landing page design (such as a marketing layout with custom fonts, unique scripts, or checkouts) and want to migrate it in seconds without rewriting a single line of code:

1. Create a new file in **`src/pages/`**.
2. **The filename sets the URL path:**
   * Adding `src/pages/my-new-landing.html` serves the page at `salesignition.com/my-new-landing`.
   * Adding `src/pages/checkout/thank-you.html` serves the page at `salesignition.com/checkout/thank-you`.
3. Paste the raw, unaltered HTML directly into that file.
4. Put any required visual assets (images, stylesheets, custom script scripts) inside the **`public/`** folder so relative routes load perfectly.

---

## ⚡ Deployment & CI/CD Pipeline

Your deployments are fully automated. We configured **Zero-Config Cloudflare Worker Builds**:

* **Every push or merge to the `main` branch** on GitHub triggers Cloudflare to automatically deploy the site.
* The build command (`npm run build`) compiles your dynamic layouts, bundles assets, and prerenders your CMS content.
* The deploy command (`npx wrangler deploy`) uploads compiled code and static files straight to Cloudflare's edge servers.
