import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './select.scss';

export default { title: 'Select' };

export const select = () => (
  <Story>
    <Demo>
      <div className="Manifold__Select">
        <label for="cheese">Cheese</label>
        <select name="cheese" id="cheese">
          <option>Alpkäse</option>
          <option>Brie</option>
          <option>Brunost</option>
          <option>Fontina</option>
          <option>Gouda</option>
          <option>Gruyère</option>
          <option>Parmigiano-Reggiano</option>
          <option>Syr</option>
        </select>
      </div>
    </Demo>
    <Description>
      <h1>Select</h1>
      <p>
        A staple in most UIs, select elements force the user to make a single choice from a list of
        options (typically a list too long for radio buttons).
      </p>
      <h2>See also</h2>
      <ul>
        <li>
          <a href="/?path=/story/input--input">Input</a>
        </li>
      </ul>
    </Description>
    <Code
      tabs={{
        html: `<div class="Manifold__Select">
  <label for="select-input">Cheese</label>
  <select id="select-input">
    <option>Alpkäse</option>
    <option>Brie</option>
    <option>Brunost</option>
    <option>Fontina</option>
    <option>Gouda</option>
    <option>Gruyère</option>
    <option>Parmigiano-Reggiano</option>
    <option>Syr</option>
  </select>
</div>`,
        scss: `${comment.block('Select')}

.Manifold__Select {
  @include mercury.Manifold__Select;
}`,
      }}
    />
  </Story>
);

export const selectState = () => (
  <Story>
    <Demo>
      <div>
        <div className="Manifold__Select">
          <label for="normal-select">Normal</label>
          <select name="normal-select" id="normal-select">
            <option>Alpkäse</option>
            <option>Brie</option>
            <option>Brunost</option>
            <option>Fontina</option>
            <option>Gouda</option>
            <option>Gruyère</option>
            <option>Parmigiano-Reggiano</option>
            <option>Syr</option>
          </select>
        </div>
      </div>
      <div>
        <div className="Manifold__Select">
          <label for="disabled-select">Disabled</label>
          <select disabled name="disabled-select" id="disabled-select">
            <option>Alpkäse</option>
            <option>Brie</option>
            <option>Brunost</option>
            <option>Fontina</option>
            <option>Gouda</option>
            <option>Gruyère</option>
            <option>Parmigiano-Reggiano</option>
            <option>Syr</option>
          </select>
        </div>
      </div>
      <div>
        <div className="Manifold__Select">
          <label for="invalid-select">Invalid</label>
          <select aria-invalid name="invalid-select" id="invalid-select">
            <option>Alpkäse</option>
            <option>Brie</option>
            <option>Brunost</option>
            <option>Fontina</option>
            <option>Gouda</option>
            <option>Gruyère</option>
            <option>Parmigiano-Reggiano</option>
            <option>Syr</option>
          </select>
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Select State</h1>
      <p>
        Identical to inputs, select elements can also end up in the <code>disabled</code> or{' '}
        <code>invalid</code> states.
      </p>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>disabled</code>
            </td>
            <td>
              Add <code>disabled</code> to the <code>&lt;select&gt;</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>invalid</code>
            </td>
            <td>
              Add <code>aria-invalid</code> to the <code>&lt;select&gt;</code>
            </td>
          </tr>
        </tbody>
      </table>
    </Description>
    <Code
      tabs={{
        html: `<!-- normal -->
<div class="Manifold__Select">
  <label for="normal-select">Normal</label>
  <select name="normal-select" id="normal-select">…</select>
</div>

<!-- disabled -->
<div class="Manifold__Select">
  <label for="disabled-select">Disabled</label>
  <select disabled name="disabled-select" id="disabled-select">…</select>
</div>

<!-- invalid -->
<div class="Manifold__Select">
  <label for="invalid-select">Invalid</label>
  <select aria-invalid name="invalid-select" id="invalid-select">…</select>
</div>`,
        scss: `${comment.block('Input')}

.Manifold__Input {
  @include mercury.Manifold__Input;
}`,
      }}
    />
  </Story>
);

export const selectInline = () => (
  <Story>
    <Demo>
      <div className="Manifold__Select Manifold__Select--Inline">
        <label for="inline-select">Cheese</label>
        <select name="inline-select" id="inline-select">
          <option>Alpkäse</option>
          <option>Brie</option>
          <option>Brunost</option>
          <option>Fontina</option>
          <option>Gouda</option>
          <option>Gruyère</option>
          <option>Parmigiano-Reggiano</option>
          <option>Syr</option>
        </select>
      </div>
    </Demo>
    <Description>
      <h1>Select (Inline)</h1>
      <p>
        Also identical to Input, you can use the <code>--Inline</code> modifier for a slimmer
        profile.
      </p>
      <p>
        ⚠️ <em>Note: this will only work with really short labels (&lt;= 6 characters)</em>{' '}
      </p>
    </Description>
    <Code
      tabs={{
        html: `<div className="Manifold__Input Manifold__Input--Inline">
  <label for="inline-input">Label</label>
  <input type="text" autoCapitalize="off" name="inline-input" id="inline-input" value="Input text" />
</div>`,
        scss: `${comment.block('Input')}

.Manifold__Input {
  @include mercury.Manifold__Input;

  ${comment.modifier}

  &--Inline {
    @include mercury.Manifold__Input--Inline;
  }
}`,
      }}
    />
  </Story>
);
