import React from 'react';
import './storybook/styles.scss';
import designTokens from '../pkg';

export default { title: 'Styles' };

export const Colors = () => (
  <div className="Swatch__Grid">
    {Object.entries(designTokens.color).map(([name, color]) => (
      <div key={name} className="Swatch">
        <div className="Swatch__Color" style={{ background: color }} />
        <div className="Swatch__Name">{name}</div>
        <div className="Swatch__Value">{color}</div>
        <dl className="Swatch__Code">
          <dt>Sass</dt>
          <dd>$color-{name}</dd>
          <dt>JS</dt>
          <dd>color.{name}</dd>
        </dl>
      </div>
    ))}
  </div>
);

export const Gradients = () => (
  <div className="Swatch__Grid">
    {Object.entries(designTokens.gradient).map(([name, gradient]) => (
      <div key={name} className="Swatch">
        <div className="Swatch__Color" style={{ background: gradient }} />
        <div className="Swatch__Name">{name}</div>
        <div className="Swatch__Value">{gradient}</div>
        <dl className="Swatch__Code">
          <dt>Sass</dt>
          <dd>$gradient-{name}</dd>
          <dt>JS</dt>
          <dd>gradient.{name}</dd>
        </dl>
      </div>
    ))}
  </div>
);

export const Shadows = () => (
  <div className="Swatch__Grid">
    {Object.entries(designTokens.shadow).map(([name, shadow]) => (
      <div key={name} className="Swatch" style={{ boxShadow: shadow }}>
        <div className="Swatch__Name">{name}</div>
        <div className="Swatch__Value">box-shadow: {shadow};</div>
        <dl className="Swatch__Code">
          <dt>Sass</dt>
          <dd>$shadow-{name}</dd>
          <dt>JS</dt>
          <dd>shadow.{name}</dd>
        </dl>
      </div>
    ))}
  </div>
);
