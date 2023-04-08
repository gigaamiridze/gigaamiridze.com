import styled from "styled-components";

const VerticalLine = styled.div`
  width: 1.34px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.lightSlate};
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default VerticalLine;