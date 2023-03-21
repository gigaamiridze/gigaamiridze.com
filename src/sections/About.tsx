import React from "react";
import styled from "styled-components";
import aboutInfo from "../data/aboutInfo.json";
import { Profile } from "../assets";
import { HeadTitle } from "../layouts";
import { 
  AboutContainer, FlexBlock, TextContainer,
  AboutText, ProfileImgWrapper, Image, SkillsList 
} from "../components";

function About() {
  return (
    <AboutContainer id="about">
      <HeadTitle queueNumber={1} title="About Me" />
      <FlexBlock>
        <TextContainer>
          {aboutInfo.map((item) => {
            const { id, text } = item;

            return (
              <AboutText key={id}>
                {text}
              </AboutText>
            )
          })}
          <SkillsList>
            <div>
              <li>JavaScript (ES6+)</li>
            </div>
          </SkillsList>
        </TextContainer>
        <ProfileImgWrapper>
          <Image src={Profile} isFullWidth={false} alt="Profile" />
        </ProfileImgWrapper>
      </FlexBlock>
    </AboutContainer>
  )
}

export default About;