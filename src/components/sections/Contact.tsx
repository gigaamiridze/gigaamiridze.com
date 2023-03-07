import React from "react";
// Importing Components
import ContactContainer from "../containers/ContactContainer";
import GreenNumber from "../GreenNumber";
import { ContactTitle } from "../titles/GreenTitle";

function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>
        <GreenNumber fontSize="12px" marginRight="10px">03.</GreenNumber>
        What’s Next?
      </ContactTitle>
    </ContactContainer>
  )
}

export default Contact;
