import React from "react";
import { sectionVariants } from "../animations";
import { 
  ContactContainer, ContactTitle, TouchTitle,
  ContactGreenNumber, Text, SectionButton 
} from "../components";

function Contact() {
  return (
    <ContactContainer 
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <ContactTitle>
        <ContactGreenNumber>05.</ContactGreenNumber>
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