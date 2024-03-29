import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Text = styled(motion.p)`
  ${({ theme }) => css`
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16.5px;
  line-height: 25px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
export const HelloText = styled(Text)`
  max-width: 540px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

export const AboutText = styled(Text)`
  max-width: 100%;
  margin-top: 0;
`;