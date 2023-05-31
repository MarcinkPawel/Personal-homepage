import styled from "styled-components";
import { ReactComponent as gitIcon } from "../../images/gitIcon.svg";

export const Wrapper = styled.div`
  width: 1216px;
  height: 824px;
  background: ${({ theme }) => theme.color.whiteLilac};
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
export const Icon = styled(gitIcon)`
  width: 40px;
  height: 40px;
  border: none;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.scienceBlue};
`;
export const TailsList = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;
`;
