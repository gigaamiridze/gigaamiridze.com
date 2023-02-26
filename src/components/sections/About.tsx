import React from "react";
// Importing Components
import AboutContainer from "../containers/AboutContainer";
import FlexBox from "../FlexBox";
import GreenNumber from "../GreenNumber";
import SectionTitle from "../titles/SectionTitle";
import HorizontalLine from "../lines/HorizontalLine";

function About() {
  return (
    <AboutContainer>
      <FlexBox>
        <GreenNumber>01.</GreenNumber>
        <SectionTitle>About Me</SectionTitle>
        <HorizontalLine />
      </FlexBox>
    </AboutContainer>
  )
}

export default About;
