import React from "react";
import uuid from "react-uuid";
import { CiFolderOn } from "react-icons/ci";
import { otherProjects } from "../../../data";
import { ProjectsProps } from "../../../interfaces";
import { ProjectLinks } from "../../shared";
import {
  ProjectBoxes, ProjectInfo, TopArea,
  OtherProjectTitle, OtherDescription, OtherTechList
} from "../../../components";

function Projects(props: ProjectsProps) {
  const { visible } = props;

  return (
    <ProjectBoxes>
      {otherProjects.slice(0, visible).map((project) => {
        const { id, title, description, designLink, githubLink, techList } = project;

        return (
          <a href={designLink ? designLink : githubLink} 
            key={id} 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <ProjectInfo>
              <div>
                <TopArea>
                  <CiFolderOn title="Folder" />
                  <ProjectLinks githubLink={githubLink} designLink={designLink} />
                </TopArea>
                <OtherProjectTitle
                  href="#"
                  id="project-title"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </OtherProjectTitle>
                <OtherDescription>{description}</OtherDescription>
              </div>
              <div>
                <OtherTechList>
                  {techList.map((tech) => {
                    const id = uuid();

                    return (
                      <li key={id}>{tech}</li>
                    )
                  })}
                </OtherTechList>
              </div>
            </ProjectInfo>
          </a>
        )
      })}
    </ProjectBoxes>
  )
}

export default Projects;