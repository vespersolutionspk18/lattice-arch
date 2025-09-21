import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CTA from '@/app/components/CTA'
import Hero from '../components/Hero'
import Service from '../components/Service'
import WebsiteAnimation from '../components/WebsiteAnimation'
import Faq from '@/app/Homecomponents/Faq'

const page = () => {
  const serviceFaqs = [
    {
      question: "Is the website really free?",
      answer: "Yes! When you subscribe to our CRM for Contractors ($199/month), you get a professional website at no additional cost. This includes hosting, domain setup, SSL certificate, and monthly updates."
    },
    {
      question: "What's included in the free website?",
      answer: "You get a fully responsive 5-10 page website with custom design, portfolio gallery, service pages, contact forms, SEO optimization, Google Analytics integration, and social media links. We handle all technical aspects."
    },
    {
      question: "Can I customize the website design?",
      answer: "Absolutely! Choose from our professional templates or work with our designers for custom branding. You can update colors, fonts, images, and content. We provide 2 hours of custom design work monthly as part of the package."
    },
    {
      question: "How quickly can my website go live?",
      answer: "Your website can be live within 48-72 hours of providing content and images. We handle domain setup, hosting configuration, and all technical details. Rush delivery within 24 hours is available upon request."
    },
    {
      question: "What happens if I cancel the CRM subscription?",
      answer: "Your website remains active for 30 days after cancellation, giving you time to migrate. You can also choose to keep the website for $29/month without the CRM, or we'll provide all files for you to host elsewhere."
    },
    {
      question: "Do you provide ongoing support and updates?",
      answer: "Yes! Monthly updates include content changes, image updates, and minor design tweaks. We also handle all security updates, backups, and technical maintenance. Priority support is available via email and phone."
    }
  ]

  const serviceFeatures = [
    {
      heading: "Professional Design Templates",
      description: "Choose from our collection of stunning, contractor-focused templates or get a custom design. Each template is optimized for conversions, mobile-responsive, and built to showcase your work in the best light possible.",
      imagePath: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
      imageAlt: "Professional website design templates",
      bulletPoints: [
        "Industry-specific templates",
        "Custom branding options",
        "Mobile-first responsive design",
        "Fast loading optimized code",
        "Cross-browser compatibility"
      ]
    },
    {
      heading: "Lead Generation Features",
      description: "Convert visitors into clients with powerful lead generation tools. Smart forms, click-to-call buttons, and strategic CTAs are placed throughout your site to maximize inquiries and grow your business.",
      imagePath: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Lead generation and conversion optimization",
      bulletPoints: [
        "Smart contact forms",
        "Quote request systems",
        "Click-to-call buttons",
        "Live chat integration",
        "Lead capture popups"
      ]
    },
    {
      heading: "SEO & Marketing Tools",
      description: "Get found online with built-in SEO optimization and marketing tools. We handle technical SEO, local search optimization, and provide analytics to track your website's performance and visitor behavior.",
      imagePath: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
      imageAlt: "SEO and digital marketing dashboard",
      bulletPoints: [
        "Google Search Console setup",
        "Local SEO optimization",
        "Schema markup implementation",
        "Google Analytics integration",
        "Social media integration"
      ]
    },
    {
      heading: "Portfolio & Project Showcase",
      description: "Display your best work with stunning portfolio galleries. Upload unlimited photos, create project case studies, and showcase before/after transformations that demonstrate your expertise and build trust.",
      imagePath: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Portfolio and project gallery showcase",
      bulletPoints: [
        "Unlimited photo galleries",
        "Before/after sliders",
        "Project case studies",
        "Video integration",
        "Client testimonials"
      ]
    }
  ]

  return (
    <>
      <Header />
      <Hero 
        pillText="Free with CRM Subscription"
        headingText="Professional Website"
        headingHighlight="Included Free"
        description="Get a stunning, professional website absolutely free with our CRM subscription. No hidden fees, no setup costs - just a beautiful online presence that attracts clients and showcases your work, all maintained and updated for you."
        buttonText="Get Your Free Website"
        buttonRoute="/contact"
        rightContent={<WebsiteAnimation />}
      />
      <Service
        sectionTitle="Website Features"
        sectionSubtitle="Everything you need for a powerful online presence, included at no extra cost"
        features={serviceFeatures}
      />
      <Faq 
        faqs={serviceFaqs}
        title="Free Website FAQs"
        subtitle="Learn about our complimentary website offer with CRM subscription"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default page