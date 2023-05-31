import { HeadTitleProps } from "../../interfaces";
import { SectionTitleBox, SectionGreenNumber, SectionTitle, HorizontalLine } from "../../components";

function HeadTitle(props: HeadTitleProps) {
  const { queueNumber, title } = props;

  return (
    <SectionTitleBox>
      <SectionGreenNumber>0{queueNumber}.</SectionGreenNumber>
      <SectionTitle>{title}</SectionTitle>
      <HorizontalLine />
    </SectionTitleBox>
  )
}

export default HeadTitle;