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
`;

export const ResumeBtn = styled(Button)`
  width: 82px;
  height: 38px;
  font-size: 11.5px;

  @media (max-width: 900px) {
    width: 150px;
    height: 50px;
    font-size: 12.5px;
  }

  @media (max-width: 375px) {
    width: 130px;
    height: 45px;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 40px;
    font-size: 11.5px;
  }
`;

export const SectionButton = styled(Button)`
  width: 135px;
  height: 55px;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-top: 50px;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.greenTint};
  }
`;

export const ShowButton = styled(SectionButton)`
  margin-top: 60px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenTint};
  }
`;