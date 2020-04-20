import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './toast.scss';

const title = 'Toast';

export default { title };

export const Toast = () => (
  <Story>
    <Demo>
      <div role="alert" className="Manifold-Toast">
        <svg aria-label="check" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
          />
        </svg>
        <p>Something occurred, now you know</p>
      </div>
    </Demo>
    <Description>
      <h1>Toast</h1>
      <p>
        A toast is a message to the user that requires no action. Toast are dismissed automatically
        after a time out and do not require a dismiss action. If necessary, a toast can provide an
        action related to the message.
        <p>
          Use an Icon for more context if needed. To display urgency in the case of an error or
          warning, use the red background color.
        </p>
        <h3>Positioning</h3>
        <p>
          Toasts should be positioned at the bottom of the viewport, centered horizontally. If there
          is a layout with a canvas, the toast should be centered in the main canvas area.
        </p>
      </p>
    </Description>
    <Code
      tabs={{
        html: `<div role="alert" class="Manifold-Toast">
<svg aria-label="check" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
    />
</svg>
<p>Something occurred, now you know</p>
</div>`,
        scss: `${comment.block(title)}

.Manifold-Toast {
  @include mercury.Toast;
}`,
      }}
    />
  </Story>
);

export const Error = () => (
  <Story>
    <Demo>
      <div role="alert" className="Manifold-Toast Manifold-Toast--Error">
        <svg
          aria-label="wifi-off"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M.293.293a1 1 0 011.414 0l22 22a1 1 0 01-1.414 1.414l-22-22a1 1 0 010-1.414zM15.821 10.621a1 1 0 011.338-.46c.894.437 1.73.983 2.488 1.627a1 1 0 01-1.294 1.524 9.94 9.94 0 00-2.072-1.353 1 1 0 01-.46-1.338z" />
            <path d="M11.156 9.991a1 1 0 01-.817 1.155 9.939 9.939 0 00-4.698 2.171 1 1 0 01-1.282-1.534A11.94 11.94 0 0110 9.174a1 1 0 011.155.817zM16.731 6.766a15 15 0 00-5.94-.72 1 1 0 11-.161-1.993A17 17 0 0123.242 8.25a1 1 0 01-1.324 1.5 15 15 0 00-5.187-2.984zM7.05 5.753a1 1 0 01-.563 1.297 14.91 14.91 0 00-4.405 2.7 1 1 0 01-1.324-1.5 16.91 16.91 0 014.995-3.06 1 1 0 011.297.563zM12.005 16.001a5 5 0 00-2.896.924 1 1 0 11-1.158-1.63 7 7 0 018.108 0 1 1 0 01-1.158 1.63 5 5 0 00-2.896-.924zM11 20a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <path d="M0 0h24v24H0V0z" />
            </clipPath>
          </defs>
        </svg>
        <p>
          No connection. <a href="#">Retry</a>
        </p>
      </div>
    </Demo>
    <Description>
      <h1>Error</h1>
      <p>
        Use the Error Toast to display important information at the app level to a user. If
        possible, give the user an action to take to address the error.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<div role="alert" class="Manifold-Toast Manifold-Toast--Error">
        <svg
          aria-label="wifi-off"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M.293.293a1 1 0 011.414 0l22 22a1 1 0 01-1.414 1.414l-22-22a1 1 0 010-1.414zM15.821 10.621a1 1 0 011.338-.46c.894.437 1.73.983 2.488 1.627a1 1 0 01-1.294 1.524 9.94 9.94 0 00-2.072-1.353 1 1 0 01-.46-1.338z" />
            <path d="M11.156 9.991a1 1 0 01-.817 1.155 9.939 9.939 0 00-4.698 2.171 1 1 0 01-1.282-1.534A11.94 11.94 0 0110 9.174a1 1 0 011.155.817zM16.731 6.766a15 15 0 00-5.94-.72 1 1 0 11-.161-1.993A17 17 0 0123.242 8.25a1 1 0 01-1.324 1.5 15 15 0 00-5.187-2.984zM7.05 5.753a1 1 0 01-.563 1.297 14.91 14.91 0 00-4.405 2.7 1 1 0 01-1.324-1.5 16.91 16.91 0 014.995-3.06 1 1 0 011.297.563zM12.005 16.001a5 5 0 00-2.896.924 1 1 0 11-1.158-1.63 7 7 0 018.108 0 1 1 0 01-1.158 1.63 5 5 0 00-2.896-.924zM11 20a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <path d="M0 0h24v24H0V0z" />
            </clipPath>
          </defs>
        </svg>
        <p>
          No connection. <a href="#">Retry</a>
        </p>
      </div>`,
        scss: `${comment.block(title)}

.Manifold-Toast {
  @include mercury.Toast;

  ${comment.modifier}

  &--Error {
    @include mercury.Toast--Error;
  }
}`,
      }}
    />
  </Story>
);
