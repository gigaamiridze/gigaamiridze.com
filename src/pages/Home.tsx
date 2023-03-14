import React, { useEffect } from "react";
import { tabTitle } from "../utilities";
import { Hello, About, Projects, Contact } from "../sections";

function Home() {
  useEffect(() => {
    tabTitle("Giga Amiridze");
  }, []);

  return (
    <>
      <Hello />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;