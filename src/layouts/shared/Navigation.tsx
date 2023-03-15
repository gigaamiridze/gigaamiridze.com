import React from "react";
import { Link } from "react-scroll";
import { navLinks } from "../../data";
import { NavContainer, GreenNumber } from "../../components";

function Navigation() {
  return (
    <NavContainer>
      <ul>
        {navLinks.map((item) => {
          const { id, queueNumber, address, title } = item;

          return (
            <li key={id}>
              <Link 
                to={address} 
                activeClass="active"
                spy={true} 
                smooth={true}
                offset={-130}
                duration={1000}
              >
                <GreenNumber
                  fontSize="10.5px"
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