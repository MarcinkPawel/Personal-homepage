import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1248px;
  margin: 100px auto 100px;
  
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 21px auto 31px;
    padding: 0;
  }
`;
