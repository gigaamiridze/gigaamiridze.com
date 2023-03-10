import React from "react";
import { ProjectImg } from "../../assets";
// Importing Components
import { ProjectImgWrapper, ProjectLink, Image,  } from "../../components";

function ProjectImage() {
  return (
    <ProjectImgWrapper>
      <ProjectLink href="#" rel="noopener noreferrer" target="_blank">
        <Image src={ProjectImg} alt="Project" />
      </ProjectLink>
    </ProjectImgWrapper>
  )
}

export default ProjectImage;
