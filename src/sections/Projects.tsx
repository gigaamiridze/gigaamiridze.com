import React from "react";
// Importing Components
import { ProjectsContainer, FlexBox, GreenNumber, SectionTitle, HorizontalLine } from "../components";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <FlexBox>
        <GreenNumber fontSize="18px" marginRight="10px">04.</GreenNumber>
        <SectionTitle>Some Things I’ve Built</SectionTitle>
        <HorizontalLine />
      </FlexBox>
    </ProjectsContainer>
  )
}

export default Projects;
