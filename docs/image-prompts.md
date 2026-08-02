# Gemini Photorealistic Image Prompts — Green Hill Facilities

Deliverable of the "content-rich page build" phase. These 5 prompts cover every photo slot currently live on the site (Home Hero, About "Our Story", and the 3 Services category covers). Gallery imagery is a later stage and not included here.

**Do not reuse the Company Profile PDF's stock photography** — it's generic Western stock imagery, not authentic to the Indian NCR audience this site is for. Every prompt below is written to depict **Indian personnel in an authentic Delhi NCR setting**.

## How to use these

1. Run each prompt through Gemini image generation at the highest resolution available.
2. Optimize the result through [squoosh.app](https://squoosh.app) → export as WebP (per the project's image convention).
3. Save to the exact path listed under each prompt — the component code already points at these paths, so dropping the file in place is the only step needed (no code changes).
4. Keep the stated aspect ratio — the layout slots are already sized for it, so an off-ratio image will crop awkwardly.

**Shared style baseline** (apply to all 5): photorealistic, shot on a full-frame DSLR with a 35–50mm lens, natural available light, photojournalistic/editorial tone (not a stiff corporate stock-photo pose). No visible text, logos, brand names, agency insignia, or watermarks anywhere in frame — the uniforms should be plain dark security-wear with no readable badges. No overlaid text of any kind (the site adds its own text on top).

---

### 1. Home Hero
**Save to:** `public/images/hero/hero-home.webp` · **Aspect ratio:** ~21:9 (e.g. 2400×1050)

> A confident Indian male security supervisor in his late 30s, wearing a crisp dark charcoal-navy security uniform with epaulettes and a radio clipped to his shoulder, standing at the entrance of a modern glass-fronted corporate office building in Delhi NCR. He faces slightly off-camera toward the right third of the frame with a calm, approachable, professional expression — authoritative but not intimidating. Early morning golden-hour light rakes across the building's glass facade behind him, creating warm highlights and soft bokeh in the background landscaping. Photorealistic, editorial photography style, shallow depth of field, shot wide at 21:9 with generous negative space on the left and top third of the frame for text overlay. Warm-neutral color grade with deep navy shadow tones and amber highlight light. No visible text, logos, or uniform insignia. No watermark.

---

### 2. About — "Our Story"
**Save to:** `public/images/about/our-story.webp` · **Aspect ratio:** 4:5 portrait

> An Indian security supervisor in his 40s mentoring a younger trainee guard in his early 20s at the entrance of a residential society in Delhi NCR, both in plain dark security uniforms with no visible insignia. The supervisor gestures naturally while explaining something, the trainee listens attentively — a candid, unposed mentoring moment, not a stiff lineup photo. Daytime, soft natural light, gated residential entrance with Indian architectural details (plastered boundary wall, gate, some greenery) visible but softly out of focus behind them. Medium shot, both figures visible from the waist up, 4:5 portrait crop. Photorealistic, warm neutral daylight with a slight golden undertone, deep navy tones in the shadow areas. No text, logos, or watermark.

---

### 3. Services — Security Guard Services (cover)
**Save to:** `public/images/services/security-guard/cover.webp` · **Aspect ratio:** ~21:9

> An Indian security guard in a plain dark uniform standing at a reception/access-control desk in a modern Indian corporate office lobby, professionally checking a visitor's ID against a register, alert and courteous posture. Clean, minimal lobby interior with daytime light through glass entrance doors, balanced by warm desk-lamp light at the check-in point. Subject positioned in the left-to-center third of the frame, lobby space extending to the right for text overlay. Photorealistic, editorial corporate photography style, cool-neutral ambient light with warm amber accent from the desk lighting. No text, logos, signage, or watermark.

---

### 4. Services — Specialist Security Services (cover)
**Save to:** `public/images/services/specialist-security/cover.webp` · **Aspect ratio:** ~21:9

> Two Indian quick-response security personnel in dark tactical-but-professional uniforms (vests, caps, radios — no firearms, no agency insignia) standing beside a plain unmarked patrol vehicle at dusk on a Delhi NCR residential street, alert and ready posture, one holding a radio to communicate. Streetlights and the vehicle's headlights create dramatic warm highlights against a cool blue dusk sky. Subjects and vehicle positioned right-of-center, open space on the left for text overlay. Photorealistic, dynamic editorial photography, cool blue-dusk tones contrasted with warm amber light sources. No text, logos, weapons, or watermark.

---

### 5. Services — Housekeeping & Facility Management (cover)
**Save to:** `public/images/services/housekeeping/cover.webp` · **Aspect ratio:** ~21:9

> An Indian housekeeping staff member in a clean, professional uniform, composed and attentive, tidying a bright modern Indian hotel or corporate reception area — holding light cleaning equipment naturally, mid-task but not messy or staged. Bright daytime interior light through large windows, warm accent from gold-toned lobby light fixtures. Subject positioned right-of-center, open foreground and left space for text overlay. Photorealistic, bright and welcoming editorial style, neutral daylight balanced with warm gold highlights. No text, logos, signage, or watermark.

---

---

# Gallery — 12 prompts (3 per category)

The Gallery page is now built with 4 category sections (Deployments, Training, Events, Client Sites), each showing 1 featured image + 2 supporting images. Each category below gets **3 distinct moments** — not 3 near-identical shots — so the section reads as a real story. Same shared style baseline as above (photorealistic, photojournalistic, no text/logos/watermarks, authentic Indian NCR personnel/settings — not the PDF's stock photos).

Until these are generated and dropped in, each slot falls back to a brand-gradient placeholder automatically (the component checks whether the file exists on disk) — no broken images in the meantime, and no code changes needed once you drop a file in place.

## Deployments

### D1 — Featured
**Save to:** `public/images/gallery/deployments/01.webp` · **Aspect ratio:** 16:9

> An Indian security guard in a plain dark uniform at the gated entrance of a residential society in Delhi NCR, checking a visitor's ID against a register at a small gatehouse desk, daytime, natural light. Candid, mid-conversation moment — guard looking at the ID card, visitor's hand visible extending it. Photorealistic, photojournalistic style, wide 16:9 framing with the gate and boundary wall visible in the background. No text, logos, or watermark.

### D2 — Supporting
**Save to:** `public/images/gallery/deployments/02.webp` · **Aspect ratio:** 1:1 (square)

> An Indian security guard standing at a front-desk access-control point in a modern corporate office lobby, mid-task, checking a visitor log on a clipboard or tablet. Daytime, clean minimal lobby interior, soft natural light through glass doors. Photorealistic, square 1:1 crop, subject centered. No text, logos, or watermark.

### D3 — Supporting
**Save to:** `public/images/gallery/deployments/03.webp` · **Aspect ratio:** 1:1 (square)

> An Indian security guard on night patrol along a client site's perimeter wall, torch/flashlight in hand, alert walking posture, dusk-to-night lighting with a single warm sodium streetlight creating dramatic contrast against a deep blue night sky. Photorealistic, square 1:1 crop, cinematic low-light photography. No text, logos, or watermark.

## Training

### T1 — Featured
**Save to:** `public/images/gallery/training/01.webp` · **Aspect ratio:** 16:9

> A line of Indian trainee security guards in matching plain training uniforms standing in disciplined drill formation on an open training ground, an instructor in front addressing them. Daytime, natural outdoor light, dusty ground, simple boundary fencing in the background — an authentic Indian training-ground setting, not a polished Western gym. Photorealistic, wide 16:9 documentary framing. No text, logos, or watermark.

### T2 — Supporting
**Save to:** `public/images/gallery/training/02.webp` · **Aspect ratio:** 1:1 (square)

> An Indian training instructor demonstrating proper fire-extinguisher use to a small group of trainee guards outdoors, mid-demonstration, trainees watching attentively. Daytime, natural light. Photorealistic, square 1:1 crop, documentary style. No text, logos, or watermark.

### T3 — Supporting
**Save to:** `public/images/gallery/training/03.webp` · **Aspect ratio:** 1:1 (square)

> An Indian supervisor briefing a newly trained guard using a clipboard or site map, standing just outside a client site entrance, pointing something out on the document — a site-specific briefing moment before first deployment. Daytime, natural light. Photorealistic, square 1:1 crop. No text, logos, or watermark.

## Events

### E1 — Featured
**Save to:** `public/images/gallery/events/01.webp` · **Aspect ratio:** 16:9

> A small team of Indian security personnel in plain dark uniforms managing a crowd barricade line at a large outdoor event in Delhi NCR (string lights or a stage faintly visible in the background, generic — not a specific real event/brand), calm and controlled crowd-management posture. Evening light, warm ambient event lighting. Photorealistic, wide 16:9 framing. No text, logos, or watermark.

### E2 — Supporting
**Save to:** `public/images/gallery/events/02.webp` · **Aspect ratio:** 1:1 (square)

> An Indian security guard checking an event pass/badge held up by a guest at a corporate event entrance, professional and courteous interaction. Evening, warm entrance lighting. Photorealistic, square 1:1 crop. No text, logos, or watermark.

### E3 — Supporting
**Save to:** `public/images/gallery/events/03.webp` · **Aspect ratio:** 1:1 (square)

> A small coordinated team of 2–3 Indian security personnel standing alert together at an event venue perimeter, radios visible, scanning the crowd — a "standing by" readiness moment. Evening ambient lighting. Photorealistic, square 1:1 crop. No text, logos, or watermark.

## Client Sites

### C1 — Featured
**Save to:** `public/images/gallery/client-sites/01.webp` · **Aspect ratio:** 16:9

> A wide, elegant interior shot of a modern Indian hotel lobby, tastefully lit, with a security guard in a plain dark uniform standing discreetly near the entrance — present but unobtrusive, part of the ambiance rather than the focus. Daytime or warm evening interior lighting. Photorealistic, wide 16:9 architectural/editorial framing. No text, logos, signage, or watermark.

### C2 — Supporting
**Save to:** `public/images/gallery/client-sites/02.webp` · **Aspect ratio:** 1:1 (square)

> The exterior gated entrance of an upscale Indian residential society, with a security guard visible at the gatehouse, well-maintained landscaping and boundary architecture. Daytime, natural light. Photorealistic, square 1:1 crop. No text, logos, or watermark.

### C3 — Supporting
**Save to:** `public/images/gallery/client-sites/03.webp` · **Aspect ratio:** 1:1 (square)

> The entrance point of a modern Indian corporate office campus, glass-and-concrete architecture, a small security cabin or checkpoint visible with a guard present. Daytime, natural light. Photorealistic, square 1:1 crop. No text, logos, or watermark.
