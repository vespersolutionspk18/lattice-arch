import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CTA from '@/app/components/CTA'
import Hero from '../components/Hero'
import Service from '../components/Service'
import FloorPlanAnimation from '../components/FloorPlanAnimation'
import Faq from '@/app/Homecomponents/Faq'

const page = () => {
  const serviceFaqs = [
    {
      question: "How long does it take to create floor plans and elevations?",
      answer: "Typically, basic floor plans take 3-5 business days, while comprehensive packages with 3D elevations and structural drawings require 7-10 business days. Complex commercial projects may take 2-3 weeks depending on scope and revisions."
    },
    {
      question: "What information do you need to start designing?",
      answer: "We need your plot dimensions, desired number of rooms, budget range, style preferences, and any specific requirements. If you have existing sketches or reference images, those are helpful too. We'll guide you through our detailed consultation process."
    },
    {
      question: "Can you modify existing floor plans?",
      answer: "Absolutely! We can redesign, optimize, or update your existing floor plans. Whether you need minor adjustments or complete reimagining, our team can work with your current blueprints to create improved versions."
    },
    {
      question: "Do your plans meet local building codes?",
      answer: "Yes, all our designs are created following standard building codes and regulations. However, we recommend having them reviewed by local authorities as codes can vary by location. We can also coordinate with local architects for area-specific compliance."
    },
    {
      question: "What file formats do you provide?",
      answer: "We deliver designs in multiple formats including PDF for easy viewing and printing, CAD files (DWG/DXF) for technical use, high-resolution images for presentations, and 3D model files for visualization software."
    },
    {
      question: "How many revisions are included?",
      answer: "Our standard package includes 3 rounds of revisions. This ensures your design perfectly matches your vision. Additional revisions can be accommodated for a nominal fee. We work closely with you throughout the process to minimize revision needs."
    }
  ]

  const serviceFeatures = [
    {
      heading: "Precision-Engineered Floor Plans",
      description: "Our floor plans go beyond basic layouts. We create detailed, scaled drawings that consider every aspect of spatial flow, natural light optimization, and functional living. Each plan is meticulously crafted to maximize usable space while maintaining aesthetic appeal and structural integrity.",
      imagePath: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      imageAlt: "Detailed architectural floor plan with measurements and annotations",
      bulletPoints: [
        "Accurate room dimensions and square footage calculations",
        "Optimized traffic flow and circulation patterns",
        "Detailed electrical and plumbing layouts",
        "Furniture placement recommendations",
        "Building code compliance verification"
      ]
    },
    {
      heading: "Stunning 3D Front Elevations",
      description: "Transform flat blueprints into vivid, photorealistic 3D elevations that showcase your building's exterior from every angle. Our advanced rendering technology creates lifelike visualizations that help you see exactly how your project will look upon completion, including materials, textures, and landscaping.",
      imagePath: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      imageAlt: "Modern house 3D elevation rendering with realistic materials",
      bulletPoints: [
        "Photorealistic material rendering and textures",
        "Multiple viewing angles and perspectives",
        "Day and night lighting variations",
        "Landscaping and environment integration",
        "Material and color scheme options"
      ]
    },
    {
      heading: "Comprehensive Structural Drawings",
      description: "Every great design needs solid bones. Our structural drawings provide complete technical documentation for builders and contractors, ensuring your vision is executed flawlessly. We detail every beam, column, and foundation element with precision, guaranteeing structural integrity and longevity.",
      imagePath: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Detailed structural engineering drawings and blueprints",
      bulletPoints: [
        "Complete foundation and footing details",
        "Load-bearing wall specifications",
        "Beam and column placement drawings",
        "Roof framing and truss layouts",
        "Seismic and wind resistance calculations"
      ]
    },
    {
      heading: "Intelligent Space Optimization",
      description: "Using advanced algorithms and design principles, we analyze and optimize every square foot of your floor plan. Our intelligent space planning ensures maximum functionality while maintaining beautiful aesthetics, creating homes that are both practical and inspiring to live in.",
      imagePath: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Space optimization diagram showing efficient room layouts",
      bulletPoints: [
        "AI-powered space utilization analysis",
        "Multi-functional room design options",
        "Storage optimization strategies",
        "Natural light and ventilation studies",
        "Future expansion possibilities"
      ]
    }
  ]

  return (
    <>
      <Header />
      <Hero 
        pillText="Professional Architectural Design"
        headingText="Transform Your Vision into"
        headingHighlight="Stunning Reality"
        description="Experience the art of architectural excellence with our comprehensive floor plans and front elevation services. We create meticulously crafted designs that optimize every square foot while bringing your dream spaces to life with 3D elevation rendering, detailed structural drawings, and material specifications tailored to your unique requirements."
        buttonText="Start Your Project"
        buttonRoute="/contact"
        rightContent={<FloorPlanAnimation />}
      />
      <Service
        sectionTitle="Our Process"
        sectionSubtitle="From initial concept to final blueprints, we handle every aspect of architectural design with precision and creativity"
        features={serviceFeatures}
      />
      <Faq 
        faqs={serviceFaqs}
        title="Floor Plans & Elevation FAQs"
        subtitle="Common questions about our architectural design services"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default page
