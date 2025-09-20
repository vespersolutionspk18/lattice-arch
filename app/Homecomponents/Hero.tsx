'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Button from '../components/Button'
import Marquee from 'react-fast-marquee'
import Prism from '@/components/Prism'
import { 
  FaApple, 
  FaMicrosoft, 
  FaGoogle, 
  FaAmazon, 
  FaFacebook,
  FaSpotify,
  FaSlack,
  FaLinkedin
} from 'react-icons/fa'

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
}

const Hero = () => {
  return (
    <div className="relative w-full">
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      <motion.div 
        className="relative z-10 flex flex-col lg:flex-row gap-5 lg:gap-10 w-full justify-center p-4 md:p-8 lg:p-16 "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      <motion.div 
        className="w-full lg:w-[50%] flex flex-col  gap-4 md:gap-6 lg:gap-10 justify-between items-center text-center"
        variants={containerVariants}
      >
        <motion.div 
          className="w-fit rounded-full bg-stone-900 flex items-center justify-center py-1 px-3 text-sm text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            #1 in Smart, Stylish Spaces
        </motion.div>
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-7xl"
          variants={itemVariants}
        >
            Crafting Spaces That Match <motion.span 
              className="font-serif italic"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >Your Style</motion.span> and Needs
        </motion.h1>
        <motion.p 
          className="text-base md:text-xl lg:text-2xl text-stone-400"
          variants={itemVariants}
        >
            Building new or upgrading? We craft stylish, inspiring spaces that feel uniquely yours.
        </motion.p>
        <motion.div 
          className="flex flex-row gap-3"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant='white' route='/contact'>Get In Touch</Button>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant='dark' route='/projects'>View Services</Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-full relative"
          variants={itemVariants}
        >
            <div className="absolute left-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <Marquee
              direction="right"
              speed={30}
              gradient={false}
              className="overflow-y-hidden"
            >
              <motion.div 
                className="flex items-center gap-10 md:gap-16 lg:gap-20 py-2 md:py-3 lg:py-4 mr-10 md:mr-16 lg:mr-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {[FaApple, FaMicrosoft, FaGoogle, FaAmazon, FaFacebook, FaSpotify, FaSlack, FaLinkedin].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + i * 0.1 }}
                  >
                    <Icon className="text-2xl md:text-3xl lg:text-4xl text-stone-500" />
                  </motion.div>
                ))}
              </motion.div>
            </Marquee>
        </motion.div>
      </motion.div>
     
      </motion.div>
    </div>
  )
}

export default Hero
