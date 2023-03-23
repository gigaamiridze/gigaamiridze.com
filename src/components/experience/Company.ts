import styled, { css } from "styled-components";

const Company = styled.a`
  color: ${({ theme }) => theme.colors.green};
  margin-left: 10px;
  position: relative;

  &:hover::after {
    width: 100%;
  }

  &::after {
    ${({ theme }) => css`
      background-color: ${theme.colors.green};
      transition: ${theme.transition};
    `}
    content: "";
    display: block;
    width: 0;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.5;
  }
`;

export default Company;