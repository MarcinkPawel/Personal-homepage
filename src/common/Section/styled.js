import styled from "styled-components";


export const SectionStyle = styled.section`
  max-width: 1216px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
`;

export const Heading = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.black};
    padding-bottom: 16px;
`;

export const Divider = styled.hr`
    color: ${({ theme }) => theme.color.violet};
`;