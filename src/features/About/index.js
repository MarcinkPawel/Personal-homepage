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
import myPicture from "../../assets/pMarcinkowski.png";

export const About = () => (
  <AboutStyle>
    <Selfi src={myPicture} alt="Pawel Marcinkowski" />
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
