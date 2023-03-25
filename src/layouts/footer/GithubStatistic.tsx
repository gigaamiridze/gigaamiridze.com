import React, { useState, useEffect } from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import axios from "axios";
import { User } from "../../interfaces";
import { GitHubStats, FlexBox } from "../../components";

function GithubStatistic() {
  const [user, setUser] = useState({} as User);

  const getUser = async () => {
    const response = await axios.get('https://api.github.com/users/justtfelix');
    const data = await response.data;
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, []);

  const { public_repos } = user;

  return (
    <GitHubStats>
      <FlexBox>
        <RiGitRepositoryLine title="Repositories" fontSize={14} />
        <span style={{ marginLeft: 5 }}>{public_repos}</span>
      </FlexBox>
    </GitHubStats>
  )
}

export default GithubStatistic;