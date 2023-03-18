import styled, { css } from "styled-components";

const TextBox = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.lightNavy};
    box-shadow: ${theme.boxShadow};
  `}
  padding: 25px;
  border-radius: 4px;
  margin-top: 25px;
`;

export default TextBox;