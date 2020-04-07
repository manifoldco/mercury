import icons from './icons.json';
import './storybook.scss';

export default { title: 'Components' };

export const Buttons = () => {
  return `
  <button type="button" class="Manifold__Button">Default Button</button>
  <button type="button" class="Manifold__Button Manifold__Button--Small">Default Small</button>
  <button type="button" class="Manifold__Button Manifold__Button--Black">Black Button</button>
  <button type="button" class="Manifold__Button Manifold__Button--Black Manifold__Button--Small">Black Small</button>
  <button type="button" class="Manifold__Button Manifold__Button--Brand">Brand Button</button>
  <button type="button" class="Manifold__Button Manifold__Button--Brand Manifold__Button--Small">Brand Small</button>
  <button type="button" class="Manifold__Button Manifold__Button--Danger">Danger Button</button>
  <button type="button" class="Manifold__Button Manifold__Button--Danger Manifold__Button--Small">Danger Small</button>
  <button type="button" disabled class="Manifold__Button">Disabled Button</button>
  <button type="button" disabled class="Manifold__Button Manifold__Button--Small">Disabled Small</button>
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

export const Select = () => `
<div class="Select__Container">
<select class="Select__Input"></select>
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
