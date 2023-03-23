import React from "react";
import { ExperienceContainer, JobsContent, TabList, TabContent, Tab } from "../components";
import { HeadTitle } from "../layouts";

function Experience() {
  return (
    <ExperienceContainer>
      <HeadTitle queueNumber={2} title="My Experience" />
      <JobsContent>
        <TabList>
          <Tab>Upstatement</Tab>
          <Tab>Scout</Tab>
        </TabList>
        <TabContent></TabContent>
      </JobsContent>  
    </ExperienceContainer>
  )
}

export default Experience;