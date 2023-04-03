import styled from "styled-components";

const HorizontalLine = styled.div`
  width: 300px;
  height: 1.34px;
  background-color: ${({ theme }) => theme.colors.lightestNavy};
  margin-left: 20px;

  @media (max-width: 1080px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    margin-left: 10px;
  }
`;

export default HorizontalLine;