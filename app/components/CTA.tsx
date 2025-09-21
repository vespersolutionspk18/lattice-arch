'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define the Button component directly in this file
const Button = ({ variant, route, children }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out text-base md:text-lg";
  const variantClasses = {
    white: "bg-white text-gray-900 hover:bg-gray-200",
  };
  
  // Use a standard <a> tag instead of Next.js Link
  return (
    <a href={route} className={`${baseClasses} ${variantClasses[variant] || variantClasses.white}`}>
      {children}
    </a>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { scale: 1.2 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const CTA = () => {
  return (
    <motion.div
      className="relative w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden">
        <motion.div
          variants={imageVariants}
          className="absolute inset-0"
        >
          {/* Use a standard <img> tag instead of Next.js Image */}
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
            alt="Modern interior space"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10 lg:p-20">
          <motion.div
            className="relative w-full h-full bg-black/70 backdrop-blur-sm rounded-xl md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-12"
            style={{
              backgroundImage: `
                radial-gradient(circle at 0% 0%, rgba(76, 29, 149, 0.4) 0%, transparent 35%),
                radial-gradient(circle at 100% 100%, rgba(76, 29, 149, 0.4) 0%, transparent 35%)
              `
            }}
            variants={overlayVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold tracking-tighter mb-3 md:mb-4 lg:mb-6"
              variants={itemVariants}
            >
              Let&apos;s create a<br />space you&apos;ll love
            </motion.h2>

            <motion.p
              className="text-sm md:text-base lg:text-xl text-white/85 mb-6 md:mb-8 lg:mb-10 px-2 md:px-0"
              variants={itemVariants}
            >
              We&apos;d love to hear from you. Reach out to discuss your ideas, <span className="hidden md:inline"><br /></span>
              get a quote, or book a consultation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="white" route="/contact">
                Get a free quote!
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default CTA

