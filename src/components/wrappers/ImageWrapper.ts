import styled from "styled-components";

const ImageWrapper = styled.div`
  ${({theme}) => `
    background-color: ${theme.colors.green};
    box-shadow: 0 10px 30px -15px ${theme.colors.navyShadow};
  `}
  max-width: 300px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    outline: 2px solid ${({theme}) => theme.colors.green};
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: -1;
  }
`;

export default ImageWrapper;
