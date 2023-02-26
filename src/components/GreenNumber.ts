import styled from "styled-components";

const GreenNumber = styled.span`
  ${({theme}) => `
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary}; 
  `}
  font-size: 18px;
  font-weight: 300;
  margin-right: 10px;
`;

export default GreenNumber;
