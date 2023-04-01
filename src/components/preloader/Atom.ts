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

  @media (max-width: 768px) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 375px) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: 320px) {
    width: 210px;
    height: 210px;
  }
`;

export default Atom;