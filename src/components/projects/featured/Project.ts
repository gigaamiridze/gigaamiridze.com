import styled from "styled-components";
import { motion } from "framer-motion";

const Project = styled(motion.div)`
  height: 350px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  column-gap: 10px;
`;

export default Project;