# Minchala & Associates Website

Premium Big-4-quality website for Minchala & Associates, built with Next.js App Router, TypeScript and Tailwind CSS.

## Production features

- Premium responsive homepage with custom SVG illustration, structured service storytelling and partner-led positioning.
- Dedicated pages for Home, About, Services, Partner Profiles, Knowledge Hub, Compliance Calendar, Contact, Search, Resources, Careers, Offices, Client Portal, Offline and Not Found.
- Interactive service cards, partner profile cards, client-situation cards, filtered compliance calendar, advanced search, enquiry tracker, FAQ accordions and validated contact form with loading state.
- SEO/PWA endpoints: metadata, JSON-LD, sitemap, robots, web app manifest, service worker, offline fallback and install prompt.
- Accessibility: breadcrumbs, skip link, semantic landmarks, keyboard-friendly accordions, focus states, reduced-motion support, dark mode and mobile-first layouts.
- ICAI compliance: informational copy, no testimonials, no comparative claims, no guaranteed outcomes and clear engagement disclaimers.

## ICAI compliance posture

The website copy is informational and avoids solicitation, rankings, testimonials, comparative superiority and guaranteed outcomes. Engagements remain subject to independence, professional eligibility, conflicts, scope agreement and applicable standards.

## Local setup and verification

```bash
npm install
npm run typecheck
npm run build
npm run start
```

## Deployment

The project includes `vercel.json` and is ready for Vercel deployment after dependencies install and the production build passes locally. Configure the production domain as `minchalaassociates.com` or update `site.url` in `lib/content.ts`.

```bash
npx vercel --prod
```
