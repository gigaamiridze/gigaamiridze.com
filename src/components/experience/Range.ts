import styled, { css } from "styled-components";

const Range = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightSlate};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 11.8px;
  font-weight: 300;
  margin: 10px 0 25px;

  @media (max-width: 555px) {
    margin-bottom: 20px;
  }

  @media (max-width: 375px) {
    font-size: 11.5px;
  }
`;

export default Range;