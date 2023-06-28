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
import { personalData } from "../../personalData";
import myPicture from "../../assets/pMarcinkowski.png";

export const About = () => (
  <AboutStyle>
    <Selfi src={myPicture} alt="Pawel Marcinkowski" />
    <Info>
      <SubHeading>This is</SubHeading>
      <Heading>{personalData.name}</Heading>
      <Comment>{personalData.description} </Comment>
      <StyledButton
        href={`mailto:${personalData.email}`}
        title={personalData.email}
        rel="noopener noreferrer"
      >
        <EnvelopeIcon />
        Hire Me
      </StyledButton>
    </Info>
  </AboutStyle>
);
