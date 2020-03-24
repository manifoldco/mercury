/**
 * @figma-export/cli appends “Icons-” to all files. That’s annoying.
 */
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.resolve(__dirname, '..', 'src', 'icons');

fs.readdirSync(ICONS_DIR).forEach((icon) => {
  fs.renameSync(path.resolve(ICONS_DIR, icon), path.resolve(ICONS_DIR, icon.replace(/Icons-/, '')));
});
