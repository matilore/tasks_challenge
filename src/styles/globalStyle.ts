import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    font-family: "Source Sans Pro";
    font-style: normal;
    color: #000000;

    > #root {
          height: 100vh;
    }
  }
`;

export default GlobalStyle;
