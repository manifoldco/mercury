/**
 * Add additional SVG data
 */
const fs = require('fs');
const path = require('path');

const ICON_DIR = path.resolve(__dirname, '..', 'src', 'icons');

fs.readdirSync(ICON_DIR).forEach((filename) => {
  const svg = fs.readFileSync(path.resolve(ICON_DIR, filename), 'utf8');

  // step 1: remove hardcoded fill colors
  const withoutColors = svg.replace(/\s*fill="[^"]+"/g, '');

  // step 2: add a11y attrs
  const name = filename.replace(/\.svg$/i, '');
  const withA11y = withoutColors.replace(/^<svg/, `<svg aria-label="${name}" role="img"`);

  fs.writeFileSync(path.resolve(ICON_DIR, filename), withA11y, 'utf8');
});
