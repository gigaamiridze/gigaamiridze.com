import React from "react";
import uuid from "react-uuid";
import { texts } from "../../data/aboutTexts";
import ProfileImg from "../../assets/images/profile.jpg";
// Importing Components
import AboutContainer from "../containers/AboutContainer";
import { FlexBox, FlexBlock } from "../Flex";
import GreenNumber from "../GreenNumber";
import SectionTitle from "../titles/SectionTitle";
import HorizontalLine from "../lines/HorizontalLine";
import TextContainer from "../containers/TextContainer";
import { AboutText } from "../Text";
import ImageWrapper from "../wrappers/ImageWrapper";
import ProfileImage from "../ProfileImage";

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
        <ImageWrapper>
          <ProfileImage src={ProfileImg} alt="Profile" />
        </ImageWrapper>
      </FlexBlock>
    </AboutContainer>
  )
}

export default About;
