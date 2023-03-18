import styled, { css } from "styled-components";
import { ContentPosition } from "../../../interfaces";

const LinksWrapper = styled.div<ContentPosition>`
  display: flex;
  justify-content: ${props => props.isLeft ? "flex-start" : "flex-end"};
  align-items: center;

  a {
    ${({ theme }) => css`
      color: ${theme.colors.lightestSlate};
      transition: ${theme.transition};
    `}
    font-size: 23px;
    padding: 10px;

    &:first-child {
      padding-left: ${props => props.isLeft ? 0 : "10px"};
    }

    &:last-child {
      padding-right: ${props => props.isLeft ? "10px" : 0};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export default LinksWrapper;