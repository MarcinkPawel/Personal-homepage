import { AboutStyle, Selfi, Info, SubHeading, Heading, Comment, Button } from "./styled"; 

export const About = () => {
  return (
  <AboutStyle>
    <Selfi />
    <Info>
        <SubHeading>This is</SubHeading>
        <Heading>Paweł</Heading>
        <Comment>lorem inpsum </Comment>
        <Button />
    </Info>

  </AboutStyle>
)};
