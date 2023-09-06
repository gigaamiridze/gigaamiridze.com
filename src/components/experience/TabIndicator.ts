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

  @media (max-width: 600px) {
    ${({ isJobIndicator, activeTab }) => css`
      width: ${isJobIndicator ? "120px" : "calc(100% / 6)"};
      transform: translateX(calc(${activeTab} * 100%));
    `}
    height: 2px;
    top: 40px;
  }

  @media (max-width: 375px) {
    ${({ isJobIndicator }) => css`
      width: ${isJobIndicator ? "110px" : "calc(100% / 6)"};
    `}
  }

  @media (max-width: 340px) {
    ${({ isJobIndicator }) => css`
      width: ${isJobIndicator ? "100px" : "calc(100% / 6)"};
    `}
  }
`;

export default TabIndicator;