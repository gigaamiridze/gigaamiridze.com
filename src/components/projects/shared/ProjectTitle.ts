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
  font-size: 24px;

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    h3 {
      position: absolute;
      left: 40px;
    }

    .book {
      top: 85px;
    }

    .tip-calc {
      top: 96px;
    }

    .devfinder {
      top: 108px;
    }
  }
`;

export const OtherProjectTitle = styled(ProjectTitle)`
  font-size: 18px;
  line-height: 1.4;
`;