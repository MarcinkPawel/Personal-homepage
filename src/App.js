import { ThemeProvider } from "styled-components";
import { Section } from "./common/Section";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section heading={"czesc"} />
    </ThemeProvider>
  );
}

export default App;
