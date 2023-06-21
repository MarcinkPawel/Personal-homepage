import styled from "styled-components";
import { StyledLink } from "../../../common/StyledLink";

export const Tile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto 60px;
  grid-column-gap: 0px;
  grid-row-gap: 24px;
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
  padding: 56px;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-rows: min-content auto 45px;
    padding: 20px;
    margin: 0 16px;
    grid-row-gap: 16px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.tile.header};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.site.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    line-height: 17px;
    gap: 20px;
  }
`;

export const Link = styled(StyledLink)`
  padding: 12px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    line-height: 17px;
    padding: 8px 30px;
  }
`;
