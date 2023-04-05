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

  @media (max-width: 768px) {
    padding: 0 15px;
    font-size: 11px;
  }

  @media (max-width: 600px) {
    max-width: 120px;
    padding: 0;
    text-align: center;
    border-left: inherit;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  }

  @media (max-width: 375px) {
    max-width: 110px;
  }

  @media (max-width: 340px) {
    max-width: 100px;
    font-size: 10px;
  }
`;

export default Tab;