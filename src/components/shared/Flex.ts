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
`;

export const OtherTitleBox = styled(SectionTitleBox)`
  justify-content: center;
  flex-direction: column;
`;