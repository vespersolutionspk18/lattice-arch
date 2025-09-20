'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

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
      <div className="lg:px-16 px-5 pt-12 pb-6">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between gap-12"
          variants={containerVariants}
        >
          {/* Left side - Logo and Contact */}
          <motion.div 
            className="flex flex-col gap-6 lg:w-1/3"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-10 h-10 bg-white rounded-lg"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-2xl font-semibold text-white">Lattice Arch</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-4 text-stone-400"
              variants={containerVariants}
            >
              <motion.a 
                href="mailto:info@latticearch.com" 
                className="flex items-center gap-3 hover:text-white transition-colors"
                variants={linkVariants}
                whileHover={{ x: 5 }}
              >
                <Mail size={20} />
                <span>info@latticearch.com</span>
              </motion.a>
              <motion.a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 hover:text-white transition-colors"
                variants={linkVariants}
                whileHover={{ x: 5 }}
              >
                <Phone size={20} />
                <span>+1 (234) 567-8900</span>
              </motion.a>
              <motion.div 
                className="flex items-start gap-3"
                variants={linkVariants}
              >
                <MapPin size={20} className="mt-1" />
                <span>123 Architecture Lane<br />Design District, NY 10001</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Links */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-2/3"
            variants={containerVariants}
          >
            <motion.div 
              className="flex flex-col gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-lg">Services</h3>
              <motion.div 
                className="flex flex-col gap-3 text-stone-400"
                variants={containerVariants}
              >
                {['Layout Design', '3D Rendering', 'AI Remodeller', 'CRM Solutions'].map((item, index) => (
                  <motion.div key={item} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={`/services/${item.toLowerCase().replace(' ', '-')}`} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-lg">Company</h3>
              <motion.div 
                className="flex flex-col gap-3 text-stone-400"
                variants={containerVariants}
              >
                {['About Us', 'Portfolio', 'Testimonials', 'Careers'].map((item) => (
                  <motion.div key={item} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '')}`} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-lg">Resources</h3>
              <motion.div 
                className="flex flex-col gap-3 text-stone-400"
                variants={containerVariants}
              >
                {['Showroom', 'Materials', 'Blog', 'FAQ'].map((item) => (
                  <motion.div key={item} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-4"
              variants={linkColumnVariants}
            >
              <h3 className="text-white font-medium text-lg">Legal</h3>
              <motion.div 
                className="flex flex-col gap-3 text-stone-400"
                variants={containerVariants}
              >
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <motion.div key={item} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-').replace('of-', '')}`} 
                      className="hover:text-white transition-colors inline-block"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Bottom - Copyright */}
        <motion.div 
          className="mt-8 pt-4 border-t border-stone-800"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-center gap-4 text-stone-500 text-sm"
            variants={containerVariants}
          >
            <motion.p variants={linkVariants}>© {new Date().getFullYear()} Lattice Arch. All rights reserved.</motion.p>
            <motion.p variants={linkVariants}>Designed and built with excellence in architecture.</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
