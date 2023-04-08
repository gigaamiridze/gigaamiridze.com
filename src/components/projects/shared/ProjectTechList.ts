import styled from "styled-components";
import { ContentPosition } from "../../../interfaces";

const ProjectTechList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
  }
`;

export const FeaturedTechList = styled(ProjectTechList)<ContentPosition>`
  justify-content: ${props => props.isLeft ? "flex-start" : "flex-end"};
  column-gap: 20px;
  margin: 20px 0 7px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 25px;
  }

  @media (max-width: 600px) {
    column-gap: 10px;
  }

  @media (max-width: 375px) {
    margin-top: 20px;
  }
  
  li {
    color: ${({ theme }) => theme.colors.lightSlate};
    font-size: 11.6px;
    line-height: 1.8;
  }
`;

export const OtherTechList = styled(ProjectTechList)`
  column-gap: 15px;
  padding-top: 25px;

  li {
    color: ${({ theme }) => theme.colors.slate};
    font-size: 11px;
    line-height: 1.7;
  }

  @media (max-width: 375px) {
    padding-top: 20px;
  }
`;