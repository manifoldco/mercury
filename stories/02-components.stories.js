import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import icons from './icons.json';
import './storybook.scss';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const Buttons = () => {
  const btnText = text(`text`, `Button Text`);
  const color = select(`color`, ['White', 'Black', 'Brand', 'Danger'], 'white');
  const disabled = boolean(`disabled`, false);
  const size = boolean(`small`, false);

  return `
<button type="button" ${disabled && 'disabled'} class="Button Button--${color} Button--${
    size ? 'Small' : 'Med'
  }">${btnText}</button>
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
