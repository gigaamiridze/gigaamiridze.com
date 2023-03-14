import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle, ViewArchiveTitle, OtherTitleBox } from "../../../components";

function OtherProjects() {
  return (
    <OtherTitleBox>
      <SectionTitle>Other Noteworthy Projects</SectionTitle>
      <Link to="archive">
        <ViewArchiveTitle>view the archive</ViewArchiveTitle>
      </Link>
    </OtherTitleBox>
  )
}

export default OtherProjects;