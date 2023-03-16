import styled from "styled-components";

const Title = styled.td`
  ${({ theme }) => `
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
`;

export default Title;