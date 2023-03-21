import React from "react";
import { aboutInfo, skills } from "../data";
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
            {skills.map((item) => {
              const { id, skillsList } = item;

              return (
                <ul key={id}>
                  {skillsList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )
            })}
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