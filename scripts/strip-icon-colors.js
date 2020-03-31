/**
 * Remove unnecessary stroke and fill from SVGs
 */
const fs = require('fs');
const path = require('path');

const ICON_DIR = path.resolve(__dirname, '..', 'src', 'icons');

fs.readdirSync(ICON_DIR).forEach((icon) => {
  const svg = fs
    .readFileSync(path.resolve(ICON_DIR, icon), 'utf8')
    .replace(/stroke="#[a-z0-9]+"\s*/gi, '') // remove hardcoded stroke colors (but leave "none")
    .replace(/fill="#[a-z0-9]+"\s*/gi, ''); // remove hardcoded fill colors (but leave "none")
  fs.writeFileSync(path.resolve(ICON_DIR, icon), svg, 'utf8');
});
