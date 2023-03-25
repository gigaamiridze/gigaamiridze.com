import React from "react";
import { eduTabs, eduPanels } from "../data";
import { ActionContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Education() {
  return (
    <ActionContainer id="education">
      <HeadTitle queueNumber={3} title="Education" />
      <SwitchableTabs tabs={eduTabs} panels={eduPanels} />
    </ActionContainer>
  )
}

export default Education;