import styled from "styled-components";

const Cursor = styled.div`
  height: 28px;
  width: 28px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;

  .inner {
    height: 7px;
    width: 7px;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 50%;
  }
`;

export default Cursor;