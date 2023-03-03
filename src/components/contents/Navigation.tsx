import React from "react";
import { Link } from "react-scroll";
// Importing Components
import NavContainer from "../containers/NavContainer";
import GreenNumber from "../GreenNumber";

function Navigation() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="hello">
            <GreenNumber fontSize="11px" marginRight="5px">01.</GreenNumber>
            Hello
          </Link>
        </li>
        <li>
          <Link to="about">
            <GreenNumber fontSize="11px" marginRight="5px">02.</GreenNumber>
            About
          </Link>
        </li>
      </ul>
    </NavContainer>
  )
}

export default Navigation;
