/**
 * Transform Figma colors into CSS values
 */
import merge from 'deepmerge';
import Figma from 'figma-js';
import { DesignTokens } from '../../types/design-tokens';
import hex from '../utils/hex';
import { camelCase } from '../utils/string';

export function isColor(document: Figma.Node): boolean {
  return (
    document.type === 'RECTANGLE' &&
    document.fills.length === 1 &&
    document.fills[0].type === 'SOLID' &&
    document.effects.length === 0 // colors have 1 fill and 0 effects
  );
}

export default function transform(
  styles: Figma.FullStyleMetadata[],
  fileMap: { [key: string]: Figma.FileNodesResponse['nodes'] }
): DesignTokens['color'] {
  const sorted = merge(styles, []);
  sorted.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

  // generate map
  const colors: DesignTokens['color'] = {};

  sorted.forEach((s) => {
    const node = fileMap[s.file_key][s.node_id];
    if (!node || !isColor(node.document)) {
      return;
    }

    const document = node.document as Figma.Rectangle;

    const [fill] = document.fills;
    if (fill && fill.type === 'SOLID' && fill.color) {
      colors[camelCase(s.name)] = hex(fill.color);
    }
  });

  return colors;
}
