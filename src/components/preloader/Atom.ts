import styled from "styled-components";

const Atom = styled.div`
  position: relative;
	width: 300px;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    box-shadow: inset 0 0 10px ${({ theme }) => theme.colors.white};
  }
`;

export default Atom;