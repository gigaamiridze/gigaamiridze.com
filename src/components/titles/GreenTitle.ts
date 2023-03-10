import styled from "styled-components";

const GreenTitle = styled.h4`
  ${({theme}) => `
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-weight: 300;
`;

export const HelloTitle = styled(GreenTitle)`
  font-size: 14px;
  margin-left: 3px;
`;

export const ContactTitle = styled(GreenTitle)`
  font-size: 13px;
`;

export const FeaturedTitle = styled(GreenTitle)`
  font-size: 12px;
`;
