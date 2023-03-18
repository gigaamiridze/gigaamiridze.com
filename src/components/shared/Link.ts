import styled, { css } from "styled-components";

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.lightSlate};
    font-family: ${theme.fonts.secondary};
    transition: ${theme.transition};
  `}
  font-size: 11px;
  font-weight: 300; 
  padding: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const MailLink = styled(Link)`
  letter-spacing: 1px;
  writing-mode: vertical-lr;

  &:hover {
    transform: translateY(-3px);
  }
`;