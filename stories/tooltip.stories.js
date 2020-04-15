import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './tooltip.scss';

const title = 'Tooltip';
const component = 'Manifold__Tooltip';

export default { title, component };

export const defaultTooltip = () => (
  <Story>
    <Demo>
      <div className="Manifold__Tooltip__Container" aria-describedby="tooltip-1">
        <button type="button" className="Manifold__Button">
          Hover me
        </button>
        <div role="tooltip" id="tooltip-1" className="Manifold__Tooltip">
          Tooltip describing the trigger element.
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Default</h1>
      <p>
        Use tooltips to provide extra context to the user when hovering a trigger. The tooltip
        contents default to one line of text. Default position is above the trigger.
      </p>
      <p>
        Make sure to add the <code>aria-describedby="tooltip-id"</code> attribute to the element
        triggering the tooltip. To use the tooltip without the trigger and position manually, omit
        the `Manifold__Tooltip__Container` wrapping element.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} Container -->
<div class="Manifold__Tooltip__Container" aria-describedby="tooltip-1">
  <!-- ${title} -->
  <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Down">
    Tooltip describing the trigger element.
  </div>
</div>`,
        scss: `${comment.block(title + ' Container')}

.${component}__Container {
  @include mercury.${component}__Container;
}

.${component} {
  @include mercury.${component};
}`,
      }}
    />
  </Story>
);

export const down = () => (
  <Story>
    <Demo>
      <div
        className="Manifold__Tooltip__Container Manifold__Tooltip__Container--Down"
        aria-describedby="tooltip-1"
      >
        <button type="button" className="Manifold__Button">
          Hover me
        </button>
        <div role="tooltip" id="tooltip-1" className="Manifold__Tooltip Manifold__Tooltip--Down">
          Tooltip describing the trigger element.
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Down</h1>
      <p>Display the tooltip below the trigger</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} Container -->
<div class="Manifold__Tooltip__Container Manifold__Tooltip__Container--Down" aria-describedby="tooltip-1">
  <!-- ${title} -->
  <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Down">
    Tooltip describing the trigger element.
  </div>
</div>`,
        scss: `${comment.block(title)}

.${component}__Container {
  @include mercury.${component}__Container;

  &--Down {
    @include mercury.${component}__Container--Down;
  }
  
}

.${component} {
  @include mercury.${component};

  ${comment.modifier}

  &--Down {
    @include mercury.${component}--Down;
  }
}`,
      }}
    />
  </Story>
);

export const left = () => (
  <Story>
    <Demo>
      <div
        className="Manifold__Tooltip__Container Manifold__Tooltip__Container--Left"
        aria-describedby="tooltip-1"
      >
        <button type="button" className="Manifold__Button">
          Hover me
        </button>
        <div role="tooltip" id="tooltip-1" className="Manifold__Tooltip Manifold__Tooltip--Left">
          Tooltip describing the trigger element.
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Left</h1>
      <p>Display the tooltip to the left of the trigger</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} Container -->
<div class="Manifold__Tooltip__Container" aria-describedby="tooltip-1">
  <!-- ${title} -->
  <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Left">
    Tooltip describing the trigger element.
  </div>
</div>`,
        scss: `${comment.block(title)}

.${component}__Container {
  @include mercury.${component}__Container;

  &--Left {
    @include mercury.${component}__Container--Left;
  }
}

.${component} {
  @include mercury.${component};

  ${comment.modifier}

  &--Left {
    @include mercury.${component}--Left;
  }
}`,
      }}
    />
  </Story>
);

export const right = () => (
  <Story>
    <Demo>
      <div
        className="Manifold__Tooltip__Container Manifold__Tooltip__Container--Right"
        aria-describedby="tooltip-1"
      >
        <button type="button" className="Manifold__Button">
          Hover me
        </button>
        <div role="tooltip" id="tooltip-1" className="Manifold__Tooltip Manifold__Tooltip--Right">
          Tooltip describing the trigger element.
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Right</h1>
      <p>Display the tooltip to the right of the trigger</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} Container -->
<div class="Manifold__Tooltip__Container" aria-describedby="tooltip-1">
  <!-- ${title} -->
  <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Right">
    Tooltip describing the trigger element.
  </div>
</div>`,
        scss: `${comment.block(title)}

.${component}__Container {
  @include mercury.${component}__Container;

  &--Right {
    @include mercury.${component}__Container--Right;
  }
}

.${component} {
  @include mercury.${component};

  ${comment.modifier}

  &--Right {
    @include mercury.${component}--Right;
  }
}`,
      }}
    />
  </Story>
);

export const large = () => (
  <Story>
    <Demo>
      <div class="Manifold__Tooltip__Container" aria-describedby="tooltip-1">
        <button type="button" className="Manifold__Button">
          Hover me
        </button>
        <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Large">
          Tooltip describing the trigger element that will expand past one line neccessitating a
          line break. Use sparingly! Tooltips should always be brief if possible. They are just
          "tips" after all. 👍
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Large</h1>
      <p>Display a tooltip with a large amount of text that spans more than one line.</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} Container -->
<div class="Manifold__Tooltip__Container" aria-describedby="tooltip-1">
  <!-- ${title} -->
  <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Right">
    Tooltip describing the trigger element.
  </div>
</div>`,
        scss: `${comment.block(title)}

.${component}__Container {
  @include mercury.${component}__Container;
}

.${component} {
  @include mercury.${component};
}

  ${comment.modifier}

  &--Large {
    @include mercury.${component}--Large;
  }`,
      }}
    />
  </Story>
);
