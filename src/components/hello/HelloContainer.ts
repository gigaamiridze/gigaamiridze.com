import styled from "styled-components";

const HelloContainer = styled.section`
  max-width: 1000px;
  padding-top: 50px;

  @media (max-width: 480px) {
    padding-top: 30px;
  }
`;

export default HelloContainer;