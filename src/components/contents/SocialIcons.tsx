import React from "react";
import { icons } from "../../data/icons";
// Importing Components
import VerticalBlock from "../VerticalBlock";
import VerticalLine from "../lines/VerticalLine";
import IconWrapper from "../wrappers/IconWrapper";

function SocialIcons() {
  return (
    <VerticalBlock orientation="left">
      {icons.map((item, index) => {
        const { url, icon, title } = item;
        const Icon = icon;

        return (
          <IconWrapper key={index} href={url} target="_blank">
            <Icon title={title} />
          </IconWrapper>
        )
      })}
      <VerticalLine />
    </VerticalBlock>
  )
}

export default SocialIcons;
