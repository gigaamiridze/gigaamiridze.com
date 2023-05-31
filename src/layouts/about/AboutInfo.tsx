import { aboutInfo } from "../../data";
import Skills from "./Skills";
import { TextContainer, AboutText } from "../../components";

function AboutInfo() {
  return (
    <TextContainer>
      {aboutInfo.map((item) => {
        const { id, text } = item;

        return (
          <AboutText key={id}>
            {text}
          </AboutText>
        )
      })}
      <Skills />
    </TextContainer>
  )
}

export default AboutInfo;