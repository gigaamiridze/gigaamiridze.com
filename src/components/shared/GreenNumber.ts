import styled, { css } from "styled-components";
import { GreenNumberProps } from "../../interfaces";

const GreenNumber = styled.span<GreenNumberProps>`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary}; 
  `}
  font-size: ${props => props.fontSize};
  font-weight: 300;
  margin-right: ${props => props.marginRight};
`;

export default GreenNumber;