import styled from "styled-components";
import { VerticalBlockProps } from "../interfaces/verticalBlock";

const VerticalBlock = styled.div<VerticalBlockProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  ${props => props.orientation}: 50px;
  bottom: 0;
`;

export default VerticalBlock;
