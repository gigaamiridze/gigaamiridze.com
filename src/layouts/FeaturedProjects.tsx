import React from "react";
import { ProjectImg } from "../assets";
// Importing Components
import { ProjectsBlock, Project, ProjectLink, Image, ProjectContent } from "../components";
import { ProjectImgWrapper } from "../components";

function FeauturedProjects() {
  return (
    <ProjectsBlock>
      <Project>
        <ProjectImgWrapper>
          <ProjectLink href="#" rel="noopener noreferrer" target="_blank">
            <Image src={ProjectImg} alt="Project" />
          </ProjectLink>
        </ProjectImgWrapper>
        <ProjectContent></ProjectContent>
      </Project>
    </ProjectsBlock>
  )
}

export default FeauturedProjects;
