import styled, { css } from "styled-components";
import "./keyframes.css";

const Line = styled.div`
  width: 100%;
	height: 100%;
	border-radius: 50%;
	opacity: 0.7;
	position: absolute;
`;

export const FirstLine = styled(Line)`
  ${({ theme }) => css`
    border-bottom: 10px solid ${theme.colors.darkGreen};
	  border-top: 10px solid ${theme.colors.darkGreen};
    filter: drop-shadow( 0 0 10px ${theme.colors.darkGreen});
  `}
	animation: firstLine 2s linear infinite;
`;

export const SecondLine = styled(Line)`
  ${({ theme }) => css`
    border-right: 10px solid ${theme.colors.lightBlue};
    border-left: 10px solid ${theme.colors.lightBlue};
    filter: drop-shadow( 0 0 10px ${theme.colors.lightBlue});
  `}
	animation: secondLine 3s linear infinite;
`;

export const ThirdLine = styled(Line)`
  ${({ theme }) => css`
    border-right: 10px solid ${theme.colors.purple};
    border-left: 10px solid ${theme.colors.purple};
    filter: drop-shadow( 0 0 10px ${theme.colors.purple});
  `}
	animation: thirdLine 3s linear infinite;
`;