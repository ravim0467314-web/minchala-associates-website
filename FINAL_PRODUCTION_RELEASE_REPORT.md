# Final Production Release Report — Minchala & Associates

Status date: 2026-07-07
Deployment status: **Not deployed**
Purpose: Final go/no-go checklist against the final master specification.

## Legend

- ✓ **Completed** — implemented in the repository.
- ⚠ **Needs Review** — present but requires final approval, browser QA, legal review or production verification.
- ❌ **Missing** — required final source data/asset is not present in the repository.

## Final master specification checklist

| Requirement | Status | Notes |
| --- | --- | --- |
| Firm name: MINCHALA & ASSOCIATES, Chartered Accountants | ✓ Completed | Central site profile uses Minchala & Associates and Chartered Accountants. |
| Firm Registration Number: 025719S | ✓ Completed | Added to central site profile and footer/schema references. |
| Head office: Bapatla | ✓ Completed | Added to central site profile and footer. |
| Branch offices: Guntur, Hyderabad | ✓ Completed | Added to central site profile and footer. |
| Official email: info@minchalaassociates.com | ✓ Completed | Replaced old `the prior contact-address` references across tracked source/docs/previews. |
| Remove Gmail/personal email | ✓ Completed | Static scan found no active Gmail contact references. |
| WhatsApp number: +91 7842850732 | ✓ Completed | Central phone and WhatsApp deep link remain configured. |
| Floating WhatsApp CTA | ✓ Completed | Uses professional appointment wording. |
| Consultation/appointment form | ✓ Completed | Existing form captures professional enquiry details and opens firm email. |
| Google Maps embed | ✓ Completed | Contact page embeds Google Maps via configured query URL. |
| Google Business Profile link | ⚠ Needs Review | Current link is a Google Maps search/profile query. Exact verified GBP URL or Place ID is still needed for final accuracy. |
| Directions link | ⚠ Needs Review | Directions link exists but should be verified against final GBP/address. |
| Business hours | ✓ Completed | Monday to Saturday, 10:00 AM to 6:00 PM by appointment. |
| All three partners | ✓ Completed | CA Raviteja Minchala, CA Panchagnula Vijaya and CA Nakkala Gowtham are present in the canonical partner model. |
| CA Raviteja Minchala profile | ✓ Completed | Present with FCA, M.Com, DISA (Pursuing), Certified Concurrent Auditor. |
| CA Panchagnula Vijaya profile | ✓ Completed | Present with FCA, B.Com. |
| Staff/team details | ⚠ Needs Review | Sailasri, Polisetty Venkata Sai Dinesh and Khaleel are present with non-CA support roles; complete final team list should be confirmed. |
| Staff personal contacts excluded | ✓ Completed | Staff profiles do not publish personal phone/email details. |
| Approved professional portraits | ⚠ Needs Review | Partner image wiring exists; final browser review should confirm approved photographs where available. |
| Office exterior photo | ⚠ Needs Review | Use approved office photograph where available; final browser QA should confirm visual output. |
| Reception photo | ⚠ Needs Review | Use approved reception photograph where available; final browser QA should confirm visual output. |
| Partner cabin photo | ⚠ Needs Review | Use approved cabin photograph where available; final browser QA should confirm visual output. |
| Consultation/meeting room photo | ⚠ Needs Review | Use approved meeting room photograph where available; final browser QA should confirm visual output. |
| Operations area photo | ⚠ Needs Review | Use approved operations area photograph where available; final browser QA should confirm visual output. |
| Certificates wall photo | ⚠ Needs Review | Use approved certificates wall photograph where available; final browser QA should confirm visual output. |
| Office gallery/collage photos | ⚠ Needs Review | Final browser QA should confirm approved visuals are used appropriately. |
| Final logo | ⚠ Needs Review | SVG logos exist; final approval of exact logo file is required. |
| Favicon and PWA icons | ⚠ Needs Review | SVG favicon/icons exist; verify against final approved logo mark. |
| Social preview/Open Graph image | ⚠ Needs Review | SVG preview exists; final PNG/JPG social image should be approved/uploaded. |
| Brand colours: navy/gold/white/grey | ✓ Completed | Current CSS/content uses navy, gold, ivory/white and slate/grey. |
| Premium typography | ✓ Completed | Uses Cormorant Garamond and Inter via Next font. |
| Elegant animations and spacing | ✓ Completed | Global CSS includes reveal animation, premium spacing, luxury cards and reduced-motion handling. |
| Service pages for practice areas | ✓ Completed | Dynamic service pages exist for audit, tax, GST, corporate/MCA, accounting/virtual CFO and certifications, with dedicated GST, ITR, Startup/MCA, Audit and Client Journey pages. |
| Knowledge centre | ✓ Completed | Knowledge hub/articles/resources/calendar, calculators and educational GST/ITR/startup/audit centres exist. |
| Downloads/checklists | ✓ Completed | Dedicated Resources / Checklists section now includes 10 ICAI-compliant viewable and downloadable checklists for ROC/MCA, ITR, GST, TDS, audits, startups, LLP and MSME/business compliance. |
| Calculators | ✓ Completed | Educational GST, TDS and compliance rhythm calculators are implemented with ICAI-compliant illustrative-use disclaimers. |
| Local SEO Bapatla | ✓ Completed | Bapatla terms and page data exist. |
| Local SEO Guntur | ✓ Completed | Guntur location page data exists. |
| Local SEO Hyderabad | ✓ Completed | Hyderabad location page data exists. |
| Nearby service areas beyond Bapatla/Guntur/Hyderabad | ⚠ Needs Review | Additional nearby service areas are not fully enumerated. |
| Organization / AccountingService / LocalBusiness schema | ✓ Completed | Global JSON-LD includes Organization, ProfessionalService, AccountingService, LocalBusiness and Service data. |
| FAQ and Breadcrumb schema | ✓ Completed | FAQ and Breadcrumb components/schema exist. |
| Sitemap and robots | ✓ Completed | App routes for sitemap and robots exist. |
| Open Graph/Twitter metadata | ⚠ Needs Review | Metadata exists; final social image asset needs approval. |
| ICAI compliance: no solicitation/testimonials/rankings/guarantees | ✓ Completed | Content is informational with explicit compliance guardrails. |
| Accessibility | ⚠ Needs Review | Skip links, labels and semantic structure exist; browser/Lighthouse verification still required. |
| Core Web Vitals/performance | ⚠ Needs Review | Image optimization and app structure exist; actual Lighthouse run pending. |
| Actual browser-rendered screenshots | ❌ Missing | Cannot generate in this sandbox because npm install is blocked and the app cannot run. |
| Production build | ❌ Missing | `npm install` remains blocked in this sandbox, so typecheck/build/start cannot be verified here. |
| Deployment approval | ❌ Missing | Blocked only by successful build verification, actual browser-rendered screenshots and final approval. |

## Items requiring visual/content review before go-live

1. Final approved real/professional photographs should be visually reviewed where available:
   - `office-bapatla.webp`
   - `office-guntur.webp`
   - `office-hyderabad.webp`
   - `reception.webp`
   - `meeting-room.webp`
   - `partner-cabin.webp`
   - `operations-area.webp`
   - `certificates-wall.webp`
   - `partner-raviteja-minchala.webp`
   - `partner-vijaya-panchagnula.webp`
   - `partner-nakkala-gowtham.svg` currently wired; replace with approved camera-origin portrait if one is later approved
   - final staff/team photographs if approved for publication
2. Exact verified Google Business Profile URL or Place ID.
3. Final approved Open Graph/social preview image.
4. Confirmation whether existing SVG logo files are the final approved logo set.
5. Final browser QA for the calculators page after dependencies install successfully.

## Deployment decision

❌ **Do not deploy yet.**

The site has major structural, content, SEO, contact, three-partner and ICAI-compliance foundations. Final production release remains blocked only by successful build verification, actual browser-rendered screenshots and final approval of the visual output.
