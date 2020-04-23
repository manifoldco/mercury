import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './radio.scss';

export default { title: 'Radio' };

export const radio = () => (
  <Story>
    <Demo>
      <h4 style={{ color: '#696969' }}>Choose your combo meal side item</h4>
      <div className="Manifold-Radio">
        <input type="radio" name="side-item" id="french-fries" />
        <label for="french-fries">French fries</label>
      </div>
      <div className="Manifold-Radio">
        <input type="radio" name="side-item" id="potato-chips" />
        <label for="potato-chips">Potato chips</label>
      </div>
      <div className="Manifold-Radio">
        <input type="radio" name="side-item" id="side-salad" />
        <label for="side-salad">Garden salad</label>
      </div>
      <div className="Manifold-Radio">
        <input type="radio" name="side-item" id="chum-bucket" />
        <label for="chum-bucket">Chum bucket</label>
      </div>
    </Demo>
    <Description>
      <h1>Radio</h1>
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
        Radio buttons and radioes are often erroneously interchanged. While radioes allow the user
        to select any number of predefined options, radio buttons are used to force the user to
        select exactly one predefined option. Once selected, they can’t be unselected. If you need
        the user to select exactly 1 or 0 options, you may use a set of radio buttons and include an
        option “None”.
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
          <a href="/?path=/story/toggle--toggle">Toggle</a>
        </li>
        <li>
          <a href="/?path=/story/select--select">Select</a>
        </li>
        <li>
          <a href="/?path=/story/checkbox--checkbox">Checkbox</a>
        </li>
      </ul>
    </Description>
    <Code
      tabs={{
        html: `<div class="Manifold-Radio">
  <input type="radio" name="radio" id="radio-choice" />
  <label for="radio-choice">Radio</label>
</div>`,
        scss: `${comment.block('Radio')}

.Manifold-Radio {
  @include mercury.Radio;
}`,
      }}
    />
  </Story>
);

export const radioState = () => (
  <Story>
    <Demo>
      <div className="Manifold-Radio">
        <input disabled type="radio" name="radio" id="radio-off" />
        <label for="radio-off">Disabled Off</label>
      </div>
      <div className="Manifold-Radio">
        <input disabled checked type="radio" name="radio" id="radio-on" />
        <label for="radio-on">Disabled On</label>
      </div>
    </Demo>
    <Description>
      <h1>Radio State</h1>
      <p>
        A radio button can be in a disabled state while maintaining its <code>checked</code> state.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<div class="Manifold-Radio">
  <input disabled checked type="radio" name="radio" id="radio" />
  <label for="radio">Radio</label>
</div>`,
        scss: `${comment.block('Radio')}

.Manifold-Radio {
  @include mercury.Radio;
}`,
      }}
    />
  </Story>
);
