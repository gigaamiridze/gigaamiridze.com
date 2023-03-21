import React from "react";
import { TypeAnimation } from "react-type-animation";
import { HelloContainer, HelloTitle, WorkTitle, HelloText } from "../components";

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
        I'm a detail-oriented Junior Full-Stack Developer with experience building websites and 
        web applications. Currently, I’m focused on building accessible, human-centered products.
      </HelloText>
    </HelloContainer>
  )
}

export default Hello;