# Visual QA Report — Pre-Deployment Approval Required

Status: **Not deployed. Awaiting user approval of visual QA before production deployment.**

## Screenshot previews generated

Because this environment still cannot install dependencies from npm, I cannot render the live Next.js application with `next start` inside the sandbox. To provide pre-deployment visual confirmation artifacts, screenshot preview boards were generated under `public/visual-qa/` for the requested pages:

- `public/visual-qa/home.svg`
- `public/visual-qa/about.svg`
- `public/visual-qa/services.svg`
- `public/visual-qa/partners.svg`
- `public/visual-qa/team.svg`
- `public/visual-qa/knowledge-hub.svg`
- `public/visual-qa/contact.svg`
- `public/visual-qa/footer.svg`
- Calculators route should be browser-reviewed after the app builds successfully.

Mobile preview boards were also generated under `public/visual-qa/mobile/` for Home, About, Services, Partners, Team, Knowledge Hub, Contact and Footer.

These are pre-deployment visual QA previews, not production deployment screenshots. Production screenshots should be captured after `npm install`, `npm run build`, and `npm run start` pass locally or in CI.

## Approved/generated asset usage map

1. **Premium full website mockup** — `premium-full-website-mockup.svg`; used in the Home visual-direction section and as the Open Graph/Twitter preview image.
2. **Homepage preview layout** — `homepage-preview-layout.svg`; used as the Home hero visual.
3. **Professional office/building branding collage** — `professional-office-building-branding-collage.svg`; used for Bapatla office/branding presentation.
4. **Office interior collage** — `office-interior-collage.svg`; used for Services, Team and Guntur office visuals.
5. **Premium navy-gold MA monogram logo** — `ma-monogram-logo.svg`; used as the logo mark and favicon/PWA icon source.
6. **Corporate homepage design with WhatsApp and consultation CTA** — `corporate-homepage-design-whatsapp-consultation.svg`; used in the Home visual-direction section and Hyderabad coordination visual.
7. **Professional profile/banner image for CA Raviteja Minchala** — `ca-raviteja-minchala-profile-banner.svg`; used for CA Raviteja Minchala's partner card/profile visual.
8. **CA-style Minchala & Associates logo** — `ca-style-minchala-logo.svg`; used as the primary site logo.

## Page-by-page QA notes

1. **Home** — premium logo/header, homepage preview hero, premium mockup section, corporate WhatsApp/consultation CTA visual, services, partners, support team, knowledge hub and compliance sections.
2. **About** — firm approach, values, methodology and ICAI compliance content.
3. **Services** — office-interior/service-suite visual, interactive cards and engagement flow.
4. **Partners** — approved partner profiles only; CA Raviteja profile uses the approved professional banner visual.
5. **Team** — approved support profiles represented separately from partners.
6. **Knowledge Hub** — article and insight layout with general-information positioning.
7. **Calculators** — GST, TDS and compliance rhythm tools with illustrative-use disclaimers.
8. **Contact** — consultation form, firm email, WhatsApp number, Google Business Profile link and Google Maps embed area.
9. **Footer** — logo, firm-only contact details, navigation, ICAI notes and sitewide consultation form.

## Google Business Profile / local SEO status

- Google Maps embed: added to the Contact page with a Google Maps query embed for Minchala & Associates in Bapatla.
- Google Business Profile link: added as a Google Maps search/profile link because no verified Place ID was available in repository files.
- Schema: LocalBusiness and ProfessionalService schema are generated globally; AccountingService schema is generated on the Home page.
- Local SEO: Bapatla, Guntur and Hyderabad are included across the content model, offices, sitemap and metadata language.
- “Chartered Accountant in Bapatla” wording is included in the centralized local SEO copy.

## Pending approval

Do not deploy until desktop and mobile visual previews are approved by the firm and screenshots from a real local/CI render are reviewed after dependencies install successfully.
