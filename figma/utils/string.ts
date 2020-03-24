/**
 * Convert any string to camelCase
 */
export function camelCase(text: string): string {
  return text
    .replace(/(-|_|\/|\.|\s)+\w/g, (letter): string =>
      letter.toLocaleUpperCase().replace(/[^0-9a-z]/gi, '')
    )
    .replace(/^[A-Z]/i, (letter) => letter.toLocaleLowerCase());
}

/**
 * Capitalize first letter of string
 */
export function capitalize(text: string): string {
  return text.replace(/[A-Z]/i, (letter) => letter.toLocaleUpperCase());
}

/**
 * Convert camelCase to slug-case
 */
export function slugify(text: string): string {
  return text.replace(/[A-Z]/g, (letter) => `-${letter.toLocaleLowerCase()}`);
}
