// Generates public/og.png (1200×630) from an inline SVG using sharp.
// Run with: npm run gen:og  (committed output means hosts don't need sharp at deploy).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#13243F"/>
  <g transform="translate(96,250) scale(1.1)">
    <path d="M18 4 L82 4 L96 18 L96 82 L82 96 L18 96 L4 82 L4 18 Z" fill="#7CE08A"/>
    <rect x="32" y="24" width="14" height="52" fill="#13243F"/>
    <rect x="32" y="62" width="36" height="14" fill="#13243F"/>
    <rect x="62" y="22" width="8" height="8" fill="#13243F"/>
  </g>
  <text x="232" y="318" font-family="Geist, Helvetica, Arial, sans-serif" font-size="76" font-weight="700" letter-spacing="-3" fill="#FAFAF7">Lazlo</text>
  <text x="98" y="430" font-family="Geist, Helvetica, Arial, sans-serif" font-size="52" font-weight="700" letter-spacing="-2" fill="#FAFAF7">Every channel&#39;s profit, in one place.</text>
  <text x="98" y="492" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#B9C2CF">Unified analytics for multi-channel e-commerce &amp; marketplace sellers.</text>
  <text x="98" y="566" font-family="monospace" font-size="20" fill="#7CE08A" letter-spacing="2">SHOPIFY · AMAZON · NOTHS · EMAIL</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, png);
console.log('Wrote', out, png.length, 'bytes');
