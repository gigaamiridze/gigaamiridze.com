import styled, { css } from "styled-components";

const ArchiveTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 65px;
  font-weight: 700;
  padding-top: 100px;
`;

export default ArchiveTitle;