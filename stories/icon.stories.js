import React from 'react';
import icons from './storybook/icons.json';
import './icon.scss';

export default { title: 'Icons' };

export const allIcons = () => (
  <div className="Icon__Grid">
    {Object.entries(icons).map(([name, svg]) => (
      <div className="Icon">
        <div className="Icon__SVG" dangerouslySetInnerHTML={{ __html: svg }} />
        <div className="Icon__Name">{name.replace(/\.svg$/, '')}</div>
      </div>
    ))}
  </div>
);
