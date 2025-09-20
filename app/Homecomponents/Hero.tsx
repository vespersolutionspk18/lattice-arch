'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Button from '../components/Button'
import Marquee from 'react-fast-marquee'
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

const imageVariants: Variants = {
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

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.2,
      type: "spring" as const,
      stiffness: 200,
      damping: 15
    }
  })
}

const Hero = () => {
  return (
    <motion.div 
      className="flex flex-col justify-between lg:flex-row gap-5 lg:gap-10 w-full p-4 md:p-8 lg:p-16 mt-8 md:mt-12 lg:mt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="w-full lg:w-[40%] flex flex-col gap-4 md:gap-6 lg:gap-10 justify-between"
        variants={containerVariants}
      >
        <motion.div 
          className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white"
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
          className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5"
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
      <motion.div 
        className="w-full lg:w-[40%] min-h-[300px] md:min-h-[450px] lg:min-h-[600px] rounded-b-[20px] md:rounded-b-[28px] lg:rounded-b-[32px] relative overflow-hidden"
        variants={imageVariants}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center rounded-t-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')`,
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        {/* Feature Pills */}
        <motion.div 
          className="absolute top-8 md:top-12 lg:top-16 left-1/2 transform -translate-x-1/2 z-20"
          custom={0}
          variants={pillVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-full px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 flex items-center gap-1 md:gap-2 border border-white/30"
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span>
            <span className="text-white text-xs md:text-sm font-medium">Smart planning</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute top-1/2 right-4 md:right-6 lg:right-8 transform -translate-y-1/2 z-20"
          custom={1}
          variants={pillVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-full px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 flex items-center gap-1 md:gap-2 border border-white/30"
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span>
            <span className="text-white text-xs md:text-sm font-medium">Seamless process</span>
          </motion.div>
        </motion.div>

        {/* Client Satisfaction Pill - Bottom Left */}
        <motion.div 
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-20"
          custom={2}
          variants={pillVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-full px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 flex items-center gap-1 md:gap-2 border border-white/30"
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span>
            <span className="text-white text-xs md:text-sm font-medium">Client satisfaction</span>
          </motion.div>
        </motion.div>

        {/* Client Rating Section - Bottom Right */}
        <motion.div 
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            {/* Avatar Stack */}
            <motion.div 
              className="flex -space-x-2 md:-space-x-3 mb-2 md:mb-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 1.8 }
                }
              }}
            >
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
              ].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Client ${i + 1}`}
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border md:border-2 border-white/20"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                />
              ))}
            </motion.div>

            {/* Stars */}
            <motion.div 
              className="flex gap-0.5 md:gap-1 justify-center mb-1 md:mb-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 2.2 }
                }
              }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.svg 
                  key={i}
                  className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 fill-white" 
                  viewBox="0 0 20 20"
                  variants={{
                    hidden: { opacity: 0, scale: 0, rotate: -180 },
                    visible: { 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      transition: { type: "spring", stiffness: 200 }
                    }
                  }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </motion.div>

            {/* Rating Text */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <p className="text-white text-xs md:text-sm font-medium">Rated 5 Stars by</p>
              <p className="text-white/80 text-[10px] md:text-xs">2k+ happy clients</p>
            </motion.div>
          </motion.div>
        </motion.div>
       </motion.div>
    </motion.div>
  )
}

export default Hero
