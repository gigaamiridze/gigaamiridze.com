import React, { useState } from "react";
import { Link } from "react-router-dom";
import { otherProjects } from "../../../data";
import Projects from "./Projects";
import { SectionTitle, ViewArchiveTitle, OtherTitleBox, ShowButton } from "../../../components";

function OtherProjects() {
  const [visible, setVisible] = useState<number>(6);
  
  const showMoreAndLess = () => {
    if (visible === 6) {
      setVisible(otherProjects.length);
    } else {
      setVisible(6);
    }
  }

  return (
    <>
      <OtherTitleBox>
        <SectionTitle>Other Noteworthy Projects</SectionTitle>
        <Link to="archive">
          <ViewArchiveTitle>view the archive</ViewArchiveTitle>
        </Link>
      </OtherTitleBox>
      <Projects visible={visible} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ShowButton onClick={showMoreAndLess}>
          {visible === 6 ? "Show More" : "Show Less"}
        </ShowButton>
      </div>
    </>
  )
}

export default OtherProjects;