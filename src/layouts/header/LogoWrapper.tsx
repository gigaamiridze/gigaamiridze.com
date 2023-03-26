import React from "react";
import { LetterG } from "../../assets";
import { logoVariants } from "../../utilities";
import { LogoImage } from "../../components";

function LogoWrapper() {
  return (
    <LogoImage
      src={LetterG}
      alt="Logo"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    />
  )
}

export default LogoWrapper;