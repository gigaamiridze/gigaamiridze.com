import styled from "styled-components";

const Button = styled.button`
  width: 82px;
  height: 38px;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.green};
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.colors.greenTint};
  }
`;

export default Button;
