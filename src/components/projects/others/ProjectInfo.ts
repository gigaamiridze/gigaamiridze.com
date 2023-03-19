import styled, { css } from "styled-components";

const ProjectInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightNavy};
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};
  `}
  width: 313px;
  padding: 2rem 1.75rem;
  border-radius: 4px;
`;

export default ProjectInfo;