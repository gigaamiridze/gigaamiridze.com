import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";
import { columnTitles, archiveProjects } from "../../data";
import { Table, Year, Title, MadeAt, BuiltWith } from "../../components";
import { ProjectLinks } from "../../layouts";

function ProjectsTable() {
  return (
    <Table>
      <thead>
        <tr>
          {columnTitles.map((item) => {
            const { id, title } = item;

            return (
              <th key={id}>{title}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {archiveProjects.map((project) => {
          const { id, year, title, madeAt, techs, designLink, githubLink } = project;

          return (
            <motion.tr 
              key={id}
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              <Year>{year}</Year>
              <Title>{title}</Title>
              <MadeAt>{madeAt}</MadeAt>
              <BuiltWith>{techs}</BuiltWith>
              <td>
                <ProjectLinks githubLink={githubLink} designLink={designLink} />
              </td>
            </motion.tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProjectsTable;