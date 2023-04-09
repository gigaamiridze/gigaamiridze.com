import styled from "styled-components";
import { motion } from "framer-motion";

const Cursor = styled(motion.div)`
  height: 28px;
  width: 28px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  position: fixed;
  top: -28px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 14;
  pointer-events: none;

  .inner {
    height: 7px;
    width: 7px;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Cursor;