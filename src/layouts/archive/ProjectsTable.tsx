import React from "react";
import { archiveProjects } from "../../data";
import columnTitles from "../../data/table.json";
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
            <tr key={id}>
              <Year>{year}</Year>
              <Title>{title}</Title>
              <MadeAt>{madeAt}</MadeAt>
              <BuiltWith>{techs}</BuiltWith>
              <td>
                <ProjectLinks githubLink={githubLink} designLink={designLink} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProjectsTable;