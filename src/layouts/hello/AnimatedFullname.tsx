import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";
import { TypeAnimation } from "react-type-animation";

function AnimatedFullname() {
  const _ = undefined;

  return (
    <motion.div
      variants={fadeIn("up", _, 1.4)}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  )
}

export default AnimatedFullname;