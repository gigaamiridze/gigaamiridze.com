import React, { useState } from "react";
import { 
  JobsContent, TabList, TabContent, Tab, TabIndicator,
  WorkPosition, Company, Range, TextsBlock, WorkDescription 
} from "../../components";

function SwitchableTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const toggleTab = (id: number) => {
    setActiveTab(id);
  }

  return (
    <JobsContent>
      <TabList>
        <Tab dataId={0} activeTab={activeTab} onClick={() => toggleTab(0)}>Upstatement</Tab>
        <Tab dataId={1} activeTab={activeTab} onClick={() => toggleTab(1)}>Scout</Tab>
        <TabIndicator activeTab={activeTab} />
      </TabList>

      <TabContent dataId={0} activeTab={activeTab}>
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

      <TabContent dataId={1} activeTab={activeTab}>
        <WorkPosition>
          Studio Developer
          <Company
            href="https://web.northeastern.edu/scout/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Upstatement
          </Company>
        </WorkPosition>
        <Range>January - April 2018</Range>
        <TextsBlock>
          <WorkDescription>
            Worked with a team of three designers to build a marketing website and e-commerce platform
            for blistabloc, an ambitious startup originating from Northeastern
          </WorkDescription>
          <WorkDescription>
            Helped solidify a brand direction for blistabloc that spans both packaging and web
          </WorkDescription>
          <WorkDescription>
            Interfaced with clients on a weekly basis, providing technological expertise
          </WorkDescription>
        </TextsBlock>
      </TabContent>
    </JobsContent>
  )
}

export default SwitchableTabs;