import React from 'react';
import ReactCopyButtonWrapper from 'react-copy-button-wrapper';
import icons from './storybook/icons.json';
import { Story } from './storybook/blocks';
import './icon.scss';

export default { title: 'Icons' };

export const gallery = () => (
  <div className="Icon__Grid">
    {Object.entries(icons).map(([filename, svg]) => {
      const name = filename.replace(/\.svg$/, '');
      return (
        <Story small>
          <div className="Icon__SVG" dangerouslySetInnerHTML={{ __html: svg }} />
          <div className="Icon__Name">
            {name}
            <div className="Icon__Copy">
              <ReactCopyButtonWrapper text={svg}>
                <button>
                  <div dangerouslySetInnerHTML={{ __html: icons['copy.svg'] }} /> Copy
                </button>
              </ReactCopyButtonWrapper>
            </div>
          </div>
        </Story>
      );
    })}
  </div>
);
