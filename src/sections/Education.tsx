import React from "react";
import { eduTabs, eduPanels } from "../data";
import { sectionVariants } from "../animations";
import { ActionContainer } from "../components";
import { HeadTitle, SwitchableTabs } from "../layouts";

function Education() {
  return (
    <ActionContainer 
      id="education"
      variants={sectionVariants}
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