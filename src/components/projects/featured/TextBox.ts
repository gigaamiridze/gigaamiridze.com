import styled, { css } from "styled-components";

const TextBox = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.lightNavy};
    box-shadow: ${theme.boxShadow};
  `}
  padding: 25px;
  border-radius: 4px;
  margin-top: 25px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    background-color: transparent;
    box-shadow: inherit;
    margin-top: 40px;
    padding: 0;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }

  @media (max-width: 375px) {
    margin-top: 25px;
  }
`;

export default TextBox;