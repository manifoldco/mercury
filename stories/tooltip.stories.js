import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './tooltip.scss';

const title = 'Tooltip';
const component = 'Manifold__Tooltip';

export default { title, component };

export const defaultTooltip = () => (
  <Story>
    <Demo>
      <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip">
        Tooltip describing the trigger element.
      </div>
    </Demo>
    <Description>
      <h1>Default</h1>
      <p>
        Use tooltips to provide extra context to the user when hovering a trigger. The tooltip
        contents are text only.
      </p>
      <p>
        Make sure to add the <code>aria-describedby="tooltip-id"</code> attribute to the element
        triggering the tooltip.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} -->
<div role="tooltip" id="tooltip-1" class="Manifold__Tooltip">
  Tooltip describing the trigger element.
</div>`,
        scss: `${comment.block(title)}

.${component} {
  @include mercury.Manifold__Tooltip;
}`,
      }}
    />
  </Story>
);

export const bottom = () => (
  <Story>
    <Demo>
      <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Bottom">
        Tooltip describing the trigger element from the bottom.
      </div>
    </Demo>
    <Description>
      <h1>Bottom</h1>
      <p>Place the tooltip on the bottom of the trigger</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} -->
<div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Bottom">
  Tooltip describing the trigger element.
</div>`,
        scss: `${comment.block(title)}

.${component} {
  @include mercury.Manifold__Tooltip;

  ${comment.modifier}

  &--Bottom {
    @include mercury.Manifold__Tooltip--Bottom;
  }
}`,
      }}
    />
  </Story>
);

export const left = () => (
  <Story>
    <Demo>
      <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Left">
        Tooltip describing the trigger element from the bottom.
      </div>
    </Demo>
    <Description>
      <h1>Left</h1>
      <p>Place the tooltip on the left of the trigger</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} -->
<div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Left">
  Tooltip describing the trigger element.
</div>`,
        scss: `${comment.block(title)}

.${component} {
  @include mercury.Manifold__Tooltip;

  ${comment.modifier}

  &--Left {
    @include mercury.Manifold__Tooltip--Left;
  }
}`,
      }}
    />
  </Story>
);

export const right = () => (
  <Story>
    <Demo>
      <div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Right">
        Tooltip describing the trigger element from the bottom.
      </div>
    </Demo>
    <Description>
      <h1>Right</h1>
      <p>Place the tooltip on the right of the trigger</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- ${title} -->
<div role="tooltip" id="tooltip-1" class="Manifold__Tooltip Manifold__Tooltip--Right">
  Tooltip describing the trigger element.
</div>`,
        scss: `${comment.block(title)}

.${component} {
  @include mercury.Manifold__Tooltip;

  ${comment.modifier}

  &--Right {
    @include mercury.Manifold__Tooltip--Right;
  }
}`,
      }}
    />
  </Story>
);
