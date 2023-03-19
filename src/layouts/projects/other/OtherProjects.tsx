import React from "react";
import { Link } from "react-router-dom";
import { CiFolderOn } from "react-icons/ci";
import { ProjectLinks } from "../../shared";
import {
  SectionTitle, ViewArchiveTitle, OtherTitleBox,
  ProjectBoxes, ProjectInfo, TopArea, OtherProjectTitle, OtherDescription, OtherTechList 
} from "../../../components";

function OtherProjects() {
  return (
    <>
      <OtherTitleBox>
        <SectionTitle>Other Noteworthy Projects</SectionTitle>
        <Link to="archive">
          <ViewArchiveTitle>view the archive</ViewArchiveTitle>
        </Link>
      </OtherTitleBox>
      <ProjectBoxes>
        <ProjectInfo>
          <TopArea>
            <CiFolderOn title="Folder" />
            <ProjectLinks githubLink="#" designLink="#" />
          </TopArea>
          <OtherProjectTitle
            href="#"
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
      </ProjectBoxes>
    </>
  )
}

export default OtherProjects;