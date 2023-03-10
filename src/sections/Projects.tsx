import React from "react";
// Importing Components
import { ProjectsContainer } from "../components";
import { HeadTitle, FeaturedProjects } from "../layouts";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <HeadTitle queueNumber={4} title="Some Things I’ve Built" />
      <FeaturedProjects />
    </ProjectsContainer>
  )
}

export default Projects;
