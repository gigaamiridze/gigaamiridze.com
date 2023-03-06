import React, { useEffect, useState } from "react";
import axios from "axios";
// Importing Icons
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiGitCommit } from "react-icons/fi";
// Importing Components
import FooterContainer from "../containers/FooterContainer";
import { Link as GitHubLink } from "../Link";
import GitHubStats from "../GitHubStats";
import { FlexBox } from "../Flex";

function Footer() {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const response = await axios.get('https://api.github.com/users/justtfelix');
    const data = await response.data;
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

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
