import Hero from "../comp/Hero";
import Services from "../comp/Services";
import Gallery from "../comp/Gallery";
import Testimonials from "../comp/Testimonials";
import Contact from "../comp/Contact";
import ContactPageMao from "@/comp/ContactPage";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Gallery />
      <Services />
      <ContactPageMao />
      <Contact />
    </>
  );
}
