import React from "react";
import uuid from "react-uuid";
import { featuredProjects } from "../../../data";
// Importing Components
import { ProjectsBlock, Project } from "../../../components";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

function FeauturedProjects() {
  return (
    <ProjectsBlock>
      {featuredProjects.map((project) => {
        const { image, title, description, designLink, githubLink, techList, isLeft } = project;
        const id = uuid();

        return (
          <Project key={id}>
            <ProjectImage 
              designLink={designLink}
              image={image}
              title={title}
              isLeft={isLeft}
            />
            <ProjectContent 
              title={title}
              description={description}
              designLink={designLink}
              githubLink={githubLink}
              techList={techList}
              isLeft={isLeft}
            />
          </Project>
        )
      })}
    </ProjectsBlock>
  )
}

export default FeauturedProjects;
