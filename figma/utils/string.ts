/**
 * Convert any string to camelCase
 */
export function camelCase(text: string): string {
  return text
    .trim()
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
