import React, { useEffect } from "react";
import { tabTitle } from "../utilities";
import { ArchiveTitle, ArchiveSubtitle } from "../components";

function Archive() {
  useEffect(() => {
    tabTitle("Archive | Giga Amiridze");
  }, []);

  return (
    <>
      <ArchiveTitle>Archive</ArchiveTitle>
      <ArchiveSubtitle>A big list of things I’ve worked on</ArchiveSubtitle>
    </>
  )
}

export default Archive;