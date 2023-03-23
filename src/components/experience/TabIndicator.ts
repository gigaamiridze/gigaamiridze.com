import styled, { css } from "styled-components";

const TabIndicator = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    transition: ${theme.transition};
  `}
  width: 2px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(calc(0 * 42px));
`;

export default TabIndicator;