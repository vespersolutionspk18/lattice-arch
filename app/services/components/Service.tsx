'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

// Type definition for a single feature
interface Feature {
  heading: string
  description: string
  imagePath: string
  imageAlt: string
  bulletPoints?: string[]
}

// Props for the Service component
interface ServiceProps {
  features: Feature[]
  sectionTitle?: string
  sectionSubtitle?: string
}

// Animation variants for container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

// Animation variants for feature rows
const rowVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8
    }
  }
}

// Animation variants for content sections
const contentVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2
    }
  }
}

// Animation variants for images
const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3
    }
  }
}

// Animation for alternating rows (reversed)
const contentVariantsReversed: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2
    }
  }
}

const imageVariantsReversed: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3
    }
  }
}

const Service: React.FC<ServiceProps> = ({ 
  features, 
  sectionTitle, 
  sectionSubtitle 
}) => {
  return (
    <motion.div 
      className="flex flex-col gap-12 md:gap-16 lg:gap-24 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Section Header */}
      {(sectionTitle || sectionSubtitle) && (
        <motion.div 
          className="flex flex-col gap-4 md:gap-6 items-center text-center"
          variants={rowVariants}
        >
          {sectionTitle && (
            <motion.div 
              className="w-fit rounded-full border-1 border-[#8a08fc]/40 bg-[radial-gradient(ellipse_at_50%_200%,_#8a08fc_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-4 py-2 text-sm md:text-base text-white/85"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sectionTitle}
            </motion.div>
          )}
          {sectionSubtitle && (
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter w-full md:w-[80%] lg:w-[70%]"
            >
              {sectionSubtitle}
            </motion.h2>
          )}
        </motion.div>
      )}

      {/* Feature Rows */}
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-32">
        {features.slice(0, 4).map((feature, index) => {
          const isEven = index % 2 === 0
          
          return (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
              variants={rowVariants}
            >
              {/* Content Column */}
              <motion.div 
                className={`flex flex-col gap-4 md:gap-6 w-full lg:w-1/2 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
                variants={isEven ? contentVariants : contentVariantsReversed}
              >
                {/* Feature Number Badge */}
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8a08fc]/30 border border-[#8a08fc]/50">
                    <span className="text-[#8a08fc] font-bold text-lg md:text-xl">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="h-[1px] w-12 bg-[#8a08fc]/30" />
                </motion.div>

                {/* Heading */}
                <motion.h3 
                  className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold tracking-tight"
                >
                  {feature.heading}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-base md:text-lg text-white/70 leading-relaxed"
                >
                  {feature.description}
                </motion.p>

                {/* Bullet Points (optional) */}
                {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                  <motion.ul 
                    className="flex flex-col gap-3 mt-2"
                  >
                    {feature.bulletPoints.map((point, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <svg 
                          className="w-5 h-5 text-[#8a08fc] mt-0.5 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-sm md:text-base text-white/60">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>

              {/* Image Column */}
              <motion.div 
                className={`w-full lg:w-1/2 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
                variants={isEven ? imageVariants : imageVariantsReversed}
              >
                <motion.div 
                  className="relative w-full aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-600/10 border border-purple-800/30"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgb(147 51 234 / 0.5)'
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={feature.imagePath}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Service