import styled from "styled-components";

const ProjectDescription = styled.p`
  ${({theme}) => `
    color: ${theme.colors.lightSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 14.8px;
  font-weight: 400;
  line-height: 23px;
`;

export default ProjectDescription;