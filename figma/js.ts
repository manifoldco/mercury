/**
 * Generate JS from library
 */
import fs from 'fs';
import path from 'path';
import { DesignTokens } from '../types/design-tokens';

const OUTPUT = path.resolve(__dirname, '..', 'src', 'index.js');

export default function buildJS(tokens: DesignTokens) {
  fs.writeFileSync(
    OUTPUT,
    `const designTokens=JSON.parse('${JSON.stringify(tokens)}');export default designTokens`,
    'utf8'
  ); // store as JSON (https://v8.dev/blog/cost-of-javascript-2019)
}
