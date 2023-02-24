import styled from "styled-components";

const MailLink = styled.a`
  ${({theme}) => `
    color: ${theme.colors.lightSlate};
    font-family: ${theme.fonts.secondary};
    transition: ${theme.transition};
  `}
  font-size: 12px;
  letter-spacing: 1px;
  padding: 10px;
  writing-mode: vertical-lr;

  &:hover {
    color: ${({theme}) => theme.colors.green};
    transform: translateY(-3px);
  }
`;

export default MailLink;
