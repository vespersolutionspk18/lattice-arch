'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import LogoTest from './LogoTest'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

const linkColumnVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 20
    }
  }
}

const Footer = () => {
  return (
    <motion.footer 
      className="w-full bg-stone-950 border-t border-stone-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="px-4 md:px-8 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-5 lg:pb-6">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between gap-8 md:gap-10 lg:gap-12"
          variants={containerVariants}
        >
          {/* Left side - Logo and Contact */}
          <motion.div 
            className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:w-1/3"
            variants={itemVariants}
          >
            <motion.div 
          className="font-light flex flex-row gap-3 text-2xl md:text-3xl text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <LogoTest/>
          <p className="tracking-tighter font-regular">Lattice</p>
        </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3 md:gap-4 text-stone-400 text-sm md:text-base"
              variants={containerVariants}
            >
              <motion.a 
                href="mailto:info@latticearch.com" 
                className="flex items-center gap-3 hover:text-white transition-colors"
                variants={linkVariants}
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                <span>info@latticearch.com</span>
              </motion.a>
              <motion.a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 hover:text-white transition-colors"
                variants={linkVariants}
                whileHover={{ x: 5 }}
              >
                <Phone size={18} />
                <span>+1 (234) 567-8900</span>
              </motion.a>
              <motion.div 
                className="flex items-start gap-3"
                variants={linkVariants}
              >
                <MapPin size={18} className="mt-1" />
                <span>123 Architecture Lane<br />Design District, NY 10001</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Links */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 lg:gap-8 w-full lg:w-2/3"
            variants={containerVariants}
          >
            <motion.div 
              className="flex flex-col gap-3 md:gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-base md:text-lg">Services</h3>
              <motion.div 
                className="flex flex-col gap-2 md:gap-3 text-stone-400 text-sm md:text-base"
                variants={containerVariants}
              >
                {[
                  { name: 'Floor Plans & Elevation', link: '/services/floor-plans-and-front-elevation' },
                  { name: '3D Rendering', link: '/services/3d-rendering' },
                  { name: 'AI Remodeller', link: '/services/ai-remodeller' },
                  { name: 'CRM for Contractors', link: '/services/crm-for-contractors' }
                ].map((item, index) => (
                  <motion.div key={item.name} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={item.link} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3 md:gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-base md:text-lg">Company</h3>
              <motion.div 
                className="flex flex-col gap-2 md:gap-3 text-stone-400 text-sm md:text-base"
                variants={containerVariants}
              >
                {[
                  { name: 'About Us', link: '/about' },
                  { name: 'Contact Us', link: '/contact' },
                  { name: 'Services', link: '/#services' },
                  { name: 'Home', link: '/' }
                ].map((item) => (
                  <motion.div key={item.name} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={item.link} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3 md:gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-base md:text-lg">Resources</h3>
              <motion.div 
                className="flex flex-col gap-2 md:gap-3 text-stone-400 text-sm md:text-base"
                variants={containerVariants}
              >
                {[
                  { name: 'Material Showroom', link: '/services/material-showroom' },
                  { name: 'Free Website', link: '/services/free-website' },
                  { name: 'All Services', link: '/#services' },
                  { name: 'Get Started', link: '/contact' }
                ].map((item) => (
                  <motion.div key={item.name} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={item.link} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3 md:gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-base md:text-lg">Legal</h3>
              <motion.div 
                className="flex flex-col gap-2 md:gap-3 text-stone-400 text-sm md:text-base"
                variants={containerVariants}
              >
                {[
                  { name: 'Contact Form', link: '/contact' },
                  { name: 'About Lattice', link: '/about' },
                  { name: 'Our Services', link: '/#services' }
                ].map((item) => (
                  <motion.div key={item.name} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={item.link} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Bottom - Copyright */}
        <motion.div 
          className="mt-6 md:mt-7 lg:mt-8 pt-3 md:pt-4 border-t border-stone-800"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 lg:gap-4 text-stone-500 text-xs md:text-sm text-center md:text-left"
            variants={containerVariants}
          >
            <motion.p variants={linkVariants}>© {new Date().getFullYear()} Lattice. All rights reserved.</motion.p>
            <motion.p variants={linkVariants}>Designed and built with excellence in architecture.</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
