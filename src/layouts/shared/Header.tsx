import React from "react";
import { useLocation, Link } from "react-router-dom";
import { LetterG } from "../../assets";
import { fadeIn } from "../../utilities";
import { useScrollPosition } from "../../hooks";
import { HeaderContainer, Logo, ResumeButton, FlexBox, LinkBtnWrapper } from "../../components";
import Navigation from "./Navigation";

function Header() {
  const isScroll = useScrollPosition();
  const location = useLocation();

  return (
    <HeaderContainer isScroll={isScroll}>
      <Link to="/">
        <Logo
          src={LetterG}
          alt="Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </Link>
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