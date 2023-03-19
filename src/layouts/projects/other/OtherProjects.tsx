import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import { SectionTitle, ViewArchiveTitle, OtherTitleBox } from "../../../components";

function OtherProjects() {
  return (
    <>
      <OtherTitleBox>
        <SectionTitle>Other Noteworthy Projects</SectionTitle>
        <Link to="archive">
          <ViewArchiveTitle>view the archive</ViewArchiveTitle>
        </Link>
      </OtherTitleBox>
      <Projects />
    </>
  )
}

export default OtherProjects;