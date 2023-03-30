import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useScrollPosition } from "../../hooks";
import { HeaderContainer, Menu } from "../../components";
import { Logo, Navigation, ResumeButton, Burger } from "../../layouts";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isScroll = useScrollPosition();
  const { pathname } = useLocation();

  return (
    <HeaderContainer isScroll={isScroll}>
      <Logo />
      <Menu isOpen={isOpen}>
        {pathname === "/"
          ? <Navigation />
          : null
        }
        <ResumeButton />
      </Menu>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderContainer>
  )
}

export default Header;