import React from "react";
import { TypeAnimation } from "react-type-animation";
// Importing Components
import HelloContainer from "../containers/HelloContainer";
import GreenTitle from "../titles/GreenTitle";
import WorkTitle from "../titles/WorkTitle";
import Text from "../Text";

function Hello() {
  return (
    <HelloContainer>
      <GreenTitle>Hi, my name is</GreenTitle>
      <TypeAnimation 
        sequence={[
          "Giga Amiridze.",
          2000,
          "",
        ]}
        wrapper="h1"
        speed={25}
        cursor={true}
        repeat={Infinity}
        className="fullname"
      />
      <WorkTitle>I build things for the web.</WorkTitle>
      <Text>
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital 
        experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
      </Text>
    </HelloContainer>
  )
}

export default Hello;
