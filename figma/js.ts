/**
 * Generate JS from library
 */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { DesignTokens } from '../types/design-tokens';

const OUTPUT = path.resolve(__dirname, '..', 'src', 'index.ts');

export default function buildJS(tokens: DesignTokens) {
  fs.writeFileSync(
    OUTPUT,
    prettier.format(`const designTokens=${JSON.stringify(tokens)};export default designTokens`),
    'utf8'
  );
}
