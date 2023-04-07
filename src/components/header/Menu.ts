import styled, { css } from "styled-components";
import { OpenProps } from "../../interfaces";

const Menu = styled.div<OpenProps>`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    ${({ isOpen, theme }) => css`
      background-color: ${theme.colors.lightNavy};
      box-shadow: -10px 0px 30px -15px ${theme.colors.navyShadow};
      transform: ${isOpen ? "translateX(0vw)" : "translateX(100%)"};
      transition: ${theme.transition};
    `}
    width: min(75vw, 400px);
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    padding: 70px 10px;
    z-index: 12;
  }

  @media (max-width: 600px) {
    padding: 80px 10px;
  }

  @media (max-width: 500px) {
    padding: 85px 10px;
  }

  @media (max-width: 420px) {
    padding: 90px 10px;
  }

  @media (max-width: 375px) {
    padding: 100px 10px;
  }

  @media (max-width: 320px) {
    padding: 115px 10px;
  }
`;

export default Menu;