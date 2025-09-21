'use client'
import React, { useState } from 'react'
import { motion, Variants, AnimatePresence } from 'motion/react'
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      delay: i * 0.1
    }
  })
}

const FaqItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
  return (
    <motion.div 
      className="border border-stone-900 last:border-0 px-5 rounded-3xl gap-5 mt-5 shadow-lg shadow-purple-500/12"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
    >
      <motion.button
        onClick={onClick}
        className="w-full py-4 md:py-5 lg:py-6 flex justify-between items-center text-left hover:text-white transition-colors"
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-base md:text-lg lg:text-xl text-white/85 font-light pr-4 md:pr-6 lg:pr-8">{question}</h3>
       
          <div className="flex items-center justify-center rounded-full p-1 shadow-lg shadow-purple-500/28">
             <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        ><ChevronDown 
            className="text-white/60 flex-shrink-0"
            size={20} 
          /></motion.div>
            
          </div>
       
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="overflow-hidden"
          >
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-stone-400 leading-relaxed pb-4 md:pb-5 lg:pb-6"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.div 
      className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-10 w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
       className="w-fit rounded-full border-1 border-purple-900/65 bg-[radial-gradient(ellipse_at_50%_200%,_#4c1d95_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85"
        variants={titleVariants}
        whileHover={{ scale: 1.05 }}
      >
        Frequently Asked Questions
      </motion.div>
      <motion.h5 
        className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter w-full md:w-[80%] lg:w-[66%]"
        variants={titleVariants}
      >
        Everything you need to know about our architectural services and process
      </motion.h5>
      <motion.div 
        className="w-full md:w-[85%] lg:w-[66%] mt-4 md:mt-6 lg:mt-8"
        variants={containerVariants}
      >
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Faq
