import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    zIndex: {
      small: number;
      medium: number;
      large: number;
    };
    errorRed: string;
    errorBoxShadow: string;
  }
}
