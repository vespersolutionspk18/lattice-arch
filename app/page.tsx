import Header from "./components/Header";
import Slider from "./Homecomponents/Slider"
import Hero from "./Homecomponents/Hero";

import OurServices from "./Homecomponents/OurServices";
import Testimonials from "./Homecomponents/Testimonials";
import Faq from "./Homecomponents/Faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ProjectsMarquee from "./Homecomponents/ProjectsMarquee";
import Comparison from "./Homecomponents/Comparison";



export default function Home() {
  return (
    <>
    <Header />
    <Hero />

    <ProjectsMarquee />
    <Comparison />
    <OurServices />

    <Testimonials />
    <Faq />
    <CTA />
    
    <Footer />
    </>
  );
}
