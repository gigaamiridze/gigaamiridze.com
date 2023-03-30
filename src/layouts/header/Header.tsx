import React from "react";
import { useLocation } from "react-router-dom";
import { useScrollPosition } from "../../hooks";
import { HeaderContainer, FlexBox } from "../../components";
import { Logo, Navigation, ResumeButton, Burger } from "../../layouts";

function Header() {
  const isScroll = useScrollPosition();
  const { pathname } = useLocation();

  return (
    <HeaderContainer isScroll={isScroll}>
      <Logo />
      <FlexBox>
        {pathname === "/"
          ? <Navigation />
          : null
        }
        <ResumeButton />
      </FlexBox>
      <Burger />
    </HeaderContainer>
  )
}

export default Header;