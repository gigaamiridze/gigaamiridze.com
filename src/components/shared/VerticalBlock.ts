import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { VerticalBlockProps } from "../../interfaces";

const VerticalBlock = styled(motion.div)<VerticalBlockProps>`
  ${({ isFooterPart, orientation }) => css`
    display: ${isFooterPart ? "none" : "flex"};
    ${orientation}: 40px;
  `}
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;

  @media (max-width: 1080px) {
    ${props => props.orientation}: 20px;
  }

  @media (max-width: 768px) {
    display: ${({ isFooterPart }) => isFooterPart ? "flex" : "none"};
    flex-direction: row;
    column-gap: 15px;
    position: inherit;
    margin-bottom: 10px;
  }

  @media (max-width: 375px) {
    column-gap: 10px;
    margin-bottom: 0;
  }
`;

export default VerticalBlock;