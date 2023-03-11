import React from "react";
import uuid from "react-uuid";
import { ProjectContentProps } from "../../interfaces";
// Importing Icons
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
// Importing Components
import { 
  Content, FeaturedTitle, ProjectTitle, TextBox,
  ProjectDescription, ProjectTechList, ProjectLinks 
} from "../../components";

function ProjectContent(props: ProjectContentProps) {
  const { title, description, designLink, githubLink, techList, isLeft } = props;

  return (
    <Content isLeft={isLeft}>
      <FeaturedTitle>Featured Project</FeaturedTitle>
      <ProjectTitle 
        href={designLink} 
        rel="noopener noreferrer" 
        target="_blank"
        >
          {title}
        </ProjectTitle>
      <TextBox>
        <ProjectDescription>{description}</ProjectDescription>
      </TextBox>
      <ProjectTechList isLeft={isLeft}>
        {techList.map((tech) => {
          const id = uuid();
          
          return (
            <li key={id}>{tech}</li>
          )
        })}
      </ProjectTechList>
      <ProjectLinks isLeft={isLeft}>
        <a href={githubLink} rel="noopener noreferrer" target="_blank">
          <RiGithubLine title="GitHub" />
        </a>
        <a href={designLink} rel="noopener noreferrer" target="_blank">
          <HiOutlineExternalLink title="External Link" />
        </a>
      </ProjectLinks>
    </Content>
  )
}

export default ProjectContent;
