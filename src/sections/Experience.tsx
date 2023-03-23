import React from "react";
import { HeadTitle } from "../layouts";
import {
  ExperienceContainer, JobsContent, TabList,
  TabContent, Tab, WorkPosition, Company, Range,
  WorkDescription, TextsBlock, TabIndicator 
} from "../components";

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <HeadTitle queueNumber={2} title="My Experience" />
      <JobsContent>
        <TabList>
          <Tab>Upstatement</Tab>
          <Tab>Scout</Tab>
          <TabIndicator />
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
          <TextsBlock>
            <WorkDescription>
              Write modern, performant, maintainable code for a diverse array of client and internal projects
            </WorkDescription>
            <WorkDescription>
              Work with a variety of different languages, platforms, frameworks, and content management 
              systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </WorkDescription>
            <WorkDescription>
              Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
            </WorkDescription>
          </TextsBlock>
        </TabContent>
      </JobsContent>
    </ExperienceContainer>
  )
}

export default Experience;