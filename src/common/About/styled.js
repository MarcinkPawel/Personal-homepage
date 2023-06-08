import styled from "styled-components";
import { StyledLink } from "../StyledLink";
import { ReactComponent as Envelope } from "../../images/message.svg";

export const AboutStyle = styled.div`
  margin-top: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
  max-width: 1097px;
  margin-bottom: 63px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
    margin: 0 16px;

  }
`;

export const Selfi = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 132px;
    height: 132px;
    align-self: flex-start;
    margin-bottom: 7px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SubHeading = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.site.text};
  font-weight: 700;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0.05em;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Comment = styled.p`
  max-width: 633px;
  color: ${({ theme }) => theme.colors.site.text};
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
    line-height: 24px;
    margin: 16px 0 24px 0;
  }
`;

export const StyledButton = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;
  width: 154px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 0;
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  margin-right: 16px;
`;
