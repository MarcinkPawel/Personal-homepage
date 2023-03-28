import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Main } from "./features/Main/index";
import { Section } from "./common/Section";
import { About } from "./common/About";
import { Portfolio } from "./common/Portfolio";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
