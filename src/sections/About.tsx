import React from "react";
import uuid from "react-uuid";
import { texts } from "../data";
import { Profile } from "../assets";
// Importing Components
import { 
  AboutContainer, FlexBlock, TextContainer,
  AboutText, ImageWrapper, ProfileImage
} from "../components";
import { HeadTitle } from "../layouts";

function About() {
  return (
    <AboutContainer id="about">
      <HeadTitle queueNumber={2} title="About Me" />
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
