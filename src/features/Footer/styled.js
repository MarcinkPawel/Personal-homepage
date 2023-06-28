import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 48px 16px 0 16px;
  }
`;

export const LetsTalk = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: initial;
  margin: 0;
  color: ${({ theme }) => theme.colors.site.text};
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailContainer = styled.div`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 12px 0;
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const FooterContent = styled.p`
  max-width: 670px;
  font-size: 18px;
  line-height: 1.4;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const SocialList = styled.ul`
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 40px;
  }
`;

export const SocialListItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      margin-right: 16px;
    }
  }
`;

export const SocialListItemLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const iconStyled = (Icon) => styled(Icon)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
  }
`;
