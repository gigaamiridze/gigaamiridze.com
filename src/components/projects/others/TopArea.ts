import styled from "styled-components";

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  &:first-child {
    color: ${({ theme }) => theme.colors.green};
    font-size: 42px;
  }

  @media (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

export default TopArea;