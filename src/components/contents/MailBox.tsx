import React from "react";
// Importing Components
import VerticalBlock from "../VerticalBlock";
import VerticalLine from "../lines/VerticalLine";
import { MailLink } from "../Link";

function MailBox() {
  return (
    <VerticalBlock orientation="right">
      <MailLink href="mailto:justttfelix@gmail.com">justttfelix@gmail.com</MailLink>
      <VerticalLine />
    </VerticalBlock>
  )
}

export default MailBox;
