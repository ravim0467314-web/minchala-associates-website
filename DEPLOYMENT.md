# Minchala & Associates — Production Deployment Checklist

This checklist is for the final Vercel production launch of `minchalaassociates.com` and `www.minchalaassociates.com`.

## 1. Vercel project domain setup

Add both domains in **Vercel → Project → Settings → Domains**:

- `minchalaassociates.com`
- `www.minchalaassociates.com`

Set `minchalaassociates.com` as the primary domain unless the firm prefers the `www` version. Keep the alternate domain configured as a redirect in Vercel.

## 2. Do not change email records

Before changing DNS, preserve all existing email and verification records:

- MX records
- SPF TXT records
- DKIM TXT/CNAME records
- DMARC TXT records
- Google Workspace, Microsoft 365, Zoho, or other verification TXT records

Only website routing records should be changed for the Vercel launch.

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

- `dns1.registrar-servers.com` / `dns2.registrar-servers.com` means DNS is active at Namecheap BasicDNS.
- `ns1.dns-parking.com` / `ns2.dns-parking.com` means DNS is active at Hostinger.
- `ns1.vercel-dns.com` / `ns2.vercel-dns.com` means DNS is already active at Vercel.
- Any other nameservers mean DNS must be edited wherever those authoritative nameservers are managed.

## 4. Website DNS records for Vercel

After the domains are added in Vercel, use the exact records shown in the Vercel dashboard. The standard Vercel setup is:

| Type | Host/Name | Value/Target | Change scope |
| --- | --- | --- | --- |
| A | `@` | `76.76.21.21` | Website apex only |
| CNAME | `www` | `cname.vercel-dns.com` | Website subdomain only |

Remove only conflicting website records for `@` and `www` if Vercel reports a conflict. Do not delete MX or TXT records.

## 5. Local/CI verification before production deployment

Run these commands in order from the repository root:

```bash
npm install
npm run typecheck
npm run build
```

If all checks pass, deploy production:

```bash
npx vercel --prod
```

## 6. Post-deployment QA

Verify these production URLs after Vercel deployment and DNS propagation:

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

Check mobile navigation, contact form validation, resource downloads, sitemap, robots, Open Graph previews, structured data, and Lighthouse scores.
