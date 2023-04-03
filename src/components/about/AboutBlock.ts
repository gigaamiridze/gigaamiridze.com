import styled from "styled-components";

const AboutBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 50px 0;
  }

  @media (max-width: 375px) {
    gap: 40px 0;
  }
`;

export default AboutBlock;