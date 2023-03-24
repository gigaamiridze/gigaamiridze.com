import styled, { css } from "styled-components";
import { TabProps } from "../../interfaces";

const Tab = styled.button<TabProps>`
  ${({ activeTab, dataId, theme }) => css`
    background-color: ${activeTab === dataId ? theme.colors.lightNavy : "transparent"};
    color: ${activeTab === dataId ? theme.colors.green : theme.colors.slate};
    font-family: ${theme.fonts.secondary};
    transition: ${theme.transition};
  `}
  height: 42px;
  width: 100%;
  padding: 0 20px;
  outline: none;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  cursor: pointer;
  text-align: left;
  font-size: 11.8px;
  font-weight: 300;

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.lightNavy};
      color: ${theme.colors.green};
    `}
  }
`;

export default Tab;