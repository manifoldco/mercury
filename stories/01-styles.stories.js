import './storybook.css';
import designTokens from '../pkg';

function slugify(text) {
  return text.replace(/[A-Z]/g, (letter) => `-${letter.toLocaleLowerCase()}`);
}

export default {
  title: 'Styles',
};

export const Colors = () => `
<div class="Swatch__Grid">
  ${Object.entries(designTokens.color)
    .map(
      ([name, color]) => `
  <div class="Swatch">
    <div class="Swatch__Color" style="background:${color}"></div>
    <div class="Swatch__Name">${name}</div>
    <div class="Swatch__Value">${color}</div>
  </div>
`
    )
    .join('')}
</div>
`;

export const Gradients = () => `
<div class="Swatch__Grid">
  ${Object.entries(designTokens.gradient)
    .map(
      ([name, gradient]) => `
  <div class="Swatch">
    <div class="Swatch__Color" style="background:${gradient}"></div>
    <div class="Swatch__Name">${name}</div>
    <div class="Swatch__Value">${gradient}</div>
  </div>
`
    )
    .join('')}
</div>
`;

const LOREM_IPSUM = 'Everything you need to build an add-ons marketplace';

export const Typography = () => `
<table class="Typography__Table">
  <tr>
    <th>Key</th><th>Preview</th>
  </tr>
  ${Object.entries(designTokens.typography)
    .map(
      ([name, styles]) => `
  <tr>
    <td><div class="Typography__Key">${name}</div></td>
    <td><div class="Typography__Preview" style="${Object.entries(styles)
      .map(([k, v]) => `${slugify(k)}:${v.replace(/"/g, "'")};`)
      .join('')}">${LOREM_IPSUM}</div></td>
  </tr>
    `
    )
    .join('')}
</table>
`;
