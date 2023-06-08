import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.site.background};
  padding-top: 90px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      padding: 0 16px;
      margin: 30px 16px 0 16px;
    }
`;

export const Header = styled.h3`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  padding-top: 23px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 17px;
    }
`;

export const WarningText = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  padding: 32px 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 16px;
    }
`;
