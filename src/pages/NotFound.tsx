import React, { useEffect } from "react";
import { tabTitle } from "../utilities";

function NotFound() {
  useEffect(() => {
    tabTitle("Page Not Found | Giga Amiridze");
  }, []);
  
  return (
    <>Page Not Found!</>
  )
}

export default NotFound;