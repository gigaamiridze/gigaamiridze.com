import React, { useState } from "react";
import { fadeIn } from "../../animations";
import { SwitchableTabsProps } from "../../interfaces";
import {
  JobsContent, TabList, TabContent, Tab, TabIndicator,
  WorkPosition, Company, Range, TextsBlock, WorkDescription
} from "../../components";

function SwitchableTabs(props: SwitchableTabsProps) {
  const { tabs, panels, isJobIndicator } = props;

  const [activeTab, setActiveTab] = useState<number>(0);

  const toggleTab = (id: number) => {
    setActiveTab(id);
  }

  return (
    <JobsContent>
      <TabList>
        {tabs.map((tab) => {
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
        <TabIndicator activeTab={activeTab} isJobIndicator={isJobIndicator} />
      </TabList>
      {panels.map((panel) => {
        const { id, position, company, companyLink, range, texts } = panel;

        return (
          <TabContent 
            key={id} 
            dataId={id} 
            activeTab={activeTab}
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
          >
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