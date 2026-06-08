// One-off: generate square Lazlo app logos (navy bg + electric cartouche) for
// the Amazon SP-API listing "App details" page. Outputs to ~/Downloads.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const home = process.env.HOME;
const svg = (size) => {
  const pad = Math.round(size * 0.18);
  const inner = size - pad * 2;
  const scale = inner / 100;
  const rx = Math.round(size * 0.18);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${rx}" fill="#13243F"/>
  <g transform="translate(${pad},${pad}) scale(${scale})">
    <path d="M18 4 L82 4 L96 18 L96 82 L82 96 L18 96 L4 82 L4 18 Z" fill="#7CE08A"/>
    <rect x="32" y="24" width="14" height="52" fill="#13243F"/>
    <rect x="32" y="62" width="36" height="14" fill="#13243F"/>
    <rect x="62" y="22" width="8" height="8" fill="#13243F"/>
  </g>
</svg>`;
};

for (const s of [512, 1024]) {
  const png = await sharp(Buffer.from(svg(s))).png().toBuffer();
  const p = `${home}/Downloads/lazlo-logo-${s}.png`;
  writeFileSync(p, png);
  console.log('wrote', p, png.length, 'bytes');
}
