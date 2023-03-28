import React from "react";
import { Profile } from "../assets";
import { fadeIn } from "../animations";
import { HeadTitle, AboutInfo } from "../layouts";
import { AboutContainer, FlexBlock, ProfileImgWrapper, Image } from "../components";

function About() {
  return (
    <AboutContainer 
      id="about"
      variants={fadeIn("up", 0, 0.3)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: false }}
    >
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