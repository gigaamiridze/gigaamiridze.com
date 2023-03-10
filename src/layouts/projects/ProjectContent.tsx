import React from "react";
// Importing Icons
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
// Importing Components
import { 
  Content, FeaturedTitle, ProjectTitle, TextBox,
  ProjectDescription, ProjectTechList, ProjectLinks 
} from "../../components";

function ProjectContent() {
  return (
    <Content>
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
      <ProjectLinks>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <RiGithubLine title="GitHub" />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <HiOutlineExternalLink title="External Link" />
        </a>
      </ProjectLinks>
    </Content>
  )
}

export default ProjectContent;
