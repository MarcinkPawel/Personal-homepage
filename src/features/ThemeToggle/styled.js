import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as sunIcon } from "../../assets/sunIcon.svg";

export const ThemeTogglerWrapper = styled.div`
  margin: 26px auto 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 21px 17px 0 0;
    padding: 0;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const Toggler = styled.span`
  background: ${({ theme }) => theme.colors.themeToggler.background};
  border: solid 1px;
  padding: 3px;
  border-radius: 24px;
  width: 48px;
  display: flex;
`;

export const IconWrapper = styled.span`
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(sunIcon)`
  color: ${({ theme }) => theme.colors.themeToggler.icon};
`;
