import uuid from "react-uuid";
import { motion } from "framer-motion";
import { CiFolderOn } from "react-icons/ci";
import { fadeIn } from "../../../animations";
import { otherProjects } from "../../../data";
import { ProjectsProps } from "../../../interfaces";
import { ProjectLinks } from "../../shared";
import {
  ProjectBoxes, ProjectInfo, TopArea,
  OtherProjectTitle, OtherDescription, OtherTechList
} from "../../../components";

function Projects(props: ProjectsProps) {
  const { visible } = props;
  const _ = undefined;

  return (
    <ProjectBoxes>
      {otherProjects.slice(0, visible).map((project) => {
        const { id, title, description, designLink, githubLink, techList, animateDelay } = project;

        return (
          <motion.a href={designLink ? designLink : githubLink} 
            key={id} 
            rel="noopener noreferrer" 
            target="_blank"
            variants={fadeIn("up", _, animateDelay)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <ProjectInfo>
              <div>
                <TopArea>
                  <CiFolderOn title="Folder" />
                  <ProjectLinks githubLink={githubLink} designLink={designLink} />
                </TopArea>
                <OtherProjectTitle
                  href="#"
                  id="project-title"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </OtherProjectTitle>
                <OtherDescription>{description}</OtherDescription>
              </div>
              <div>
                <OtherTechList>
                  {techList.map((tech) => {
                    const id = uuid();

                    return (
                      <li key={id}>{tech}</li>
                    )
                  })}
                </OtherTechList>
              </div>
            </ProjectInfo>
          </motion.a>
        )
      })}
    </ProjectBoxes>
  )
}

export default Projects;