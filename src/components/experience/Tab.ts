import styled, { css } from "styled-components";

const Tab = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  height: 42px;
  width: 100%;
  background-color: transparent;
  padding: 0 20px;
  outline: none;
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  cursor: pointer;
  font-size: 11.8px;
  font-weight: 300;
`;

export default Tab;