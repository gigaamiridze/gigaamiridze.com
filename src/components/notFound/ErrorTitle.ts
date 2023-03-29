import styled, { css } from "styled-components";

const ErrorTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.third};
  `}
`;

export const OopsTitle = styled(ErrorTitle)`
  font-size: 30px;
  font-weight: 500;
`;

export const NotFoundTitle = styled(ErrorTitle)`
  font-size: 20px;
  font-weight: 400;
`;