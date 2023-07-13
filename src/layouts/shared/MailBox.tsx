import { verticalBlockVariants } from "../../animations";
import { VerticalBlock, VerticalLine, MailLink } from "../../components";

function MailBox() {
  return (
    <VerticalBlock 
      orientation="right"
      variants={verticalBlockVariants}
      initial="hidden"
      animate="visible"
    >
      <MailLink href="mailto:gigaamiridze@gmail.com" rel="noopener noreferrer">
        gigaamiridze@gmail.com
      </MailLink>
      <VerticalLine />
    </VerticalBlock>
  )
}

export default MailBox;