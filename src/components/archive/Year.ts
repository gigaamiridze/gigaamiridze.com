import styled, { css } from "styled-components";

const Year = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 14px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 12.5px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

export default Year;