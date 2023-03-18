import styled, { css } from "styled-components";

const Year = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 14px;
  font-weight: 300;
`;

export default Year;