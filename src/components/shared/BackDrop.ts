import styled, { css } from "styled-components";

const BackDrop = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.headerBg};
    transition: ${theme.transition};
  `}
  position: fixed;
  top: 0;
  left: 0;
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