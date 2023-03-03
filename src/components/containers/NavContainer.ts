import styled from "styled-components";

const NavContainer = styled.nav`
  margin-right: 20px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;

    li {
      cursor: pointer;
      padding: 10px 0;

      &:hover a {
        color: ${({theme}) => theme.colors.green};
      }

      a {
        ${({theme}) => `
          color: ${theme.colors.lightestSlate};
          font-family: ${theme.fonts.secondary};
          transition: ${theme.transition};
        `}
        font-size: 12px;
        font-weight: 300;
        padding: 10px;
      }
    }
  }
`;

export default NavContainer;
