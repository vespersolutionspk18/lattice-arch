import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CTA from '@/app/components/CTA'
import Hero from '../components/Hero'
import Service from '../components/Service'
import MaterialShowroomAnimation from '../components/MaterialShowroomAnimation'
import Faq from '@/app/Homecomponents/Faq'

const page = () => {
  const serviceFaqs = [
    {
      question: "What types of materials are available in your showroom?",
      answer: "Our extensive showroom features flooring (hardwood, tile, vinyl, carpet), countertops (granite, quartz, marble), fixtures, hardware, paint, wallpaper, lighting, and sustainable materials. We partner with over 200 premium suppliers to offer thousands of options."
    },
    {
      question: "Can I visit the showroom in person?",
      answer: "Yes! Our showroom is open Monday-Saturday. Schedule an appointment for a personalized consultation with our design experts, or visit during business hours for self-guided browsing. We also offer virtual tours for remote clients."
    },
    {
      question: "Do you offer trade pricing for contractors?",
      answer: "Absolutely! Registered contractors receive exclusive trade pricing with discounts ranging from 20-40% off retail. We also offer volume discounts, priority ordering, and dedicated account management for frequent buyers."
    },
    {
      question: "Can you source specific materials not in your showroom?",
      answer: "Yes, we have extensive supplier networks and can source virtually any material you need. Our sourcing specialists can find specific products, rare materials, or alternatives that match your requirements and budget."
    },
    {
      question: "Do you provide samples?",
      answer: "We offer free samples for most materials. Take home up to 5 samples per visit, or request sample delivery for a nominal fee. Large format samples and sample boards are available for major projects."
    },
    {
      question: "What services come with material purchases?",
      answer: "Every purchase includes expert consultation, accurate quantity calculations, delivery coordination, installation guides, and warranty support. We can also connect you with certified installers and provide project management assistance."
    }
  ]

  const serviceFeatures = [
    {
      heading: "Premium Material Collection",
      description: "Explore thousands of premium materials from leading manufacturers worldwide. Our curated collection features the latest trends alongside timeless classics, ensuring you find the perfect materials to bring your vision to life.",
      imagePath: "https://images.unsplash.com/photo-1609767127760-7a0dc6f45781?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Premium building materials display",
      bulletPoints: [
        "Over 10,000 materials in stock",
        "Exclusive designer collections",
        "Sustainable and eco-friendly options",
        "Latest trends and innovations",
        "Custom ordering available"
      ]
    },
    {
      heading: "Expert Design Consultation",
      description: "Work with our experienced design consultants who understand both aesthetics and technical requirements. They'll help you select materials that not only look beautiful but also perform perfectly for your specific application.",
      imagePath: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      imageAlt: "Design consultation in material showroom",
      bulletPoints: [
        "One-on-one design consultations",
        "Material compatibility guidance",
        "Color and texture coordination",
        "Budget optimization strategies",
        "Technical specification support"
      ]
    },
    {
      heading: "Trade Professional Benefits",
      description: "Special programs designed for contractors, architects, and designers. Enjoy exclusive pricing, priority service, and resources that help you serve your clients better while improving your bottom line.",
      imagePath: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Trade professional reviewing materials",
      bulletPoints: [
        "Exclusive trade discounts",
        "Volume pricing programs",
        "Priority order processing",
        "Extended payment terms",
        "Dedicated account management"
      ]
    },
    {
      heading: "Digital Material Library",
      description: "Access our complete catalog online with high-resolution images, detailed specifications, and real-time availability. Create mood boards, save favorites, and share selections with clients from anywhere.",
      imagePath: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Digital material library interface",
      bulletPoints: [
        "24/7 online catalog access",
        "Virtual mood board creation",
        "3D visualization tools",
        "Real-time inventory tracking",
        "Direct online ordering"
      ]
    }
  ]

  return (
    <>
      <Header />
      <Hero 
        pillText="Premium Materials Hub"
        headingText="Discover Materials That"
        headingHighlight="Inspire"
        description="Step into our expansive showroom where quality meets variety. From luxurious finishes to practical solutions, explore thousands of premium materials with expert guidance to bring your architectural visions to life."
        buttonText="Schedule Visit"
        buttonRoute="/contact"
        rightContent={<MaterialShowroomAnimation />}
      />
      <Service
        sectionTitle="Showroom Services"
        sectionSubtitle="Your one-stop destination for premium building materials and expert guidance"
        features={serviceFeatures}
      />
      <Faq 
        faqs={serviceFaqs}
        title="Material Showroom FAQs"
        subtitle="Everything about our material selection and services"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default page