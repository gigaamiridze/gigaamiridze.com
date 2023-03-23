import styled, { css } from "styled-components";

const WorkPosition = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 18px;
  font-weight: 600;
`;

export default WorkPosition;