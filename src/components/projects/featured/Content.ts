import styled, { css } from "styled-components";
import { ContentPosition } from "../../../interfaces";

const Content = styled.div<ContentPosition>`
  grid-column: 7 / -1;
  ${({ isLeft }) => css`
    text-align: ${isLeft ? "left" : "right"};
    grid-area: ${isLeft ? "1 / 1 / -1 / 7" : "1 / 7 / -1 / -1"};
  `}

  @media (max-width: 1080px) {
    ${({ isLeft }) => css`
      grid-area: ${isLeft ? "1 / 1 / -1 / 9" : "1 / 5 / -1 / -1"};
    `}
  }

  @media (max-width: 768px) {
    ${({ isLeft }) => css`
      grid-area: ${isLeft ? "1 / 1 / -1 / 13" : "1 / 1 / -1 / -1"};
    `}
    height: 100%;
    padding: 40px 40px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 480px) {
    padding: 25px 25px 20px;
  }
`;

export default Content;