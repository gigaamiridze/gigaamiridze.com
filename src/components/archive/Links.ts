import styled from "styled-components";

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    ${({ theme }) => `
      color: ${theme.colors.slate};
      transition: ${theme.transition};
    `}
    font-size: 22px;

    &:first-child {
      margin-right: 10px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export default Links;