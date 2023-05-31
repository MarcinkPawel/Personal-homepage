import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Main } from "./features/Main/index";

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);
