import React from "react";
import uuid from "react-uuid";
import { Link } from "react-scroll";
import { navLinks } from "../../data/navLinks";
// Importing Components
import NavContainer from "../containers/NavContainer";
import GreenNumber from "../GreenNumber";

function Navigation() {
  return (
    <NavContainer>
      <ul>
        {navLinks.map((item) => {
          const { queueNumber, address, title } = item;
          const id = uuid();

          return (
            <li key={id}>
              <Link 
                to={address} 
                activeClass="active" 
                spy={true} 
                smooth={true}
                duration={500}
              >
                <GreenNumber
                  fontSize="11px"
                  marginRight="5px"
                >
                  {queueNumber}
                </GreenNumber>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </NavContainer>
  )
}

export default Navigation;
