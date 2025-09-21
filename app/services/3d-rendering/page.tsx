import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CTA from '@/app/components/CTA'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Rendering3DAnimation from '../components/Rendering3DAnimation'
import Faq from '@/app/Homecomponents/Faq'

const page = () => {
  const serviceFaqs = [
    {
      question: "What types of 3D rendering do you offer?",
      answer: "We offer comprehensive 3D rendering services including exterior visualization, interior design renders, architectural walkthroughs, product visualization, and virtual reality experiences. Each render is created with photorealistic quality and attention to detail."
    },
    {
      question: "How long does a 3D rendering project take?",
      answer: "Simple single-room renders typically take 2-3 days, while complex architectural exteriors require 5-7 days. Full property walkthroughs and animations can take 2-3 weeks depending on complexity and number of scenes."
    },
    {
      question: "Can you work from my existing plans?",
      answer: "Yes! We can create 3D renders from various sources including CAD files, hand-drawn sketches, floor plans, or even rough ideas. Our team will work with whatever materials you have to bring your vision to life."
    },
    {
      question: "What resolution and formats do you provide?",
      answer: "We deliver ultra-high resolution renders up to 8K for print materials. Standard deliverables include JPEG/PNG for presentations, TIFF for print, and we can provide 360° panoramic views or VR-ready files upon request."
    },
    {
      question: "Can I request changes after seeing the initial render?",
      answer: "Absolutely! Our standard package includes 2 rounds of revisions. This covers changes to materials, colors, lighting, camera angles, and minor architectural adjustments. We work closely with you to ensure complete satisfaction."
    },
    {
      question: "Do you offer animation and virtual tours?",
      answer: "Yes, we create cinematic animations and interactive virtual tours. These include camera fly-throughs, 360° tours, and VR experiences that allow clients to explore spaces before they're built."
    }
  ]

  const serviceFeatures = [
    {
      heading: "Photorealistic Exterior Renders",
      description: "Transform your architectural plans into stunning visual masterpieces. Our exterior renders showcase your building in its future environment with accurate lighting, realistic materials, and atmospheric effects that bring your vision to life before construction begins.",
      imagePath: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Photorealistic 3D render of modern building exterior",
      bulletPoints: [
        "Day, dusk, and night lighting scenarios",
        "Seasonal variations and weather conditions",
        "Landscaping and environment integration",
        "Accurate shadow and reflection studies",
        "Multiple camera angles and perspectives"
      ]
    },
    {
      heading: "Immersive Interior Visualization",
      description: "Step inside your future space with our detailed interior renders. We create warm, inviting visualizations that capture the essence of your design, from furniture placement to material textures, helping clients experience the ambiance before making decisions.",
      imagePath: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop",
      imageAlt: "High-quality 3D interior render of modern living space",
      bulletPoints: [
        "Realistic furniture and decor placement",
        "Advanced lighting and mood settings",
        "Material and texture accuracy",
        "Multiple design options and variations",
        "Virtual staging for empty spaces"
      ]
    },
    {
      heading: "Interactive 3D Walkthroughs",
      description: "Go beyond static images with dynamic walkthroughs that let viewers explore every corner of your design. Our interactive presentations provide an immersive experience, allowing clients to navigate spaces at their own pace and truly understand the flow.",
      imagePath: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "3D architectural walkthrough visualization",
      bulletPoints: [
        "Smooth camera animations and transitions",
        "Interactive navigation controls",
        "Virtual reality compatibility",
        "Real-time material switching",
        "Embedded information hotspots"
      ]
    },
    {
      heading: "Advanced Lighting Studies",
      description: "Understand how natural and artificial light will interact with your space throughout the day and year. Our lighting analysis helps optimize window placement, material selection, and artificial lighting design for maximum comfort and energy efficiency.",
      imagePath: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "3D render showing advanced lighting analysis",
      bulletPoints: [
        "Sun path and shadow analysis",
        "Natural light optimization",
        "Artificial lighting design",
        "Energy efficiency visualization",
        "Seasonal lighting variations"
      ]
    }
  ]

  return (
    <>
      <Header />
      <Hero 
        pillText="Photorealistic 3D Visualization"
        headingText="Bring Your Designs to"
        headingHighlight="Life"
        description="Experience the power of photorealistic 3D rendering that transforms architectural concepts into stunning visual realities. Our advanced visualization technology creates immersive experiences that help clients see, feel, and understand spaces before they're built."
        buttonText="View Portfolio"
        buttonRoute="/portfolio"
        rightContent={<Rendering3DAnimation />}
      />
      <Service
        sectionTitle="3D Rendering Services"
        sectionSubtitle="From concept to photorealistic visualization, we bring your architectural dreams to life"
        features={serviceFeatures}
      />
      <Faq 
        faqs={serviceFaqs}
        title="3D Rendering FAQs"
        subtitle="Everything you need to know about our visualization services"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default page