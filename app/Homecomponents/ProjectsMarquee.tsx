"use client"
import React from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  })
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
}

const ProjectsMarquee = () => {
  // Using Unsplash images
  const projectImages = [
    'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
  ]

  // Duplicate array for seamless loop
  const duplicatedImages = [...projectImages, ...projectImages]

  return (
    <motion.div 
      className="w-full overflow-hidden mt-20 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative flex">
        <motion.div 
          className="animate-marquee flex items-end gap-8 pr-6"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedImages.map((image, index) => (
            index % 2 === 0 ? (
              <motion.div
                key={`first-${index}`}
                className="relative flex-shrink-0 h-100 w-80 rounded-b-xl overflow-hidden group"
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image}
                    alt={`Project ${(index % projectImages.length) + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={`first-${index}`}
                className="relative flex-shrink-0 h-64 w-106 rounded-xl overflow-hidden bg-gray-200 group"
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={image}
                  alt={`Project ${(index % projectImages.length) + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 320px, 320px"
                />
              </motion.div>
            )
          ))}
        </motion.div>
        <motion.div 
          className="absolute top-0 flex items-end gap-8 pr-6"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedImages.map((image, index) => (
            index % 2 === 0 ? (
              <motion.div
                key={`second-${index}`}
                className="relative flex-shrink-0 h-100 w-80 rounded-b-xl overflow-hidden group"
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image}
                    alt={`Project ${(index % projectImages.length) + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={`second-${index}`}
                className="relative flex-shrink-0 h-64 w-106 rounded-xl overflow-hidden bg-gray-200 group"
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={image}
                  alt={`Project ${(index % projectImages.length) + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 320px, 320px"
                />
              </motion.div>
            )
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectsMarquee
