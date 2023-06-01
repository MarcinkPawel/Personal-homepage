import styled from "styled-components";

export const SectionStyle = styled.section`
  max-width: 1216px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
  margin-bottom: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 16px;
    margin: 48px 14px 50px 14px;
  }
`;

export const Heading = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.color.black};
  padding-bottom: 16px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-bottom: 12px;
    font-size: 18px;
  }
`;

export const Divider = styled.hr`
  color: ${({ theme }) => theme.color.violet};
  margin: 0;
`;

export const Content = styled.div`
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 12px;
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    line-height: 17px;
    font-size: 14px;
  }
`;

export const ListPoint = styled.div`
  height: 9px;
  width: 9px;
  background: ${({ theme }) => theme.color.scienceBlue};
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 6px;
    width: 6px;
    margin-right: 8px;
  }
`;
