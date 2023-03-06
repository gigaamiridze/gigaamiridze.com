import React from "react";
// Importing Icons
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiGitCommit } from "react-icons/fi";
// Importing Components
import FooterContainer from "../containers/FooterContainer";
import { Link as GitHubLink } from "../Link";
import GitHubStats from "../GitHubStats";
import { FlexBox } from "../Flex";

function Footer() {
  return (
    <FooterContainer>
      <GitHubLink
        href="https://github.com/justtfelix"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>Built by Giga Amiridze</p>
        <GitHubStats>
          <FlexBox>
            <RiGitRepositoryLine title="Repositories" fontSize={14} />
            <span style={{ marginLeft: 5 }}>43</span>
          </FlexBox>
          <FlexBox>
            <FiGitCommit title="Commits" fontSize={14} />
            <span style={{ marginLeft: 5 }}>241</span>
          </FlexBox>
        </GitHubStats>
      </GitHubLink>
    </FooterContainer>
  )
}

export default Footer;
