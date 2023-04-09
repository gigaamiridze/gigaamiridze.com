import styled, { css } from "styled-components";

const Title = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 768px) {
    width: 78%;
  }

  @media (max-width: 375px) {
    font-size: 15px;
  }

  @media (max-width: 320px) {
    font-size: 14.5px;
  }
`;

export default Title;