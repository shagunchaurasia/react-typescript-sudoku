import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  html {
    body {
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;

      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        display: flex;
        font-family: sans-serif;
        height: 100%;
        justify-content: center;
        padding: 7%;
      }
    }
  }
`}`;
