import {
  SectionStyle,
  Heading,
  Content,
  List,
  ListItem,
  ListPoint,
} from "./styled";

export const Section = ({ heading, skills }) => (
  <SectionStyle>
    <Heading>{heading}</Heading>
    <Content>
      <List>
        {skills.map((skill) => (
          <ListItem key={skill}>
            <ListPoint />
            {skill}
          </ListItem>
        ))}
      </List>
    </Content>
  </SectionStyle>
);
