import styled, { css } from "styled-components";

const SectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: clamp(21.5px, 4vw, 26px);
  font-weight: 700;
  white-space: nowrap;
`;

export default SectionTitle;