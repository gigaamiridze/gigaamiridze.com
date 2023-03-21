import styled, { css } from "styled-components";

const TouchTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 50px;
  font-weight: 700;
  margin: 20px 0 25px;
`;

export default TouchTitle;