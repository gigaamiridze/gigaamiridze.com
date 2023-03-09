import React from "react";
// Importing Components
import { Header, SocialIcons, MailBox, Footer } from "../layouts";
import { MainContent } from "../components";
import { Sections } from "../sections";

function Portfolio() {
  return (
    <>
      <Header />
      <SocialIcons />
      <MailBox />
      <MainContent>
        <Sections />
      </MainContent>
      <Footer />
    </>
  )
}

export default Portfolio;
