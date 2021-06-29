import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 14px;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: ${(props) => props.theme.fonts.primary.regular};
    background-color: ${(props) => props.theme.colors.surface};
  }
`;

export default GlobalStyle;
