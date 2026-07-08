# Approved Assets and Future Uploads Needed

The website currently uses approved/generated professional SVG visuals from `public/assets/images/` with safe fallback placeholders from `public/assets/fallbacks/`. These placeholders keep the site premium and complete until camera-origin photographs are supplied and approved for publication.

## Assets already incorporated

| Asset | Appears on |
| --- | --- |
| `public/assets/images/ca-style-minchala-logo.svg` | Header, footer and brand identity areas |
| `public/assets/images/ma-monogram-logo.svg` | Logo mark and fallback partner/brand uses |
| `public/assets/images/homepage-preview-layout.svg` | Homepage hero |
| `public/assets/images/premium-full-website-mockup.svg` | Homepage visual direction and social preview metadata |
| `public/assets/images/corporate-homepage-design-whatsapp-consultation.svg` | Homepage visual direction and Hyderabad office visual |
| `public/assets/images/professional-office-building-branding-collage.svg` | About page and Bapatla/Home/Office visuals |
| `public/assets/images/office-interior-collage.svg` | Services, team and Guntur/Home/Office visuals |
| `public/assets/images/ca-raviteja-minchala-profile-banner.svg` | CA Raviteja Minchala partner profile cards and detail page |
| `public/assets/images/partner-vijaya-panchagnula.svg` | CA Panchagnula Vijaya partner profile cards and detail page |
| `public/assets/images/partner-nakkala-gowtham.svg` | CA Nakkala Gowtham partner profile cards and detail page |
| `public/assets/images/team-sailasri.svg` | Sailasri support-team card |
| `public/assets/images/team-polisetty-venkata-sai-dinesh.svg` | Polisetty Venkata Sai Dinesh support-team card |
| `public/assets/images/team-khaleel.svg` | Khaleel support-team card |

## Final camera-origin uploads requested when available

Upload only images that have explicit approval for public website use. Do not include awards, rankings, testimonials, client endorsements, comparative claims or guaranteed-outcome language in any image text.

| Required filename | Replaces / appears on | Notes |
| --- | --- | --- |
| `public/assets/images/office-bapatla-final.webp` | About page lead visual, Home office-presence cards, Offices page Bapatla card and Bapatla location page | Exterior/interior office photo or approved professional office visual for Bapatla. |
| `public/assets/images/office-guntur-final.webp` | Home office-presence cards, Offices page Guntur card and Guntur location page | Camera-origin or approved professional office visual for Guntur coordination. |
| `public/assets/images/office-hyderabad-final.webp` | Home office-presence cards, Offices page Hyderabad card and Hyderabad location page | Camera-origin or approved professional office/advisory visual for Hyderabad coordination. |
| `public/assets/images/partner-raviteja-minchala-final.webp` | Home partner section, Partners page and CA Raviteja Minchala detail page | Professional portrait/banner approved by the partner. |
| `public/assets/images/partner-vijaya-panchagnula-final.webp` | Home partner section, Partners page and CA Panchagnula Vijaya detail page | Professional portrait/banner approved by the partner. |
| `public/assets/images/partner-nakkala-gowtham-final.webp` | Home partner section, Partners page and CA Nakkala Gowtham detail page | Professional portrait/banner approved by the partner. |
| `public/assets/images/firm-team-final.webp` | Team page lead visual | Team or office environment visual that does not publish personal staff contact details. |
| `public/assets/images/firm-hero-final.webp` | Homepage hero visual | Final approved high-end firm visual, replacing the generated homepage preview if desired. |

## After upload

Update the matching image path in `lib/content.ts` under the `images` object. Keep the existing fallback path in place so the site remains resilient if an uploaded image is missing.
