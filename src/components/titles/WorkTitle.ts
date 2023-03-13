import styled from "styled-components";

const WorkTitle = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 65px;
  font-weight: 700;
`;

export default WorkTitle;