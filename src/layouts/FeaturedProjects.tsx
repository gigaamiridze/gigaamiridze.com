import React from "react";
import { ProjectImg } from "../assets";
// Importing Components
import { ProjectsBlock, Project, ProjectImage, ProjectContent } from "../components";

function FeauturedProjects() {
  return (
    <ProjectsBlock>
      <Project>
        <ProjectImage></ProjectImage>
        <ProjectContent></ProjectContent>
      </Project>
    </ProjectsBlock>
  )
}

export default FeauturedProjects;
