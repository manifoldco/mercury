/**
 * Generate Sass from library
 */
import fs from 'fs';
import path from 'path';
import { DesignTokens } from '../types/design-tokens';
import { capitalize, slugify } from './utils/string';

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
        .join('\n')
    )
    .join('\n');

  const classes = Object.entries(typography)
    .map(
      ([key, styles]) => `.Manifold__Typography__${capitalize(key)} {
${Object.entries(styles)
  .map(([property, value]) => `  ${slugify(property)}: ${value};`)
  .join('\n')}
}`
    )
    .join('\n\n');

  return prefix([variables, classes].join('\n\n'));
}

export default function buildSass(tokens: DesignTokens): void {
  fs.writeFileSync(COLOR_FILE, buildColor(tokens.color), 'utf8');
  fs.writeFileSync(GRADIENT_FILE, buildGradient(tokens.gradient), 'utf8');
  fs.writeFileSync(SHADOW_FILE, buildShadow(tokens.shadow), 'utf8');
  fs.writeFileSync(TYPOGRAPHY_FILE, buildTypography(tokens.typography), 'utf8');
}
