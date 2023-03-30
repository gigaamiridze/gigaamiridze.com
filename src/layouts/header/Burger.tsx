import React, { useState } from "react";
import { BurgerWrapper } from "../../components";

function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BurgerWrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <span />
      <span />
      <span />
    </BurgerWrapper>
  )
}

export default Burger;