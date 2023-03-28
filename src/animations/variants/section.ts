const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.3,
      ease: "circOut",
    },
  },
}

export default sectionVariants;