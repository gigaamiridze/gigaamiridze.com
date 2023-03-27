import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navLinks } from "../../data";
import { fadeIn } from "../../utilities";
import { NavContainer, GreenNumber } from "../../components";

function Navigation() {
  return (
    <NavContainer>
      <ul>
        {navLinks.map((item) => {
          const { id, queueNumber, address, title, animateDelay } = item;

          return (
            <motion.li 
              key={id}
              variants={fadeIn("down", 70, animateDelay)}
              initial="hidden"
              animate="visible"
            >
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
            </motion.li>
          )
        })}
      </ul>
    </NavContainer>
  )
}

export default Navigation;