import styled from "styled-components";

const IconWrapper = styled.a`
  color: ${({ theme }) => theme.colors.lightSlate};
  font-size: 22px;
  padding: 10px;
  
  svg {
    transition: ${({ theme }) => theme.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.green};
      transform: translateY(-3px);
    }
  }

  @media (max-width: 320px) {
    padding: 7px;
  }
`;

export default IconWrapper;