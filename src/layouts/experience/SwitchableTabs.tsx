import React, { useState } from "react";
import { jobTabs, jobPanels } from "../../data";
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
        {jobTabs.map((tab) => {
          const { id, company } = tab;

          return (
            <Tab
              key={id}
              dataId={id}
              activeTab={activeTab}
              onClick={() => toggleTab(id)}
            >
              {company}
            </Tab>
          )
        })}
        <TabIndicator activeTab={activeTab} />
      </TabList>
      {jobPanels.map((panel) => {
        const { id, position, company, companyLink, range, texts } = panel;

        return (
          <TabContent key={id} dataId={id} activeTab={activeTab}>
            <WorkPosition>
              {position}
              <Company
                href={companyLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                @{company}
              </Company>
            </WorkPosition>
            <Range>{range}</Range>
            <TextsBlock>
              {texts.map((text, index) => (
                <WorkDescription key={index}>{text}</WorkDescription>
              ))}
            </TextsBlock>
          </TabContent>
        )
      })}
    </JobsContent>
  )
}

export default SwitchableTabs;