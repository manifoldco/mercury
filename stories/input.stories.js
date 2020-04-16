import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './input.scss';

export default { title: 'Input' };

export const input = () => (
  <Story>
    <Demo>
      <div>
        <div className="Manifold__Input">
          <label for="text">Text input</label>
          <input type="text" autoCapitalize="off" name="text" id="text" placeholder="Placeholder" />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" value="info@manifold.co" />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="number">Numeric</label>
          <input type="text" inputmode="decimal" pattern="\d+(\.\d*)?" name="number" id="number" />
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Inputs</h1>
      <p>
        Standard <code>&lt;input&gt;</code> tags, from text to email to password to numeric inputs.
      </p>
      <h2>See also</h2>
      <ul>
        <li>
          <a href="/?path=/story/select--select">Select</a>
        </li>
      </ul>
    </Description>
    <Code
      tabs={{
        html: `<!-- text input -->
<div class="Manifold__Input">
  <label for="text">Text input</label>
  <input type="text" autocapitalize="off" name="text" id="text" />
</div>

<!-- email input -->
<div class="Manifold__Input">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" />
</div>

<!-- password input -->
<div class="Manifold__Input">
  <label for="password">Password</label>
  <input type="password" name="password" id="password" />
</div>

<!-- numeric input -->
<div class="Manifold__Input">
  <label for="number">Numeric input</label>
  <input type="text" inputmode="decimal" pattern="\d+(\.\d*)?" name="number" id="number" />
</div>`,
        scss: `${comment.block('Input')}

.Manifold__Input {
  @include mercury.Manifold__Input;
}`,
      }}
    />
  </Story>
);

export const inputState = () => (
  <Story>
    <Demo>
      <div>
        <div className="Manifold__Input">
          <label for="normal">Normal</label>
          <input type="text" autoCapitalize="off" name="normal" id="normal" value="Input text" />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="disabled">Disabled</label>
          <input
            disabled
            type="text"
            autoCapitalize="off"
            name="disabled"
            id="disabled"
            value="Input text"
          />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="invalid">Invalid</label>
          <input
            aria-invalid
            type="text"
            autoCapitalize="off"
            name="invalid"
            id="invalid"
            value="Input text"
          />
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Input State</h1>
      <p>
        Inputs can end up in a variety of states, such as disabled or invalid. And you may need to
        control those within your front-end library. Here’s how to invoke those with Mercury:
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
              Add <code>disabled</code> to the <code>&lt;input&gt;</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>invalid</code>
            </td>
            <td>
              Add <code>aria-invalid</code> to the <code>&lt;input&gt;</code>
            </td>
          </tr>
        </tbody>
      </table>
    </Description>
    <Code
      tabs={{
        html: `<!-- normal -->
<div class="Manifold__Input">
  <label for="normal">Normal</label>
  <input type="text" autocapitalize="off" name="normal" id="normal" />
</div>

<!-- disabled -->
<div class="Manifold__Input">
  <label for="disabled">Disabled</label>
  <input disabled type="text" autocapitalize="off" name="disabled" id="disabled" />
</div>

<!-- invalid -->
<div class="Manifold__Input">
  <label for="invalid">Invalid</label>
  <input aria-invalid type="text" autocapitalize="off" name="invalid" id="invalid" />
</div>`,
        scss: `${comment.block('Input')}

.Manifold__Input {
  @include mercury.Manifold__Input;
}`,
      }}
    />
  </Story>
);

export const inputInline = () => (
  <Story>
    <Demo>
      <div className="Manifold__Input Manifold__Input--Inline">
        <label for="inline-input">Label</label>
        <input
          type="text"
          autoCapitalize="off"
          name="inline-input"
          id="inline-input"
          value="Input text"
        />
      </div>
    </Demo>
    <Description>
      <h1>Input (Inline)</h1>
      <p>
        Sometimes you want a slimmer vertical profile than a stacked label + input. For that, you
        can use the <code>--Inline</code> modifier instead.
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
