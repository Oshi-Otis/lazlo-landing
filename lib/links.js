// Canonical entry points into the Lazlo app — a separate Fly-hosted Next.js
// app served on the app subdomain. The marketing site is static (GitHub
// Pages), so these are absolute cross-origin URLs (use a plain <a>, not
// next/link). Self-serve signup (L196) + SSO/magic-link (L206) live here.
export const APP_URL = 'https://app.oshigroup.co.uk';
export const LOGIN_URL = `${APP_URL}/login`;
export const SIGNUP_URL = `${APP_URL}/signup`;
