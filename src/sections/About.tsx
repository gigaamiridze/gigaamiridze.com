import React from "react";
import { texts } from "../data";
import { Profile } from "../assets";
import { HeadTitle } from "../layouts";
import { 
  AboutContainer, FlexBlock, TextContainer,
  AboutText, ProfileImgWrapper, Image
} from "../components";

function About() {
  return (
    <AboutContainer id="about">
      <HeadTitle queueNumber={2} title="About Me" />
      <FlexBlock>
        <TextContainer>
          {texts.map((item) => {
            const { id, text } = item;

            return (
              <AboutText key={id}>
                {text}
              </AboutText>
            )
          })}
        </TextContainer>
        <ProfileImgWrapper>
          <Image src={Profile} isFullWidth={false} alt="Profile" />
        </ProfileImgWrapper>
      </FlexBlock>
    </AboutContainer>
  )
}

export default About;