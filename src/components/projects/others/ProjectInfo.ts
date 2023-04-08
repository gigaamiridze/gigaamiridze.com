import styled, { css } from "styled-components";

const ProjectInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightNavy};
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};
  `}
  width: 100%;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  &:hover {
    transform: translateY(-7px);

    #project-title {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  @media (max-width: 320px) {
    padding: 1.4rem 1.4rem;
  }
`;

export default ProjectInfo;