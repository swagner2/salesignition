# Sales Ignition Website — Build Guide & Image Replacement Reference

**Last updated:** March 2026  
**Total pages:** 12 (1 homepage + 11 case study pages)  
**Deployed via:** Cloudflare Workers (`wrangler deploy`)

---

## Site file map

```
sales-ignition-site/
├── index.html              ← Homepage (11 portfolio cards)
├── style.css               ← Shared stylesheet for all case study pages
│
├── true-citrus.html        ← Case study: True Citrus
├── miltons.html            ← Case study: Milton's Craft Bakers
├── taxquotes.html          ← Case study: TaxQuotes
├── emaildelivery.html      ← Case study: EmailDelivery.co
├── little-hunter.html      ← Case study: Little Hunter
├── tumblerware.html        ← Case study: Tumblerware
├── hear-com.html           ← Case study: Hear.com
├── blaze-n-chill.html      ← Case study: Blaze N Chill
├── enchant-brands.html     ← Case study: Enchant Brands
├── vurbmoto.html           ← Case study: Vurbmoto
├── therapy-clean.html      ← Case study: Therapy Clean
│
├── worker.js               ← Cloudflare Worker entry point
├── wrangler.toml           ← Cloudflare deployment config
│
└── images/
    ├── steven-headshot.png         ← Your nav logo photo (replaces placeholder)
    ├── steven-about.jpg            ← Your about section photo (replaces placeholder)
    ├── case-study-preview.png      ← Homepage case band screenshot
    ├── logos/                      ← Client logos for the scrolling strip
    ├── testimonials/               ← Testimonial author photos
    ├── portfolio/                  ← Homepage portfolio card preview images
    └── case-studies/               ← Full-width images inside each case study page
```

---

## Design & color reference

### Global palette (index.html inline styles)

| Variable | Value | Used for |
|---|---|---|
| `--bg` | `#ffffff` | Page background |
| `--bg-alt` | `#f7f6f3` | Alternating sections |
| `--text` | `#1a1a1a` | Body text |
| `--accent` | `#e84c1e` | CTA buttons, links, arrows |
| `--border` | `#e2e1de` | Card and section borders |

### Portfolio card brand colors

Each card has a unique background color. To change one, find the `.pcard--[slug]` class — the original 4 are in `index.html`, the 7 new ones are in `style.css`.

| Brand | CSS class | Background | Text |
|---|---|---|---|
| True Citrus | `.pcard--true-citrus` | `#f5e230` lemon yellow | Dark |
| Milton's Craft Bakers | `.pcard--miltons` | `#d4e8c2` natural green | Dark |
| TaxQuotes | `.pcard--taxquotes` | `#1a2d5a` navy | Light |
| EmailDelivery.co | `.pcard--emaildelivery` | `#0d1117` near-black | Light |
| Little Hunter | `.pcard--little-hunter` | `#f97316` burnt orange | Dark |
| Tumblerware | `.pcard--tumblerware` | `#0f766e` deep teal | Light |
| Hear.com | `.pcard--hear-com` | `#1e40af` rich blue | Light |
| Blaze N Chill | `.pcard--blaze-n-chill` | `#16a34a` deep green | Light |
| Enchant Brands | `.pcard--enchant-brands` | `#7c3aed` deep violet | Light |
| Vurbmoto | `.pcard--vurbmoto` | `#18181b` near-black | Light |
| Therapy Clean | `.pcard--therapy-clean` | `#e0f2fe` light sky blue | Dark |

---

## Face & person images currently in use

All currently hotlinked from conversion.design as working placeholders. Replace each with your own file at the path shown.

| Location | Current placeholder | Replace with |
|---|---|---|
| Nav logo (all 12 pages) | `conversion.design/.../jaka_smid_conversion_designer.png` | `images/steven-headshot.png` |
| About section photo | `conversion.design/.../jaka-smid.jpg` | `images/steven-about.jpg` |
| Testimonial 1 author | `conversion.design/.../karlo_bradica.png` | `images/testimonials/client-1.png` |
| Testimonial 2 author | `conversion.design/.../aaron_sustar.png` | `images/testimonials/client-2.png` |
| Social proof avatar row | `conversion.design/.../customers2x.png` | `images/customers.png` |

To replace the nav logo across all 12 pages in one command:

```bash
find . -name "*.html" -exec sed -i \
  's|https://conversion.design/public/images/jaka_smid_conversion_designer.png|images/steven-headshot.png|g' {} \;
```

---

## How to replace any image (same steps every time)

1. Take your screenshot — see the spec for each slot below
2. Save it to the exact file path shown (create the folder first if needed)
3. Open the HTML file in any text editor
4. Search `data-replace=` to jump straight to the image tag
5. Replace the `src="https://conversion.design/..."` with the local path
6. Remove the `data-replace` attribute once done
7. Save, refresh browser to confirm it looks right
8. Deploy: `wrangler deploy`

**Before:**
```html
<img src="https://conversion.design/public/images/wheelio/wheelio%20landing%20wireframes.png"
  alt="Flow wireframe" class="cs-image"
  data-replace="images/case-studies/true-citrus/flow-wireframe.png">
```

**After:**
```html
<img src="images/case-studies/true-citrus/flow-wireframe.png"
  alt="True Citrus Klaviyo flow architecture" class="cs-image">
```

---

## Image specifications

| | |
|---|---|
| **Case study images** | 1400px wide, any height, PNG preferred |
| **Portfolio card previews** | 800×500px (16:10), PNG or JPG |
| **Logo strip** | ~200px wide, transparent PNG |
| **Max file size** | 500KB per image — compress at squoosh.app |
| **Screenshot tool** | GoFullPage (Chrome) for full-page captures |

---

## Homepage image slots

### Personal / face images
See the face images table above.

### Case band preview
| Save to | What to put there |
|---|---|
| `images/case-study-preview.png` | A Klaviyo or EmailDelivery.co dashboard screenshot showing a strong before/after result |

### Portfolio card preview images
These sit at the bottom of each homepage card. Add a screenshot to make each one appear.

| Brand | Save to | What to screenshot |
|---|---|---|
| True Citrus | `images/portfolio/true-citrus-klaviyo.png` | Klaviyo revenue chart or a polished email design |
| Milton's | `images/portfolio/miltons-deliverability.png` | Inbox placement score or before/after |
| TaxQuotes | `images/portfolio/taxquotes-nurture.png` | Sequence flow or landing page |
| EmailDelivery.co | `images/portfolio/emaildelivery-tool.png` | emaildelivery.co homepage or score report |
| Little Hunter | `images/portfolio/little-hunter.png` | Klaviyo flow or email design |
| Tumblerware | `images/portfolio/tumblerware.png` | Klaviyo flow or email design |
| Hear.com | `images/portfolio/hear-com.png` | Nurture sequence or inbox dashboard |
| Blaze N Chill | `images/portfolio/blaze-n-chill.png` | Klaviyo flow or email design |
| Enchant Brands | `images/portfolio/enchant-brands.png` | Multi-brand account or email design |
| Vurbmoto | `images/portfolio/vurbmoto.png` | Deliverability dashboard or flow |
| Therapy Clean | `images/portfolio/therapy-clean.png` | Recharge + Klaviyo flow or email design |

### Logo strip images
The strip shows text fallbacks when logos are missing, so it works immediately. To add real logos, save transparent PNGs here — CSS applies grayscale automatically.

| Brand | Save to |
|---|---|
| Toyota | `images/logos/toyota.png` |
| Mercedes-Benz | `images/logos/mercedes.png` |
| True Citrus | `images/logos/true-citrus.png` |
| Milton's | `images/logos/miltons.png` |
| TaxQuotes | `images/logos/taxquotes.png` |
| Little Hunter | `images/logos/little-hunter.png` |
| Tumblerware | `images/logos/tumblerware.png` |

---

## Case study pages — all image slots

---

### true-citrus.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Flow architecture | `images/case-studies/true-citrus/flow-wireframe.png` | Klaviyo flow builder showing all automations. Zoom out so welcome, cart, post-purchase, and win-back are all visible. |
| 2 — Welcome series email | `images/case-studies/true-citrus/email-welcome.png` | Full scroll capture of the welcome email (~700px wide) |
| 3 — Abandoned cart email | `images/case-studies/true-citrus/email-abandoned-cart.png` | Full scroll capture of the abandoned cart email |
| 4 — Revenue results | `images/case-studies/true-citrus/results.png` | Klaviyo revenue dashboard before/after. Annotate with +34% / +$180k callouts. |

---

### miltons.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Deliverability audit | `images/case-studies/miltons/audit-report.png` | EmailDelivery.co or MXToolbox showing the failing state (61% inbox placement) |
| 2 — DNS setup | `images/case-studies/miltons/dns-setup.png` | MXToolbox showing SPF/DKIM/DMARC all green after the fix |
| 3 — Warm-up progress | `images/case-studies/miltons/warmup-progress.png` | InboxSmarts dashboard showing placement climbing back to 96% |
| 4 — Final results | `images/case-studies/miltons/results.png` | Before (61%) → after (96%) side by side |

---

### taxquotes.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Sequence flow map | `images/case-studies/taxquotes/flow-map.png` | ActiveCampaign automation canvas showing all 10 emails with delays |
| 2 — Email 1 opener | `images/case-studies/taxquotes/email-opener.png` | Urgency opener email, full scroll, subject line visible |
| 3 — Deadline CTA email | `images/case-studies/taxquotes/email-cta.png` | Final deadline-push email with April tax deadline urgency |
| 4 — Landing page | `images/case-studies/taxquotes/landing-page.png` | Full-page capture of the consultation booking landing page (use GoFullPage) |

---

### emaildelivery.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Homepage | `images/case-studies/emaildelivery/homepage.png` | emaildelivery.co full-page scroll |
| 2 — Score report | `images/case-studies/emaildelivery/score-report.png` | Run any domain through the tool, screenshot the full results |
| 3 — Analytics dashboard | `images/case-studies/emaildelivery/analytics.png` | Cloudflare Workers analytics or your custom dashboard |
| 4 — Retargeting funnel | `images/case-studies/emaildelivery/funnel.png` | Diagram of the Meta/LinkedIn/Google Display retargeting flow (build in Whimsical or Canva) |

---

### little-hunter.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Flow architecture | `images/case-studies/little-hunter/klaviyo-flows.png` | Klaviyo flow builder showing all automations |
| 2 — Welcome email | `images/case-studies/little-hunter/email-welcome.png` | Welcome series email full scroll |
| 3 — Post-purchase email | `images/case-studies/little-hunter/email-post-purchase.png` | Post-purchase email full scroll |
| 4 — Revenue results | `images/case-studies/little-hunter/results.png` | Klaviyo revenue before/after |

---

### tumblerware.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Deliverability audit | `images/case-studies/tumblerware/audit.png` | EmailDelivery.co audit for tumblerware.com |
| 2 — Klaviyo flows | `images/case-studies/tumblerware/flows.png` | All rebuilt Klaviyo flows |
| 3 — Email designs | `images/case-studies/tumblerware/email-design.png` | Abandoned cart + post-purchase side by side |
| 4 — Results | `images/case-studies/tumblerware/results.png` | Revenue dashboard before/after |

---

### hear-com.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Deliverability problem | `images/case-studies/hear-com/audit.png` | Audit report showing inbox issues at scale |
| 2 — Nurture sequence | `images/case-studies/hear-com/sequence.png` | Full sequence map in ActiveCampaign or HubSpot |
| 3 — Email designs | `images/case-studies/hear-com/email-design.png` | Patient nurture email screenshots |
| 4 — Results | `images/case-studies/hear-com/results.png` | Inbox placement dashboard restored to 98% |

---

### blaze-n-chill.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Segmentation | `images/case-studies/blaze-n-chill/segmentation.png` | Klaviyo segment builder showing new segment structure |
| 2 — Flow architecture | `images/case-studies/blaze-n-chill/flows.png` | Full Klaviyo automation stack |
| 3 — Email designs | `images/case-studies/blaze-n-chill/email-design.png` | Welcome and VIP email screenshots |
| 4 — Results | `images/case-studies/blaze-n-chill/results.png` | Revenue and engagement before/after |

---

### enchant-brands.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Multi-brand strategy | `images/case-studies/enchant-brands/strategy.png` | Brand architecture diagram or Klaviyo account overview |
| 2 — Flow architecture | `images/case-studies/enchant-brands/flows.png` | Klaviyo flows across the brand portfolio |
| 3 — Email designs | `images/case-studies/enchant-brands/email-design.png` | Sample emails from multiple brand properties |
| 4 — Results | `images/case-studies/enchant-brands/results.png` | Combined revenue dashboard across all brands |

---

### vurbmoto.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Deliverability crisis | `images/case-studies/vurbmoto/audit.png` | EmailDelivery.co showing 54% inbox placement (the before) |
| 2 — DNS fix | `images/case-studies/vurbmoto/dns.png` | MXToolbox showing corrected SPF/DKIM/DMARC |
| 3 — Klaviyo rebuild | `images/case-studies/vurbmoto/flows.png` | New flow architecture in Klaviyo |
| 4 — Results | `images/case-studies/vurbmoto/results.png` | Inbox rate at 95% + revenue dashboard |

---

### therapy-clean.html — 4 slots

| Slot | Save to | What to screenshot |
|---|---|---|
| 1 — Subscription flows | `images/case-studies/therapy-clean/flows.png` | Klaviyo + Recharge integration flow map |
| 2 — Dunning sequence | `images/case-studies/therapy-clean/dunning.png` | Failed payment recovery email sequence in Klaviyo |
| 3 — Email designs | `images/case-studies/therapy-clean/email-design.png` | Subscription loyalty and win-back email designs |
| 4 — Results | `images/case-studies/therapy-clean/results.png` | Subscription retention and LTV dashboard |

---

## Full folder structure to create

```
images/
├── steven-headshot.png
├── steven-about.jpg
├── case-study-preview.png
├── customers.png
├── logos/
│   ├── toyota.png
│   ├── mercedes.png
│   ├── true-citrus.png
│   ├── miltons.png
│   ├── taxquotes.png
│   ├── little-hunter.png
│   └── tumblerware.png
├── testimonials/
│   ├── client-1.png
│   └── client-2.png
├── portfolio/
│   ├── true-citrus-klaviyo.png
│   ├── miltons-deliverability.png
│   ├── taxquotes-nurture.png
│   ├── emaildelivery-tool.png
│   ├── little-hunter.png
│   ├── tumblerware.png
│   ├── hear-com.png
│   ├── blaze-n-chill.png
│   ├── enchant-brands.png
│   ├── vurbmoto.png
│   └── therapy-clean.png
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
    ├── emaildelivery/
    │   ├── homepage.png
    │   ├── score-report.png
    │   ├── analytics.png
    │   └── funnel.png
    ├── little-hunter/
    │   ├── klaviyo-flows.png
    │   ├── email-welcome.png
    │   ├── email-post-purchase.png
    │   └── results.png
    ├── tumblerware/
    │   ├── audit.png
    │   ├── flows.png
    │   ├── email-design.png
    │   └── results.png
    ├── hear-com/
    │   ├── audit.png
    │   ├── sequence.png
    │   ├── email-design.png
    │   └── results.png
    ├── blaze-n-chill/
    │   ├── segmentation.png
    │   ├── flows.png
    │   ├── email-design.png
    │   └── results.png
    ├── enchant-brands/
    │   ├── strategy.png
    │   ├── flows.png
    │   ├── email-design.png
    │   └── results.png
    ├── vurbmoto/
    │   ├── audit.png
    │   ├── dns.png
    │   ├── flows.png
    │   └── results.png
    └── therapy-clean/
        ├── flows.png
        ├── dunning.png
        ├── email-design.png
        └── results.png
```

---

## How to add a new portfolio entry

1. Copy any existing case study page as a starting point, e.g. `cp little-hunter.html new-client.html`
2. Update the H1, eyebrow, description, meta bar, and all 4 image slots
3. Add a `.pcard--new-client` color rule to `style.css`
4. Add the card HTML block to `index.html` inside `.portfolio__grid`
5. Add a link to `new-client.html` in the `.other-projects__grid` inside **every** existing case study page (11 files)
6. Add the new image slots to this README

---

## Deploy

```bash
cd sales-ignition-site
wrangler deploy
```

Live within ~30 seconds at your Cloudflare Workers URL.

---

## Recommended tools

| Tool | Use for | URL |
|---|---|---|
| GoFullPage | Full-page scroll captures in Chrome | gofullpage.com |
| CleanShot X | Annotated screenshots (Mac) | cleanshot.com |
| Squoosh | Compress images before uploading | squoosh.app |
| Whimsical | Flow diagrams and funnel maps | whimsical.com |
| Canva | Before/after comparison layouts | canva.com |
| MXToolbox | SPF / DKIM / DMARC validation screenshots | mxtoolbox.com/SuperTool.aspx |

---

*Sales Ignition LLC · Greenville, South Carolina · hello@salesignition.com*
