import styled from "styled-components";
import { motion } from "framer-motion";
import { TabProps } from "../../interfaces";

const TabContent = styled(motion.div)<TabProps>`
  width: 100%;
  padding: 12px 5px;
  display: ${({ activeTab, dataId }) => activeTab === dataId ? "block" : "none"};

  @media (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 320px) {
    padding-top: 6px;
    padding-bottom: 6px;
  }
`;

export default TabContent;