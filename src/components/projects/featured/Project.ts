import styled from "styled-components";
import { motion } from "framer-motion";

const Project = styled(motion.div)`
  height: 350px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  column-gap: 10px;

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 400px;
    column-gap: 0;
  }
`;

export default Project;