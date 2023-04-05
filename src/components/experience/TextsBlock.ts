import styled from "styled-components";

const TextsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media (max-width: 375px) {
    row-gap: 10px;
  }
`;

export default TextsBlock;