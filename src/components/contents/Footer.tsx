import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../interfaces/user";
// Importing Icons
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiGitCommit } from "react-icons/fi";
// Importing Components
import FooterContainer from "../containers/FooterContainer";
import { Link as GitHubLink } from "../Link";
import GitHubStats from "../GitHubStats";
import { FlexBox } from "../Flex";

function Footer() {
  const [user, setUser] = useState({} as User);

  const fetchUser = async () => {
    const response = await axios.get('https://api.github.com/users/justtfelix');
    const data = await response.data;
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const { html_url, public_repos } = user;

  return (
    <FooterContainer>
      <GitHubLink
        href={`${html_url}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>Built by Giga Amiridze</p>
        <GitHubStats>
          <FlexBox>
            <RiGitRepositoryLine title="Repositories" fontSize={14} />
            <span style={{ marginLeft: 5 }}>{public_repos}</span>
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
