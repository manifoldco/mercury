export default function camelCase(name: string): string {
  return name
    .replace(/(-|_|\/|\.|\s)+\w/g, (letter): string =>
      letter.toLocaleUpperCase().replace(/[^0-9a-z]/gi, '')
    )
    .replace(/^[A-Z]/i, (letter) => letter.toLocaleLowerCase());
}
