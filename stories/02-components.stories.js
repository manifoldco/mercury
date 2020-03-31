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

const skeletonLoremIpsum =
  'The skeleton is the body part that forms the supporting structure of an organism. It can also be seen as the bony frame work of the body which provides support, shape and protection to the soft tissues and delicate organs in animals. There are several different skeletal types.';

export const Skeleton = () => `
<div class="Skeleton__Grid">
  <div class="Skeleton__Grid--White">
    <dl class="Skeleton__Grid__Code">
      <dt>Sass</dt><dd>@include mercury.Manifold__Skeleton;</dd>
    </dl>
  </div>
  <div class="Skeleton__Grid--Black">
    <dl class="Skeleton__Grid__Code">
      <dt>Sass</dt><dd>@include mercury.Manifold__Skeleton;<br />@include mercury.Manifold__Skeleton--White</dd>
    </dl>
  </div>
  <div class="Skeleton__Grid--GrayLighter">
    <dl class="Skeleton__Grid__Code">
      <dt>Sass</dt><dd>@include mercury.Manifold__Skeleton;</dd>
    </dl>
  </div>
  <div class="Skeleton__Grid--White">
    <h1 class="Skeleton">Skeleton Title!</h1>
    <h2 class="Skeleton">Very spooky</h2>
    <p class="Skeleton">${skeletonLoremIpsum}</p>
  </div>
  <div class="Skeleton__Grid--Black">
    <h1 class="Skeleton Skeleton--White">Skeleton Title!</h1>
    <h2 class="Skeleton Skeleton--White">Very spooky</h2>
    <p class="Skeleton Skeleton--White">${skeletonLoremIpsum}</p>
  </div>
  <div class="Skeleton__Grid--GrayLighter">
    <h1 class="Skeleton">Skeleton Title!</h1>
    <h2 class="Skeleton">Very spooky</h2>
    <p class="Skeleton">${skeletonLoremIpsum}</p>
  </div>
</div>
`;
