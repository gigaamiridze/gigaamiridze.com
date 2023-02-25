import React from "react";
import LetterG from "../assets/svg/letter-g.svg";
import { fadeIn } from "../utilities/variants";
// Importing Components
import HeaderContainer from "./HeaderContainer";
import Logo from "./Logo";
import Button from "./Button";
import BtnLinkWrapper from "./BtnLinkWrapper";

function Header() {
  return (
    <HeaderContainer>
      <Logo 
        src={LetterG} 
        alt="Logo" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <BtnLinkWrapper
        href="https://drive.google.com/file/d/1le7L2Zs5mk2UsD5Qphx6Ig1Tokq3DYqM/view" 
        target="_blank"
      >
        <Button
          variants={fadeIn("down", 0)}
          initial="hidden"
          animate="show"
        >
          Resume
        </Button>
      </BtnLinkWrapper>
    </HeaderContainer>
  )
}

export default Header;
