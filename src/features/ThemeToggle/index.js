import { useSelector, useDispatch } from "react-redux";
import {
  ThemeTogglerWrapper,
  Button,
  Text,
  Toggler,
  IconWrapper,
  Icon,
} from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeToggler = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <ThemeTogglerWrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Toggler>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Toggler>
      </Button>
    </ThemeTogglerWrapper>
  );
};
