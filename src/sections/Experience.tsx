import React from "react";
import { ActionContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Experience() {
  return (
    <ActionContainer id="experience">
      <HeadTitle queueNumber={2} title="My Experience" />
      <SwitchableTabs />
    </ActionContainer>
  )
}

export default Experience;