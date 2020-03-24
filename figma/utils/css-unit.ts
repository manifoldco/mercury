/**
 * Display CSS unit, or 0 if zero
 */
export default function cssUnit(n: number, unit?: string): string {
  if (n === 0) {
    return '0';
  }
  return `${n}${unit}`;
}
