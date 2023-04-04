import styled from "styled-components";

const TabList = styled.div`
  position: relative;
  max-width: 130px;

  @media (max-width: 768px) {
    max-width: 120px;
  }

  @media (max-width: 600px) {
    display: flex;
    max-width: 100%;
  }
`;

export default TabList;