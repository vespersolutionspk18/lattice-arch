import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CTA from '@/app/components/CTA'
import Hero from '../components/Hero'
import Service from '../components/Service'
import CRMAnimation from '../components/CRMAnimation'
import Faq from '@/app/Homecomponents/Faq'

const page = () => {
  const serviceFaqs = [
    {
      question: "What makes this CRM specific to contractors?",
      answer: "Our CRM is built from the ground up for construction professionals. It includes features like material tracking, subcontractor management, permit tracking, change order management, and construction-specific invoicing that generic CRMs don't offer."
    },
    {
      question: "How easy is it to set up and get started?",
      answer: "Setup takes less than 24 hours. We handle the initial configuration, import your existing data, and provide personalized training. Most contractors are fully operational within 3 days with our dedicated onboarding support."
    },
    {
      question: "Can I access the CRM from job sites?",
      answer: "Yes! Our mobile app works offline and online, allowing you to update projects, capture photos, log time, and access client information from anywhere. Changes sync automatically when you reconnect to the internet."
    },
    {
      question: "Does it integrate with my existing tools?",
      answer: "Our CRM integrates with popular accounting software (QuickBooks, Xero), email platforms, calendar systems, and supplier databases. We also offer API access for custom integrations with your specific tools."
    },
    {
      question: "What's included in the monthly subscription?",
      answer: "The $199/month includes unlimited users, projects, and clients, 100GB cloud storage, mobile apps, automated backups, regular updates, email support, and a free professional website with hosting."
    },
    {
      question: "Is my data secure and backed up?",
      answer: "Absolutely. We use bank-level 256-bit encryption, automated daily backups with 90-day retention, and secure cloud hosting with 99.9% uptime. Your data is always protected and accessible when you need it."
    }
  ]

  const serviceFeatures = [
    {
      heading: "Complete Client Management",
      description: "Keep all client information organized in one place. Track communication history, project preferences, payment records, and important documents. Our intelligent system reminds you of follow-ups and helps nurture relationships for repeat business.",
      imagePath: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "CRM client management dashboard interface",
      bulletPoints: [
        "Comprehensive client profiles and history",
        "Automated follow-up reminders",
        "Document and contract storage",
        "Communication tracking across channels",
        "Lead scoring and pipeline management"
      ]
    },
    {
      heading: "Smart Project Tracking",
      description: "Monitor every aspect of your projects from initial quote to final payment. Our visual dashboards show project progress, budget status, and resource allocation at a glance, helping you deliver on time and within budget.",
      imagePath: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      imageAlt: "Project management and tracking dashboard",
      bulletPoints: [
        "Gantt charts and timeline visualization",
        "Budget tracking and cost overrun alerts",
        "Subcontractor and crew scheduling",
        "Material ordering and inventory tracking",
        "Progress photos and documentation"
      ]
    },
    {
      heading: "Automated Invoicing & Payments",
      description: "Streamline your billing process with automated invoice generation, payment tracking, and integrated payment processing. Send professional invoices instantly, track payments, and reduce time spent on administrative tasks by 70%.",
      imagePath: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
      imageAlt: "Automated invoicing and payment processing",
      bulletPoints: [
        "One-click invoice generation",
        "Online payment acceptance",
        "Automated payment reminders",
        "Progress billing and retainage tracking",
        "Financial reporting and analytics"
      ]
    },
    {
      heading: "Mobile-First Field Management",
      description: "Empower your field teams with powerful mobile tools. Update project status, log hours, capture photos, and access critical information from any job site. Works offline and syncs automatically when connected.",
      imagePath: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Mobile CRM app for field management",
      bulletPoints: [
        "Offline-capable mobile apps",
        "Time and attendance tracking",
        "Photo and video documentation",
        "Digital forms and inspections",
        "Real-time team communication"
      ]
    }
  ]

  return (
    <>
      <Header />
      <Hero 
        pillText="Built for Contractors"
        headingText="Manage Your Business"
        headingHighlight="Effortlessly"
        description="The all-in-one CRM solution designed specifically for contractors and remodelers. Streamline your operations, win more projects, and grow your business with tools that understand the unique challenges of construction."
        buttonText="Start Free Trial"
        buttonRoute="/contact"
        rightContent={<CRMAnimation />}
      />
      <Service
        sectionTitle="CRM Features"
        sectionSubtitle="Everything you need to run your contracting business efficiently"
        features={serviceFeatures}
      />
      <Faq 
        faqs={serviceFaqs}
        title="CRM FAQs"
        subtitle="Common questions about our contractor management system"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default page