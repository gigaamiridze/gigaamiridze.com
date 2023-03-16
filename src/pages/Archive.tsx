import React, { useEffect } from "react";
import { tabTitle } from "../utilities";
import { ArchiveTitle, ArchiveSubtitle } from "../components";
import { ProjectsTable } from "../layouts";

function Archive() {
  useEffect(() => {
    tabTitle("Archive | Giga Amiridze");
  }, []);

  return (
    <>
      <ArchiveTitle>Archive</ArchiveTitle>
      <ArchiveSubtitle>A big list of things I’ve worked on</ArchiveSubtitle>
      <ProjectsTable />
    </>
  )
}

export default Archive;