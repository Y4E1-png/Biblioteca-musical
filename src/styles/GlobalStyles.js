import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color : ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;

export default GlobalStyles;