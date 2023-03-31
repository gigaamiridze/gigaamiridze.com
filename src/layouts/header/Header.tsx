import React from "react";
import { useLocation } from "react-router-dom";
import { useMenu } from "../../contexts";
import { useScrollPosition } from "../../hooks";
import { HeaderContainer, Menu } from "../../components";
import { Logo, Navigation, ResumeButton, Burger } from "../../layouts";

function Header() {
  const isScroll = useScrollPosition();
  const { pathname } = useLocation();
  const { isOpen, toggleMenu } = useMenu();

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
      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
    </HeaderContainer>
  )
}

export default Header;