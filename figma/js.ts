/**
 * Generate JS object + types from design tokens
 */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { DesignTokens } from '../types/design-tokens';

const OUTPUT = path.resolve(__dirname, '..', 'src', 'index.ts');

function prettify(file: string): string {
  return prettier.format(file); // specify options here if desired
}

export default function build(tokens: DesignTokens): void {
  // the JS to be exported
  const template = `
const designTokens = ${JSON.stringify(tokens)};

export default designTokens;
`;

  fs.writeFileSync(OUTPUT, prettify(template), 'utf8');
}
