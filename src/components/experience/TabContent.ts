import styled from "styled-components";
import { TabProps } from "../../interfaces";

const TabContent = styled.div<TabProps>`
  width: 100%;
  padding: 12px 5px;
  display: ${({ activeTab, dataId }) => activeTab === dataId ? "block" : "none"};
`;

export default TabContent;