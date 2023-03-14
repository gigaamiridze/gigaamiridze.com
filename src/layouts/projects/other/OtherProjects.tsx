import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle, ArchiveTitle, OtherTitleBox } from "../../../components";

function OtherProjects() {
  return (
    <OtherTitleBox>
      <SectionTitle>Other Noteworthy Projects</SectionTitle>
      <Link to="archive">
        <ArchiveTitle>view the archive</ArchiveTitle>
      </Link>
    </OtherTitleBox>
  )
}

export default OtherProjects;