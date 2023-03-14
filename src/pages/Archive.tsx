import React, { useEffect } from "react";
import { tabTitle } from "../utilities";
import { ArchiveTitle, ArchiveSubtitle, Table } from "../components";

function Archive() {
  useEffect(() => {
    tabTitle("Archive | Giga Amiridze");
  }, []);

  return (
    <>
      <ArchiveTitle>Archive</ArchiveTitle>
      <ArchiveSubtitle>A big list of things I’ve worked on</ArchiveSubtitle>
      <Table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Made at</th>
            <th>Built with</th>
            <th>Link</th>
          </tr>
        </thead>
      </Table>
    </>
  )
}

export default Archive;