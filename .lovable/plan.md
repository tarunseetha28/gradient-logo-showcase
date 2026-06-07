## LTUSS Website Plan

A modern, enterprise-ready marketing site built per the content doc, using the provided logo as-is in header and footer, with a color palette drawn directly from the logo (magenta-pink, silver, royal blue).

### Palette (from logo)
- Magenta/Pink: `#E6007E`
- Royal Blue: `#1E5BA8`
- Deep Indigo: `#2A2D7C`
- Silver/Steel: `#B8C2CC`
- Off-white background, charcoal text
- Signature gradient: `linear-gradient(135deg, #E6007E → #7A2B8F → #1E5BA8)` used on CTAs, headings, and accents

### Routes (TanStack Start file-based)
- `/` Home — hero, Who We Are, Core Services, Why Choose LTUSS, CTA
- `/about` — Mission, Vision, Discover→Engage→Solve→Execute approach
- `/services` — Professional & Advisory, Staffing, Technology overview + Industries + How We Work
- `/services/risk-compliance` — dedicated SEO page (Risk & Compliance, governance)
- `/services/tprm` — dedicated SEO page (Third-Party Risk Management)
- `/contact` — info + contact form
- `/privacy`, `/terms` — placeholder legal pages
- Each route gets unique `head()` meta (title, description, og:*)

### Layout
- **Header**: logo image (used as-is from the provided URL — no recoloring), nav (Home · About · Services dropdown · Contact), "Schedule Consultation" gradient CTA, mobile hamburger sheet
- **Footer**: logo, link columns (About, Services, Legal, Social), contact snippet, copyright
- **Floating chat bubble** (bottom-right, persistent) — simple lead-capture widget with canned replies (Services / Booking / Contact) and email capture; stored locally for now (no backend wired yet)
- **Cookie consent banner** (dismissible)

### Visual system
- 3D-style service icons rendered as gradient-filled SVG glyphs with soft shadows + highlights (advisory briefcase, staffing people, tech chip, shield for risk, network for TPRM) — no external icon-pack dependency, hand-crafted gradient SVGs for the "3D" feel
- Gradient orbs / blurred blobs as section backgrounds
- Framer Motion fade/slide-up on section entry, subtle hover lift on cards
- Cards: white surface, soft shadow, gradient top-border accent
- Typography: Space Grotesk (display) + Inter (body) via Google Fonts

### Contact form
- Fields: Name*, Email*, Phone, Service of Interest (dropdown), Message*
- Client-side validation (zod + react-hook-form)
- Honeypot field for spam protection
- On submit: show success toast with the auto-response copy from the doc
- Backend wiring (CRM/email) is out of scope for this pass — form will validate and confirm; we can plug Lovable Cloud + Resend later if you want

### SEO
- Per-page meta + JSON-LD `Organization` schema on home, `Service` schema on service pages
- Keywords woven naturally: LTUSS Advisory, Staffing Solutions, Technology Solutions, Risk Management Consulting, TPRM, Professional Services Consulting
- Semantic HTML, single H1 per page, alt text, responsive viewport

### Technical
- TanStack Start route files under `src/routes/`
- Design tokens in `src/styles.css` (oklch); gradient as `--gradient-brand`
- Shared `<SiteHeader/>`, `<SiteFooter/>`, `<ChatWidget/>`, `<CookieBanner/>` in `src/components/site/`
- Logo referenced directly from `https://ltuss.vercel.app/assets/newlogo-qt8VpAm5.png` (per your request to use the link as-is)
- Mobile-first responsive, tested at sm/md/lg breakpoints

### Out of scope this pass (call out if you want them now)
- Real CRM/email backend for contact form
- Live chatbot AI (widget is canned-response only)
- Careers page and case-study CMS
