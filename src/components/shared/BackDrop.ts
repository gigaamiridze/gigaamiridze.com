import styled, { css } from "styled-components";
import { OpenProps } from "../../interfaces";

const BackDrop = styled.div<OpenProps>`
  ${({ isOpen, theme }) => css`
    background-color: ${theme.colors.headerBg};
    opacity: ${isOpen ? 1 : 0};
    transition: ${theme.transition};
  `}
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(7px);
  z-index: 1;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

export default BackDrop;