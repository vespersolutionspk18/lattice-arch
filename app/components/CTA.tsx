'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'
import Button from '../components/Button'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants: Variants = {
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

const overlayVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const imageVariants: Variants = {
  hidden: { scale: 1.2 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
}

const CTA = () => {
  return (
    <motion.div 
      className="relative w-full lg:px-16 px-5 lg:py-16 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden">
        {/* Background Image */}
        <motion.div
          variants={imageVariants}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
            alt="Modern interior space"
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Centered Dark Overlay Container */}
        <div className="absolute inset-0 flex items-center justify-center p-20">
          <motion.div 
            className="bg-black/70 backdrop-blur-sm rounded-[2rem] w-full h-full flex flex-col items-center justify-center text-center px-12"
            variants={overlayVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl text-white font-semibold tracking-tighter mb-6"
              variants={itemVariants}
            >
              Let&apos;s create a<br />space you&apos;ll love
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/85 mb-10"
              variants={itemVariants}
            >
              We&apos;d love to hear from you. Reach out to discuss your ideas,<br />
              get a quote, or book a consultation.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="white" route="/contact">
                Get a free quote!
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default CTA
