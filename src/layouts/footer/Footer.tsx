import React from "react";
import { FooterContainer, Link as GitHubLink } from "../../components";
import GithubStatistic from "./GithubStatistic";

function Footer() {
  return (
    <FooterContainer>
      <GitHubLink
        href="https://github.com/justtfelix"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>Built by Giga Amiridze</p>
        <GithubStatistic />
      </GitHubLink>
    </FooterContainer>
  )
}

export default Footer;