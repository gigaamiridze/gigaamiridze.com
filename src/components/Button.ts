import styled from "styled-components";

const Button = styled.button`
  width: 82px;
  height: 38px;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.green};
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

export default Button;
