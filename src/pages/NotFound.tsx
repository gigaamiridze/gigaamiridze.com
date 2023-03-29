import React, { useEffect } from "react";
import { tabTitle } from "../utilities";
import { NotFoundContainer, StatusCode, OopsTitle, NotFoundTitle } from "../components";

function NotFound() {
  useEffect(() => {
    tabTitle("Page Not Found | Giga Amiridze");
  }, []);
  
  return (
    <NotFoundContainer>
      <StatusCode>404</StatusCode>
      <OopsTitle>Ooops...</OopsTitle>
      <NotFoundTitle>page not found</NotFoundTitle>
    </NotFoundContainer>
  )
}

export default NotFound;