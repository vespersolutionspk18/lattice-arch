import Header from "./components/Header";
import Slider from "./Homecomponents/Slider"
import Hero from "./Homecomponents/Hero";

import OurServices from "./Homecomponents/OurServices";
import Testimonials from "./Homecomponents/Testimonials";
import Faq from "./Homecomponents/Faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Slider />

    <OurServices />
    <Testimonials />
    <Faq />
    <CTA />
    <Footer />
    </>
  );
}
