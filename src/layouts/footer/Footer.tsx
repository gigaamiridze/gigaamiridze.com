import { FooterContainer, Link as GitHubLink } from "../../components";
import { SocialIcons, GithubStatistic } from "../../layouts";

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons isFooterPart={true} />
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