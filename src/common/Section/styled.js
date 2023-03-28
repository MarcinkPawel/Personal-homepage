import styled from "styled-components";

export const SectionStyle = styled.section`
  max-width: 1216px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
  margin-bottom: 72px;
`;

export const Heading = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.color.black};
  padding-bottom: 16px;
  margin: 0;
`;

export const Divider = styled.hr`
  color: ${({ theme }) => theme.color.violet};
  margin: 0;
`;

export const Content = styled.div`
  margin-top: 32px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 115px;
  grid-row-gap: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    grid-column-gap: 115px;
    grid-row-gap: 0px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.color.slateGray};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ListPoint = styled.div`
  height: 9px;
  width: 9px;
  background: ${({ theme }) => theme.color.scienceBlue};
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;
`;

export const Emoji = styled.span`
 font-size: 24px;
 margin-left: 16px;
`;
