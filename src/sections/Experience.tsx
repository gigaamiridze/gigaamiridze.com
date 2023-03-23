import React from "react";
import { HeadTitle } from "../layouts";
import { 
  ExperienceContainer, JobsContent, TabList, 
  TabContent, Tab, WorkPosition, Company, Range 
} from "../components";

function Experience() {
  return (
    <ExperienceContainer>
      <HeadTitle queueNumber={2} title="My Experience" />
      <JobsContent>
        <TabList>
          <Tab>Upstatement</Tab>
          <Tab>Scout</Tab>
        </TabList>
        <TabContent>
          <WorkPosition>
            Engineer
            <Company
              href="https://upstatement.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Upstatement
            </Company>
          </WorkPosition>
          <Range>May 2018 - Present</Range>
        </TabContent>
      </JobsContent>  
    </ExperienceContainer>
  )
}

export default Experience;