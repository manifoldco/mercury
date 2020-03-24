import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import icons from './icons.json';
import '../pkg/index.min.css';
import './storybook.css';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const Buttons = () => {
  const btnText = text(`text`, `Button Text`);
  const color = select(`color`, ['white', 'black', 'brand', 'danger'], 'white');
  const disabled = boolean(`disabled`, false);
  const small = boolean(`small`, false);

  return `
<button type="button" ${disabled && 'disabled'} class="Manifold__Button" data-color="${color}" ${
    small && 'data-size="small"'
  }>${btnText}</button>
`;
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
