'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Button from './Button'

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
  return (
    <motion.div 
      className="px-4 w-full bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-row px-5 py-3 items-center   justify-between">
        <motion.div 
          className="font-light text-3xl w-[20%] text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
            Lattice
        </motion.div>
        <motion.div 
          className="flex flex-row gap-8 text-white text-xl font-light"
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
       <motion.div 
         className="w-[20%] flex flex-row justify-end"
         variants={itemVariants}
       >
         <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <Button variant='white' route='/contact'>Book A Meeting</Button>
         </motion.div>
       </motion.div>
       
      </div>
    </motion.div>
  )
}

export default Header
