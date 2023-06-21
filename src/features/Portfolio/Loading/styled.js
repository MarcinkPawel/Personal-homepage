import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../../assets/spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 88px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.site.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
    margin: 32px 16px 0 16px;
  }
`;

export const SpinnerStyled = styled(Spinner)`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 60px;
    margin-top: 32px;
  }
`;
