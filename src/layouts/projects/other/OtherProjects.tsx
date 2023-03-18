import React from "react";
import { Link } from "react-router-dom";
import { CiFolderOn } from "react-icons/ci";
import { ProjectLinks } from "../../shared";
import { 
  SectionTitle, ViewArchiveTitle, OtherTitleBox, 
  ProjectBoxes, ProjectInfo, TopArea 
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
        </ProjectInfo>
      </ProjectBoxes>
    </>
  )
}

export default OtherProjects;