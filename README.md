# Lazlo — public marketing site

Standalone static marketing site for **Lazlo** (by Oshi Group Ltd), served at
`oshigroup.co.uk`. Built to unblock the Amazon SP-API Appstore listing, Amazon Ads
Partner Network, Meta app review and the Google Ads API application — all of which
require a public website with product, pricing and support information.

This is **intentionally separate** from the Lazlo product repo (`the-foundry`): no
auth, no backend, no product CI. It is a pure static export.

## Stack

- **Next.js** (App Router) with `output: 'export'` → fully static HTML/CSS/JS.
- No Tailwind — the design ships with its own CSS (`app/globals.css`) and inline
  styles, ported verbatim from the Claude Design mockup (source of truth).
- Fonts: Geist + JetBrains Mono via Google Fonts.

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.jsx` | Full marketing page (hero, features, how-it-works, pricing, trust, support) |
| `/support` | `app/support/page.jsx` | Standalone support/contact page (real URL Amazon validates) |
| `/privacy` | `app/privacy/page.jsx` | UK/GDPR-aware Privacy Policy draft — **legal review recommended** |
| `/terms` | `app/terms/page.jsx` | UK SaaS Terms of Service draft — **legal review recommended** |

## Develop & build

```bash
npm install
npm run dev            # local dev server
npm run build          # static export -> ./out
npm run gen:og         # regenerate public/og.png (only if the OG art changes)
```

## Deploy (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`NEXT_PUBLIC_BASE_PATH=/lazlo-landing` and deploys to GitHub Pages.

Preview URL: **https://oshi-otis.github.io/lazlo-landing/**

## Going live on oshigroup.co.uk

1. Add a file `public/CNAME` containing `oshigroup.co.uk`.
2. In `.github/workflows/deploy.yml`, set `NEXT_PUBLIC_BASE_PATH: ""` and
   `NEXT_PUBLIC_SITE_URL: https://oshigroup.co.uk`.
3. In `app/layout.jsx`, flip `robots` to `{ index: true, follow: true }` (this is
   the only thing currently holding the site out of search — "hold publish").
4. Confirm the pricing tiers in `components/sections2.jsx` are final.
5. Set the DNS records below at the domain registrar, then set the custom domain
   under **Settings → Pages** in the repo.

### DNS records (user action — set at your registrar)

Apex `oshigroup.co.uk` → GitHub Pages (four A records, and AAAA for IPv6):

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | oshi-otis.github.io |

GitHub Pages serves both apex and `www` and issues the HTTPS cert; with the apex
set as the custom domain, `www` 301-redirects to the apex automatically.

> Alternative host (Vercel): A `@ 76.76.21.21` + CNAME `www cname.vercel-dns.com`.
