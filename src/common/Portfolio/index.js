import {
  Wrapper,
  Header,
  Icon,
  Heading,
  SubHeading,
  TailsList,
} from "./styled";
import { RepoTile } from "./RepoTile";
import gitIcon from "../../images/gitIcon.svg";
import { Loading } from "./Loading";
import { ErrorNotice } from "./Error";

export const Portfolio = () => {
  return (
    <Wrapper>
      <Header>
        <Icon />
        <Heading>Portfolio</Heading>
        <SubHeading>My recent projects</SubHeading>
      </Header>
      <TailsList>
        <ErrorNotice />
      </TailsList>
    </Wrapper>
  );
};
