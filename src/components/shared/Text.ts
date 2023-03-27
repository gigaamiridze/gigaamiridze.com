import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Text = styled(motion.p)`
  ${({ theme }) => css`
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16.5px;
  line-height: 27px;
`;
export const HelloText = styled(Text)`
  max-width: 540px;
  margin-top: 30px;
`;

export const AboutText = styled(Text)`
  max-width: 100%;
  margin-top: 0;
`;