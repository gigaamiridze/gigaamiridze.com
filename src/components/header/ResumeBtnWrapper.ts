import styled from "styled-components";

const ResumeBtnWrapper = styled.a`
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenTint};
  }
`;

export default ResumeBtnWrapper;