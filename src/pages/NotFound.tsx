import React, { useEffect } from "react";
import { tabTitle } from "../utilities";
import { NotFoundContainer, StatusCode } from "../components";

function NotFound() {
  useEffect(() => {
    tabTitle("Page Not Found | Giga Amiridze");
  }, []);
  
  return (
    <NotFoundContainer>
      <StatusCode>404</StatusCode>
    </NotFoundContainer>
  )
}

export default NotFound;