import React from "react";
// Importing Components
import Header from "./Header";
import SocialIcons from "./SocialIcons";
import MailBox from "./MailBox";
import MainContent from "../MainContent";
import Sections from "../sections/Sections";

function Portfolio() {
  return (
    <>
      <Header />
      <SocialIcons />
      <MailBox />
      <MainContent>
        <Sections />
      </MainContent>
    </>
  )
}

export default Portfolio;
