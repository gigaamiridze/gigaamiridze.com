import styled, { css } from "styled-components";

const ProjectInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightNavy};
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};
  `}
  width: 312px;
  padding: 2rem 1.75rem;
  border-radius: 4px;

  &:hover {
    transform: translateY(-7px);

    #project-title {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export default ProjectInfo;