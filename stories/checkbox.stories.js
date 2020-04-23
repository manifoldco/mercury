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
        <label for="checkbox-1">You'll have to make some choices</label>
      </div>
      <div className="Manifold-Checkbox">
        <input role="checkbox" type="checkbox" id="checkbox-2" />
        <label for="checkbox-2">You have other options</label>
      </div>
      <div className="Manifold-Checkbox">
        <input role="checkbox" type="checkbox" id="checkbox-3" />
        <label for="checkbox-3">Another option is presented here</label>
      </div>
      <div className="Manifold-Checkbox">
        <input disabled role="checkbox" type="checkbox" id="checkbox-4" />
        <label for="checkbox-4">This option is off the table</label>
      </div>
      <div className="Manifold-Checkbox">
        <input checked disabled role="checkbox" type="checkbox" id="checkbox-5" />
        <label for="checkbox-5">This option is also off the table, but positive</label>
      </div>
    </Demo>
    <Description>
      <h1>Checkbox</h1>
      <p>
        <a
          href="http://morgancarter.com.au/design-solutions/which-input-when"
          target="_blank"
          rel="noopener noreferrer"
        >
          Morgan Carter
        </a>{' '}
        put it best:{' '}
      </p>
      <blockquote>
        Checkboxes are used when you want the user to select any number (including zero) of
        predefined options. You can also use one to agree or disagree to a single option.
      </blockquote>
      <p>
        Use a <a href="/?path=/story/toggle--toggle">Toggle</a> to style a checkbox representive of
        on/off{' '}
      </p>
      <p>
        Note that for CSS reasons, the <code>&lt;input&gt;</code> needs to come <em>before</em> the{' '}
        <code>&lt;label&gt;</code> element.
      </p>
      <h2>See also</h2>
      <ul>
        <li>
          <a href="/?path=/story/input--input">Input</a>
        </li>
        <li>
          <a href="/?path=/story/select--select">Select</a>
        </li>
        <li>
          <a href="/?path=/story/toggle--toggle">Toggle</a>
        </li>
      </ul>
    </Description>
    <Code
      tabs={{
        html: `<div className="Manifold-Checkbox">
  <input role="checkbox" type="checkbox" id="checkbox" />
  <label for="checkbox">Default checkbox</label>
</div>`,
        scss: `${comment.block(title)}

.Manifold-Checkbox {
  @include mercury.Checkbox;
}`,
      }}
    />
  </Story>
);

export const checkboxState = () => (
  <Story>
    <Demo>
      <div>
        <div className="Manifold-Checkbox">
          <input disabled type="checkbox" name="checkbox" id="checkbox" />
          <label for="toggle">Disabled Off</label>
        </div>
      </div>
      <div>
        <div className="Manifold-Checkbox">
          <input disabled checked type="checkbox" name="checkbox" id="checkbox" />
          <label for="toggle">Disabled On</label>
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Checkbox State</h1>
      <p>
        A checkbox can be in a disabled state while maintaining its <code>checked</code> state.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<div className="Manifold-Checkbox">
  <input disabled checked role="checkbox" type="checkbox" id="checkbox" />
  <label for="checkbox">Default checkbox</label>
</div>`,
        scss: `${comment.block(title)}

.Manifold-Checkbox {
  @include mercury.Checkbox;
}`,
      }}
    />
  </Story>
);
