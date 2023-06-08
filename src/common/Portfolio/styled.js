import styled from "styled-components";
import { ReactComponent as gitIcon } from "../../images/gitIcon.svg";

export const Wrapper = styled.div`
  padding: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const SubHeading = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
    margin: 0;
  }
`;
export const Icon = styled(gitIcon)`
  width: 40px;
  height: 40px;
  border: none;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const TailsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;
export const RepoContainer = styled.div`
  margin-top: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
