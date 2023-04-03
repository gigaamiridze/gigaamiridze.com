import styled from "styled-components";

const TextContainer = styled.div`
  max-width: 515px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media (max-width: 900px) {
    max-width: inherit;
  }

  @media (max-width: 375px) {
    row-gap: 10px;
  }
`;

export default TextContainer;