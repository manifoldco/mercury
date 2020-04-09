import React from 'react';
import icons from './storybook/icons.json';
import { Story, Code } from './storybook/blocks';
import './icon.scss';

export default { title: 'Icons' };

export const gallery = () => (
  <div className="Icon__Grid">
    {Object.entries(icons).map(([filename, svg]) => {
      const name = filename.replace(/\.svg$/, '');
      return (
        <Story small>
          <div className="Icon__SVG" dangerouslySetInnerHTML={{ __html: svg }} />
          <div className="Icon__Name">{name}</div>
          <Code tabs={{ html: svg }} />
        </Story>
      );
    })}
  </div>
);
