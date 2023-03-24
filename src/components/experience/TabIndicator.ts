import styled, { css } from "styled-components";
import { TabProps } from "../../interfaces";

const TabIndicator = styled.div<TabProps>`
  ${({ activeTab, theme }) => css`
    background-color: ${theme.colors.green};
    transition: ${theme.transition};
    transform: translateY(calc(${activeTab} * 42px));
  `}
  width: 2px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
`;

export default TabIndicator;