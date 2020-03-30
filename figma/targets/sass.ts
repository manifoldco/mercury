/**
 * Generate Sass from design tokens
 */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { DesignTokens } from '../../types/design-tokens';
import { capitalize, slugify } from '../utils/string';

const GENERATED = path.resolve(__dirname, '..', 'src', 'design-tokens');
const COLOR_FILE = path.resolve(GENERATED, 'color.scss');
const GRADIENT_FILE = path.resolve(GENERATED, 'gradient.scss');
const SHADOW_FILE = path.resolve(GENERATED, 'shadow.scss');
const TYPOGRAPHY_FILE = path.resolve(GENERATED, 'typography.scss');

function prefix(file: string): string {
  return `// THIS FILE IS AUTO-GENERATED! DO NOT EDIT!
${file}`;
}

function buildColor(color: DesignTokens['color']): string {
  return prefix(
    Object.entries(color)
      .map(([key, value]) => `$color-${key}: ${value};`)
      .join('\n')
  );
}

function buildGradient(gradient: DesignTokens['gradient']): string {
  return prefix(
    Object.entries(gradient)
      .map(([key, value]) => `$gradient-${key}: ${value};`)
      .join('\n')
  );
}

function buildShadow(shadow: DesignTokens['shadow']): string {
  return prefix(
    Object.entries(shadow)
      .map(([key, value]) => `$shadow-${key}: ${value};`)
      .join('\n')
  );
}

function buildTypography(typography: DesignTokens['typography']): string {
  const variables = Object.entries(typography)
    .map(([key, styles]) =>
      Object.entries(styles)
        .map(([property, value]) => `$typography-${key}-${property}: ${value};`)
        .join('')
    )
    .join('');

  const mixins = Object.entries(typography)
    .map(
      ([key, styles]) =>
        `
@mixin Manifold__Typography__${capitalize(key)} {${Object.entries(styles)
          .map(([property, value]) => `${slugify(property)}: ${value};`)
          .join('')}
}`
    )
    .join('\n\n');

  return prefix([variables, mixins].join('\n\n'));
}

// Run files through Prettier before saving (cuz we probably have whitespace errors above)
function prettify(file: string): string {
  return prettier.format(file, { parser: 'scss', singleQuote: true });
}

export default function build(tokens: DesignTokens): void {
  fs.writeFileSync(COLOR_FILE, prettify(buildColor(tokens.color)), 'utf8');
  fs.writeFileSync(GRADIENT_FILE, prettify(buildGradient(tokens.gradient)), 'utf8');
  fs.writeFileSync(SHADOW_FILE, prettify(buildShadow(tokens.shadow)), 'utf8');
  fs.writeFileSync(TYPOGRAPHY_FILE, prettify(buildTypography(tokens.typography)), 'utf8');
}
