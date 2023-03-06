import React from "react";
// Importing Components
import Header from "./Header";
import SocialIcons from "./SocialIcons";
import MailBox from "./MailBox";
import MainContent from "../MainContent";
import Sections from "../sections/Sections";
import Footer from "./Footer";

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
