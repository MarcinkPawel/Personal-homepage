import styled from "styled-components";

export const Button = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  border: 1px solid ${({ theme }) => theme.color.violet};
  border-radius: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.anakiwa};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;
