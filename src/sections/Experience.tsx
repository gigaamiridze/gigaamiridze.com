import React from "react";
import { ExperienceContainer, JobsContent, TabList, TabContent } from "../components";
import { HeadTitle } from "../layouts";

function Experience() {
  return (
    <ExperienceContainer>
      <HeadTitle queueNumber={2} title="My Experience" />
      <JobsContent>
        <TabList></TabList>
        <TabContent></TabContent>
      </JobsContent>
    </ExperienceContainer>
  )
}

export default Experience;