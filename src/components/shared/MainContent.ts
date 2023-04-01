import styled from "styled-components";

const MainContent = styled.main`
  width: 100%;
  padding: 100px 150px 0;

  @media (max-width: 1080px) {
    padding-right: 100px;
    padding-left: 100px;
  }

  @media (max-width: 768px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  @media (max-width: 480px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;

export default MainContent;