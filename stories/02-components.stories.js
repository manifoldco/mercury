import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import icons from './icons.json';
import './storybook.scss';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

const styles = ['White', 'Black', 'Brand', 'Danger', 'Disabled'];

export const Buttons = () => {
  const btnText = text(`text`, `Button Text`);
  const disabled = boolean(`disabled`, false);
  const size = boolean(`small`, false);

  return `
  <table class="Button__Table">
    <tr>
      <th style="width:18rem;">Style</th>
      <th>Example</th>
    </tr>
    ${styles
      .map(
        (style) => `
    <tr>
      <td>
        ${style}
        <dl class="Button__Code"><dt>Sass</dt><dd>@include mercury.Manifold__Button;${
          style !== 'White' ? `<br />@include mercury.Manifold__Button--${style};` : ''
        }</dd></dl>
      </td>
      <td><button type="button" ${disabled && 'disabled'} class="Button Button--${style} Button--${
          size ? 'Small' : 'Med'
        }">${btnText}</button></td>
    </tr>
`
      )
      .join('')}
  </table>
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
