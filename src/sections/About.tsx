import React from "react";
import uuid from "react-uuid";
import { texts } from "../data";
import { Profile } from "../assets";
// Importing Components
import { 
  AboutContainer, FlexBox, FlexBlock, 
  GreenNumber, SectionTitle, HorizontalLine, 
  TextContainer, AboutText, ImageWrapper, ProfileImage 
} from "../components";

function About() {
  return (
    <AboutContainer id="about">
      <FlexBox>
        <GreenNumber fontSize="18px" marginRight="10px">02.</GreenNumber>
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
          <ProfileImage src={Profile} alt="Profile" />
        </ImageWrapper>
      </FlexBlock>
    </AboutContainer>
  )
}

export default About;
