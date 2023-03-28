import React from "react";
import { fadeIn } from "../animations";
import { eduTabs, eduPanels } from "../data";
import { ActionContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Education() {
  return (
    <ActionContainer 
      id="education"
      variants={fadeIn("up", 0, 0.2)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: false }}
    >
      <HeadTitle queueNumber={3} title="Education" />
      <SwitchableTabs tabs={eduTabs} panels={eduPanels} />
    </ActionContainer>
  )
}

export default Education;