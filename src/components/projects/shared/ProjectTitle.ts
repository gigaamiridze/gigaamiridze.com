import styled, { css } from "styled-components";

const ProjectTitle = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const FeaturedProjectTitle = styled(ProjectTitle)`
  font-size: clamp(21px, 4.5vw, 24px);
  width: fit-content;
`;

export const OtherProjectTitle = styled(ProjectTitle)`
  font-size: 18px;
  line-height: 1.4;
`;