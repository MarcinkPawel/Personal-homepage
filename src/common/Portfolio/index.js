import {
  PortfolioStyled,
  Header,
  Icon,
  Heading,
  SubHeading,
  TailsList,
  Tail,
  Title,
  Description,
  Label,
  LinkLabel,
  Link
} from "./styled";
import gitHubIcon from "../../images/gitHubIcon.svg";

export const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Header>
        <Icon src={gitHubIcon} alt="" />
        <Heading>Portfolio</Heading>
        <SubHeading>My recent projects</SubHeading>
      </Header>
      <TailsList>
        <Tail>
          <Title>to do react</Title>
          <Description>asd as ds fsdfsrfewfsf e wdfasfsg rgwe xfdsa ggsf sfrwd ac rgsfewfa g h efscvcxzfsdf  dasd e efds </Description>
          <Label>
          <LinkLabel>Demo:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
          <Label>
          <LinkLabel>Code:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
        </Tail>

        <Tail>
          <Title>to do react</Title>
          <Description>asd as ds fsdfsrfewfsf e wdfasfsg rgwe xfdsa ggsf sfrwd ac rgsfewfa g h efscvcxzfsdf  dasd e efds </Description>
          <Label>
          <LinkLabel>Demo:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
          <Label>
          <LinkLabel>Code:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
        </Tail>
        <Tail>
          <Title>to do react</Title>
          <Description>asd as ds fsdfsrfewfsf e wdfasfsg rgwe xfdsa ggsf sfrwd ac rgsfewfa g h efscvcxzfsdf  dasd e efds </Description>
          <Label>
          <LinkLabel>Demo:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
          <Label>
          <LinkLabel>Code:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
        </Tail>
        <Tail>
          <Title>to do react</Title>
          <Description>asd as ds fsdfsrfewfsf e wdfasfsg rgwe xfdsa ggsf sfrwd ac rgsfewfa g h efscvcxzfsdf  dasd e efds </Description>
          <Label>
          <LinkLabel>Demo:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
          <Label>
          <LinkLabel>Code:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
        </Tail>
        <Tail>
          <Title>to do react</Title>
          <Description>asd as ds fsdfsrfewfsf e wdfasfsg rgwe xfdsa ggsf sfrwd ac rgsfewfa g h efscvcxzfsdf  dasd e efds </Description>
          <Label>
          <LinkLabel>Demo:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
          <Label>
          <LinkLabel>Code:</LinkLabel>
          <Link href="https://google.com/"> www.google.com </Link>
          </Label>
        </Tail>
        
      </TailsList>
    </PortfolioStyled>
  );
};
