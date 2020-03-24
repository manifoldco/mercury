/**
 * Transform Figma shadows into CSS box-shadows
 */
import merge from 'deepmerge';
import Figma from 'figma-js';
import unit from '../utils/css-unit';
import hex from '../utils/hex';
import { camelCase } from '../utils/string';
import { DesignTokens } from '../../types/design-tokens';

export function isShadow(document: Figma.Node): boolean {
  return document.type === 'RECTANGLE' && document.effects.length > 0; // shadows 1+ effects
}

export default function transform(
  styles: Figma.FullStyleMetadata[],
  fileMap: { [key: string]: Figma.FileNodesResponse['nodes'] }
): DesignTokens['shadow'] {
  const sorted = merge(styles, []);
  sorted.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

  const shadows: DesignTokens['shadow'] = {};

  sorted.forEach((s) => {
    const node = fileMap[s.file_key][s.node_id];
    if (!node || !isShadow(node.document)) {
      return;
    }

    const { effects } = node.document as Figma.Rectangle;
    const name = s.name.replace(/Shadow\//i, ''); // remove “Shadow/” from beginning of name
    const shadow = effects
      .map(({ color, offset, radius }) => {
        if (color) {
          const x = unit((offset && offset.x) || 0, 'px');
          const y = unit((offset && offset.y) || 0, 'px');
          const r = unit(radius, 'px');
          return `${x} ${y} ${r} ${hex(color)}`; // transform to CSS box-shadow
        }
        return undefined;
      })
      .filter((s) => !!s)
      .join(',');
    shadows[camelCase(name)] = shadow;
  });

  return shadows;
}
