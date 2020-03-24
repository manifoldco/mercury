const fs = require('fs');
const path = require('path');

const ICON_DIR = path.resolve(__dirname, '..', 'src', 'icons');
const STORIES_DIR = path.resolve(__dirname, '..', 'stories');

const icons = fs.readdirSync(ICON_DIR).reduce(
  (icons, icon) => ({
    ...icons,
    [icon]: fs.readFileSync(path.resolve(ICON_DIR), icon, 'utf8'),
  }),
  {}
);

fs.writeFileSync(path.resolve(STORIES_DIR, 'icons.json'), JSON.stringify(icons, null, 2), 'utf8');
