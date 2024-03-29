import styled, { css } from "styled-components";

const StatusCode = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-size: clamp(65px, 14vw, 160px);
  font-weight: 600;
  letter-spacing: 5px;
`;

export default StatusCode;