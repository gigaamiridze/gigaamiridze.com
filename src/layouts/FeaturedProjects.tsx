import React from "react";
import { ProjectImg } from "../assets";
// Importing Components
import { 
  ProjectsBlock, Project, ProjectImgWrapper, ProjectLink,
  Image, ProjectContent, FeaturedTitle, ProjectTitle,
  TextBox, ProjectDescription, ProjectTechList 
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
          <TextBox>
            <ProjectDescription>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 
              Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </ProjectDescription>
          </TextBox>
          <ProjectTechList>
            <li>VS Code</li>
            <li>Sublime Text</li>
            <li>Atom</li>
            <li>iTerm2</li>
            <li>Hyper</li>
          </ProjectTechList>
        </ProjectContent>
      </Project>
    </ProjectsBlock>
  )
}

export default FeauturedProjects;
