import styled from "styled-components";

const GreenTitle = styled.h4`
  ${({theme}) => `
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 14px;
  font-weight: 300;
  margin-left: 3px;
`;

export default GreenTitle;
