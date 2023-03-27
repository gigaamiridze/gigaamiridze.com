const fadeIn = (direction: string, position: number = 70, delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? position : direction === "down" ? -position : 0,
      x: direction === "left" ? position : direction === "right" ? -position : 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: delay,
        ease: "circOut",
      },
    },
  }
}

export default fadeIn;