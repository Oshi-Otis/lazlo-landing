// Lazlo landing — static export config.
//
// basePath/assetPrefix are env-driven so the SAME codebase serves two ways:
//   • GitHub Pages PROJECT site (preview):   NEXT_PUBLIC_BASE_PATH=/lazlo-landing
//   • Custom domain (oshigroup.co.uk, live):  NEXT_PUBLIC_BASE_PATH=""  (default)
//
// When you point the apex domain at Pages (CNAME file present), rebuild with an
// EMPTY base path so links resolve at the domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // fully static HTML/CSS/JS — no server, no backend
  trailingSlash: true,       // /support -> /support/index.html (clean static URLs)
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
