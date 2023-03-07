import React from "react";
// Importing Components
import ContactContainer from "../containers/ContactContainer";
import { ContactTitle } from "../titles/GreenTitle";
import TouchTitle from "../titles/TouchTitle";
import GreenNumber from "../GreenNumber";
import { Text } from "../Text";
import { SectionButton } from "../Button";

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactTitle>
        <GreenNumber fontSize="12px" marginRight="10px">03.</GreenNumber>
        What’s Next?
      </ContactTitle>
      <TouchTitle>Get In Touch</TouchTitle>
      <Text>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether 
        you have a question or just want to say hi, I’ll try my best to get back to you!
      </Text>
      <a href="mailto:justttfelix@gmail.com" rel="noopener noreferrer">
        <SectionButton type="button">Say Hello</SectionButton>
      </a>
    </ContactContainer>
  )
}

export default Contact;
