/**
 * Transform Figma shadows into CSS box-shadows
 */
import merge from 'deepmerge';
import Figma from 'figma-js';
import unit from '../utils/css-unit';
import hex from '../utils/hex';
import camelcase from '../utils/camelcase';

type StyleMap = { [key: string]: string };

export function isShadow({
  document,
}: {
  component?: Figma.FullComponentMetadata;
  document: Figma.Node;
  style?: Figma.FullStyleMetadata;
}): boolean {
  return document.type === 'RECTANGLE' && document.effects.length > 0; // shadows 1+ effects
}

export default function transform(
  styles: Figma.FullStyleMetadata[],
  fileMap: { [key: string]: Figma.FileNodesResponse['nodes'] }
): StyleMap {
  const sorted = merge(styles, []);
  sorted.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

  const shadows: StyleMap = {};

  sorted.forEach((s) => {
    const node = fileMap[s.file_key][s.node_id];
    if (!node || !isShadow({ document: node.document })) {
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
    shadows[camelcase(name)] = shadow;
  });

  return shadows;
}
