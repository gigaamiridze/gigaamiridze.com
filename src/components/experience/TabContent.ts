import styled from "styled-components";
import { motion } from "framer-motion";
import { TabProps } from "../../interfaces";

const TabContent = styled(motion.div)<TabProps>`
  width: 100%;
  padding: 12px 5px;
  display: ${({ activeTab, dataId }) => activeTab === dataId ? "block" : "none"};
`;

export default TabContent;