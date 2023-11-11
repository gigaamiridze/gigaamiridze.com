import { fadeIn } from "../animations";
import { AnimatedFullname } from "../layouts";
import { HelloContainer, HelloTitle, WorkTitle, HelloText } from "../components";

function Hello() {
  const _ = undefined;

  return (
    <HelloContainer>
      <HelloTitle
        variants={fadeIn("up", _, 1.3)}
        initial="hidden"
        animate="visible"
      >
        Hi, my name is
      </HelloTitle>
      <AnimatedFullname />
      <WorkTitle
        variants={fadeIn("up", _, 1.5)}
        initial="hidden"
        animate="visible"
      >
        I build applications.
      </WorkTitle>
      <HelloText
        variants={fadeIn("up", _, 1.6)}
        initial="hidden"
        animate="visible"
      >
        I’m a detail-oriented Full-Stack Web and Mobile Software Engineer with experience building websites and 
        mobile applications. Currently, I’m focused on building accessible, human-centered products.
      </HelloText>
    </HelloContainer>
  )
}

export default Hello;