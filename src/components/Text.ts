import styled from "styled-components";

export const HelloText = styled.p`
  ${({theme}) => `
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16.5px;
  line-height: 27px;
  max-width: 540px;
  margin-top: 30px;
`;

export const AboutText = styled(HelloText)`
  max-width: 100%;
  margin-top: 0;
`;
