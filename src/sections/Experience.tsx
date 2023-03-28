import React from "react";
import { fadeIn } from "../animations";
import { jobTabs, jobPanels } from "../data";
import { ActionContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Experience() {
  return (
    <ActionContainer 
      id="experience"
      variants={fadeIn("up", 0, 0.2)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: false }}
    >
      <HeadTitle queueNumber={2} title="My Experience" />
      <SwitchableTabs tabs={jobTabs} panels={jobPanels} />
    </ActionContainer>
  )
}

export default Experience;