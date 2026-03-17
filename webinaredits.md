# Sales Ignition — Webinar Signup Page
### `webinar-signup.html`

A reusable, mobile-first webinar registration page. Every new webinar = copy the file, rename it, update the fields below. No other files needed.

---

## Quick Start

1. Copy `webinar-signup.html` → rename to your topic slug  
   e.g. `webinar-klaviyo-flows.html` or `webinar-deliverability-101.html`
2. Open it in a text editor and find every `<!-- EDIT: -->` comment
3. Update the fields listed in this doc
4. Add your photos to the `images/` folder
5. Deploy: `wrangler pages deploy . --project-name=sales-ignition`
6. Live at: `salesignition.com/webinar-your-slug.html`

---

## File Naming

**Format:** `webinar-[topic-slug].html`

| Webinar topic | File name |
|---|---|
| Email Revenue in 90 Days | `webinar-email-revenue-90-days.html` |
| Klaviyo Flows Masterclass | `webinar-klaviyo-flows.html` |
| Deliverability 101 | `webinar-deliverability-101.html` |

Rules: lowercase, hyphens only, always start with `webinar-`

---

## Images — Specs & File Paths

### Host headshot (your photo)
| Property | Value |
|---|---|
| File path | `images/steven-headshot.png` |
| Dimensions | **400 × 400px minimum** (square) |
| Format | PNG or JPG |
| Max file size | 150KB |
| Crop | Face centered, from shoulders up |
| Shape | Displayed as a circle — keep face in center of frame |

If the image fails to load, the circle shows **"SW"** initials automatically.

### Guest headshot
| Property | Value |
|---|---|
| File path | `images/guest-headshot.png` |
| Dimensions | **400 × 400px minimum** (square) |
| Format | PNG or JPG |
| Max file size | 150KB |
| Crop | Face centered, from shoulders up |
| Shape | Displayed as a circle — keep face in center of frame |

If the image fails to load, the circle shows **"GS"** initials automatically.

> **Tip:** Use CleanShot X or squoosh.app to crop and resize. The circle crops to the center of the image, so a head-and-shoulders square shot works best. Don't use a wide landscape photo — it will crop oddly.

---

## What Every Field Does — Top to Bottom

### 1. Browser Tab Title
```html
<title>Free Webinar: [Topic] | Sales Ignition</title>
```
Shows in the browser tab and in Google search results. Keep under 60 characters.

---

### 2. Meta Description
```html
<meta name="description" content="...">
```
Shows in Google search result previews. Write 140–160 characters. Should describe the webinar and include a reason to click.

---

### 3. Urgency Topbar (red stripe at the very top)
```html
<div class="topbar">
  🔴 <strong>Live Webinar</strong> — Limited spots available. Register now to save your seat.
</div>
```
Change the text to match your urgency message. You can also remove the emoji, change the icon, or remove this entire `<div class="topbar">` block if you don't want it.

---

### 4. Nav Badge (top right, small pill)
```html
<span class="nav__badge">Free Live Session</span>
```
Options: `Free Live Session`, `Free Masterclass`, `Free Workshop`, `Paid Event`, etc.

---

### 5. Live Badge (green pulsing dot above the headline)
```html
<span class="live-badge__text">Free Webinar</span>
```
Change the label to match your session type:
- `Free Webinar`
- `Free Workshop`
- `Live Masterclass`
- `Members Only`

The dot and badge are **green** by default. To change the color, find `.live-badge` in the `<style>` block and update the `rgba(22,163,74,...)` values to any color you like.

---

### 6. Hero Headline (H1)
```html
<h1 class="hero__title">
  How to Turn Your Email List Into a<br>
  <em>Revenue Machine</em> in 90 Days
</h1>
```
The `<em>` tag makes a word or phrase italic — use it on the most powerful phrase in your headline. Line breaks (`<br>`) are optional; remove them on mobile to let text wrap naturally.

---

### 7. Hero Subheadline
```html
<p class="hero__sub">
  A free live session for DTC and e-commerce brand owners...
</p>
```
2–3 sentences. Who is this for and what will they walk away with?

---

### 8. Event Details (date, time, platform, duration)
```html
<div class="event-detail">
  <div class="event-detail__icon">📅</div>
  <span><strong>Thursday, May 15th, 2025</strong><br>2:00 PM Eastern · 11:00 AM Pacific</span>
</div>
```
Three blocks: date/time, duration, platform. Update all three. You can add a 4th block (e.g. for a bonus or recording policy) by copying one `<div class="event-detail">` block.

---

### 9. Social Proof Strip (under the event details)
```html
<div class="hero__proof-text">
  <strong>247 people registered</strong><br>
  DTC founders and marketers from Klaviyo brands
</div>
```
Update the registrant count as registrations come in. The avatar circles to the left are placeholder initials — you can replace them with real attendee photos (32×32px PNG, circular) if you have them.

---

### 10. Form Card Headline
```html
<h3>Save Your Spot — It's Free</h3>
<p>Takes 30 seconds. Replay sent if you can't attend live.</p>
```
The small text below the form title. Keep it short and reduce friction.

---

### 11. Countdown Timer — Setting the Date
Find this line near the bottom of the file in the `<script>` block:
```js
const WEBINAR_DATE = new Date('2025-05-15T14:00:00-04:00');
```
Change the date and time. The format is: `YYYY-MM-DDTHH:MM:SS-TZ`

| Part | Example | Meaning |
|---|---|---|
| Date | `2025-05-15` | May 15, 2025 |
| Time | `T14:00:00` | 2:00 PM |
| Timezone offset | `-04:00` | Eastern Daylight Time |
| Timezone offset | `-05:00` | Eastern Standard Time |
| Timezone offset | `-07:00` | Mountain Time |
| Timezone offset | `-08:00` | Pacific Time |

When the countdown reaches zero it stops at `00:00:00:00` — no message appears.

---

### 12. Form Fields
The form has these fields by default:
- First Name (required)
- Last Name
- Work Email (required)
- Brand / Company
- Annual Revenue Range (dropdown)

**To remove a field:** Delete the entire `<div class="field">` block for that field.

**To add a field:** Copy any `<div class="field">` block and change the `id`, `name`, `label`, and `placeholder`.

**To add a phone field:**
```html
<div class="field">
  <label for="phone">Phone Number</label>
  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" autocomplete="tel">
</div>
```

---

### 13. Submit Button Text
```html
<button type="submit" class="submit-btn">
  Reserve My Free Seat
  <span class="submit-btn__arrow">→</span>
</button>
```
Change `Reserve My Free Seat` to whatever fits. Keep it action-oriented and outcome-focused.

---

### 14. Success Message (shown after form submit)
```html
<div class="form-success" id="form-success">
  <h4>You're registered!</h4>
  <p>Check your inbox for a confirmation email with the Zoom link...</p>
</div>
```
Update to match your confirmation flow. If you redirect to a thank-you page instead, delete this block and update the form submit handler in the `<script>` section to do `window.location.href = '/thank-you.html'`.

---

### 15. What You'll Learn Section
```html
<div class="learn-item">
  <div class="learn-item__num">1</div>
  <div>
    <h4>The 5-Flow Revenue Stack</h4>
    <p>Explanation of what they'll learn and why it matters.</p>
  </div>
</div>
```
The grid holds 6 items by default (2 columns on desktop, 1 on mobile). Add or remove items freely — the grid adjusts automatically. Number them sequentially.

---

### 16. Host Speaker Section

**To update:**
```html
<!-- Photo -->
<img src="images/steven-headshot.png" alt="Steven Wagner" ...>

<!-- Name -->
<h3>Steven Wagner</h3>

<!-- Title -->
<span class="speaker-info__title">Founder, Sales Ignition · Email Deliverability Expert</span>

<!-- Bio paragraphs -->
<p>Bio text here...</p>
<p>Second paragraph here...</p>

<!-- Credential tags -->
<span class="speaker-cred">Klaviyo Certified</span>
```

---

### 17. Guest Speaker Section

Same structure as host. All editable fields:
```html
<!-- Photo — save to images/guest-headshot.png -->
<img src="images/guest-headshot.png" alt="Guest Speaker" ...>

<!-- Name -->
<h3>Guest Name</h3>

<!-- Title and company -->
<span class="speaker-info__title">Title · Company Name</span>

<!-- Bio -->
<p>Guest bio here...</p>

<!-- Credential tags -->
<span class="speaker-cred">Credential One</span>
```

> To **remove the guest speaker** entirely: delete the entire `<!-- ══ GUEST SPEAKER ══ -->` section (from that comment down to the next `</section>`).

---

### 18. Testimonials
Each testimonial card:
```html
<div class="proof-card">
  <p class="proof-card__quote">The quote text goes here.</p>
  <div class="proof-card__author">First Name L.</div>
  <div class="proof-card__company">Role, Brand Description</div>
</div>
```
3 cards shown on desktop (side by side), stacked on mobile. Add or remove cards freely.

> Use first name + last initial only for testimonials (e.g. "Jane D.") unless the person has explicitly given permission to use their full name.

---

### 19. Bottom CTA Strip
```html
<h2>It's free. It's live. It's 60 minutes.</h2>
<p>Supporting sentence with registrant count and replay note.</p>
```
Mirrors the hero messaging. Keep it short and direct.

---

## Connecting a Real Form Handler

The form currently shows a success message (demo only). To actually capture registrations, pick one:

### Option A — Klaviyo embed
Replace the entire `<form>` block with your Klaviyo embed snippet.

### Option B — ActiveCampaign embed
Replace the entire `<form>` block with your ActiveCampaign embed snippet.

### Option C — Fetch to your platform's API
In the `<script>` block, replace the `setTimeout(...)` section with a real API call:
```js
const res = await fetch('https://your-api-endpoint.com/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    first_name: form.first_name.value,
    email: form.email.value,
    // ... other fields
  })
});
if (res.ok) {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}
```

### Option D — Redirect to thank-you page
```js
window.location.href = '/thank-you.html';
```

---

## Conversion Tracking

Uncomment these lines in the form submit handler when you're ready:
```js
// if (typeof gtag !== 'undefined') gtag('event', 'webinar_signup');
// if (typeof fbq !== 'undefined') fbq('track', 'Lead');
```

---

## Colors — Quick Reference

To change any color, edit the `:root` block at the top of `<style>`:

| Variable | Default | Used for |
|---|---|---|
| `--accent` | `#e84c1e` | Buttons, arrows, stat numbers |
| `--accent-dark` | `#c93d14` | Button hover state |
| `--accent-light` | `#fef2ee` | Light tint backgrounds |
| `--bg-dark` | `#111110` | Hero background |
| `--bg-dark-2` | `#1c1c1a` | Form panel on desktop |
| `--text` | `#1a1a1a` | Body text |
| `--text-muted` | `#666666` | Secondary text |
| `--border` | `#e2e1de` | Card borders, dividers |

The **green live badge** color is hardcoded to `#16a34a` (not a CSS variable). To change it, search the `<style>` block for `#16a34a` and update all three instances.

---

## New Webinar Checklist

Copy this every time you create a new page:

- [ ] File copied and renamed (`webinar-[slug].html`)
- [ ] `<title>` updated (under 60 chars)
- [ ] `<meta name="description">` updated (140–160 chars)
- [ ] Topbar urgency message updated
- [ ] Nav badge label updated
- [ ] Live badge label updated
- [ ] Hero headline updated (with `<em>` on key phrase)
- [ ] Hero subheadline updated
- [ ] Event date, time, platform, duration updated
- [ ] Registrant count updated (update periodically)
- [ ] Form card headline updated
- [ ] Countdown date set in `<script>` block (`WEBINAR_DATE`)
- [ ] What You'll Learn items updated (5–7 items)
- [ ] Host photo saved to `images/steven-headshot.png` (400×400px)
- [ ] Guest photo saved to `images/guest-headshot.png` (400×400px)
- [ ] Guest name, title, bio, credentials updated
- [ ] Testimonials updated (real quotes if available)
- [ ] Bottom CTA copy updated
- [ ] Form connected to real handler (Klaviyo, AC, or API)
- [ ] Conversion tracking uncommented (if using GA/Meta Pixel)
- [ ] Deployed: `wrangler pages deploy . --project-name=sales-ignition`
- [ ] Live URL tested on mobile (check form, countdown, photos)

---

*Last updated: March 2026 · Questions: hello@salesignition.com*
