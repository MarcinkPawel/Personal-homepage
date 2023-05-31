import { ReactComponent as ErrorIcon } from "../../../images/danger.svg";
import { Wrapper, Header, WarningText } from "./styled";

export const ErrorNotice = () => (
  <Wrapper>
    <ErrorIcon />
    <Header>Ooops! Something went wrong... </Header>
    <WarningText>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </WarningText>
  </Wrapper>
);
