import React from "react";
import uuid from "react-uuid";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ProjectContentProps } from "../../../interfaces";
import {
  Content, FeaturedTitle, TextBox, FeaturedDescription,
  FeaturedTechList, LinksWrapper, FeaturedProjectTitle
} from "../../../components";

function ProjectContent(props: ProjectContentProps) {
  const { title, className, description, designLink, githubLink, techList, isLeft } = props;

  return (
    <Content isLeft={isLeft}>
      <FeaturedTitle>Featured Project</FeaturedTitle>
      <FeaturedProjectTitle
        href={designLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <h3 className={className}>{title}</h3>
      </FeaturedProjectTitle>
      <TextBox>
        <FeaturedDescription>{description}</FeaturedDescription>
      </TextBox>
      <FeaturedTechList isLeft={isLeft}>
        {techList.map((tech) => {
          const id = uuid();

          return (
            <li key={id}>{tech}</li>
          )
        })}
      </FeaturedTechList>
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