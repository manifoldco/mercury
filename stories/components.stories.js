import fs from 'fs';
import path from 'path';
import './storybook.css';

const ICON_DIR = path.resolve(__dirname, '..', 'src', 'icons');
const icons = fs
  .readFileSync(ICON_DIR)
  .map((icon) => fs.readFileSync(path.resolve(ICON_DIR), icon, 'utf8'));

export default {
  title: 'Components',
};

export const Icons = () => `
<div class="Icon__Grid">
  ${icons
    .map(
      (icon) => `
    <div class="Icon">${icon}</div>
  `
    )
    .join('')}
</div>
`;
