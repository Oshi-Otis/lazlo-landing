import './globals.css';

// Site URL is env-driven (same reasoning as basePath in next.config.mjs):
// preview => github.io project URL; live => https://oshigroup.co.uk
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oshigroup.co.uk';

const DESCRIPTION =
  "Lazlo unifies sales, costs, inventory, ad spend and forecasting across Shopify, " +
  "Amazon, Not On The High Street and email into one source of truth. True per-channel " +
  "profit, real landed-cost margins, and reorder timing — by 7am.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lazlo — Every channel's profit, in one place",
    template: '%s — Lazlo',
  },
  description: DESCRIPTION,
  applicationName: 'Lazlo',
  // HOLDING PUBLISH: noindex until pricing is confirmed and the domain is live.
  // Flip to { index: true, follow: true } at go-live.
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    siteName: 'Lazlo',
    title: "Lazlo — Every channel's profit, in one place",
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Lazlo — Every channel’s profit, in one place' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lazlo — Every channel's profit, in one place",
    description: DESCRIPTION,
    images: ['/og.png'],
  },
  // Favicon comes from app/icon.svg (auto-detected and basePath-aware) — do not
  // set metadata.icons manually, as a hardcoded path would skip the basePath.
};

export const viewport = {
  themeColor: '#13243F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Geist + JetBrains Mono — the mockup's typefaces, referenced by literal
            family name throughout. preconnect + display=swap keeps it fast. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;450;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        {/* If JS is disabled, never hide content behind the scroll-reveal. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style dangerouslySetInnerHTML={{ __html: '.reveal{opacity:1!important;transform:none!important}' }} />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
