# Final Deployment QA Checklist — Approval Required

Status: **not deployed**. Deployment must wait for firm approval of visual output and for local/CI build verification.

## Visual / branding

- Premium firm logo: implemented via `public/assets/images/ca-style-minchala-logo.svg`.
- Logo mark / favicon: implemented via `public/assets/images/ma-monogram-logo.svg` and copied to favicon/PWA icon files.
- Hero image: implemented via `public/assets/images/homepage-preview-layout.svg`.
- Office/building branding image: implemented via `public/assets/images/professional-office-building-branding-collage.svg`.
- Office interior / certificates / meeting / operations visual: implemented via `public/assets/images/office-interior-collage.svg`.
- Corporate homepage design with WhatsApp and consultation CTA: implemented via `public/assets/images/corporate-homepage-design-whatsapp-consultation.svg`.
- CA Raviteja Minchala profile banner: implemented via `public/assets/images/ca-raviteja-minchala-profile-banner.svg`.
- Social preview / Open Graph image: implemented via `public/assets/images/premium-full-website-mockup.svg`.

## Contact / Google Business Profile

- Phone and WhatsApp: `+91 7842850732`.
- WhatsApp deep link: `+917842850732`.
- Professional email: `info@minchalaassociates.com`.
- Click-to-call links: present in header, contact page and footer.
- Google Maps embed: present on Contact page.
- Google Business Profile / Maps link: present on Contact page.
- Business hours: Monday to Saturday, 10:00 AM to 6:00 PM by appointment.
- Directions: office page retains Google Maps search/directions links for Bapatla, Guntur and Hyderabad.

## SEO / structured data

- Organization / ProfessionalService / AccountingService schema: present globally.
- LocalBusiness schema: present globally for Bapatla, Guntur and Hyderabad.
- Service schema: generated globally for all service lines.
- Breadcrumb schema: present through the Breadcrumbs component.
- FAQ schema: present through the FAQ component.
- Canonical metadata, Open Graph and Twitter cards: present.
- Sitemap and robots routes: present.
- Local SEO targets include Chartered Accountant in Bapatla, CA in Bapatla, Chartered Accountant near Bapatla, Tax Consultant Bapatla, GST Consultant Bapatla, Audit Firm Bapatla, Income Tax Consultant Bapatla and CA Firm Bapatla.

## ICAI compliance

- No testimonials.
- No ranking claims.
- No “best”, “top”, number-one or guaranteed-result wording.
- Staff are shown as support profiles only and not as CAs/FCA/partners.
- Engagement language remains subject to scope, eligibility, independence, conflict checks, documentation review and written acceptance.

## Visual QA artifacts

Desktop preview boards:

- `public/visual-qa/home.svg`
- `public/visual-qa/about.svg`
- `public/visual-qa/services.svg`
- `public/visual-qa/partners.svg`
- `public/visual-qa/team.svg`
- `public/visual-qa/knowledge-hub.svg`
- `public/visual-qa/contact.svg`
- `public/visual-qa/footer.svg`

Mobile preview boards:

- `public/visual-qa/mobile/home.svg`
- `public/visual-qa/mobile/about.svg`
- `public/visual-qa/mobile/services.svg`
- `public/visual-qa/mobile/partners.svg`
- `public/visual-qa/mobile/team.svg`
- `public/visual-qa/mobile/knowledge-hub.svg`
- `public/visual-qa/mobile/contact.svg`
- `public/visual-qa/mobile/footer.svg`

## Required local/CI commands before deployment

```bash
npm install
npm run typecheck
npm run build
npm run start
```

Only after approval and successful verification should production deployment proceed.
