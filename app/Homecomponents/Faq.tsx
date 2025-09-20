'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
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

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-stone-800 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:text-white transition-colors"
      >
        <h3 className="text-xl text-white/85 font-light pr-8">{question}</h3>
        <ChevronDown 
          className={`text-white/60 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-lg text-stone-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col justify-between lg:gap-10 gap-5 w-full lg:px-16 px-5 lg:py-16 py-10 items-center">
      <div className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-4 py-2 text-lg text-white/85">
        Frequently Asked Questions
      </div>
      <h5 className="text-center text-5xl text-white/85 font-semibold tracking-tighter lg:w-[66%] w-full">
        Everything you need to know about our architectural services and process
      </h5>
      <div className="lg:w-[66%] w-full mt-8">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Faq
