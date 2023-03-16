import styled from "styled-components";

const Table = styled.table`
  ${({ theme }) => `
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16.5px;
  font-weight: 700;
  width: 100%;
  transform: translateX(-20px);
  margin: 100px 0;

  th, td {
    padding: 15px; 
    text-align: left;
    cursor: default;

    &:first-child {
      padding-left: 20px;
    }
  }

  tbody tr {
    &:hover {
      ${({ theme }) => `
        background-color: ${theme.colors.lightNavy};
        transition: ${theme.transition};
      `}
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