import styled from "styled-components";
import { motion } from "framer-motion";

const BurgerWrapper = styled(motion.div)`
  padding: 15px 0 15px 15px;
  z-index: 13;
  cursor: pointer;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }

  @media (max-width: 375px) {
    padding: 10px 0 10px 10px;
  }
`;

export default BurgerWrapper;