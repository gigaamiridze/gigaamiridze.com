import styled, { css } from "styled-components";

const Image = styled.img<{ isFullWidth: boolean }>`
  ${({ theme, isFullWidth }) => css`
    transition: ${theme.transition};
    width: ${isFullWidth ? "100%" : "calc(100% + 1px)"};
  `}
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(0.8);
`;

export default Image;