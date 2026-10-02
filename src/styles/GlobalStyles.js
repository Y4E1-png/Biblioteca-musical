import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  #root {
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  h1,
  h2 {
    line-height: 1.2;
  }

  button,
  input {
    font: inherit;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible {
    outline: 3px solid ${props => props.theme.colors.primary};
    outline-offset: 3px;
  }
`;

export default GlobalStyles;