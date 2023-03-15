import React, { useEffect } from "react";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import { tabTitle } from "../utilities";
import { columnTitles } from "../data";
import { 
  TitlesBox, ArchiveTitle, ArchiveSubtitle, Table, 
  Year, Title, MadeAt, BuiltWith, Links 
} from "../components";

function Archive() {
  useEffect(() => {
    tabTitle("Archive | Giga Amiridze");
  }, []);

  return (
    <>
      <TitlesBox>
        <ArchiveTitle>Archive</ArchiveTitle>
        <ArchiveSubtitle>A big list of things I’ve worked on</ArchiveSubtitle>
      </TitlesBox>
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
          <tr>
            <Year>2022</Year>
            <Title>Harvard Business School Design System</Title>
            <MadeAt>Upstatement</MadeAt>
            <BuiltWith>Storybook · React · TypeScript</BuiltWith>
            <td>
              <Links>
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <HiOutlineExternalLink title="External Link" />
                </a>
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <RiGithubLine title="GitHub" />
                </a>
              </Links>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Archive;