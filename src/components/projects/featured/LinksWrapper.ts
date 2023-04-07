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

      @media (max-width: 768px) {
        padding-right: 7px;
        padding-left: 0;
      }

      @media (max-width: 375px) {
        padding: 7px 7px 7px 0;
      }
    }

    &:last-child {
      padding-right: ${props => props.isLeft ? "10px" : 0};

      @media (max-width: 768px) {
        padding-right: 10px;
        padding-left: 7px;
      }

      @media (max-width: 375px) {
        padding: 7px;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export default LinksWrapper;