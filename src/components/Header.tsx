import React from "react";
import LetterG from "../assets/svg/letter-g.svg";
// Importing Components
import HeaderContainer from "./HeaderContainer";
import Logo from "./Logo";

function Header() {
  return (
    <HeaderContainer>
      <Logo src={LetterG} alt="Logo" />
    </HeaderContainer>
  )
}

export default Header;
