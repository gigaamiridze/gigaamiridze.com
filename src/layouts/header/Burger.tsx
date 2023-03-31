import React from "react";
import { BurgerProps } from "../../interfaces";
import { logoVariants } from "../../animations";
import { BurgerWrapper, BurgerButton } from "../../components";

function Burger(props: BurgerProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <BurgerWrapper
      onClick={() => setIsOpen(!isOpen)}
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <BurgerButton isOpen={isOpen}>
        <span />
        <span />
        <span />
      </BurgerButton>
    </BurgerWrapper>
  )
}

export default Burger;