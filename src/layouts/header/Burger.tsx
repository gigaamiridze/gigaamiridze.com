import React from "react";
import { BurgerProps } from "../../interfaces";
import { logoVariants } from "../../animations";
import { BurgerWrapper } from "../../components";

function Burger(props: BurgerProps) {
  const { isOpen, setIsOpen } = props;
  
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