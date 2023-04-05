import styled, { css } from "styled-components";
import { ContentPosition } from "../../../interfaces";

const Content = styled.div<ContentPosition>`
  grid-column: 7 / -1;
  ${({ isLeft }) => css`
    text-align: ${isLeft ? "left" : "right"};
    grid-area: ${isLeft ? "1 / 1 / -1 / 7" : "1 / 7 / -1 / -1"};
  `}
`;

export default Content;