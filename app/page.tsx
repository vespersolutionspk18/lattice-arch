'use client'

import { useEffect } from 'react'
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

const homeFaqs = [
  {
    question: "What architectural services do you offer?",
    answer: "We provide comprehensive architectural solutions including layout and elevation design, 3D rendering, AI-powered remodeling, construction management, material sourcing through our showroom, and CRM solutions for contractors. Our services cover projects from initial concept through to completion."
  },
  {
    question: "How does the AI Remodeller work?",
    answer: "Our AI Remodeller uses advanced algorithms to analyze your space and provide intelligent design suggestions. It can generate multiple layout options, optimize space utilization, and create photorealistic visualizations of proposed changes, helping you make informed decisions before any physical work begins."
  },
  {
    question: "What's included in the CRM for contractors?",
    answer: "Our CRM system is specifically designed for contractors and remodellers, featuring client management, project tracking, automated scheduling, invoice generation, material ordering integration, and team collaboration tools. Plus, you get a free professional website when you purchase our CRM package."
  },
  {
    question: "Do you work on both residential and commercial projects?",
    answer: "Yes, we handle both residential and commercial projects of all scales. From single-family homes and apartment complexes to office buildings and retail spaces, our team has the expertise to deliver exceptional architectural solutions tailored to your specific needs."
  },
  {
    question: "How long does a typical design project take?",
    answer: "Project timelines vary based on scope and complexity. A basic residential design typically takes 2-4 weeks, while complex commercial projects may require 2-3 months. We provide detailed timelines during the initial consultation and keep you updated throughout the process."
  },
  {
    question: "Can I see materials in person before making decisions?",
    answer: "Absolutely! Our material showroom features an extensive collection of premium building materials, finishes, and fixtures. You can schedule a visit to see and feel materials in person, and our experts will help you select options that match your vision and budget."
  }
]

export default function Home() {
  useEffect(() => {
    // Check if there's a hash in the URL to scroll to
    if (window.location.hash === '#services') {
      setTimeout(() => {
        document.getElementById('services here')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <>
    <Header />
    <Hero />

    <ProjectsMarquee />
    <Comparison />
    <OurServices />

    <Testimonials />
    <Faq 
      faqs={homeFaqs}
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our architectural services and process"
    />
    <CTA />
    
    <Footer />
    </>
  );
}
