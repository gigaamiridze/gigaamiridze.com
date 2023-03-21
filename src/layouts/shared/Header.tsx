import React from "react";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../../utilities";
import { useScrollPosition } from "../../hooks";
import { HeaderContainer, ResumeButton, FlexBox, LinkBtnWrapper } from "../../components";
import { Logo } from "../../layouts";
import Navigation from "./Navigation";

function Header() {
  const isScroll = useScrollPosition();
  const location = useLocation();

  return (
    <HeaderContainer isScroll={isScroll}>
      <Logo />
      <FlexBox>
        {location.pathname === '/'
          ? <Navigation />
          : null
        }
        <LinkBtnWrapper
          href="https://drive.google.com/file/d/1le7L2Zs5mk2UsD5Qphx6Ig1Tokq3DYqM/view"
          target="_blank"
        >
          <ResumeButton
            type="button"
            variants={fadeIn("down", 0)}
            initial="hidden"
            animate="show"
          >
            Resume
          </ResumeButton>
        </LinkBtnWrapper>
      </FlexBox>
    </HeaderContainer>
  )
}

export default Header;