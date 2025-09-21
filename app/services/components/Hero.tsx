'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Button from '../../components/Button'

// Define prop types for the Hero component
interface HeroProps {
  pillText: string
  headingText: string
  headingHighlight?: string
  description: string
  buttonText: string
  buttonRoute: string
  rightContent?: React.ReactNode  // Accept any React component for the right side
  imagePath?: string
  imageAlt?: string
}

// Animation variants for container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

// Animation variants for individual items
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

// Animation variant for the image container
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: 0.4
    }
  }
}

const Hero: React.FC<HeroProps> = ({
  pillText,
  headingText,
  headingHighlight,
  description,
  buttonText,
  buttonRoute,
  rightContent,
  imagePath,
  imageAlt = "Hero Image"
}) => {
  return (
    <div className="relative w-full min-h-screen pt-24 md:pt-12">
      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 w-full min-h-[calc(100vh-3rem)] p-4 md:p-8 lg:p-16 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Column - Content */}
        <motion.div
          className="w-full lg:w-5/12 flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center items-start text-left"
          variants={containerVariants}
        >
          {/* Pill Badge */}
          <motion.div
            className="w-fit rounded-full bg-white/[0.24] backdrop-blur-xl flex items-center justify-center py-1 px-3 text-sm text-white"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {pillText}
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
            variants={itemVariants}
          >
            {headingText}
            {headingHighlight && (
              <>
                {' '}
                <motion.span
                  className="font-serif italic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {headingHighlight}
                </motion.span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base md:text-xl lg:text-2xl text-stone-200 max-w-2xl"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4"
          >
            <Button variant='white' route={buttonRoute}>
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Custom Content or Image */}
        <motion.div
          className="w-full lg:w-7/12 flex items-center justify-center lg:justify-end"
          variants={imageVariants}
        >
          {rightContent ? (
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.4 }}
            >
              {rightContent}
            </motion.div>
          ) : imagePath ? (
            <motion.div
              className="relative w-full max-w-xl aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${imagePath})`,
                }}
              />
              
              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              
              {/* Optional decorative border animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
