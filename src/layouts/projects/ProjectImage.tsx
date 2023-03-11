import React from "react";
import { ProjectImageProps } from "../../interfaces";
// Importing Components
import { ProjectImgWrapper, ProjectLink, Image } from "../../components";

function ProjectImage(props: ProjectImageProps) {
  const { designLink, image, title, isLeft } = props;

  return (
    <ProjectImgWrapper isLeft={isLeft}>
      <ProjectLink href={designLink} rel="noopener noreferrer" target="_blank">
        <Image src={image} isFullWidth alt={title} />
      </ProjectLink>
    </ProjectImgWrapper>
  )
}

export default ProjectImage;
