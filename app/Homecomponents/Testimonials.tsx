'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import { MarqueeDemo } from '../components/Marquee'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
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

const marqueeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const Testimonials = () => {
  return (
     <motion.div 
      className="flex flex-col justify-between lg:gap-10 gap-5 w-full lg:px-16 px-5 lg:py-26 py-10 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
     >
      <motion.div 
        className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-4 py-2 text-lg text-white/85"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Testimonials
      </motion.div>
      <motion.h5 
        className="text-center text-5xl text-white/85 font-semibold tracking-tighter w-[66%]"
        variants={itemVariants}
      >
        Hear from our clients
      </motion.h5>
      <motion.div
        variants={marqueeVariants}
        style={{ width: '100%' }}
      >
        <MarqueeDemo />
      </motion.div>
    </motion.div>
  )
}

export default Testimonials
