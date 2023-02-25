import styled from "styled-components";

const GreenTitle = styled.h4`
  ${({theme}) => `
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 16px;
  font-weight: 400;
  margin-left: 3px;
`;

export default GreenTitle;
