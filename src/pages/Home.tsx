import { useEffect } from "react";
import { tabTitle } from "../utilities";
import { Hello, About, Experience, Education, Projects, Contact } from "../sections";

function Home() {
  useEffect(() => {
    tabTitle("Giga Amiridze");
  }, []);

  return (
    <>
      <Hello />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;