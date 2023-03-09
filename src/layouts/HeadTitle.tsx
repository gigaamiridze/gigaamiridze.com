import React from "react";
import { HeadTitleProps } from "../interfaces";
// Importing Components
import { FlexBox, GreenNumber, SectionTitle, HorizontalLine } from "../components";

function HeadTitle(props: HeadTitleProps) {
  const { queueNumber, title } = props;

  return (
    <FlexBox>
      <GreenNumber fontSize="18px" marginRight="10px">0{queueNumber}.</GreenNumber>
      <SectionTitle>{title}</SectionTitle>
      <HorizontalLine />
    </FlexBox>
  )
}

export default HeadTitle;
