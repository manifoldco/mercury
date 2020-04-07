import React from 'react';
import { Story, Demo, Description, Code } from './StorybookView';

export default { title: 'Button' };

export const defaultButton = () => (
  <Story>
    <Demo>
      <button className="Manifold__Button">Default Button</button>
    </Demo>
    <Description>
      <h1>Default</h1>
      <p>Default buttons are white in color and have a subtle dropshadow.</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- button -->
<button class="Manifold__Button" type="button">
  Default Button
</button>

<!-- link -->
<a href="#" class="Manifold__Button">
  Default Link
</a>`,
        scss: `@use "node_modules/@manifoldco/mercury";

.Manifold__Button {
  @include mercury.Manifold__Button;
}`,
      }}
    />
  </Story>
);

export const small = () => (
  <Story>
    <Demo>
      <button className="Manifold__Button Manifold__Button--Small">Default Small</button>
    </Demo>
    <Description>
      <h1>Default (small)</h1>
      <p>
        Use small buttons for less-important actions, or to squeeze more room out of a tight design.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- button -->
<button class="Manifold__Button Manifold__Button--Small" type="button">
  Small Button
</button>

<!-- link -->
<a href="#" class="Manifold__Button Manifold__Button--Small">
  Small Link
</a>`,
        scss: `@use "node_modules/@manifoldco/mercury";

.Manifold__Button {
  @include mercury.Manifold__Button;

  // ----------
  //  Modifiers
  // ----------

  &--Small {
    @include mercury.Manifold__Button--Small;
  }
}`,
      }}
    />
  </Story>
);

export const disabled = () => (
  <Story>
    <Demo>
      <button disabled className="Manifold__Button">
        Disabled Button
      </button>
    </Demo>
    <Description>
      <h1>Disabled</h1>
      <p>
        Add the <code>disabled</code> attribute to disallow actions (
        <em>note: this won’t prevent links from being clicked</em>).
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- button -->
<button disabled class="Manifold__Button" type="button">
  Disabled Button
</button>

<!-- link -->
<a href="#" disabled class="Manifold__Button">
  Disabled Link
</a>`,
        scss: `@use "node_modules/@manifoldco/mercury";

.Manifold__Button {
  @include mercury.Manifold__Button;
}`,
      }}
    />
  </Story>
);

export const brand = () => (
  <Story>
    <Demo>
      <button className="Manifold__Button Manifold__Button--Brand">Brand Button</button>
    </Demo>
    <Description>
      <h1>Brand</h1>
      <p>
        Branded buttons are attention-seekers, and usually meant for primary actions on the page.
        Use sparingly!
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- button -->
<button class="Manifold__Button Manifold__Button--Brand" type="button">
  Brand Button
</button>

<!-- link -->
<a href="#" class="Manifold__Button Manifold__Button--Brand">
  Brand Link
</a>`,
        scss: `@use "node_modules/@manifoldco/mercury";

.Manifold__Button {
  @include mercury.Manifold__Button;

  // ----------
  //  Modifiers
  // ----------

  &--Brand {
    @include mercury.Manifold__Button--Brand;
  }
}`,
      }}
    />
  </Story>
);
