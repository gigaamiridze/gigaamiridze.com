import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  ${({theme}) => `
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
    border: 1px solid ${theme.colors.green};
  `}
  width: 82px;
  height: 38px;
  background-color: transparent;
  border-radius: 5px;
  font-size: 13px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.greenTint};
  }
`;

export default Button;
