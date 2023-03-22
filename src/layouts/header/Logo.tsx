import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { LetterG } from "../../assets";
import { LogoImage } from "../../components";

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
            <LogoImage
              src={LetterG}
              alt="Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </ScrollLink>
        )
        : (
          <Link to="/">
            <LogoImage
              src={LetterG}
              alt="Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Link >
        )
      }
    </>
  )
}

export default Logo;