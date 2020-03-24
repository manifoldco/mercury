/**
 * Extract design tokens from Manifold’s Design System
 * -> https://www.figma.com/files/project/5648720/Design-System
 */

import https from 'https';
import Figma from 'figma-js';
import { DesignTokens } from '../types/design-tokens';
import transformColor from './transformers/color';
import transformGradient from './transformers/gradient';
import transformShadow from './transformers/shadow';
import buildSass from './sass';
import buildJS from './js';

// settings
const FIGMA_TEAM_ID = '801112506271617584';

// extract
interface TeamMeta {
  components: Figma.FullComponentMetadata[];
  styles: Figma.FullStyleMetadata[];
}
type NodeResponseWithKey = Figma.FileNodesResponse & { key: string };
type NodeMap = { [key: string]: NodeResponseWithKey['nodes'] };

const REQUEST_OPTIONS: https.RequestOptions = {
  headers: {
    Connection: 'keep-alive',
    'Content-type': 'application/json',
    'X-FIGMA-TOKEN': process.env.FIGMA_ACCESS_TOKEN,
  },
};

async function fetchAllComponentsAndStyles(): Promise<void> {
  // note(drew): we aren’t guaranteed order of resolution, so don’t assume!
  // `components` and `styles` variable names are just for understanding. but
  // either way, we merge them together at the end so it doesn’t matter

  // 1. fetch metadata for team components & styles
  const [components, styles] = await Promise.all(
    [
      `https://api.figma.com/v1/teams/${FIGMA_TEAM_ID}/components?page_size=250`, // components URL
      `https://api.figma.com/v1/teams/${FIGMA_TEAM_ID}/styles?page_size=250`, // styles URL
    ].map(
      (url) =>
        new Promise((resolve) => {
          let rawData: any = '';
          https.get(url, REQUEST_OPTIONS, (res) => {
            res.on('data', (chunk) => (rawData += chunk));
            res.on('end', () => resolve(JSON.parse(rawData)));
          });
        })
    )
  );
  const meta: TeamMeta = { ...(components as any).meta, ...(styles as any).meta };

  // 2. fetch styling data
  const fileData = await fetchFileNodes(meta);
  const fileMap = fileData.reduce<NodeMap>(
    (files, file) => ({ ...files, [file.key]: file.nodes }),
    {}
  );

  // 3. build Mercury
  buildMercury(meta, fileMap);
}

async function fetchFileNodes(meta: TeamMeta): Promise<NodeResponseWithKey[]> {
  // combine requests into as few as possible
  const fileKeys = [...meta.components, ...meta.styles].reduce(
    (obj: { [key: string]: Set<string> }, { file_key, node_id }) => {
      const nodelist = obj[file_key] || new Set<string>();
      return { ...obj, [file_key]: nodelist.add(node_id) };
    },
    {}
  );

  return (await Promise.all(
    Object.entries(fileKeys)
      .map(([key, val]) => ({
        key,
        url: `https://api.figma.com/v1/files/${key}/nodes?ids=${[...val].join(',')}`,
      }))
      .map(
        ({ key, url }) =>
          new Promise((resolve) => {
            let rawData: any = '';
            https.get(url, REQUEST_OPTIONS, (res) => {
              res.on('data', (chunk) => (rawData += chunk));
              res.on('end', () => resolve({ ...JSON.parse(rawData), key })); // add key in response
            });
          })
      )
  )) as NodeResponseWithKey[];
}

function buildMercury(meta: TeamMeta, fileMap: NodeMap): void {
  const color = transformColor(meta.styles, fileMap);
  const shadow = transformShadow(meta.styles, fileMap);
  const gradient = transformGradient();

  const tokens: DesignTokens = { color, gradient, shadow };

  buildSass(tokens);
  buildJS(tokens);
}

fetchAllComponentsAndStyles();
