import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "../../contexts";
import LogoWrapper from "./LogoWrapper";

function Logo() {
  const { pathname } = useLocation();
  const { setIsOpen } = useMenu();

  return (
    <>
      {pathname === "/"
        ? (
          <ScrollLink
            to="hello"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => setIsOpen(false)}
          >
            <LogoWrapper />
          </ScrollLink>
        )
        : (
          <Link to="/">
            <LogoWrapper />
          </Link >
        )
      }
    </>
  )
}

export default Logo;