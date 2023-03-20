import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
    border: 1px solid ${theme.colors.green};
  `}
  background-color: transparent;
  border-radius: 5px;
  font-weight: 300;
  outline: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.greenTint};
  }
`;

export const ResumeButton = styled(Button)`
  width: 82px;
  height: 38px;
  font-size: 11.5px;
`;

export const SectionButton = styled(Button)`
  width: 135px;
  height: 55px;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-top: 50px;
  transition: ${({ theme }) => theme.transition};
`;

export const ShowButton = styled(SectionButton)`
  margin-top: 60px;
`;