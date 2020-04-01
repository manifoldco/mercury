/**
 * Strip SVGs of colors
 */
const fs = require('fs');
const path = require('path');

const ICON_DIR = path.resolve(__dirname, '..', 'src', 'icons');

fs.readdirSync(ICON_DIR).forEach((icon) => {
  const svg = fs.readFileSync(path.resolve(ICON_DIR, icon), 'utf8').replace(/fill="[^"]+"\s*/g, ''); // remove hardcoded fill colors (but leave "none")
  fs.writeFileSync(path.resolve(ICON_DIR, icon), svg, 'utf8');
});
