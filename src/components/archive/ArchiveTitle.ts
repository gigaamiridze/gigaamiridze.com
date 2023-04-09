import styled, { css } from "styled-components";

const ArchiveTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: clamp(33px, 6.5vw, 65px);
  font-weight: 700;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    padding-top: 25px;
  }
`;

export default ArchiveTitle;