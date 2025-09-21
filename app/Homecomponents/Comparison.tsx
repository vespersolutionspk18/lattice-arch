'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import { BorderBeam } from '../components/BorderBeam'
import { FaCheck } from 'react-icons/fa'
import { BsShieldFillCheck } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi'
import LogoTest from '../components/LogoTest'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

const rowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.02,
      type: "spring",
      stiffness: 150
    }
  })
}

const Comparison = () => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  const comparisonData = [
    { 
      others: "Template designs",
      us: "Custom architecture"
    },
    {
      others: "Basic 3D models",
      us: "VR walkthroughs"
    },
    {
      others: "Manual process",
      us: "AI-powered design"
    },
    {
      others: "2-3 weeks wait",
      us: "48-hour delivery"
    },
    {
      others: "2 revisions only",
      us: "Unlimited revisions"
    },
    {
      others: "$5000+ website",
      us: "Free website & CRM"
    },
    {
      others: "Retail pricing",
      us: "Wholesale access"
    },
    {
      others: "9-5 support",
      us: "24/7 support"
    },
    {
      others: "Email only",
      us: "Mobile app"
    },
    {
      others: "No analysis",
      us: "Energy optimization"
    },
    {
      others: "Hidden fees",
      us: "All-inclusive"
    },
    {
      others: "No guarantee",
      us: "Money-back guarantee"
    }
  ]

  return (
    <motion.div 
      className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-7 w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="w-fit rounded-full border-1 border-purple-900/65 bg-[radial-gradient(ellipse_at_50%_200%,_#4c1d95_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        Comparison
      </motion.div>
      
      <motion.h5 
        className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter w-full md:w-[80%] lg:w-[66%]"
        variants={itemVariants}
      >
        Experience the difference between ordinary and extraordinary
      </motion.h5>

      <motion.div 
        className="w-full max-w-4xl relative"
        variants={itemVariants}
      >
        {/* Our Company Card Background */}
        <div 
          className="absolute right-0 top-0 w-[50%] h-full rounded-2xl bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#000000_70%)] border border-purple-900/50 overflow-hidden shadow-2xl shadow-purple-500/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <>
              <BorderBeam
                duration={3}
                size={600}
                delay={0}
                className="from-transparent via-purple-500 to-transparent"
              />
              <BorderBeam
                duration={3}
                delay={1.5}
                size={600}
                borderWidth={2}
                className="from-transparent via-violet-600 to-transparent"
                reverse
              />
            </>
          )}
        </div>

        {/* Table Content */}
        <table className="w-full relative z-10">
          <thead>
            <tr>
              <th className="text-center p-3 w-[50%]">
                <h3 className="text-lg md:text-xl font-medium text-gray-500">Other Agencies</h3>
              </th>
              <th className="w-[50%] py-5 px-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center gap-2">
                    <LogoTest />
                    <h3 className="text-lg md:text-xl font-normal tracking-tighter text-white">
                      Lattice
                    </h3>
                  </div>
                  <span className="mt-1 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold animate-pulse">
                    PREMIUM
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <motion.tr 
                key={index}
                custom={index}
                variants={rowVariants}
                className="hover:bg-white/5 transition-colors"
              >
                <td className="text-center px-3 py-2 align-middle w-[50%]">
                  <p className="text-gray-500 text-sm md:text-base">
                    {item.others}
                  </p>
                </td>
                <td className="text-center px-3 py-3 align-middle w-[50%]">
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.1 + index * 0.02, 
                        type: "spring", 
                        stiffness: 200,
                        damping: 15
                      }}
                      className="flex-shrink-0"
                    >
                      <FaCheck className="text-green-400 text-sm" />
                    </motion.div>
                    <p className="text-white/90 text-sm md:text-base font-semibold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      {item.us}
                    </p>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
}

export default Comparison