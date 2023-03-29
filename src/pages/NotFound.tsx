import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { tabTitle } from "../utilities";
import { NotFoundContainer, StatusCode, OopsTitle, NotFoundTitle, SectionButton } from "../components";

function NotFound() {
  useEffect(() => {
    tabTitle("Page Not Found | Giga Amiridze");
  }, []);
  
  return (
    <NotFoundContainer>
      <StatusCode>404</StatusCode>
      <OopsTitle>Ooops...</OopsTitle>
      <NotFoundTitle>page not found</NotFoundTitle>
      <Link to="/">
        <SectionButton>Go Home</SectionButton>
      </Link>
    </NotFoundContainer>
  )
}

export default NotFound;