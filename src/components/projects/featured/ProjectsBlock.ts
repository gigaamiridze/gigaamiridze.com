import styled from "styled-components";

const ProjectsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  margin-bottom: 200px;

  @media (max-width: 768px) {
    row-gap: 70px;
  }

  @media (max-width: 480px) {
    row-gap: 30px;
  }
`;

export default ProjectsBlock;