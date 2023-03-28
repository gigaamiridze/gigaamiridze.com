import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import { ProjectsContainer } from "../components";
import { HeadTitle, FeaturedProjects, OtherProjects } from "../layouts";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <motion.div
        variants={fadeIn("up", 100, 0.3)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <HeadTitle queueNumber={4} title="Some Things I’ve Built" />
      </motion.div>
      <FeaturedProjects />
      <OtherProjects />
    </ProjectsContainer>
  )
}

export default Projects;