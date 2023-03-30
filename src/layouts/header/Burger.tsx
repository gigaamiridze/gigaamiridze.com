import React, { useState } from "react";
import { logoVariants } from "../../animations";
import { BurgerWrapper } from "../../components";

function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BurgerWrapper
      isOpen={isOpen} 
      onClick={() => setIsOpen(!isOpen)}
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <span />
      <span />
      <span />
    </BurgerWrapper>
  )
}

export default Burger;