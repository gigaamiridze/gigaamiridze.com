import React from "react";
import { ExperienceContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <HeadTitle queueNumber={2} title="My Experience" />
      <SwitchableTabs />
    </ExperienceContainer>
  )
}

export default Experience;