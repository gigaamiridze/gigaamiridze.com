import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navLinks } from "../../data";
import { fadeIn } from "../../animations";
import { NavContainer, NavGreenNumber } from "../../components";

function Navigation() {
  const _ = undefined;

  return (
    <NavContainer>
      <ul>
        {navLinks.map((link) => {
          const { id, queueNumber, address, title, animateDelay } = link;

          return (
            <motion.li 
              key={id}
              variants={fadeIn("down", _, animateDelay)}
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
                <NavGreenNumber>{queueNumber}</NavGreenNumber>
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