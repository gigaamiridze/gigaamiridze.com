import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;

export const FlexBox = styled(Flex)`
  justify-content: flex-start;
  align-items: center; 
`;

export const FlexBlock = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
`;
