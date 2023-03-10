import React from "react";
import { ProjectImg } from "../assets";
// Importing Components
import { 
  ProjectsBlock, Project, ProjectImgWrapper, ProjectLink,
  Image, ProjectContent, FeaturedTitle, ProjectTitle 
} from "../components";

function FeauturedProjects() {
  return (
    <ProjectsBlock>
      <Project>
        <ProjectImgWrapper>
          <ProjectLink href="#" rel="noopener noreferrer" target="_blank">
            <Image src={ProjectImg} alt="Project" />
          </ProjectLink>
        </ProjectImgWrapper>
        <ProjectContent>
          <FeaturedTitle>Featured Project</FeaturedTitle>
          <ProjectTitle href="#" rel="noopener noreferrer" target="_blank">Halcyon Theme</ProjectTitle>
        </ProjectContent>
      </Project>
    </ProjectsBlock>
  )
}

export default FeauturedProjects;
