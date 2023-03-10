import styled from "styled-components";

const ProjectTechList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 20px;
  margin: 25px 0 10px;

  li {
    ${({theme}) => `
      color: ${theme.colors.lightSlate};
      font-family: ${theme.fonts.secondary};
    `}
    font-size: 11.6px;
    font-weight: 300;
  }
`;

export default ProjectTechList;