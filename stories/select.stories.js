import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './select.scss';

export default { title: 'Select' };

export const select = () => (
  <Story>
    <Demo>
      <div className="Manifold-Select">
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
        <li>
          <a href="/?path=/story/toggle--toggle">Toggle</a>
        </li>
      </ul>
    </Description>
    <Code
      tabs={{
        html: `<div class="Manifold-Select">
  <label for="select">Cheese</label>
  <select id="select">…</select>
</div>`,
        scss: `${comment.block('Select')}

.Manifold-Select {
  @include mercury.Select;
}`,
      }}
    />
  </Story>
);

export const selectState = () => (
  <Story>
    <Demo>
      <div>
        <div className="Manifold-Select">
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
        <div className="Manifold-Select">
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
        <div className="Manifold-Select">
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
<div class="Manifold-Select">
  <label for="normal">Normal</label>
  <select name="normal" id="normal">…</select>
</div>

<!-- disabled -->
<div class="Manifold-Select">
  <label for="disabled">Disabled</label>
  <select disabled name="disabled" id="disabled">…</select>
</div>

<!-- invalid -->
<div class="Manifold-Select">
  <label for="invalid">Invalid</label>
  <select aria-invalid name="invalid" id="invalid">…</select>
</div>`,
        scss: `${comment.block('Select')}

.Manifold-Select {
  @include mercury.Select;
}`,
      }}
    />
  </Story>
);

export const selectInline = () => (
  <Story>
    <Demo>
      <div className="Manifold-Select Manifold-Select--Inline">
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
        html: `<div class="Manifold-Select Manifold-Select--Inline">
  <label for="inline">Inline</label>
  <select aria-invalid name="inline" id="inline">…</select>
</div>`,
        scss: `${comment.block('Select')}

.Manifold-Select {
  @include mercury.Select;

  ${comment.modifier}

  &--Inline {
    @include mercury.Select--Inline;
  }
}`,
      }}
    />
  </Story>
);
