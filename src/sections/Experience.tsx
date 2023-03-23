import React from "react";
import styled, { css } from "styled-components";
import { 
  ExperienceContainer, JobsContent, TabList, 
  TabContent, Tab, WorkPosition, Company 
} from "../components";
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
        </TabContent>
      </JobsContent>  
    </ExperienceContainer>
  )
}

export default Experience;