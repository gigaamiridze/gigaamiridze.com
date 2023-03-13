import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SocialIcons, MailBox, Footer } from "../layouts";
import { MainContent } from "../components";

function Root() {
  return (
    <>
      <Header />
      <SocialIcons />
      <MailBox />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  )
}

export default Root;