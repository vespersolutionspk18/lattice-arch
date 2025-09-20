import Header from "./components/Header";
import AboutUs from "./Homecomponents/AboutUs";
import Hero from "./Homecomponents/Hero";
import ProjectsMarquee from "./Homecomponents/ProjectsMarquee";
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
    <ProjectsMarquee />
    <AboutUs />
    <OurServices />
    <Testimonials />
    <Faq />
    <CTA />
    <Footer />
    </>
  );
}
