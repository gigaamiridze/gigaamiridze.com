import styled, { css } from "styled-components";

const WorkDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 14.8px; 
  line-height: 22px;
  padding-left: 30px;
  position: relative;

  &::before {
    content: "▹";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.green};
    font-size: 17px;
  }
`;

export default WorkDescription;