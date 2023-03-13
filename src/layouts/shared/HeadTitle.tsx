import React from "react";
import { HeadTitleProps } from "../../interfaces";
import { SectionTitleBox, GreenNumber, SectionTitle, HorizontalLine } from "../../components";

function HeadTitle(props: HeadTitleProps) {
  const { queueNumber, title } = props;

  return (
    <SectionTitleBox>
      <GreenNumber fontSize="18px" marginRight="10px">0{queueNumber}.</GreenNumber>
      <SectionTitle>{title}</SectionTitle>
      <HorizontalLine />
    </SectionTitleBox>
  )
}

export default HeadTitle;