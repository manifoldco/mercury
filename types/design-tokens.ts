export type CSS = { [cssAttribute: string]: string };

export interface DesignTokens {
  color: { [name: string]: string };
  gradient: { [name: string]: string };
  shadow: { [name: string]: string };
  typography: { [name: string]: CSS };
}
