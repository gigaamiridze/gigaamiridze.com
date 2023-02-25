import styled from "styled-components";

const Text = styled.p`
  ${({theme}) => `
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 17px;
  line-height: 25px;
  max-width: 540px;
  margin-top: 30px;
`;

export default Text;
