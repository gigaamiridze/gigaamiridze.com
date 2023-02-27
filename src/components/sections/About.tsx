import React from "react";
import uuid from "react-uuid";
import { texts } from "../../data/aboutTexts";
// Importing Components
import AboutContainer from "../containers/AboutContainer";
import { FlexBox, FlexBlock } from "../Flex";
import GreenNumber from "../GreenNumber";
import SectionTitle from "../titles/SectionTitle";
import HorizontalLine from "../lines/HorizontalLine";
import TextContainer from "../containers/TextContainer";
import { AboutText } from "../Text";

function About() {
  return (
    <AboutContainer>
      <FlexBox>
        <GreenNumber>01.</GreenNumber>
        <SectionTitle>About Me</SectionTitle>
        <HorizontalLine />
      </FlexBox>
      <FlexBlock>
        <TextContainer>
          {texts.map((item) => {
            const id = uuid();

            return (
              <AboutText key={id}>
                {item.text}
              </AboutText>
            )
          })}
        </TextContainer>
      </FlexBlock>
    </AboutContainer>
  )
}

export default About;
