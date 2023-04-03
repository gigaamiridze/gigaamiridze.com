import styled from "styled-components";
import { motion } from "framer-motion";

const Flex = styled(motion.div)`
  display: flex;
`;

export const FlexBox = styled(Flex)`
  justify-content: flex-start;
  align-items: center; 
`;

export const FlexBlock = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
`;

export const SectionTitleBox = styled(FlexBox)`
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 35px;
  }

  @media (max-width: 375px) {
    margin-bottom: 30px;
  }

  @media (max-width: 320px) {
    margin-bottom: 25px;
  }
`;

export const OtherTitleBox = styled(SectionTitleBox)`
  justify-content: center;
  flex-direction: column;
`;