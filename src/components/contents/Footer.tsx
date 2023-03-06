import React from "react";
// Importing Components
import FooterContainer from "../containers/FooterContainer";
import { Link as GitHubLink } from "../Link";

function Footer() {
  return (
    <FooterContainer>
      <GitHubLink 
        href="https://github.com/justtfelix" 
        rel="noopener noreferrer" 
        target="_blank"
      >
        <p>Built by Giga Amiridze</p>
      </GitHubLink>
    </FooterContainer>
  )
}

export default Footer;
