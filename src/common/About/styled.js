import styled from "styled-components";
import button_hire from "../../images/button_hire.png";
import button_hire_hover from "../../images/button_hire_hover.png";

export const AboutStyle = styled.div`
  max-width: 1089px;
  height: 384px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  margin-bottom: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Selfi = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 66px;
`;

export const SubHeading = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.slateGray};
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const Heading = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0.05em;
  margin: 0;
  color: ${({ theme }) => theme.color.black};
`;

export const Comment = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 32px 0;
`;

export const Button = styled.button`
  width: 154px;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.color.violet};
  border-radius: 4px;
  background: url(${button_hire});

  &:hover {
    background: url(${button_hire_hover});
  }
`;
