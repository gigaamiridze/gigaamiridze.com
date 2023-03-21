import React from "react";
import { TypeAnimation } from "react-type-animation";

function AnimatedFullname() {
  return (
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
  )
}

export default AnimatedFullname;