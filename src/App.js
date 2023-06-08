import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { Main } from "./features/Main/index";
import { selectIsDarkTheme } from "./features/ThemeToggle/themeSlice";

export default () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};
