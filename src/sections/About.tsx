import React from "react";
import { Profile } from "../assets";
import { HeadTitle, AboutInfo } from "../layouts";
import { AboutContainer, FlexBlock, ProfileImgWrapper, Image } from "../components";

function About() {
  return (
    <AboutContainer id="about">
      <HeadTitle queueNumber={1} title="About Me" />
      <FlexBlock>
        <AboutInfo />
        <ProfileImgWrapper>
          <Image src={Profile} isFullWidth={false} alt="Profile" />
        </ProfileImgWrapper>
      </FlexBlock>
    </AboutContainer>
  )
}

export default About;