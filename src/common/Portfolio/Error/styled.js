import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.whiteLilac};
  padding-top: 90px;
`;

export const Header = styled.h3`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  padding-top: 23px;
`;

export const WarningText = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  padding-top: 32px;
`;
