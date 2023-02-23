import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  width: 82px;
  height: 38px;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.green};
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.greenTint};
  }
`;

export default Button;
