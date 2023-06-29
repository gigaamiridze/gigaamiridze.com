import styled, { css } from "styled-components";

const GreenNumber = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary}; 
  `}
  font-weight: 300;
  white-space: nowrap;
`;

export const NavGreenNumber = styled(GreenNumber)`
  font-size: 10.5px;
  margin-right: 5px;

  @media (max-width: 900px) {
    font-size: 12px;
    margin-right: 0;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

export const SectionGreenNumber = styled(GreenNumber)`
  font-size: clamp(14px, 2.7vw, 18px);
  margin-right: 10px;

  @media (max-width: 480px) {
    margin-right: 5px;
  }
`;

export const ContactGreenNumber = styled(GreenNumber)`
  font-size: 12px;
  margin-right: 10px;

  @media (max-width: 480px) {
    margin-right: 5px;
  }

  @media (max-width: 375px) {
    font-size: 11.5px;
  }
`;