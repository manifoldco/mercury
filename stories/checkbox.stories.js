import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './checkbox.scss';

const title = 'Checkbox';

export default { title };

export const Checkbox = () => (
  <Story>
    <Demo>
      <div className="Manifold-Checkbox">
        <input role="checkbox" type="checkbox" id="checkbox-1" />
        <label for="checkbox-1">Default checkbox</label>
      </div>
    </Demo>
    <Description>
      <h1>Checkbox</h1>
      <p></p>
    </Description>
    <Code
      tabs={{
        html: ``,
        scss: `${comment.block(title)}

.Manifold-Checkbox {
  @include mercury.Manifold-Checkbox;
}`,
      }}
    />
  </Story>
);
