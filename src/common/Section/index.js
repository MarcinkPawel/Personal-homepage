import { SectionStyle, Heading, Divider } from "./styled";

export const Section = ({heading}) => {
  return (
  <SectionStyle>
    <Heading> {heading} </Heading>
    <Divider/>
    <content>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </content>
  </SectionStyle>
  );
};
