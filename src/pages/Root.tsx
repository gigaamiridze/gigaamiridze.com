import { Outlet } from "react-router-dom";
import { Header, ScrollToTop, SocialIcons, MailBox, Footer } from "../layouts";
import { MainContent } from "../components";

function Root() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <SocialIcons isFooterPart={false}/>
      <MailBox />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  )
}

export default Root;