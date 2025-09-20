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
      className="flex flex-col justify-between lg:flex-row lg:gap-10 gap-5 w-full lg:p-16 p-5 mt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="lg:w-[40%] w-full flex flex-col gap-10 justify-between"
        variants={containerVariants}
      >
        <motion.div 
          className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-4 py-2 text-lg text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            #1 in Smart, Stylish Spaces
        </motion.div>
        <motion.h1 
          className="text-7xl"
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
          className="text-2xl text-stone-400"
          variants={itemVariants}
        >
            Building new or upgrading? We craft stylish, inspiring spaces that feel uniquely yours.
        </motion.p>
        <motion.div 
          className="flex flex-row gap-5"
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
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <Marquee
              direction="right"
              speed={30}
              gradient={false}
              className="overflow-y-hidden"
            >
              <motion.div 
                className="flex items-center gap-20 py-4 mr-20"
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
                    <Icon className="text-4xl text-stone-500" />
                  </motion.div>
                ))}
              </motion.div>
            </Marquee>
        </motion.div>
      </motion.div>
      <motion.div 
        className="lg:w-[40%] w-full min-h-[600px] rounded-b-[32px] relative overflow-hidden"
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
          className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20"
          custom={0}
          variants={pillVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/30"
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-white text-sm font-medium">Smart planning</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20"
          custom={1}
          variants={pillVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/30"
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-white text-sm font-medium">Seamless process</span>
          </motion.div>
        </motion.div>

        {/* Client Satisfaction Pill - Bottom Left */}
        <motion.div 
          className="absolute bottom-8 left-8 z-20"
          custom={2}
          variants={pillVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/30"
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-white text-sm font-medium">Client satisfaction</span>
          </motion.div>
        </motion.div>

        {/* Client Rating Section - Bottom Right */}
        <motion.div 
          className="absolute bottom-8 right-8 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            {/* Avatar Stack */}
            <motion.div 
              className="flex -space-x-3 mb-3"
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
                  className="w-10 h-10 rounded-full border-2 border-white/20"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                />
              ))}
            </motion.div>

            {/* Stars */}
            <motion.div 
              className="flex gap-1 justify-center mb-2"
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
                  className="w-4 h-4 fill-white" 
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
              <p className="text-white text-sm font-medium">Rated 5 Stars by</p>
              <p className="text-white/80 text-xs">2k+ happy clients</p>
            </motion.div>
          </motion.div>
        </motion.div>
       </motion.div>
    </motion.div>
  )
}

export default Hero
