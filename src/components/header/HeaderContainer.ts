import styled, { css } from "styled-components";
import { HeaderProps } from "../../interfaces";

const HeaderContainer = styled.header<HeaderProps>`
  ${({ isScroll, theme }) => css`
    background-color: ${isScroll ? theme.colors.headerBg : theme.colors.navy};
    box-shadow: ${isScroll ? theme.boxShadow : "none"};
    height: ${isScroll ? "70px" : "100px"};
    transition: ${theme.transition};
  `}
  width: 100%;
  backdrop-filter: blur(10px);
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
`;

export default HeaderContainer;