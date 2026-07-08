# Final Pre-Deployment Audit — Minchala & Associates

Status: **correction pass completed, deployment not triggered from this environment**.

## 1. Partner profiles published

1. **CA Raviteja Minchala — Partner**
   - Published qualifications: **FCA, M.Com, DISA (Pursuing), Certified Concurrent Auditor**.
   - Published focus: Audit, direct tax, GST, compliance review and advisory coordination.
   - Published biography is professional, factual and avoids claims of ranking, superiority or guaranteed outcomes.
2. **CA Panchagnula Vijaya — Partner**
   - Published qualifications: **FCA, B.Com**.
   - Published focus: Accounting review, assurance support, compliance workflows and client documentation.
   - Published biography is professional, factual and ICAI-compliant.
3. **CA Nakkala Gowtham — Partner**
   - Published qualifications: **ACA, B.Com, MBA**.
   - Published focus: Audit support, taxation, compliance coordination and advisory documentation.
   - Published biography is professional, factual and ICAI-compliant.

No unapproved partner names are published.

## 2. Staff / support team published

1. **Sailasri — Audit Assistant**
2. **Polisetty Venkata Sai Dinesh — Tax Analyst**
3. **Khaleel — Audit Assistant**

Staff are shown as professional support profiles only. The website does not represent staff as CAs, FCAs, partners or signing professionals, and it does not publish staff personal phone numbers or staff personal email addresses.

## 3. Contact details verified

- Professional email used sitewide: **info@minchalaassociates.com**.
- Phone / WhatsApp used sitewide: **+91 7842850732**.
- WhatsApp deep link uses `+917842850732` and opens with professional appointment wording.
- No consumer email references are included in website content.

## 4. Visual asset integration

The following production visual assets now exist in `public/assets/images/` and are wired through the centralized asset map:

- `firm-logo-primary.svg`
- `firm-logo-mark.svg`
- `firm-hero.svg`
- `professional-service-suite.svg`
- `firm-team.svg`
- `office-bapatla.svg`
- `office-guntur.svg`
- `office-hyderabad.svg`
- `partner-raviteja-minchala.svg`
- `partner-vijaya-panchagnula.svg`
- `team-sailasri.svg`
- `team-polisetty-venkata-sai-dinesh.svg`
- `team-khaleel.svg`
- `social-preview.svg`

The same logo mark is also available as `public/favicon.svg`, `public/icon.svg`, `public/icon-192.svg` and `public/icon-512.svg` for favicon/PWA usage.

### Important asset note

No separate camera-origin office photographs or partner portrait photo files were present in the repository at audit time. To avoid using unapproved stock photography or invented portraits, the site uses custom premium SVG brand visuals in the approved palette. If the firm later wants real photographs, upload approved files to `public/assets/images/` and update the corresponding paths in `lib/content.ts`.

## 5. ICAI compliance checks

- No testimonials or client endorsements are published.
- No ranking, “best”, “top”, superiority or guaranteed-result claims are intentionally used.
- Website content is informational and does not create an engagement.
- Engagement language remains subject to scope, eligibility, independence, conflict checks, documentation review and written acceptance.
- Staff are not misrepresented as Chartered Accountants or partners.
- Only firm contact details are published.

## 6. Page-by-page visual / content audit

- **Home**: premium logo/header, hero visual, proof points, firm values, services, industries, timeline, process flow, partner cards, staff cards, knowledge hub, compliance calendar and FAQ.
- **About**: professional approach, values, methodology and ICAI-compliance section.
- **Services**: service-suite visual, interactive service cards and engagement process.
- **Partners**: only approved partners and approved staff profiles are shown.
- **Partner detail pages**: Person schema, qualifications, partner bio and professional timeline.
- **Knowledge Hub**: article index and practical compliance insights with general-information disclaimer.
- **Compliance Calendar**: filterable calendar with statutory-date caveat.
- **Resources**: downloadable ICAI-compliant checklists/guides.
- **Offices**: Bapatla, Guntur and Hyderabad office positioning with local SEO and map-search links.
- **Contact**: consultation / appointment form, firm-only contact details and enquiry tracking UI.
- **Portal / Careers / Search / Offline**: production-ready supporting pages with professional disclaimers where relevant.
- **Global footer**: firm logo, navigation, ICAI notes, sitewide consultation form and firm contact details.

## 7. Final commands before deployment

Run these in an environment with working npm registry access:

```bash
npm install
npm run typecheck
npm run build
npm run start
```

Do not deploy until the above commands pass and visual QA is completed in a browser for desktop and mobile breakpoints.
