import styled, { css } from "styled-components";

const NavContainer = styled.nav`
  margin-right: 20px;

  @media (max-width: 900px) {
    margin-right: 0;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;

    @media (max-width: 900px) {
      flex-direction: column;
      column-gap: 0;
      row-gap: 15px;
    }

    @media (max-width: 600px) {
      row-gap: 10px;
    }

    li {
      cursor: pointer;
      padding: 10px 0;

      @media (max-width: 900px) {
        padding: 0;
      }

      &:hover a {
        color: ${({ theme }) => theme.colors.green};
      }

      a {
        ${({ theme }) => css`
          color: ${theme.colors.lightestSlate};
          font-family: ${theme.fonts.secondary};
          transition: ${theme.transition};
        `}
        font-size: 11.5px;
        font-weight: 300;
        padding: 10px;

        @media (max-width: 900px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          row-gap: 15px;
          font-size: clamp(12px, 3.5vw, 16px);
        }

        @media (max-width: 375px) {
          row-gap: 10px;
        }
      }
    }
  }
`;

export default NavContainer;