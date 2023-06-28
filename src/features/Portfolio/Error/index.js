import { ReactComponent as ErrorIcon } from "../../../assets/danger.svg";
import { Wrapper, Header, WarningText } from "./styled";
import { personalData } from "../../../personalData";
import { StyledLink } from "../../../common/StyledLink";

export const ErrorNotice = () => (
  <Wrapper>
    <ErrorIcon />
    <Header>Ooops! Something went wrong... </Header>
    <WarningText>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </WarningText>
    <StyledLink
      href={`https://github.com/${personalData.githubUsername}`}
      title={`Github ${personalData.name}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      Go to Github
    </StyledLink>
  </Wrapper>
);
