import styled, { css } from "styled-components";

const BuiltWith = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 11px;
  font-weight: 300;
  line-height: 1.5;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default BuiltWith;