import styled from "styled-components";

const Year = styled.td`
  ${({ theme }) => `
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: 14px;
  font-weight: 300;
  width: 70px;
`;

export default Year;