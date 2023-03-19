import React from "react";
import uuid from "react-uuid";
import { ProjectContentProps } from "../../../interfaces";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  Content, FeaturedTitle, TextBox, FeaturedDescription,
  ProjectTechList, LinksWrapper, FeaturedProjectTitle
} from "../../../components";

function ProjectContent(props: ProjectContentProps) {
  const { title, description, designLink, githubLink, techList, isLeft } = props;

  return (
    <Content isLeft={isLeft}>
      <FeaturedTitle>Featured Project</FeaturedTitle>
      <FeaturedProjectTitle
        href={designLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        {title}
      </FeaturedProjectTitle>
      <TextBox>
        <FeaturedDescription>{description}</FeaturedDescription>
      </TextBox>
      <ProjectTechList isLeft={isLeft}>
        {techList.map((tech) => {
          const id = uuid();

          return (
            <li key={id}>{tech}</li>
          )
        })}
      </ProjectTechList>
      <LinksWrapper isLeft={isLeft}>
        <a href={githubLink} rel="noopener noreferrer" target="_blank">
          <RiGithubLine title="GitHub" />
        </a>
        <a href={designLink} rel="noopener noreferrer" target="_blank">
          <HiOutlineExternalLink title="External Link" />
        </a>
      </LinksWrapper>
    </Content>
  )
}

export default ProjectContent;