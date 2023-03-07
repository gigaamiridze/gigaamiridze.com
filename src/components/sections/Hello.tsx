import React from "react";
import { TypeAnimation } from "react-type-animation";
// Importing Components
import HelloContainer from "../containers/HelloContainer";
import { HelloTitle } from "../titles/GreenTitle";
import WorkTitle from "../titles/WorkTitle";
import { HelloText } from "../Text";

function Hello() {
  return (
    <HelloContainer>
      <HelloTitle>Hi, my name is</HelloTitle>
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
      <HelloText>
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital 
        experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
      </HelloText>
    </HelloContainer>
  )
}

export default Hello;
