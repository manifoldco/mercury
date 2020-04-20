import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './button.scss';

const title = 'Button';

export default { title };

export const defaultButton = () => (
  <Story>
    <Demo>
      <button className="Manifold-Button">Default Button</button>
      <button className="Manifold-Button Manifold-Button--Black">Default Button (Black)</button>
    </Demo>
    <Description>
      <h1>Default</h1>
      <p>Default buttons can be white or black, usually depending on their context.</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- button -->
<button class="Manifold-Button" type="button">
  Default Button
</button>

<!-- black button -->
<button class="Manifold-Button Manifold-Button--Black" type="button">
  Default Button (Black)
</button>

<!-- link -->
<a href="#" class="Manifold-Button">
  Default Link
</a>`,
        scss: `${comment.block(title)}

.Manifold-Button {
  @include mercury.Button;

  ${comment.modifier}

  &--Black {
    @include mercury.Button--Black
  }
}`,
      }}
    />
  </Story>
);

export const brand = () => (
  <Story>
    <Demo>
      <button className="Manifold-Button Manifold-Button--Brand">Brand Button</button>
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
<button class="Manifold-Button Manifold-Button--Brand" type="button">
  Brand Button
</button>

<!-- link -->
<a href="#" class="Manifold-Button Manifold-Button--Brand">
  Brand Link
</a>`,
        scss: `${comment.block(title)}

.Manifold-Button {
  @include mercury.Button;

  ${comment.modifier}

  &--Brand {
    @include mercury.Button--Brand;
  }
}`,
      }}
    />
  </Story>
);

export const danger = () => (
  <Story>
    <Demo>
      <button className="Manifold-Button Manifold-Button--Danger">Danger Button</button>
    </Demo>
    <Description>
      <h1>Danger</h1>
      <p>
        Danger buttons warn of potentially-destructive user actions, such as deletion or removal.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<button class="Manifold-Button Manifold-Button--Danger" type="button">
  Danger Button
</button>`,
        scss: `${comment.block(title)}

.Manifold-Button {
  @include mercury.Button;

  ${comment.modifier}

  &--Danger {
    @include mercury.Button--Danger;
  }
}`,
      }}
    />
  </Story>
);

export const small = () => (
  <Story>
    <Demo>
      <button className="Manifold-Button Manifold-Button--Small">Default Small</button>
    </Demo>
    <Description>
      <h1>Small</h1>
      <p>
        Use small buttons for less-important actions, or to squeeze more room out of a tight design.
        Small buttons can be used in conjunction with any color!
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- button -->
<button class="Manifold-Button Manifold-Button--Small" type="button">
  Small Button
</button>

<!-- link -->
<a href="#" class="Manifold-Button Manifold-Button--Small">
  Small Link
</a>`,
        scss: `${comment.block(title)}

.Manifold-Button {
  @include mercury.Button;

  ${comment.modifier}

  &--Small {
    @include mercury.Button--Small;
  }
}`,
      }}
    />
  </Story>
);

export const disabled = () => (
  <Story>
    <Demo>
      <button disabled className="Manifold-Button">
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
        html: `<button disabled class="Manifold-Button" type="button">
  Disabled Button
</button>`,
        scss: `${comment.block(title)}

.Manifold-Button {
  @include mercury.Button;
}`,
      }}
    />
  </Story>
);
