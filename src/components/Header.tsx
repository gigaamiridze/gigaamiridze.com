import React from "react";
import LetterG from "../assets/svg/letter-g.svg";
// Importing Components
import HeaderContainer from "./HeaderContainer";
import Logo from "./Logo";
import Button from "./Button";
import Link from "./Link";

function Header() {
  return (
    <HeaderContainer>
      <Logo src={LetterG} alt="Logo" />
      <Button>
        <Link 
          href="https://drive.google.com/file/d/1le7L2Zs5mk2UsD5Qphx6Ig1Tokq3DYqM/view" 
          target="_blank"
        >
          Resume
        </Link>
      </Button>
    </HeaderContainer>
  )
}

export default Header;
