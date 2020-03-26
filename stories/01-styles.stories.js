import './storybook.scss';
import designTokens from '../pkg';

function slugify(text) {
  return text.replace(/[A-Z]/g, (letter) => `-${letter.toLocaleLowerCase()}`);
}

function capitalize(text) {
  return text.replace(/[A-Z]/i, (letter) => letter.toLocaleUpperCase());
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
    <dl class="Swatch__Code">
      <dt>Sass</dt><dd>$color-${name}</dd>
      <dt>JS</dt><dd>color.${name}</dd>
    </dl>
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
    <dl class="Swatch__Code">
      <dt>Sass</dt><dd>$gradient-${name}</dd>
      <dt>JS</dt><dd>gradient.${name}</dd>
    </dl>
  </div>
`
    )
    .join('')}
</div>
`;

const LOREM_IPSUM = 'Everything you need to build an add-ons marketplace';
const typographyProperties = [
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textTransform',
];

export const Typography = () => `
<table class="Typography__Table">
  <tr>
    <th style="width:18rem;">Key</th><th>Preview</th>
  </tr>
  ${Object.entries(designTokens.typography)
    .map(
      ([name, styles]) => `
  <tr>
    <td><div class="Typography__Key">
      ${name}
      <dl class="Typography__Code">
        <dt>Sass</dt><dd>@include mercury.Manifold__Typography__${capitalize(name)};</dd>
        <dt>JS</dt><dd>${typographyProperties
          .map((attr) => `typography.${name}.${attr} = ${styles[attr]};`)
          .join('<br />')}</dd>
      </dl>
    </div></td>
    <td><div class="Typography__Preview" style="${Object.entries(styles)
      .map(([k, v]) => `${slugify(k)}:${v};`)
      .join('')}">${LOREM_IPSUM}</div></td>
  </tr>
    `
    )
    .join('')}
</table>
`;
