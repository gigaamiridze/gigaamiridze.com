import styled from "styled-components";

const Link = styled.a`
  ${({theme}) => `
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 13px;
  letter-spacing: 0.5px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Link;
