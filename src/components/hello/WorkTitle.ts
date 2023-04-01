import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const WorkTitle = styled(motion.h3)`
  ${({ theme }) => css`
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: clamp(30px, 6.5vw, 65px);
  font-weight: 700;
  line-height: 1;
`;

export default WorkTitle;