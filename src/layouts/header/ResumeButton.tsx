import React from "react";
import { fadeIn } from "../../animations";
import { ResumeBtnWrapper, ResumeBtn } from "../../components";

function ResumeButton() {
  return (
    <ResumeBtnWrapper
      href="https://drive.google.com/file/d/1le7L2Zs5mk2UsD5Qphx6Ig1Tokq3DYqM/view"
      rel="noopener noreferrer"
      target="_blank"
    >
      <ResumeBtn
        type="button"
        variants={fadeIn("down", 70, 0.6)}
        initial="hidden"
        animate="visible"
      >
        Resume
      </ResumeBtn>
    </ResumeBtnWrapper>
  )
}

export default ResumeButton;