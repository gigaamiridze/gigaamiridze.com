import styled from "styled-components";
import { ContentPosition } from "../../../interfaces";

const ProjectTechList = styled.ul`
  display: flex;
  align-items: center;

  li {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
  }
`;

export const FeaturedTechList = styled(ProjectTechList)<ContentPosition>`
  justify-content: ${props => props.isLeft ? "flex-start" : "flex-end"};
  column-gap: 20px;
  margin: 25px 0 10px;
  
  li {
    color: ${({ theme }) => theme.colors.lightSlate};
    font-size: 11.6px;
  }
`;

export const OtherTechList = styled(ProjectTechList)`
  column-gap: 15px;

  li {
    color: ${({ theme }) => theme.colors.slate};
    font-size: 11px;
  }
`;