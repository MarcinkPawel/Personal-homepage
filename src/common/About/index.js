import {
  AboutStyle,
  Selfi,
  Info,
  SubHeading,
  Heading,
  Comment,
  StyledButton,
  EnvelopeIcon,
} from "./styled";
import { myData } from "../../myData";

export const About = () => (
  <AboutStyle>
    <Selfi />
    <Info>
      <SubHeading>This is</SubHeading>
      <Heading>{myData.name}</Heading>
      <Comment>{myData.description} </Comment>
      <StyledButton
        href={`mailto:${myData.email}`}
        title={myData.email}
        rel="noopener noreferrer"
      >
        <EnvelopeIcon />
        Hire Me
      </StyledButton>
    </Info>
  </AboutStyle>
);
