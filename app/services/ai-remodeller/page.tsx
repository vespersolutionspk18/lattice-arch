import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CTA from '@/app/components/CTA'
import Hero from '../components/Hero'
import Service from '../components/Service'
import AIAnimation from '../components/AIAnimation'
import Faq from '@/app/Homecomponents/Faq'

const page = () => {
  const serviceFaqs = [
    {
      question: "How does AI-powered remodeling work?",
      answer: "Our AI analyzes your existing space using photos and measurements, then generates multiple design options based on your preferences, budget, and architectural constraints. It considers factors like structural integrity, building codes, and optimal space utilization."
    },
    {
      question: "What makes AI remodeling different from traditional design?",
      answer: "AI can generate hundreds of design variations in minutes, optimize for multiple factors simultaneously, and learn from millions of successful projects. This means faster turnaround, more options, and data-driven decisions that maximize both aesthetics and functionality."
    },
    {
      question: "Can the AI work with my specific style preferences?",
      answer: "Absolutely! Our AI is trained on diverse architectural styles from modern minimalist to traditional designs. You can upload inspiration images, select style preferences, and the AI will generate designs that match your aesthetic vision while optimizing functionality."
    },
    {
      question: "How accurate are the AI-generated designs?",
      answer: "Our AI maintains 95%+ accuracy in spatial calculations and structural feasibility. All designs are reviewed by our expert architects to ensure they meet building codes and practical requirements before final delivery."
    },
    {
      question: "Can I modify AI-generated designs?",
      answer: "Yes! The AI designs are fully customizable. You can request specific changes, and the AI will regenerate designs incorporating your feedback. Our architects can also make manual adjustments to perfect the final design."
    },
    {
      question: "What do I need to get started with AI remodeling?",
      answer: "Simply provide photos of your current space, basic measurements, your budget range, and style preferences. Our AI will handle the rest, generating multiple design options within 24-48 hours."
    }
  ]

  const serviceFeatures = [
    {
      heading: "Intelligent Space Optimization",
      description: "Our AI analyzes your space with unprecedented precision, identifying opportunities for improvement that human designers might miss. It considers traffic flow, natural light, storage needs, and lifestyle patterns to create layouts that maximize every square foot.",
      imagePath: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "AI-optimized space layout visualization",
      bulletPoints: [
        "Multi-factor optimization algorithms",
        "Traffic flow and ergonomics analysis",
        "Storage maximization strategies",
        "Natural light optimization",
        "Future adaptability planning"
      ]
    },
    {
      heading: "Instant Design Variations",
      description: "Generate hundreds of design options in minutes, not weeks. Our AI explores countless possibilities, presenting you with the best solutions that match your criteria. Compare different layouts, styles, and configurations side-by-side to make informed decisions.",
      imagePath: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
      imageAlt: "Multiple AI-generated design variations",
      bulletPoints: [
        "Unlimited design iterations",
        "Real-time style adjustments",
        "Side-by-side comparisons",
        "Cost-optimized variations",
        "Instant visualization updates"
      ]
    },
    {
      heading: "Smart Cost Estimation",
      description: "Get accurate cost estimates powered by real-time market data and historical project information. Our AI breaks down costs by materials, labor, and timeline, helping you make budget-conscious decisions without sacrificing quality or design vision.",
      imagePath: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "AI cost analysis and estimation dashboard",
      bulletPoints: [
        "Real-time material pricing",
        "Labor cost calculations",
        "Budget optimization suggestions",
        "Cost-benefit analysis",
        "Alternative material recommendations"
      ]
    },
    {
      heading: "Predictive Trend Analysis",
      description: "Stay ahead of design trends with AI that analyzes millions of projects and predicts future preferences. Our system ensures your remodel not only looks great today but maintains its appeal and value for years to come.",
      imagePath: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "AI trend analysis and prediction visualization",
      bulletPoints: [
        "Future trend predictions",
        "Resale value optimization",
        "Timeless design recommendations",
        "Regional preference analysis",
        "Sustainability scoring"
      ]
    }
  ]

  return (
    <>
      <Header />
      <Hero 
        pillText="AI-Powered Design Revolution"
        headingText="Remodel Smarter with"
        headingHighlight="Artificial Intelligence"
        description="Harness the power of cutting-edge AI to transform your space. Our intelligent remodeling system analyzes millions of successful projects to generate optimal designs tailored to your unique needs, style, and budget in record time."
        buttonText="Try AI Remodeller"
        buttonRoute="/contact"
        rightContent={<AIAnimation />}
      />
      <Service
        sectionTitle="AI Remodelling Features"
        sectionSubtitle="Experience the future of home renovation with intelligent design solutions"
        features={serviceFeatures}
      />
      <Faq 
        faqs={serviceFaqs}
        title="AI Remodeller FAQs"
        subtitle="Learn how artificial intelligence revolutionizes the remodeling process"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default page