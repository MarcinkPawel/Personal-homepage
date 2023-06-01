import {
  ContactLink,
  Wrapper,
  FooterContent,
  LetsTalk,
  Address,
  EmailContainer,
  SocialList,
  SocialList_Item,
  SocialList_Item_Link,
} from "./styled";
import { myData } from "../../myData";
import { socialMediaList } from "./socialMediaList";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailContainer>
        <ContactLink
          href={`mailto:${myData.email}`}
          title={myData.email}
          rel="noopener noreferrer"
        >
          {myData.email}
        </ContactLink>
      </EmailContainer>
      <FooterContent>
        I'm always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me🤞
      </FooterContent>
      <SocialList>
        {socialMediaList.map(({ name, url, Icon }) => (
          <SocialList_Item key={name}>
            <SocialList_Item_Link
              href={url}
              title={name}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon />
            </SocialList_Item_Link>
          </SocialList_Item>
        ))}
      </SocialList>
    </Address>
  </Wrapper>
);
