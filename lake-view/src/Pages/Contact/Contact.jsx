import ContactHero from "../Contact/Hero/ContactHero.jsx";
import VisitInfo from "./VisitInfo/VisitInfo.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import Map from "./Map/Map.jsx";
import Social from "./Social/Social.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import { useRef } from "react";
export default function Contact() {
  const ContactMapSectionRef = useRef(null);
  const ContactFAQSectionRef = useRef(null);

  return (
    <>
      <ContactHero
        ContactMapSectionRef={ContactMapSectionRef}
        ContactFAQSectionRef={ContactFAQSectionRef}
      />
      <VisitInfo />
      <ContactForm />
      <Map id="contact-map" ContactMapSectionRef={ContactMapSectionRef} />
      <Social />
      <FAQ ContactFAQSectionRef={ContactFAQSectionRef} />
    </>
  );
}
