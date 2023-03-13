import React from "react";
import uuid from "react-uuid";
import { icons } from "../../data";
import { VerticalBlock, VerticalLine, IconWrapper } from "../../components";

function SocialIcons() {
  return (
    <VerticalBlock orientation="left">
      {icons.map((item) => {
        const { url, icon, title } = item;
        const id = uuid();
        const Icon = icon;

        return (
          <IconWrapper key={id} href={url} target="_blank">
            <Icon title={title} />
          </IconWrapper>
        )
      })}
      <VerticalLine />
    </VerticalBlock>
  )
}

export default SocialIcons;