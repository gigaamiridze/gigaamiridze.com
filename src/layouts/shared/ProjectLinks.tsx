import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ProjectLinkProps } from "../../interfaces";
import { ProjectLinksWrapper } from "../../components";

function ProjectLinks(props: ProjectLinkProps) {
  const { githubLink, designLink } = props;

  return (
    <ProjectLinksWrapper>
      <a href={githubLink} rel="noopener noreferrer" target="_blank">
        <RiGithubLine title="GitHub" />
      </a>
      {designLink === undefined
        ? null
        : (
          <a href={designLink} rel="noopener noreferrer" target="_blank">
            <HiOutlineExternalLink title="External Link" />
          </a>
        )
      }
    </ProjectLinksWrapper>
  )
}

export default ProjectLinks;