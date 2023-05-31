import {
  SectionStyle,
  Heading,
  Divider,
  Content,
  List,
  ListItem,
  ListPoint,
  Emoji,
} from "./styled";

export const Section = ({ heading, skills }) => {
  return (
    <SectionStyle>
      <Heading>
        {heading}
      </Heading>
      <Divider />
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
};
