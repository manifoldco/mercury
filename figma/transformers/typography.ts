/**
 * Convert TEXT nodes into CSS classes
 */
import Figma from 'figma-js';
import merge from 'deepmerge';
import { camelCase } from '../utils/string';
import { DesignTokens, CSS } from '../../types/design-tokens';

export function isTypography(meta: Figma.FullStyleMetadata): boolean {
  return meta.style_type === 'TEXT';
}

function figmaStyleToCSS(style: Figma.TypeStyle) {
  // defaults
  const css: CSS = {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: 'normal',
    lineHeight: '1',
    textTransform: 'none',
  };

  const replacementFont: { [key: string]: string | undefined } = {
    'SF Pro Text':
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    'IBM Plex Mono':
      "'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  };

  Object.entries(style).forEach(([attr, val]) => {
    switch (attr) {
      case 'fontFamily': {
        if (val) {
          // replace SF Pro with default font
          css.fontFamily = replacementFont[val] || val;
        }
        break;
      }
      case 'fontSize': {
        if (val) {
          css.fontSize = `${val}px`;
        }
        break;
      }
      case 'fontWeight': {
        if (val) {
          css.fontWeight = `${val || 400}`;
        }
        break;
      }
      case 'letterSpacing': {
        const letterSpacing = Math.round((val / style.fontSize) * 10000) / 10000;
        if (!Number.isNaN(letterSpacing) && letterSpacing !== 0) {
          css.letterSpacing = letterSpacing > 0 ? `${letterSpacing}em` : 'normal';
        }
        break;
      }
      case 'lineHeightPercent': {
        const lineHeight = Math.round(val) / 100;
        if (lineHeight !== 1) {
          css.lineHeight = `${lineHeight}`;
        }
        break;
      }
      case 'textCase': {
        if (val === 'UPPER') {
          css.textTransform = 'uppercase';
        }
        break;
      }
    }
  });

  return css;
}

export default function transform(
  styles: Figma.FullStyleMetadata[],
  fileMap: { [key: string]: Figma.FileNodesResponse['nodes'] }
): DesignTokens['typography'] {
  const sorted = merge(styles, []);
  sorted.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

  const typography: DesignTokens['typography'] = {};

  sorted.forEach((c) => {
    const node = fileMap[c.file_key][c.node_id];
    if (!node || !isTypography(c)) {
      return;
    }

    const document = node.document as Figma.Text;

    typography[camelCase(c.name)] = figmaStyleToCSS(document.style);
  });

  return typography;
}
