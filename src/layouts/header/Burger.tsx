import React from "react";
import { BurgerProps } from "../../interfaces";
import { logoVariants } from "../../animations";
import { BurgerWrapper, BurgerButton } from "../../components";

function Burger(props: BurgerProps) {
  const { isOpen, toggleMenu } = props;
  const body = document.querySelector("body") as HTMLBodyElement;

  if (isOpen) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "unset";
  }

  return (
    <BurgerWrapper
      onClick={toggleMenu}
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