import styled from "styled-components";
import { motion } from "framer-motion";
import { VerticalBlockProps } from "../../interfaces";

const VerticalBlock = styled(motion.div)<VerticalBlockProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  ${props => props.orientation}: 40px;
  bottom: 0;
`;

export default VerticalBlock;