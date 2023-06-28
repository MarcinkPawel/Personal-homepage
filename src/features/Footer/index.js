import {
  ContactLink,
  Wrapper,
  FooterContent,
  LetsTalk,
  Address,
  EmailContainer,
  SocialList,
  SocialListItem,
  SocialListItemLink,
} from "./styled";
import { personalData } from "../../personalData";
import { socialMediaList } from "./socialMediaList";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailContainer>
        <ContactLink
          href={`mailto:${personalData.email}`}
          title={personalData.email}
          rel="noopener noreferrer"
        >
          {personalData.email}
        </ContactLink>
      </EmailContainer>
      <FooterContent>{personalData.footerInfo}</FooterContent>
      <SocialList>
        {socialMediaList.map(({ name, url, Icon }) => (
          <SocialListItem key={name}>
            <SocialListItemLink
              href={url}
              title={name}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon />
            </SocialListItemLink>
          </SocialListItem>
        ))}
      </SocialList>
    </Address>
  </Wrapper>
);
