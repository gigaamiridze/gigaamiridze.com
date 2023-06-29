import { fadeIn } from "../../animations";
import { useMenu } from "../../contexts";
import { ResumeBtnWrapper, ResumeBtn } from "../../components";

function ResumeButton() {
  const { setIsOpen } = useMenu();
  const _ = undefined;

  return (
    <ResumeBtnWrapper
      href="/my-resume.pdf"
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => setIsOpen(false)}
    >
      <ResumeBtn
        type="button"
        variants={fadeIn("down", _, 0.6)}
        initial="hidden"
        animate="visible"
      >
        Resume
      </ResumeBtn>
    </ResumeBtnWrapper>
  )
}

export default ResumeButton;