import Hero from "../comp/Hero";
import Services from "../comp/Services";
import Gallery from "../comp/Gallery";
import Testimonials from "../comp/Testimonials";
import Contact from "../comp/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
