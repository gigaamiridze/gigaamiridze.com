import styled, { css } from "styled-components";

const Table = styled.table`
  ${({ theme }) => css`
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

      @media (max-width: 768px) { padding-left: 15px; }
    }

    @media (max-width: 768px) { padding: 13px; }
    @media (max-width: 375px) { padding: 11px; }
  }

  th {
    white-space: nowrap;

    @media (max-width: 768px) {
      &:nth-child(3),
      &:nth-child(4) {
        display: none;
      }
    }
  }

  tbody tr {
    &:hover {
      ${({ theme }) => css`
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

  @media (max-width: 768px) {
    margin-top: 50px;
    transform: translateX(-15px);
  }
  
  @media (max-width: 480px) { font-size: 15px; }
  @media (max-width: 320px) { font-size: 14.5px; }
`;

export default Table;