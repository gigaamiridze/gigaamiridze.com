import styled from "styled-components";

const ArchiveTitle = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 65px;
  font-weight: 700;
`;

export default ArchiveTitle;