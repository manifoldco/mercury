import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './skeleton.scss';

export default { title: 'Skeleton Loader' };

const LOREM_IPSUM =
  'The skeleton is the body part that forms the supporting structure of an organism. It can also be seen as the bony frame work of the body which provides support, shape and protection to the soft tissues and delicate organs in animals. There are several different skeletal types.';

export const skeleton = () => (
  <Story>
    <Demo>
      <div className="Skeleton__Grid">
        <div className="Skeleton__Grid--White">
          <h1 className="Skeleton">Skeleton Title!</h1>
          <h2 className="Skeleton">Very spooky</h2>
          <p className="Skeleton">{LOREM_IPSUM}</p>
        </div>
        <div className="Skeleton__Grid--Black">
          <h1 className="Skeleton Skeleton--White">Skeleton Title!</h1>
          <h2 className="Skeleton Skeleton--White">Very spooky</h2>
          <p className="Skeleton Skeleton--White">{LOREM_IPSUM}</p>
        </div>
        <div className="Skeleton__Grid--GrayLighter">
          <h1 className="Skeleton">Skeleton Title!</h1>
          <h2 className="Skeleton">Very spooky</h2>
          <p className="Skeleton">{LOREM_IPSUM}</p>
        </div>
      </div>
    </Demo>
    <Description>
      <h1>Skeleton Loader</h1>
      <p>
        Great for improving{' '}
        <a
          href="https://wp-rocket.me/blog/perceived-performance-need-optimize/"
          target="_blank"
          rel="noopener noreferrer"
        >
          perceived performance
        </a>{' '}
        while a user waits for data.
      </p>
    </Description>
    <Code
      tabs={{
        html: `<!-- light background -->
<p class="Manifold__Skeleton">
  💀 This is some text waiting to load
</p>

<!-- dark background -->
<p class="Manifold__Skeleton Manifold__Skeleton--White">
  💀 This is some text waiting to load
</p>`,
        scss: `${comment.block('Skeleton Loader')}

.Manifold__Skeleton {
  @include mercury.Manifold__Skeleton;

  ${comment.modifier}

  &--White {
    @include mercury.Manifold__Skeleton--White;
  }
}`,
      }}
    />
  </Story>
);
