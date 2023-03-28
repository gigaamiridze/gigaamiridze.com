import React from "react";
import { jobTabs, jobPanels } from "../data";
import { sectionVariants } from "../animations";
import { ActionContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Experience() {
  return (
    <ActionContainer 
      id="experience"
      variants={sectionVariants}
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