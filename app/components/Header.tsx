'use client'

import React, { useState } from 'react'
import { motion, Variants, AnimatePresence } from 'motion/react'
import Button from './Button'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import LogoTest from './LogoTest'
import { MdDesignServices, MdViewInAr, MdSmartToy, MdBusinessCenter, MdStore, MdWeb } from 'react-icons/md'

const containerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
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

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 12
    }
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  
  const services = [
    {
      icon: MdDesignServices,
      title: "Floor Plans & Front Elevation",
      description: "Professional architectural layouts",
      link: "/services/floor-plans-and-front-elevation",
    },
    {
      icon: MdViewInAr,
      title: "3D Rendering",
      description: "Photorealistic visualizations",
      link: "/services/3d-rendering",
    },
    {
      icon: MdSmartToy,
      title: "AI Remodeller",
      description: "AI-powered design solutions",
      link: "/services/ai-remodeller",
    },
    {
      icon: MdBusinessCenter,
      title: "CRM for Contractors",
      description: "Comprehensive CRM system",
      link: "/services/crm-for-contractors",
    },
    {
      icon: MdStore,
      title: "Material Showroom",
      description: "Premium materials & sourcing",
      link: "/services/material-showroom",
    },
    {
      icon: MdWeb,
      title: "Free Website",
      description: "Professional website included",
      link: "/services/free-website",
    }
  ]

  return (
   <div className="p-3 absolute w-full  z-[999999]">
     <motion.div 
      className=" w-full rounded-full    "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-row px-2 md:px-3 py-1.5 bg-[#8a08fc]/18 border-1 border-[#8a08fc]/16 backdrop-blur-4xl rounded-full items-center justify-between">
        <motion.div 
          className="font-light flex flex-row items-center justify-center gap-3 text-2xl md:text-3xl text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <LogoTest/>
          <p className="tracking-tighter font-regular">Lattice</p>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex flex-row gap-4 lg:gap-8 text-white/85 text-lg  font-light "
          variants={containerVariants}
        >
            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <motion.div
                key={item}
                variants={navItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
                className="font-semibold relative"
                onMouseEnter={() => item === 'Services' && setIsServicesHovered(true)}
                onMouseLeave={() => item === 'Services' && setIsServicesHovered(false)}
                onClick={() => {
                  if (item === 'Home') {
                    window.location.href = '/'
                  } else if (item === 'Services') {
                    if (window.location.pathname === '/') {
                      document.getElementById('services here')?.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      window.location.href = '/#services'
                    }
                  } else if (item === 'About') {
                    window.location.href = '/about'
                  } else if (item === 'Contact') {
                    window.location.href = '/contact'
                  }
                }}
              >
                <span className="flex items-center gap-1.5">
                  {item}
                  {item === 'Services' && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
                {item === 'Services' && (
                  <AnimatePresence>
                    {isServicesHovered && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[720px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-black/95 backdrop-blur-xl border border-[#8a08fc]/20 rounded-xl p-2 shadow-2xl">
                          <div className="grid grid-cols-3 gap-1">
                            {services.map((service) => {
                              const Icon = service.icon
                              return (
                                <motion.a
                                  key={service.title}
                                  href={service.link}
                                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#8a08fc]/10 transition-colors group"
                                  whileHover={{ x: 2 }}
                                >
                                  <div className="p-1.5 rounded-md bg-[#8a08fc]/10 group-hover:bg-[#8a08fc]/20 transition-colors">
                                    <Icon className="text-[#8a08fc] text-base" />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-white/90 text-sm font-medium leading-tight">
                                      {service.title}
                                    </span>
                                    <span className="text-white/50 text-xs leading-tight">
                                      {service.description}
                                    </span>
                                  </div>
                                </motion.a>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
        </motion.div>
        
        {/* Desktop Button */}
        <motion.div 
          className="hidden md:flex flex-row justify-end"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant='white' route='/contact'>Login</Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black z-40"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 px-6 pt-20">
              {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item, index) => (
                <motion.div
                  key={item}
                  className="text-white/85 text-xl font-light flex items-center px-3 py-2 rounded-md hover:bg-white/10 hover:text-white transition-all duration-200"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setIsMenuOpen(false)
                    if (item === 'Home') {
                      window.location.href = '/'
                    } else if (item === 'Services') {
                      if (window.location.pathname === '/') {
                        document.getElementById('services here')?.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        window.location.href = '/#services'
                      }
                    } else if (item === 'About') {
                      window.location.href = '/about'
                    } else if (item === 'Contact') {
                      window.location.href = '/contact'
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant='white' route='/contact'>Login</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
   </div>
  )
}

export default Header
