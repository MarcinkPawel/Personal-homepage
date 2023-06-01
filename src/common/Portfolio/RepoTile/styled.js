import styled from "styled-components";

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 6px solid ${({ theme }) => theme.color.violet};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.violetShadow},
    0px 16px 58px ${({ theme }) => theme.color.violet};
  border-radius: 4px;
  padding: 56px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.scienceBlueLight};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.violetShadow},
      0px 16px 58px ${({ theme }) => theme.color.violetShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 20px;
    margin: 0 16px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    margin: 0 0 16px 0;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const LinkLabel = styled.p`
  width: 60px;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0;
`;

export const Link = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
  margin-left: 8px;
  text-decoration: none;
`;
