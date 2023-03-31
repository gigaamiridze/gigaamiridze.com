import styled from "styled-components";
import { motion } from "framer-motion";

const BurgerWrapper = styled(motion.div)`
  padding: 15px 0 15px 15px;
  z-index: 20;
  cursor: pointer;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

export default BurgerWrapper;