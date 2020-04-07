import React from 'react';
import Prism from 'prismjs';
import ReactCopyButtonWrapper from 'react-copy-button-wrapper';
import icons from './icons.json';

export const Story = ({ children }) => <div className="StorybookView">{children}</div>;
export const Demo = ({ children }) => <div className="StorybookView__Demo">{children}</div>;
export const Description = ({ children }) => (
  <div className="StorybookView__Description">{children}</div>
);
export const Code = ({ tabs }) => (
  <div className="StorybookView__Code">
    {Object.entries(tabs).map(([lang, code]) => (
      <div key={lang} className="StorybookView__Code__Tab" lang={lang}>
        <ReactCopyButtonWrapper text={code}>
          <button className="StorybookView__Code__Copy">
            <div dangerouslySetInnerHTML={{ __html: icons['clipboard.svg'] }} /> Copy
          </button>
        </ReactCopyButtonWrapper>
        <pre lang={lang}>
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(code, Prism.languages[lang.replace('scss', 'css')], lang),
            }}
          />
        </pre>
      </div>
    ))}
  </div>
);
