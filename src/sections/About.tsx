import { Profile } from "../assets";
import { sectionVariants } from "../animations";
import { HeadTitle, AboutInfo } from "../layouts";
import { AboutContainer, AboutBlock, ProfileImgWrapper, Image } from "../components";

function About() {
  return (
    <AboutContainer 
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <HeadTitle queueNumber={1} title="About Me" />
      <AboutBlock>
        <AboutInfo />
        <ProfileImgWrapper>
          <Image src={Profile} isFullWidth={false} alt="Profile" />
        </ProfileImgWrapper>
      </AboutBlock>
    </AboutContainer>
  )
}

export default About;