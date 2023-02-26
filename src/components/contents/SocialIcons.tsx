import React from "react";
// Importing Icons
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
// Importing Components
import VerticalBlock from "../VerticalBlock";
import VerticalLine from "../lines/VerticalLine";
import IconWrapper from "../wrappers/IconWrapper";

function SocialIcons() {
  return (
    <VerticalBlock orientation="left">
      <IconWrapper href="https://github.com/justtfelix" target="_blank">
        <TbBrandGithub title="GitHub" />
      </IconWrapper>
      <IconWrapper href="https://www.linkedin.com/in/giga-amiridze-755340263" target="_blank">
        <FiLinkedin title="LinkedIn" />
      </IconWrapper>
      <IconWrapper href="https://instagram.com/justttfelix" target="_blank">
        <AiOutlineInstagram title="Instagram" />
      </IconWrapper>
      <IconWrapper href="https://twitter.com/justttfelix" target="_blank">
        <RxTwitterLogo title="Twitter" />
      </IconWrapper>
      <IconWrapper href="https://facebook.com/justttfelix" target="_blank">
        <SlSocialFacebook title="Facebook" />
      </IconWrapper>
      <VerticalLine />
    </VerticalBlock>
  )
}

export default SocialIcons;
