import styled, { css } from "styled-components";

const TouchTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: clamp(30px, 4.5vw, 50px);
  font-weight: 700;
  margin: 20px 0 25px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }

  @media (max-width: 375px) {
    margin: 15px 0 15px;
  }
`;

export default TouchTitle;