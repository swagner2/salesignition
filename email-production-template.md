# Email Production Template

> One per email. Fill every field before an email goes into production. Anything blank is a blocker.

---

## Email Brief

| Field | Entry |
|---|---|
| **Campaign or Flow** | _Campaign / Flow_ — if Flow, name the flow + trigger + step # |
| **Deadline** | _Campaigns:_ scheduled send date/time + time zone (and build/approval due date) |
| **Name** | Internal name (e.g. `2026-06_Welcome_E1_Genesis-Intro`) |
| **Goal / Intent** | The one outcome this email drives + how you'll measure it (e.g. "Drive first purchase — track clicks to PDP & conversions") |
| **Audience** | Segment / list / flow filter. Note exclusions & suppressions |
| **Subject Line** | Primary (≤ ~40 chars renders best on mobile) |
| **Subject Line — B (optional)** | A/B test variant |
| **Pre Text** | Preview/preheader text — **limit 200 characters** |
| **Headline** | The H1 inside the email |
| **Copy** | Body copy (paste full text) |
| **Call to Action** | Button/link label + destination URL |
| **Images** | Each image: purpose, file/asset, **alt text**, link target |
| **Links** | Every link in the email + its UTM-tagged URL |

---

## Field Detail

**Campaign or Flow**
- [ ] Campaign (one-time send) — note send date/time + time zone
- [ ] Flow (automation) — flow name, trigger, and step number

**Deadline** *(campaigns)*
- Scheduled send date/time + time zone:
- Build/approval due by:

**Name**
`YYYY-MM_Type_Step_ShortDescriptor` — consistent naming so it's searchable later.

**Goal / Intent**
- Primary outcome (one — what action should this email produce?):
- Success metric (open / click / conversion / revenue):
- _Tip: if you can't name one primary action, the email is trying to do too much._

**Audience**
- Target segment(s) / list(s):
- Exclusions (recent purchasers, unengaged, already-in-flow, etc.):
- Est. recipient count:

**Subject Line**
- A:
- B (optional):
- _Tip: front-load the value; avoid spam triggers (ALL CAPS, "free", excessive punctuation)._

**Pre Text** *(max 200 characters — do not repeat the subject line; extend it)*
-

**Headline**
-

**Copy**
```
(full body copy here)
```

**Call to Action**
- Primary CTA label:
- Primary CTA URL:
- Secondary CTA (optional):

**Images**

| # | Purpose | Asset / file | Alt text | Links to |
|---|---|---|---|---|
| 1 | Logo (header) | | | |
| 2 | Hero | | | |
| 3 | | | | |

**Links**

| Link text | Destination URL (with UTM) |
|---|---|
| | |
| | |

---

## Pre-Production Checklist

- [ ] Subject + pre-text fit limits; no duplication between them
- [ ] All links work and carry UTM tags
- [ ] Every image has alt text
- [ ] Footer: physical address, unsubscribe, "why you're receiving this"
- [ ] Mobile + desktop preview checked
- [ ] Dark-mode rendering checked (logo not lost)
- [ ] Audience + exclusions confirmed
- [ ] On-brand per brand guide (colors, fonts, voice, CTA style)
- [ ] Test send reviewed and approved
