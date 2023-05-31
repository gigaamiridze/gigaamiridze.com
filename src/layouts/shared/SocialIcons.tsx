import { icons } from "../../data";
import { SocialIconsProps } from "../../interfaces";
import { verticalBlockVariants } from "../../animations";
import { VerticalBlock, VerticalLine, IconWrapper } from "../../components";

function SocialIcons(props: SocialIconsProps) {
  const { isFooterPart } = props;

  return (
    <VerticalBlock 
      orientation="left"
      isFooterPart={isFooterPart}
      variants={verticalBlockVariants}
      initial="hidden"
      animate="visible"
    >
      {icons.map((item) => {
        const { id, url, icon, title } = item;
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