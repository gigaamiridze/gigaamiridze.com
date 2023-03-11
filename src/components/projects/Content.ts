import styled from "styled-components";
import { ContentPosition } from "../../interfaces";

const Content = styled.div<ContentPosition>`
  ${({ isLeft }) => `
    text-align: ${isLeft ? "left" : "right"};
    ${isLeft ? "left" : "right"}: 0;
  `}
  width: 480px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

export default Content;