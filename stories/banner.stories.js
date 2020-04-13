import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './banner.scss';

const title = 'Banner';

export default { title };

export const defaultBanner = () => (
  <Story>
    <Demo>
      <div role="alert" className="Manifold__Banner">
        <svg aria-label="info" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" />
            <path d="M12 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zM11 8a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z" />
          </g>
        </svg>
        <p>Generic information uses a basic message bar.</p>
      </div>
    </Demo>
    <Description>
      <h1>Default</h1>
      <p>
        The default banner surfaces info to the user without any urgency. Use it to give context
        about an action.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- banner -->
<div role="alert" className="Manifold__Banner">
    <svg
      aria-label="info"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
        />
        <path
          d="M12 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zM11 8a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
        />
      </g>
    </svg>
  <p>Generic information uses a basic message bar.</p>
</div>`,
        scss: `${comment.block(title)}

.Manifold__Banner {
  @include mercury.Manifold__Banner;
}`,
      }}
    />
  </Story>
);

export const error = () => (
  <Story>
    <Demo>
      <div role="alert" className="Manifold__Banner Manifold__Banner--Error">
        <svg
          aria-label="alert-triangle"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path d="M10.528 2.283a3 3 0 014.037 1.058l.003.005 8.47 14.14.008.014a3 3 0 01-2.565 4.5H3.519a2.999 2.999 0 01-2.565-4.5l.008-.014 8.47-14.14.858.514-.855-.519a3 3 0 011.093-1.058zm.618 2.094L2.683 18.506A1 1 0 003.536 20h16.928a1 1 0 00.853-1.494L12.855 4.379l-.001-.002a1 1 0 00-1.708 0z" />
            <path d="M11 17a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zM12 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1z" />
          </g>
        </svg>
        <p>Uh oh, something is wrong. Please review the wrong thing.</p>
      </div>
    </Demo>
    <Description>
      <h1>Error</h1>
      <p>Use to surface an error to the user, usually as part of a form.</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- banner -->
<div role="alert" className="Manifold__Banner Manifold__Banner--Error">
    <svg
      aria-label="alert-triangle"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M10.528 2.283a3 3 0 014.037 1.058l.003.005 8.47 14.14.008.014a3 3 0 01-2.565 4.5H3.519a2.999 2.999 0 01-2.565-4.5l.008-.014 8.47-14.14.858.514-.855-.519a3 3 0 011.093-1.058zm.618 2.094L2.683 18.506A1 1 0 003.536 20h16.928a1 1 0 00.853-1.494L12.855 4.379l-.001-.002a1 1 0 00-1.708 0z"
        />
        <path
          d="M11 17a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zM12 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1z"
        />
      </g>
    </svg>
  <p>Uh oh, something is wrong. Please review the wrong thing.</p>
</div>`,
        scss: `${comment.block(title)}

.Manifold__Banner {
  @include mercury.Manifold__Banner;

  ${comment.modifier}

  &--Error {
    @include mercury.Manifold__Banner--Error;
  }

  ${comment.element}

  &__Icon {
    @include mercury.Manifold__Banner__Icon;
  }
}`,
      }}
    />
  </Story>
);

export const success = () => (
  <Story>
    <Demo>
      <div role="alert" className="Manifold__Banner Manifold__Banner--Success">
        <svg aria-label="check" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
          />
        </svg>
        <p>Look at that! An absolute success, nice work.</p>
      </div>
    </Demo>
    <Description>
      <h1>Success</h1>
      <p>Use to surface a successful message to the user, usually as part of a form.</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- banner -->
<div role="alert" className="Manifold__Banner Manifold__Banner--Success">
    <svg
      aria-label="check"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
      />
    </svg>
  <p>Look at that! An absolute success, nice work.</p>
</div>`,
        scss: `${comment.block(title)}

.Manifold__Banner {
  @include mercury.Manifold__Banner;

  ${comment.modifier}

  &--Success {
    @include mercury.Manifold__Banner--Success;
  }

  ${comment.element}

  &__Icon {
    @include mercury.Manifold__Banner__Icon;
  }
}`,
      }}
    />
  </Story>
);

export const warning = () => (
  <Story>
    <Demo>
      <div role="alert" className="Manifold__Banner Manifold__Banner--Warning">
        <svg aria-label="flag" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 14a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1z"
            />
            <path d="M16 17c-1.7 0-3.1-.5-4.4-1.1-1.2-.4-2.3-.9-3.6-.9-2.4 0-3.3.7-3.3.7-.3.3-.7.4-1.1.2-.4-.2-.6-.5-.6-.9V3c0-.3.1-.5.3-.7C3.5 2.1 4.8 1 8 1c1.7 0 3.1.5 4.4 1.1 1.2.4 2.3.9 3.6.9 2.4 0 3.3-.7 3.3-.7.3-.3.7-.4 1.1-.2.4.2.6.5.6.9v12c0 .3-.1.5-.3.7-.2.2-1.4 1.3-4.7 1.3zm-8-4c1.7 0 3.1.5 4.4 1.1 1.2.5 2.3.9 3.6.9 1.6 0 2.6-.3 3-.5V4.6c-.7.2-1.7.4-3 .4-1.7 0-3.1-.5-4.4-1.1C10.4 3.5 9.3 3 8 3c-1.6 0-2.6.3-3 .5v9.9c.7-.2 1.7-.4 3-.4z" />
          </g>
        </svg>
        <p>This is your final warning.</p>
      </div>
    </Demo>
    <Description>
      <h1>Warning</h1>
      <p>Use to surface an warning to the user, usually as part of a form.</p>
    </Description>
    <Code
      tabs={{
        html: `<!-- banner -->
<div role="alert" className="Manifold__Banner Manifold__Banner--Warning">
    <svg
      aria-label="flag"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 14a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1z"
        />
        <path
          d="M16 17c-1.7 0-3.1-.5-4.4-1.1-1.2-.4-2.3-.9-3.6-.9-2.4 0-3.3.7-3.3.7-.3.3-.7.4-1.1.2-.4-.2-.6-.5-.6-.9V3c0-.3.1-.5.3-.7C3.5 2.1 4.8 1 8 1c1.7 0 3.1.5 4.4 1.1 1.2.4 2.3.9 3.6.9 2.4 0 3.3-.7 3.3-.7.3-.3.7-.4 1.1-.2.4.2.6.5.6.9v12c0 .3-.1.5-.3.7-.2.2-1.4 1.3-4.7 1.3zm-8-4c1.7 0 3.1.5 4.4 1.1 1.2.5 2.3.9 3.6.9 1.6 0 2.6-.3 3-.5V4.6c-.7.2-1.7.4-3 .4-1.7 0-3.1-.5-4.4-1.1C10.4 3.5 9.3 3 8 3c-1.6 0-2.6.3-3 .5v9.9c.7-.2 1.7-.4 3-.4z"
        />
      </g>
    </svg>
  <p>This is your final warning.</p>
</div>`,
        scss: `${comment.block(title)}

.Manifold__Banner {
  @include mercury.Manifold__Banner;

  ${comment.modifier}

  &--Warning {
    @include mercury.Manifold__Banner--Warning;
  }

  ${comment.element}

  &__Icon {
    @include mercury.Manifold__Banner__Icon;
  }
}`,
      }}
    />
  </Story>
);
