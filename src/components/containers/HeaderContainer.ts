import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.colors.headerBg};
  backdrop-filter: blur(10px);
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export default HeaderContainer;
