import styled from "styled-components";

const Table = styled.table`
  ${({theme}) => `
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16.5px;
  font-weight: 700;
  width: 100%;
  margin-top: 100px;

  th {
    padding: 10px; 
    text-align: left;

    &:first-child {
      padding-left: 0;
    }
  }
`;

export default Table;