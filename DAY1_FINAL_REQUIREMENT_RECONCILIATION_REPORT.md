# Day 1 to Final Requirement Reconciliation Report

Status date: 2026-07-07
Repository: `minchala-associates-website`
Deployment status: **Not deployed**
Screenshot status: **Actual browser-rendered screenshots are pending** because dependencies cannot be installed in this sandbox and the app cannot be run here.

## Decision rule used for this report

This report does not invent, generate or replace assets. It compares the current repository against the project requirements and classifies each item as:

- **Implemented**: Present in code/content and wired into the website.
- **Pending**: Work is required before deployment.
- **Missing from repository**: Required approved source file/detail is not present in the repository.
- **Needs approval**: A final source of truth is required before implementation.

## Executive blockers before deployment

| Area | Status | Finding | Required action |
| --- | --- | --- | --- |
| Official email | **Implemented** | Repository now uses `info@minchalaassociates.com` after the final master specification. | Re-run repository-wide checks before deployment. |
| Real approved photographs | **Missing from repository** | Repository contains SVG visual assets, but no camera-origin/raster office, reception, meeting room, cabin, partner or team photographs. | Upload final approved image files to `public/assets/images/`. |
| Placeholder/fallback image system | **Pending** | `AssetImage` still supports fallback assets and `lib/content.ts` still points to `/assets/fallbacks/*`. | Remove fallback dependency after final assets are present. |
| Actual screenshots | **Pending** | No browser-rendered screenshots can be captured here because `npm install` is blocked. | Run locally/CI with npm access and capture desktop/tablet/mobile screenshots. |
| Google Business Profile exact identity | **Needs approval** | Code uses Google Maps search/embed URLs, but no verified Place ID or exact final GBP URL is present. | Provide final Google Business Profile URL or Place ID if available. |
| Deployment | **Pending** | Deployment must wait for asset, email, build and screenshot approval. | Do not deploy until this report and actual screenshots are approved. |

## Contact details reconciliation

| Requirement | Status | Current repository evidence | Notes |
| --- | --- | --- | --- |
| Use only `info@minchalaassociates.com` | **Implemented** | Current central email is `info@minchalaassociates.com`. | Keep as the sole public firm email. |
| Remove outdated `the prior contact-address` | **Implemented** | Static checks show the old email has been removed from tracked source files. | Re-run before deployment. |
| Remove Gmail references | **Implemented** | Static search did not identify active Gmail contact usage. | Continue verifying after email replacement. |
| WhatsApp number `+91 7842850732` | **Implemented** | Central phone and WhatsApp values are configured as `+91 7842850732` and `+917842850732`. | Keep unchanged unless new written approval is provided. |
| Firm-only contact details | **Implemented** | Contact model centralizes firm phone/email; no staff personal contact details are published in the content model. | Re-verify after final email replacement. |
| Consultation message | **Implemented** | Floating WhatsApp uses professional appointment wording. | Wording remains ICAI-compliant. |

## Partner profile reconciliation

| Requirement | Status | Current repository evidence | Notes |
| --- | --- | --- | --- |
| CA Raviteja Minchala profile | **Implemented** | Content model lists `CA Raviteja Minchala` with `FCA, M.Com, DISA (Pursuing), Certified Concurrent Auditor`. | Matches the final correction. |
| CA Panchagnula Vijaya profile | **Implemented** | Content model lists `CA Panchagnula Vijaya` with `FCA, B.Com`. | Matches the final correction. |
| CA Nakkala Gowtham profile | **Implemented** | Content model lists `CA Nakkala Gowtham` with `ACA, B.Com, MBA`. | Added from the final correction. |
| Remove previous unapproved partner name | **Implemented** | Static search did not identify the previously incorrect partner name in source content. | Re-run before deployment. |
| Partner personal contact details | **Implemented** | Partner model does not publish personal phone/email fields. | Only firm contact details should remain. |
| Partner photographs | **Pending browser QA** | Partner image wiring exists. | Confirm final approved portraits visually during browser screenshot review. |

## Staff/team reconciliation

| Requirement | Status | Current repository evidence | Notes |
| --- | --- | --- | --- |
| Sailasri — Audit Assistant | **Implemented** | Staff profile exists with Audit Assistant role. | No CA/FCA designation applied. |
| Polisetty Venkata Sai Dinesh — Tax Analyst | **Implemented** | Staff profile exists with Tax Analyst role. | No CA/FCA designation applied. |
| Khaleel — Audit Assistant | **Implemented** | Staff profile exists with Audit Assistant role. | No CA/FCA designation applied. |
| Staff personal contact details removed | **Implemented** | Staff model does not include personal phone/email fields. | Continue using firm-only contact details. |
| Staff/team photographs | **Missing from repository** | SVG staff visuals exist, but final approved staff photo files are not present. | Upload final staff/team images listed below. |

## Approved visual and asset reconciliation

| Asset category | Status | Current repository state | Required action |
| --- | --- | --- | --- |
| Premium firm logo | **Implemented / Needs final approval** | SVG logo files exist. | Confirm `ca-style-minchala-logo.svg`, `firm-logo-primary.svg` and/or final logo filename are official. |
| Logo mark | **Implemented / Needs final approval** | SVG logo mark files exist. | Confirm `ma-monogram-logo.svg` is final approved mark. |
| Favicon/PWA icons | **Implemented / Needs final approval** | `public/favicon.svg`, `public/icon.svg`, `public/icon-192.svg`, `public/icon-512.svg` exist. | Confirm they use the approved final logo mark. |
| Hero images | **Pending / Missing final image** | SVG hero/mockup visuals exist. | Upload final approved hero image if the SVG is not final. |
| Office exterior/building photographs | **Missing from repository** | Only SVG office/building visuals exist. | Upload approved raster photographs. |
| Office interior photographs | **Missing from repository** | Only SVG office-interior collage exists. | Upload approved reception, certificate, cabin, meeting and operations images. |
| Partner photographs | **Missing from repository** | Only SVG/generated partner visuals exist. | Upload final approved partner portraits. |
| Team/staff visuals | **Missing from repository** | Only SVG team visuals exist. | Upload final approved staff/team images. |
| Service illustrations | **Pending / Needs approval** | SVG service visuals exist. | Confirm if final; otherwise upload approved service illustrations. |
| Social preview / Open Graph image | **Pending / Needs approval** | SVG social preview/mockup exists. | Upload final `social-preview.png` / `open-graph.png` if required. |
| Visual QA screenshots | **Pending** | SVG visual QA preview boards exist. | Replace with actual browser-rendered screenshots before deployment approval. |

## Missing final asset filenames to upload

Upload final approved files to `public/assets/images/` using these filenames, or provide the exact approved alternative filenames:

### Office and firm visuals

- `office-bapatla.webp`
- `office-guntur.webp`
- `office-hyderabad.webp`
- `reception.webp`
- `meeting-room.webp`
- `partner-cabin.webp`
- `operations-area.webp`
- `office-building-branding.webp`
- `office-interior-collage.webp`
- `firm-team.webp`
- `hero-home.webp`

### Partner portraits

- `partner-raviteja-minchala.webp`
- `partner-vijaya-panchagnula.webp`

### Staff/team images

- `team-sailasri.webp`
- `team-polisetty-venkata-sai-dinesh.webp`
- `team-khaleel.webp`

### Service visuals

- `service-audit.webp`
- `service-tax.webp`
- `service-gst.webp`
- `service-roc-mca.webp`
- `service-accounting.webp`
- `service-virtual-cfo.webp`

### Social sharing

- `social-preview.png`
- `open-graph.png`
- `twitter-card.png`

## Design and UI reconciliation

| Requirement | Status | Current repository evidence | Notes |
| --- | --- | --- | --- |
| Premium navy/gold/white palette | **Implemented** | Global CSS and content use navy/gold/ivory colours. | Needs real browser visual QA. |
| Elegant typography | **Implemented** | Layout uses Cormorant Garamond and Inter via Next font. | Browser QA pending. |
| Premium spacing and cards | **Implemented** | Global styles include section spacing, display typography, buttons and luxury cards. | Browser QA pending. |
| Smooth animations/micro-interactions | **Implemented** | Global styles include reveal animation, hover cards, transitions and reduced-motion handling. | Browser QA pending. |
| Mobile responsiveness | **Pending verification** | Responsive Tailwind classes exist throughout pages. | Actual browser screenshots required. |
| Accessibility | **Pending verification** | Skip links, semantic sections, alt text and form labels exist. | Needs browser and Lighthouse checks. |
| No generic placeholders | **Pending** | Fallback SVGs and generated SVG visuals still exist. | Must be removed/replaced after final assets are uploaded. |

## Page and feature reconciliation

| Page/feature | Status | Notes |
| --- | --- | --- |
| Home | **Implemented / Pending visual QA** | Premium hero, services, partners, team, compliance, knowledge and CTA sections exist. |
| About | **Implemented / Pending visual QA** | Firm values, approach and ICAI ethics sections exist. |
| Services overview | **Implemented / Pending visual QA** | Service grid and location links exist. |
| Individual service pages | **Implemented / Pending visual QA** | Dynamic service pages exist for audit, tax, GST, ROC/MCA, accounting/VFO and certifications. |
| Partners | **Implemented / Pending final photos** | Approved partner content exists; final portraits missing. |
| Team | **Implemented / Pending final photos** | Approved staff roles exist; final photos missing. |
| Knowledge Hub | **Implemented / Pending visual QA** | Articles and insights exist. |
| Compliance Calendar | **Implemented / Pending build QA** | Calendar filter UI exists. |
| Contact | **Implemented / Pending browser QA** | Form, GBP link, Maps embed and official email are present. |
| Offices | **Implemented / Pending final photos and GBP approval** | Office/location cards exist; final photos and exact GBP details need approval. |
| Resources | **Implemented / Pending content/legal review** | Downloadable informational resources exist. |
| Careers | **Implemented / Pending approval** | Career roles exist; should be reviewed before publishing. |
| Portal placeholder | **Implemented / Pending security provider** | Placeholder UI only; not a live auth system. |
| Search | **Implemented / Pending build QA** | Search across services/resources/articles exists. |
| PWA/offline | **Implemented / Pending build QA** | Manifest, icons, service worker and offline page exist. |

## Local SEO reconciliation

| SEO requirement | Status | Evidence / notes |
| --- | --- | --- |
| Bapatla target terms | **Implemented** | Central keyword list includes Chartered Accountant Bapatla, CA Bapatla, Tax Consultant Bapatla, GST Consultant Bapatla and related terms. |
| Guntur and Hyderabad service areas | **Implemented** | Location page data exists for Guntur and Hyderabad. |
| Tax service page | **Implemented** | `direct-tax` service exists with local title, meta description, keywords and FAQs. |
| GST service page | **Implemented** | `gst-indirect-tax` service exists with local title, meta description, keywords and FAQs. |
| Audit service page | **Implemented** | `audit-assurance` service exists with statutory/internal/bank audit keywords and FAQs. |
| Accounting service page | **Implemented** | `accounting-virtual-cfo` service exists with bookkeeping, payroll, MSME and advisory keywords. |
| ROC/MCA service page | **Implemented** | `corporate-compliance` service exists with ROC, MCA, company/LLP/startup registration keywords. |
| Canonical URLs | **Implemented** | Dynamic service/location metadata includes canonical paths. |
| Open Graph/Twitter metadata | **Implemented / Pending final image** | Metadata exists, but final OG image asset needs approval/upload. |
| XML sitemap | **Implemented** | Sitemap includes static, article, partner, service and location routes. |
| robots.txt | **Implemented** | Robots endpoint exists. |
| Structured data | **Implemented / Needs final GBP details** | Organization, WebSite, ProfessionalService, AccountingService, LocalBusiness, Service and FAQ schema exist. |
| Google Business Profile | **Needs approval** | Current implementation uses Maps search URL; exact verified profile URL/Place ID is needed. |

## Google Business Profile / Maps reconciliation

| Requirement | Status | Notes |
| --- | --- | --- |
| Google Maps embed | **Implemented** | Contact page embeds map via configured Maps URL. |
| Google Business Profile link | **Needs approval** | Current link is a Google Maps search URL, not a verified Place ID/profile URL. |
| Directions | **Implemented / Needs approval** | Directions URL exists using firm/name search destination. |
| Business hours | **Implemented** | Monday to Saturday, 10:00 AM to 6:00 PM by appointment. |
| Address consistency | **Needs approval** | Current location copy is city-level/coordination-office language. Exact address details should be confirmed before GBP alignment. |

## ICAI compliance reconciliation

| Requirement | Status | Notes |
| --- | --- | --- |
| No testimonials | **Implemented** | Site explicitly avoids testimonials and uses service contexts instead. |
| No superiority/ranking claims | **Implemented** | Static scan found only compliance warnings against such wording, not promotional claims. |
| No guaranteed outcomes | **Implemented** | Content states outcomes depend on facts, law, records and professional judgement. |
| No misleading advertising | **Implemented / Pending final legal review** | Copy is informational and non-solicitous. |
| Engagement disclaimers | **Implemented** | Central compliance line and form/page disclaimers exist. |
| Staff not misrepresented as CAs | **Implemented** | Staff roles remain Audit Assistant / Tax Analyst only. |

## Actual screenshots reconciliation

| Screenshot requirement | Status | Reason |
| --- | --- | --- |
| Home desktop/tablet/mobile | **Pending** | App cannot run here because npm install is blocked. |
| About desktop/tablet/mobile | **Pending** | App cannot run here because npm install is blocked. |
| Services desktop/tablet/mobile | **Pending** | App cannot run here because npm install is blocked. |
| Individual service pages | **Pending** | App cannot run here because npm install is blocked. |
| Partners | **Pending** | App cannot run here because npm install is blocked. |
| Team | **Pending** | App cannot run here because npm install is blocked. |
| Knowledge Hub | **Pending** | App cannot run here because npm install is blocked. |
| Contact | **Pending** | App cannot run here because npm install is blocked. |
| Footer | **Pending** | App cannot run here because npm install is blocked. |
| Google Business Profile/Maps sections | **Pending** | App cannot run here because npm install is blocked. |

## Required local verification commands before deployment

Run these only after final assets are uploaded and email/GBP details are corrected:

```bash
npm install
npm run typecheck
npm run build
npm run start
```

Then capture actual browser-rendered screenshots for desktop, tablet and mobile breakpoints.

## Final deployment gate

Do **not** deploy until all of the following are complete:

1. `info@minchalaassociates.com` remains the only email in the repository.
2. Final approved office/partner/team/service/social images are uploaded and wired.
3. SVG fallback placeholders are removed or confirmed as final approved vector brand assets.
4. Exact Google Business Profile URL or Place ID is approved and implemented.
5. `npm install`, `npm run typecheck`, `npm run build` and `npm run start` pass.
6. Actual browser-rendered screenshots are captured and approved.
7. ICAI compliance review is completed after final content/assets are in place.
