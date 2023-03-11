import React from "react";
// Importing Components
import { VerticalBlock, VerticalLine, MailLink } from "../../components";

function MailBox() {
  return (
    <VerticalBlock orientation="right">
      <MailLink href="mailto:justttfelix@gmail.com" rel="noopener noreferrer">
        justttfelix@gmail.com
      </MailLink>
      <VerticalLine />
    </VerticalBlock>
  )
}

export default MailBox;
