import icons from './icons.json';
import './storybook.css';

export default {
  title: 'Components',
};

export const Icons = () => `
<div class="Icon__Grid">
  ${Object.entries(icons)
    .map(
      ([name, svg]) => `
    <div class="Icon">
      <div class="Icon__SVG">${svg}</div>
      <div class="Icon__Name">${name.replace(/\.svg$/, '')}</div>
    </div>
  `
    )
    .join('')}
</div>
`;
