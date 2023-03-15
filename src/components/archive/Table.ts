import styled from "styled-components";

const Table = styled.table`
  ${({ theme }) => `
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16.5px;
  font-weight: 700;
  width: 100%;

  th, td {
    padding: 15px; 
    text-align: left;

    &:first-child {
      padding-left: 20px;
    }
  }

  td {
    vertical-align: middle;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

export default Table;