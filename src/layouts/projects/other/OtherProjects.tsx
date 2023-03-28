import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fadeIn } from "../../../animations";
import { otherProjects } from "../../../data";
import Projects from "./Projects";
import { SectionTitle, ViewArchiveTitle, OtherTitleBox, ShowButton } from "../../../components";

function OtherProjects() {
  const [visible, setVisible] = useState<number>(6);
  const _ = undefined;

  const showMoreAndLess = () => {
    if (visible === 6) {
      setVisible(otherProjects.length);
    } else {
      setVisible(6);
    }
  }

  return (
    <>
      <OtherTitleBox
        variants={fadeIn("up", _, 0.3)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
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