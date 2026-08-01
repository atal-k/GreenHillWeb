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

> A confident Indian male security supervisor in his late 30s, wearing a crisp dark charcoal-navy security uniform with epaulettes and a radio clipped to his shoulder, standing at the entrance of a modern glass-fronted corporate office building in Delhi NCR. He faces slightly off-camera toward the right third of the frame with a calm, approachable, professional expression — authoritative but not intimidating. Early morning golden-hour light rakes across the building's glass facade behind him, creating warm highlights and soft bokeh in the background landscaping. Photorealistic, editorial photography style, shallow depth of field, shot wide at 21:9 with generous negative space on the left and top third of the frame for text overlay. Warm-neutral color grade with deep green shadow tones and amber highlight light. No visible text, logos, or uniform insignia. No watermark.

---

### 2. About — "Our Story"
**Save to:** `public/images/about/our-story.webp` · **Aspect ratio:** 4:5 portrait

> An Indian security supervisor in his 40s mentoring a younger trainee guard in his early 20s at the entrance of a residential society in Delhi NCR, both in plain dark security uniforms with no visible insignia. The supervisor gestures naturally while explaining something, the trainee listens attentively — a candid, unposed mentoring moment, not a stiff lineup photo. Daytime, soft natural light, gated residential entrance with Indian architectural details (plastered boundary wall, gate, some greenery) visible but softly out of focus behind them. Medium shot, both figures visible from the waist up, 4:5 portrait crop. Photorealistic, warm neutral daylight with a slight golden undertone, deep green tones in the shadow areas. No text, logos, or watermark.

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

## Deferred (next stage, not this phase)
Gallery imagery (Deployments, Training, Events, Client Sites categories) — will get its own prompt set once the Gallery page is built.
