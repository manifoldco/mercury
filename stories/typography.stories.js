import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './typography.scss';

const title = 'Typography';

export default { title };

const LOREM_IPSUM = 'Everything you need to build an add-ons marketplace';

const TypographyDisplay = ({ component, name, element, children, smallScreen = false }) => (
  <Story>
    <Demo>
      <div className={`Manifold-${title}--${component}`}>{LOREM_IPSUM}</div>
    </Demo>
    <Description>
      <h1>{name}</h1>
      {children}
    </Description>
    <Code
      tabs={{
        html: `<${element} class="Manifold-${title}--${component}">
  ${LOREM_IPSUM}
</${element}>`,
        scss: `${comment.block(title)}

.Manifold-${title} {
  ${comment.element}

  &--${component} {
    @include mercury.${title}--${smallScreen ? 'SmallScreen' : ''}${component};${
          smallScreen
            ? `

    @media (min-width: 600px) {
      @include mercury.${title}--${component};
    }`
            : ''
        }
  }
}`,
      }}
    />
  </Story>
);

export const body = () => (
  <TypographyDisplay component="Body" name="Body" element="p" smallScreen>
    <p>Normal body copy, set at a comfortable reading size and line height.</p>
  </TypographyDisplay>
);

export const label = () => (
  <TypographyDisplay component="Label" name="Label" element="figcaption" smallScreen>
    <p>For subdued text, asides, and annotations.</p>
  </TypographyDisplay>
);

export const caption = () => (
  <TypographyDisplay component="Caption" name="Caption" element="small" smallScreen>
    <p>For smaller text, or subtext.</p>
  </TypographyDisplay>
);

export const heading = () => (
  <TypographyDisplay component="Heading" name="Heading" element="h3" smallScreen>
    <p>Standard heading component.</p>
  </TypographyDisplay>
);

export const headingLarge = () => (
  <TypographyDisplay component="HeadingLarge" name="Heading (Large)" element="h2" smallScreen>
    <p>For when you need a little more oomph.</p>
  </TypographyDisplay>
);

export const headingExtraLarge = () => (
  <TypographyDisplay component="HeadingExtraLarge" name="Heading (XL)" element="h1" smallScreen>
    <p>For shouting louder than everything else around it.</p>
  </TypographyDisplay>
);

export const subheading = () => (
  <TypographyDisplay component="Subheading" name="Subheading" element="h5" smallScreen>
    <p>Good for separating content without a gigantic heading.</p>
  </TypographyDisplay>
);

export const subheadingSmall = () => (
  <TypographyDisplay component="SubheadingSmall" name="Subheading (Small)" element="label">
    <p>
      Great for form <code>&lt;label&gt;</code>s and other small annotations.
    </p>
  </TypographyDisplay>
);

export const monoBody = () => (
  <TypographyDisplay component="MonoBody" name="Mono (Body)" element="code">
    <p>Best for displaying code meant to be read as well as important numbers.</p>
  </TypographyDisplay>
);

export const monoLabel = () => (
  <TypographyDisplay component="MonoLabel" name="Mono (Label)" element="code">
    <p>For displaying less-important code or small numeric input.</p>
  </TypographyDisplay>
);

export const monoCaption = () => (
  <TypographyDisplay component="MonoCaption" name="Mono (Caption)" element="code">
    <p>For displaying really tiny numeric input or short code snippets.</p>
  </TypographyDisplay>
);
