import styled, { css } from "styled-components";

const ErrorTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.third};
  `}
`;

export const OopsTitle = styled(ErrorTitle)`
  font-size: clamp(22px, 4vw, 30px);
  font-weight: 500;
  margin: 20px 0 10px;
`;

export const NotFoundTitle = styled(ErrorTitle)`
  font-size: clamp(18px, 4vw, 20px);
  font-weight: 400;
`;