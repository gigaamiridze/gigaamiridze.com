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
`;

export default ImageWrapper;
