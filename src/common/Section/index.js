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

export const Section = ({ heading }) => {
  return (
    <SectionStyle>
      <Heading>
        {heading} <Emoji>&#128736;&#65039;</Emoji>
      </Heading>
      <Divider />
      <Content>
        <List>
          <ListItem>
            <ListPoint />
            Czesc
          </ListItem>
        </List>
      </Content>
    </SectionStyle>
  );
};
