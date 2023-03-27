import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const WorkTitle = styled(motion.h3)`
  ${({ theme }) => css`
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 65px;
  font-weight: 700;
`;

export default WorkTitle;