import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './toggle.scss';

export default { title: 'Toggle' };

export const toggle = () => (
  <Story>
    <Demo>
      <div className="Manifold-Toggle">
        <input type="checkbox" name="toggle" id="toggle" value="on" />
        <label for="toggle">Toggle</label>
      </div>
    </Demo>
    <Description>
      <h1>Toggle</h1>
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
        These are essentially the same as checkboxes, but they resemble a real-life switch, which
        can be a bit more intuitive. They generally mean “On/Off”, not “Agree/Disagree”.
      </blockquote>
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
          <a href="/?path=/story/checkbox--checkbox">Checkbox</a>
        </li>
        <li>
          <a href="/?path=/story/radio--radio">Radio</a>
        </li>
      </ul>
    </Description>
    <Code
      tabs={{
        html: `<div class="Manifold-Toggle">
  <input type="checkbox" name="toggle" id="toggle" value="on" />
  <label for="toggle">Toggle</label>
</div>`,
        scss: `${comment.block('Toggle')}

.Manifold-Toggle {
  @include mercury.Toggle;
}`,
      }}
    />
  </Story>
);

export const toggleState = () => (
  <Story>
    <Demo>
      <div className="Manifold-Toggle">
        <input disabled type="checkbox" name="toggle" id="toggle" value="on" />
        <label for="toggle">Disabled Off</label>
      </div>
      <div className="Manifold-Toggle">
        <input disabled checked type="checkbox" name="toggle" id="toggle" value="on" />
        <label for="toggle">Disabled On</label>
      </div>
    </Demo>
    <Description>
      <h1>Toggle State</h1>
      <p>
        Unlike inputs, toggles can’t be invalid because they’re either off or on. But they can be{' '}
        <code>disabled</code>.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<div class="Manifold-Toggle">
  <input disabled type="checkbox" name="toggle" id="toggle" value="on" />
  <label for="toggle">Toggle</label>
</div>`,
        scss: `${comment.block('Toggle')}

.Manifold-Toggle {
  @include mercury.Toggle;
}`,
      }}
    />
  </Story>
);
