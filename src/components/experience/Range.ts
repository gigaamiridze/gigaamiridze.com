import styled, { css } from "styled-components";

const Range = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightSlate};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 11.8px;
  font-weight: 300;
  margin: 15px 0 25px;
`;

export default Range;