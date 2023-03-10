import React from "react";
// Importing Components
import { ProjectsBlock, Project } from "../../components";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

function FeauturedProjects() {
  return (
    <ProjectsBlock>
      <Project>
        <ProjectImage />
        <ProjectContent />
      </Project>
    </ProjectsBlock>
  )
}

export default FeauturedProjects;
