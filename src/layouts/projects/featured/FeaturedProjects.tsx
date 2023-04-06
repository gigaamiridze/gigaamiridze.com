import React from "react";
import { fadeIn } from "../../../animations";
import { featuredProjects } from "../../../data";
import { ProjectsBlock, Project } from "../../../components";
import { ProjectImage, ProjectContent } from "../../../layouts";

function FeauturedProjects() {
  return (
    <ProjectsBlock>
      {featuredProjects.map((project) => {
        const { 
          id, image, title, className, description, 
          designLink, githubLink, techList, isLeft 
        } = project;

        return (
          <Project
            key={id}
            variants={fadeIn("up", 100, 0.33)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <ProjectImage
              designLink={designLink}
              image={image}
              title={title}
              isLeft={isLeft}
            />
            <ProjectContent
              title={title}
              className={className}
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