import styled, { css } from "styled-components";

const WorkPosition = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;

  @media (max-width: 555px) {
    font-size: 17px;
  }
`;

export default WorkPosition;