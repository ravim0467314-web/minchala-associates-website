# Minchala & Associates — Hostinger Production Deployment Checklist

This checklist is for the Hostinger Next.js production deployment of `minchalaassociates.com` and `www.minchalaassociates.com`.

## 1. Deployment target

Deploy this repository as a standard Next.js application on Hostinger. Use the normal Next.js server build; do not configure a static export workflow.

Use the repository root as the application root and configure Hostinger with:

| Setting | Value |
| --- | --- |
| Node.js version | `20.18.0` or newer |
| Install command | `npm install` |
| Build command | `npm run build` |
| Start command | `npm run start` |
| Production URL | `https://minchalaassociates.com` |

## 2. Do not change email records

Before changing DNS or hosting records, preserve all existing email and verification records:

- MX records
- SPF TXT records
- DKIM TXT/CNAME records
- DMARC TXT records
- Google Workspace, Microsoft 365, Zoho, or other verification TXT records

Only website routing records for `@` and `www` should be changed when needed.

## 3. Identify the active DNS provider

The active DNS provider is determined by the domain's authoritative NS records, not necessarily by the company where the domain was purchased.

Run one of these commands from a machine with working DNS/network access:

```bash
dig +short NS minchalaassociates.com
```

```bash
nslookup -type=NS minchalaassociates.com
```

Interpretation examples:

- `ns1.dns-parking.com` / `ns2.dns-parking.com` means DNS is active at Hostinger.
- `dns1.registrar-servers.com` / `dns2.registrar-servers.com` means DNS is active at Namecheap BasicDNS.
- Any other nameservers mean DNS must be edited wherever those authoritative nameservers are managed.

## 4. Website DNS records for Hostinger

Use the exact website records shown in the active Hostinger panel for the hosting plan. If Hostinger provides DNS management for the domain, confirm that:

- the apex domain `minchalaassociates.com` points to the active Hostinger website target;
- `www.minchalaassociates.com` points to the same Hostinger website target or redirects to the apex domain;
- no records for `@` or `www` point to a retired website host or an old deployment target.

Remove only conflicting website records for `@` and `www`. Do not delete MX or TXT records.

## 5. Local/CI verification before production deployment

Run these commands in order from the repository root:

```bash
npm install
npm run typecheck
npm run build
```

Then run the production server locally when possible:

```bash
npm run start
```

## 6. Post-deployment QA

Verify these production URLs after Hostinger deployment and cache clearing:

- `https://minchalaassociates.com/`
- `https://minchalaassociates.com/services`
- `https://minchalaassociates.com/partners`
- `https://minchalaassociates.com/contact`
- `https://minchalaassociates.com/resources`
- `https://minchalaassociates.com/knowledge-hub`
- `https://minchalaassociates.com/compliance-calendar`
- `https://minchalaassociates.com/offices`
- `https://minchalaassociates.com/portal`
- `https://minchalaassociates.com/sitemap.xml`
- `https://minchalaassociates.com/robots.txt`

Check mobile navigation, footer text, contact form validation, resource downloads, sitemap, robots, Open Graph previews, structured data, and Lighthouse scores.
