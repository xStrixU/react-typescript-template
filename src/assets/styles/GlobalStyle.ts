import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    font-family: "Segoe UI", sans-serif;
    background: #eaeded;
    position: relative;
  }

  button, input, select {
    font-family: inherit;
  }

  *:focus {
    outline: none;
  }
`;
