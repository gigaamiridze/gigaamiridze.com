import React from "react";
import { useMousePosition } from "../../hooks";
import { Cursor } from "../../components";

function AnimatedCursor() {
  const mousePosition = useMousePosition();

  const cursorVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        ease: "backOut",
      },
    },
  }

  return (
    <Cursor
      variants={cursorVariants}
      animate="default"
    >
      <div className="inner" />
    </Cursor>
  )
}

export default AnimatedCursor;