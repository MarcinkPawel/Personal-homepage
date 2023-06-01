import { ReactComponent as ErrorIcon } from "../../../images/danger.svg";
import { Wrapper, Header, WarningText } from "./styled";
import { myData } from "../../../myData";
import { Button } from "../../Button";

export const ErrorNotice = () => (
  <Wrapper>
    <ErrorIcon />
    <Header>Ooops! Something went wrong... </Header>
    <WarningText>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </WarningText>
    <Button
            href={myData.github}
            title="Github Marianna Weychan"
            target="_blank"
            rel="noreferrer noopener">
            Go to Github
        </Button>
  </Wrapper>
);
