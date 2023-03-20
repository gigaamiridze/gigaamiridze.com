import styled, { css } from "styled-components";

const ProjectDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-weight: 400;
`;

export const FeaturedDescription = styled(ProjectDescription)`
  font-size: 14.8px;
  line-height: 23px;
`;

export const OtherDescription = styled(ProjectDescription)`
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
`;