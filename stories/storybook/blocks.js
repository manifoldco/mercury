import React from 'react';
import Prism from 'prismjs';
import ReactCopyButtonWrapper from 'react-copy-button-wrapper';
import icons from './icons.json';

// React components

export const Story = ({ children, small }) => (
  <div className={`Story${small ? ' Story--Small' : ''}`}>{children}</div>
);

export const Demo = ({ children }) => <div className="Story__Demo">{children}</div>;

export const Description = ({ children }) => <div className="Story__Description">{children}</div>;

export const Code = ({ tabs }) => (
  <div className="Story__Code">
    {Object.entries(tabs).map(([lang, code]) => {
      const prefixedCode =
        lang == 'scss'
          ? `@use "node_modules/@manifoldco/mercury";

`.concat(code)
          : code;

      return (
        <div key={lang} className="Story__Code__Tab" lang={lang}>
          <ReactCopyButtonWrapper text={code}>
            <button className="Story__Code__Copy">
              <div dangerouslySetInnerHTML={{ __html: icons['clipboard.svg'] }} /> Copy
            </button>
          </ReactCopyButtonWrapper>
          <pre lang={lang}>
            <code
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  prefixedCode,
                  Prism.languages[lang.replace('scss', 'css')],
                  lang
                ),
              }}
            />
          </pre>
        </div>
      );
    })}
  </div>
);

// helpers

const hyphens = (l) =>
  Array.from(new Array(Math.max(l, 10)))
    .map(() => '-')
    .join('');

export const comment = {
  block: (name) => `// ${hyphens(name.length + 1)}
//  ${name}
// ${hyphens(name.length + 1)}`,
  element: `// ----------
  //  Elements
  // ----------`,
  modifier: `// ----------
  //  Modifiers
  // ----------`,
};
