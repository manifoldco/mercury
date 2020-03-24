/**
 * Transform Figma colors into CSS values
 */
import merge from 'deepmerge';
import Figma from 'figma-js';
import camelcase from '../utils/camelcase';
import hex from '../utils/hex';

type StyleMap = { [key: string]: string };

export function isColor({
  document,
}: {
  component?: Figma.FullComponentMetadata;
  document: Figma.Node;
  style?: Figma.FullStyleMetadata;
}): boolean {
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
): StyleMap {
  const sorted = merge(styles, []);
  sorted.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

  // generate map
  const colors: StyleMap = {};

  sorted.forEach((s) => {
    const node = fileMap[s.file_key][s.node_id];
    if (!node || !isColor({ document: node.document })) {
      return;
    }

    const document = node.document as Figma.Rectangle;

    const [fill] = document.fills;
    if (fill && fill.type === 'SOLID' && fill.color) {
      colors[camelcase(s.name)] = hex(fill.color);
    }
  });

  return colors;
}
