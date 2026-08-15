# Sales Ignition — Content & Landing Page Workflows

This document outlines the standard operating procedures for managing content, writing blog articles, and launching new landing pages on **Sales Ignition**.

---

## 🏗️ Architecture Overview

The site is built on a high-performance, $0/mo serverless stack:
* **Framework:** [Astro](https://astro.build/) (Static Site Generation + Serverless Edge)
* **CMS:** [Keystatic](https://keystatic.com/) (Git-backed Markdown / Markdoc CMS)
* **Hosting & CI/CD:** [Cloudflare Pages](https://dash.cloudflare.com/)
* **Repository:** [swagner2/salesignition](https://github.com/swagner2/salesignition)

---

## ✍️ Workflow 1: Publishing a New Blog Post (via Keystatic)

Use this workflow for written articles, guides, deliverability blueprints, and educational content.

### Step-by-Step Instructions:

1. **Start the Local Dev Server:**
   ```bash
   cd /Users/steven/salesignition
   npm run dev
   ```

2. **Open the Keystatic Dashboard:**
   * Navigate to: **`http://localhost:4321/keystatic`**
   * Click on **Blog Posts** in the sidebar.
   * Click the **Create** button in the top right.

3. **Fill in the Article Metadata:**
   * **Title:** Full headline of your article.
   * **Slug:** URL-friendly string (e.g., `klaviyo-vip-segmentation-guide`).
   * **Published Date:** Publication date.
   * **Category:** Choose from dropdown (`Deliverability`, `Klaviyo`, `AI & Systems`, `Strategy`, `Campaigns`, `Case Study`).
   * **Description:** 1–2 sentence summary used for SEO and blog card previews.
   * **Content:** Write or paste your Markdown content directly into the rich text editor.

4. **Save & Publish:**
   * Click **Save** in Keystatic.
   * Keystatic creates/updates the file at `src/content/blog/<slug>.mdoc`.

5. **Deploy to Production:**
   ```bash
   git add src/content/blog/
   git commit -m "feat(blog): publish <slug> article"
   git push origin main
   ```
   *Cloudflare will automatically rebuild and deploy within ~30–60 seconds.*

6. **Live Verification:**
   * **Blog Listing:** `https://salesignition.com/blog`
   * **Direct Article:** `https://salesignition.com/blog/<slug>`

---

## 🚀 Workflow 2: Launching a New Landing Page (via Astro / Standalone File)

Use this workflow for custom marketing funnels, tool landing pages, sales pages, or lead magnets requiring custom HTML/CSS layouts, animations, or embeds.

### Step-by-Step Instructions:

1. **Choose Your Page Format:**

   * **Option A — Astro Page (`src/pages/my-offer.astro`):**
     * *Best for:* Pages that share the global site navigation, footer, and brand typography.
     ```astro
     ---
     import Layout from '../layouts/Layout.astro';
     ---
     <Layout title="My Offer Title | Sales Ignition">
       <section class="hero">
         <h1>Custom Landing Page Headline</h1>
         <p>Custom sales copy and CTA buttons...</p>
       </section>
     </Layout>
     ```

   * **Option B — Standalone HTML (`src/pages/my-offer.html`):**
     * *Best for:* External funnel exports, Carrd sites, custom React builds, or standalone tools that need their own completely isolated CSS/JS (like `retention-os.html` or `cartsos.html`).

2. **Save Your Assets (Images, Scripts, CSS):**
   * Place static images into: `public/assets/images/` or `public/images/`
   * In your code, reference images with absolute root paths: `<img src="/images/my-image.png" />`

3. **Preview & Test Locally:**
   * View live in your browser: `http://localhost:4321/my-offer`

4. **Deploy to Production:**
   ```bash
   git add src/pages/my-offer.astro public/
   git commit -m "feat: add my-offer landing page"
   git push origin main
   ```

5. **Live Verification:**
   * **Live URL:** `https://salesignition.com/my-offer`

---

## 📁 Key File Locations

| Directory / File | Purpose |
| :--- | :--- |
| **`src/content/blog/`** | Raw Markdown/Markdoc files for all published blog posts. |
| **`src/pages/`** | All active site routes and landing pages. |
| **`src/pages/blog/index.astro`** | Dynamic blog listing grid (auto-fetches all posts from `src/content/blog/`). |
| **`src/pages/blog/[slug].astro`** | Single article layout template. |
| **`src/components/Navigation.astro`** | Global header & top navigation menu. |
| **`src/components/Footer.astro`** | Global site footer. |
| **`src/layouts/Layout.astro`** | Master site layout template (meta tags, theme styles). |
| **`public/`** | Static assets served directly at root (images, sitemap, favicons). |
| **`scripts/generate_sitemap.js`** | Auto-generates `public/sitemap.xml` during every build. |

---

## 🛠️ Handy Commands

```bash
# Start local development server
npm run dev

# Run full production build test
npm run build

# Push changes live
git push origin main
```
