/**
 * Convert Figma RGBA to rgba()
 */

import Figma from 'figma-js';
import rgb2hex from 'rgb2hex';

export default function convertColor({ r, g, b, a }: Figma.Color): string {
  const scale = (n: number): number => Math.round(n * 255); // Figma’s colors are 0 to 1, where 1 is 255. Multiply to fix that.
  if (a === 1) {
    return rgb2hex(`rgb(${scale(r)}, ${scale(g)}, ${scale(b)})`).hex; // return rgb() if fully opaque
  }
  const roundedAlpha = Math.round(a * 100) / 100; // clamp alpha values to 2 decimal places
  return `rgba(${scale(r)}, ${scale(g)}, ${scale(b)}, ${roundedAlpha})`;
}
