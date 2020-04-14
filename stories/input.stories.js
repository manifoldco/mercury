import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './input.scss';

export default { title: 'Input' };

export const input = () => (
  <Story>
    <Demo>
      <div>
        <div className="Manifold__Input">
          <label for="my-input">Text input</label>
          <input
            type="text"
            autoCapitalize="off"
            name="text-input"
            id="my-input"
            placeholder="Placeholder"
          />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="email-input">Email</label>
          <input type="email" name="email-input" id="email-input" value="info@manifold.co" />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="password-input">Password</label>
          <input type="password" name="password-input" id="password-input" />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="number-input">Numeric</label>
          <input
            type="text"
            inputmode="decimal"
            pattern="\d+(\.\d*)?"
            name="number-input"
            id="number-input"
          />
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Inputs</h1>
      <p>
        Standard <code>&lt;input&gt;</code> tags, from text to email to password to numeric inputs.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- text input -->
<div class="Manifold__Input">
  <label for="text-input">Text input</label>
  <input type="text" autocapitalize="off" name="text-input" id="text-input" />
</div>

<!-- email input -->
<div class="Manifold__Input">
  <label for="email-input">Email</label>
  <input type="email" name="email-input" id="email-input" />
</div>

<!-- password input -->
<div class="Manifold__Input">
  <label for="password-input">Password</label>
  <input type="password" name="password-input" id="password-input" />
</div>

<!-- numeric input -->
<div class="Manifold__Input">
  <label for="number-input">Numeric input</label>
  <input type="text" inputmode="decimal" pattern="\d+(\.\d*)?" name="number-input" id="number-input" />
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
          <label for="normal-input">Normal</label>
          <input
            type="text"
            autoCapitalize="off"
            name="normal-input"
            id="normal-input"
            value="Input text"
          />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="disabled-input">Disabled</label>
          <input
            disabled
            type="text"
            autoCapitalize="off"
            name="disabled-input"
            id="disabled-input"
            value="Input text"
          />
        </div>
      </div>
      <div>
        <div className="Manifold__Input">
          <label for="invalid-input">Invalid</label>
          <input
            aria-invalid
            type="text"
            autoCapitalize="off"
            name="invalid-input"
            id="invalid-input"
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
  <label for="normal-input">Normal</label>
  <input type="text" autocapitalize="off" name="text-input" id="normal-input" />
</div>

<!-- disabled -->
<div class="Manifold__Input">
  <label for="disabled-input">Disabled</label>
  <input disabled type="text" autocapitalize="off" name="disabled-input" id="disabled-input" />
</div>

<!-- invalid -->
<div class="Manifold__Input">
  <label for="invalid-input">Invalid</label>
  <input aria-invalid type="text" autocapitalize="off" name="invalid-input" id="invalid-input" />
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
