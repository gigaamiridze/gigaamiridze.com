import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import { SectionTitle, ViewArchiveTitle, OtherTitleBox, ShowButton } from "../../../components";

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ShowButton>Show More</ShowButton>
      </div>
    </>
  )
}

export default OtherProjects;