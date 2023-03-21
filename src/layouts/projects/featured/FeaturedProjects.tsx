import React from "react";
import { featuredProjects } from "../../../data";
import { ProjectsBlock, Project } from "../../../components";
import { ProjectImage, ProjectContent } from "../../../layouts";

function FeauturedProjects() {
  return (
    <ProjectsBlock>
      {featuredProjects.map((project) => {
        const { id, image, title, description, designLink, githubLink, techList, isLeft } = project;

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