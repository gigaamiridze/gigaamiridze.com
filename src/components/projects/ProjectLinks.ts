import styled from "styled-components";

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    ${({theme}) => `
      color: ${theme.colors.lightestSlate};
      transition: ${theme.transition};
    `}
    font-size: 23px;
    padding: 10px;

    &:last-child {
      padding-right: 0;
    }

    &:hover {
      color: ${({theme}) => theme.colors.green};
    }
  }
`;

export default ProjectLinks;