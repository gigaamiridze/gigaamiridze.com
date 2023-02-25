import styled from "styled-components";

const BtnLinkWrapper = styled.a`
  transition: ${({theme}) => theme.transition};

  &:hover {
    background-color: ${({theme}) => theme.colors.greenTint};
  }
`;

export default BtnLinkWrapper;
