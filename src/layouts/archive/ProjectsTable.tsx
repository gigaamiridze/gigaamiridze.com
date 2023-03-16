import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import { columnTitles, archiveProjects } from "../../data";
import { Table, Year, Title, MadeAt, BuiltWith, Links } from "../../components";

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
        {archiveProjects.map((item) => {
          const { id, year, title, madeAt, techs, designLink, githubLink } = item;

          return (
            <tr key={id}>
              <Year>{year}</Year>
              <Title>{title}</Title>
              <MadeAt>{madeAt}</MadeAt>
              <BuiltWith>{techs}</BuiltWith>
              <td>
                <Links>
                  <a href={designLink} rel="noopener noreferrer" target="_blank">
                    <HiOutlineExternalLink title="External Link" />
                  </a>
                  <a href={githubLink} rel="noopener noreferrer" target="_blank">
                    <RiGithubLine title="GitHub" />
                  </a>
                </Links>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProjectsTable;