# Image Replacement Guide — Sales Ignition Website

All case study pages currently show **real images hotlinked from conversion.design** as
placeholders, so every page renders with actual content immediately. This file tells you
exactly which image to replace, what to put there, and how to do it.

---

## How to replace an image (same steps every time)

1. **Take your screenshot** — see the spec for each slot below
2. **Save it** to the exact file path shown (create the folder if it doesn't exist)
3. **Open the HTML file** in a text editor
4. **Find the `<img>` tag** — search for the `data-replace="..."` attribute to locate it fast
5. **Replace the `src="https://conversion.design/..."` URL** with the local path shown
6. **Save and refresh** your browser to confirm it looks right
7. **Deploy** — `wrangler deploy`

### Example — before:
```html
<img src="https://conversion.design/public/images/wheelio/wheelio%20landing%20wireframes.png"
  alt="Klaviyo flow wireframe" class="cs-image"
  data-replace="images/case-studies/true-citrus/flow-wireframe.png">
```

### Example — after:
```html
<img src="images/case-studies/true-citrus/flow-wireframe.png"
  alt="Klaviyo flow wireframe for True Citrus" class="cs-image">
```

---

## Image specifications

- **Width:** 1400px is ideal for full-width section images (the site scales them to 100%)
- **Format:** PNG for screenshots, JPG for photos — PNG preferred for dashboards/UI
- **File size:** Compress to under 500KB per image using [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com)
- **Screenshots:** Use a full-screen browser window at 1400px wide. On Mac, use Cmd+Shift+4 or a tool like [CleanShot X](https://cleanshot.com)

---

## true-citrus.html — 4 images to replace

**File:** `true-citrus.html`
**Search for:** `data-replace="images/case-studies/true-citrus/..."`

---

### Slot 1 of 4 — Flow architecture wireframe

| | |
|---|---|
| **Save to** | `images/case-studies/true-citrus/flow-wireframe.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio/wheelio landing wireframes.png` |
| **What to screenshot** | Your Klaviyo flow builder showing all automation flows for True Citrus — welcome series, abandoned cart, post-purchase, win-back. Zoom out so all flows are visible. |
| **Tips** | In Klaviyo: go to Flows → select the flow → take a wide screenshot. Ideally show multiple flows side by side. |

**In the HTML, find and update:**
```html
<!-- BEFORE -->
<img src="https://conversion.design/public/images/wheelio/wheelio%20landing%20wireframes.png"
  ...
  data-replace="images/case-studies/true-citrus/flow-wireframe.png">

<!-- AFTER -->
<img src="images/case-studies/true-citrus/flow-wireframe.png"
  alt="True Citrus Klaviyo flow architecture" class="cs-image">
```

---

### Slot 2 of 4 — Welcome series email design

| | |
|---|---|
| **Save to** | `images/case-studies/true-citrus/email-welcome.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio/wheelio landing page design sales.png` |
| **What to screenshot** | Full scroll capture of the welcome series email (top to bottom). Use your email client or a tool like [Litmus](https://litmus.com) to render it. |
| **Tips** | Capture at ~700px wide (email width). Use browser DevTools to resize if needed. |

---

### Slot 3 of 4 — Abandoned cart email design

| | |
|---|---|
| **Save to** | `images/case-studies/true-citrus/email-abandoned-cart.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio/wheelio landing page success story.png` |
| **What to screenshot** | Full scroll capture of the abandoned cart email design — subject line through CTA button. |

---

### Slot 4 of 4 — Revenue results

| | |
|---|---|
| **Save to** | `images/case-studies/true-citrus/results.png` |
| **Current placeholder** | `https://conversion.design/public/images/spin_rewriter_landing_page_design.png` |
| **What to screenshot** | Klaviyo revenue dashboard showing the before/after or the YoY comparison. Go to Klaviyo → Analytics → Revenue and set date ranges. Screenshot the chart + the key metrics. Annotate with arrows or callout boxes showing the +34% / +$180k numbers. |
| **Tips** | A side-by-side before/after is the most compelling. You can create a simple comparison layout in Canva or Figma. |

---

## miltons.html — 4 images to replace

**File:** `miltons.html`
**Search for:** `data-replace="images/case-studies/miltons/..."`

---

### Slot 1 of 4 — Deliverability audit report

| | |
|---|---|
| **Save to** | `images/case-studies/miltons/audit-report.png` |
| **Current placeholder** | `https://conversion.design/public/images/ebn_landing_page_design.png` |
| **What to screenshot** | Your EmailDelivery.co audit report for miltonsbread.com showing the failing checks (the "before" state). Or an MXToolbox screenshot showing the SPF/DKIM/DMARC failures. |
| **Tips** | If you no longer have the original failing state, recreate a mock-up or use a different domain as an example of what failures look like. |

---

### Slot 2 of 4 — DNS & authentication setup

| | |
|---|---|
| **Save to** | `images/case-studies/miltons/dns-setup.png` |
| **Current placeholder** | `https://conversion.design/public/images/sendcloud.png` |
| **What to screenshot** | The corrected DNS records — SPF, DKIM, and DMARC all green. Use [MXToolbox SuperTool](https://mxtoolbox.com/SuperTool.aspx) and screenshot the "all passing" validation results. |

---

### Slot 3 of 4 — Warm-up progress

| | |
|---|---|
| **Save to** | `images/case-studies/miltons/warmup-progress.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio_admin_dashboard_design.png` |
| **What to screenshot** | InboxSmarts dashboard showing inbox placement climbing from 61% back to 96% over the warm-up period. The time-series chart works best here. |

---

### Slot 4 of 4 — Final results

| | |
|---|---|
| **Save to** | `images/case-studies/miltons/results.png` |
| **Current placeholder** | `https://conversion.design/public/images/spin_rewriter_landing_page_design.png` |
| **What to screenshot** | Final inbox placement at 96%. Side-by-side before/after is ideal. Can combine: EmailDelivery.co score before (61%) on the left, score after (96%) on the right, with a big arrow between them. |

---

## taxquotes.html — 4 images to replace

**File:** `taxquotes.html`
**Search for:** `data-replace="images/case-studies/taxquotes/..."`

---

### Slot 1 of 4 — ActiveCampaign sequence flow map

| | |
|---|---|
| **Save to** | `images/case-studies/taxquotes/flow-map.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio_landing_page_design.png` |
| **What to screenshot** | The full ActiveCampaign automation showing all 10 emails in sequence with their delays and conditions visible. Go to Automations → select the TaxQuotes sequence → screenshot the full flow canvas. |
| **Tips** | Zoom out enough to show all 10 steps. If it's very tall, use a full-page screenshot tool. |

---

### Slot 2 of 4 — Email 1 — urgency opener

| | |
|---|---|
| **Save to** | `images/case-studies/taxquotes/email-opener.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio/wheelio landing page design sales.png` |
| **What to screenshot** | Full scroll capture of Email 1 — the urgency/fear-based opener about unfiled taxes. Include the subject line and preview text if possible. |

---

### Slot 3 of 4 — Deadline CTA email

| | |
|---|---|
| **Save to** | `images/case-studies/taxquotes/email-cta.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio/wheelio landing page success story.png` |
| **What to screenshot** | The final deadline-push email with the April tax deadline urgency and consultation booking CTA prominent. |

---

### Slot 4 of 4 — Landing page

| | |
|---|---|
| **Save to** | `images/case-studies/taxquotes/landing-page.png` |
| **Current placeholder** | `https://conversion.design/public/images/pirate_store_ecommerce_design.png` |
| **What to screenshot** | Full-page scroll capture of the TaxQuotes consultation booking landing page. Ideally show mobile + desktop side by side, or just a tall full-page capture showing the business-hours live call detection feature. |
| **Tips** | Use [GoFullPage](https://gofullpage.com/) Chrome extension to capture the full scrollable page as one image. |

---

## emaildelivery.html — 4 images to replace

**File:** `emaildelivery.html`
**Search for:** `data-replace="images/case-studies/emaildelivery/..."`

---

### Slot 1 of 4 — Homepage

| | |
|---|---|
| **Save to** | `images/case-studies/emaildelivery/homepage.png` |
| **Current placeholder** | `https://conversion.design/public/images/vigo-preview.png` |
| **What to screenshot** | Full-page scroll capture of emaildelivery.co homepage. |
| **Tips** | Use GoFullPage Chrome extension for a clean full-page capture. |

---

### Slot 2 of 4 — Score report

| | |
|---|---|
| **Save to** | `images/case-studies/emaildelivery/score-report.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio/wheelio landing page design sales.png` |
| **What to screenshot** | Run your own domain (or any domain) through the tool and screenshot the full score report output — all checks, scores, and recommendations visible. |

---

### Slot 3 of 4 — Analytics dashboard

| | |
|---|---|
| **Save to** | `images/case-studies/emaildelivery/analytics.png` |
| **Current placeholder** | `https://conversion.design/public/images/wheelio_admin_dashboard_design.png` |
| **What to screenshot** | Your Cloudflare Workers analytics dashboard showing request volume and usage. Or your custom analytics dashboard deployed on Cloudflare Workers. |

---

### Slot 4 of 4 — Retargeting funnel

| | |
|---|---|
| **Save to** | `images/case-studies/emaildelivery/funnel.png` |
| **Current placeholder** | `https://conversion.design/public/images/evolve_garden_ecommerce_design.png` |
| **What to screenshot** | A diagram showing how warm traffic from emaildelivery.co is followed via retargeting to inboxsmarts.com across Meta, LinkedIn, and Google Display. You can build this diagram in [Whimsical](https://whimsical.com), Figma, or Canva in about 15 minutes. |

---

## Folder structure to create

```
images/
└── case-studies/
    ├── true-citrus/
    │   ├── flow-wireframe.png
    │   ├── email-welcome.png
    │   ├── email-abandoned-cart.png
    │   └── results.png
    ├── miltons/
    │   ├── audit-report.png
    │   ├── dns-setup.png
    │   ├── warmup-progress.png
    │   └── results.png
    ├── taxquotes/
    │   ├── flow-map.png
    │   ├── email-opener.png
    │   ├── email-cta.png
    │   └── landing-page.png
    └── emaildelivery/
        ├── homepage.png
        ├── score-report.png
        ├── analytics.png
        └── funnel.png
```

---

## Quick-find cheat sheet

To jump to any image tag in any HTML file, search for `data-replace=` — every placeholder
image has this attribute with the exact local path you need to save your file to.

```
Ctrl+F (or Cmd+F) → search: data-replace
```

Each tag looks like this:
```html
<img src="https://conversion.design/..."   ← replace this URL
  alt="..."
  class="cs-image"
  data-replace="images/case-studies/..."   ← save your file to this path
>
```

Once you've replaced all images for a page, you can remove the `data-replace` attribute —
it's only there to help you find the slots.

---

## Recommended screenshot tools

| Tool | Use case | Link |
|------|----------|------|
| GoFullPage | Full-page scroll capture in Chrome | [gofullpage.com](https://gofullpage.com) |
| CleanShot X (Mac) | Annotated screenshots with callouts | [cleanshot.com](https://cleanshot.com) |
| Squoosh | Compress PNG/JPG before uploading | [squoosh.app](https://squoosh.app) |
| Whimsical | Build simple funnel/flow diagrams | [whimsical.com](https://whimsical.com) |
| Canva | Side-by-side before/after layouts | [canva.com](https://canva.com) |

---

*Sales Ignition LLC · Greenville, South Carolina*
