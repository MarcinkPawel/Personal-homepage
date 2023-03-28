import styled from "styled-components";

export const PortfolioStyled = styled.div`
  width: 1216px;
  height: 824px;
  background: ${({ theme }) => theme.color.white};
  padding: 0;
  margin-bottom: 72px;
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
  color: ${({ theme }) => theme.color.black};
`;
export const SubHeading = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  margin: 0 0 24px 0;
`;
export const Icon = styled.img`
  width: 40px;
  height: 40px;
  border: none;
  margin-bottom: 12px;
`;
export const TailsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
`;

export const Tail = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
  height: 322px;
  width: 592px;
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
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
  margin: 0 0 24px 0;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Label = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 8px 0;
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
