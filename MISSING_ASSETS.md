# Missing Approved Final Assets

The repository now includes organized, approved SVG launch assets under both `assets/images/*` (source/audit folders) and `public/assets/images/*` (Next.js-served folders). These are the current production-ready visual assets for the premium navy-and-gold launch.

Replace the following only when final camera-origin or partner-approved raster files are supplied for public website use.

| Required filename | Page / section where it should appear | Recommended size | Type |
| --- | --- | --- | --- |
| `public/assets/images/logo/premium-minchala-associates-logo-final.svg` | Header, footer, Open Graph/brand placements if a newer final logo is approved | SVG preferred, 420×120 minimum viewBox | Logo |
| `public/assets/images/partners/ca-raviteja-minchala-professional-final.webp` | Home partner cards, Partners page, CA Raviteja Minchala partner detail page | 1200×900 or 1600×1000 | Partner photo |
| `public/assets/images/partners/ca-vijaya-panchagnula-professional-final.webp` | Home partner cards, Partners page, CA Vijaya Panchagnula partner detail page | 1200×900 or 1600×1000 | Partner photo |
| `public/assets/images/partners/ca-nakkala-gowtham-professional-final.webp` | Home partner cards, Partners page, CA Nakkala Gowtham partner detail page | 1200×900 or 1600×1000 | Partner photo |
| `public/assets/images/office/bapatla-office-premium-final.webp` | Home office-presence cards, About lead visual, Offices page, Bapatla location page, Contact page office visual | 1600×1000 | Office photo |
| `public/assets/images/office/guntur-office-premium-final.webp` | Home office-presence cards, About office cards, Offices page, Guntur location page | 1600×1000 | Office photo |
| `public/assets/images/office/hyderabad-office-premium-final.webp` | Home office-presence cards, About office cards, Offices page, Hyderabad location page | 1600×1000 | Office photo |
| `public/assets/images/hero/premium-homepage-hero-final.webp` | Homepage hero | 1800×1200 | Banner |
| `public/assets/images/team/firm-team-professional-final.webp` | Team page lead visual | 1600×1000 | Banner |
| `public/assets/images/social/open-graph-social-preview-final.webp` | Open Graph / social sharing preview if a newer approved raster preview is supplied | 1200×630 | Social preview |

## Compliance notes

- Upload only files with explicit approval for public website use.
- Do not include testimonials, rankings, awards, comparative superiority claims, client endorsements, or guaranteed-outcome language in image text.
- Do not publish staff personal phone numbers or personal email addresses in any image.
- After uploading a final asset, update the relevant path in `lib/content.ts` and keep the fallback path intact.
