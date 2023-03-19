import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { ProjectLinks } from "../../shared";
import {
  ProjectBoxes, ProjectInfo, TopArea,
  OtherProjectTitle, OtherDescription, OtherTechList
} from "../../../components";

function Projects() {
  return (
    <ProjectBoxes>
      <a href="#" rel="noopener noreferrer" target="_blank">
        <ProjectInfo>
          <TopArea>
            <CiFolderOn title="Folder" />
            <ProjectLinks githubLink="#" designLink="#" />
          </TopArea>
          <OtherProjectTitle
            href="#"
            id="project-title"
            rel="noopener noreferrer"
            target="_blank"
          >
            Integrating Algolia Search with WordPress Multisite
          </OtherProjectTitle>
          <OtherDescription>
            Todo List App is a kind of app that is generally used to maintain our day-to-day tasks or list.
          </OtherDescription>
          <OtherTechList>
            <li>Algolia</li>
            <li>WordPress</li>
            <li>PHP</li>
          </OtherTechList>
        </ProjectInfo>
      </a>
    </ProjectBoxes>
  )
}

export default Projects;