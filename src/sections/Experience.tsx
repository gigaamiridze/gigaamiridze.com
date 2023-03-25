import React from "react";
import { jobTabs, jobPanels } from "../data";
import { ActionContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Experience() {
  return (
    <ActionContainer id="experience">
      <HeadTitle queueNumber={2} title="My Experience" />
      <SwitchableTabs tabs={jobTabs} panels={jobPanels} />
    </ActionContainer>
  )
}

export default Experience;