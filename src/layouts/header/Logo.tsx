import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import LogoWrapper from "./LogoWrapper";

function Logo() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/"
        ? (
          <ScrollLink
            to="hello"
            spy={true}
            smooth={true}
            duration={1000}
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