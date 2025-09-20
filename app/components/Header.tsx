'use client'

import React, { useState } from 'react'
import { motion, Variants, AnimatePresence } from 'motion/react'
import Button from './Button'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

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

  return (
    <motion.div 
      className="px-12 w-full absolute top-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-row px-2 md:px-5 py-3 items-center justify-between">
        <motion.div 
          className="font-light text-2xl md:text-3xl text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
            Lattice
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex flex-row gap-4 lg:gap-8 text-white/85 text-lg lg:text-xl font-light"
          variants={containerVariants}
        >
            {['Home', 'Services', 'About', 'Projects'].map((item) => (
              <motion.p
                key={item}
                variants={navItemVariants}
                whileHover={{ 
                  scale: 1.1,
                  color: '#a8a29e',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                {item}
              </motion.p>
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
              {['Home', 'Services', 'About', 'Projects'].map((item, index) => (
                <motion.p
                  key={item}
                  className="text-white/85 text-xl font-light"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ cursor: 'pointer' }}
                >
                  {item}
                </motion.p>
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
  )
}

export default Header
