import React from "react";
// Importing Components
import VerticalBlock from "./VerticalBlock";
import VerticalLine from "./VerticalLine";
import MailLink from "./MailLink";

function MailBox() {
  return (
    <VerticalBlock orientation="right">
      <MailLink href="mailto:justttfelix@gmail.com">justttfelix@gmail.com</MailLink>
      <VerticalLine />
    </VerticalBlock>
  )
}

export default MailBox;
