import styled from "styled-components";
import { motion } from "framer-motion";

const LogoImage = styled(motion.img)`
  height: 45px;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 375px) {
    height: 43px;
  }
`;

export default LogoImage;