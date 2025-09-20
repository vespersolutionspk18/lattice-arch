'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Button from '../components/Button'
import Image from 'next/image'
import { MdDesignServices, MdViewInAr, MdSmartToy, MdBusinessCenter, MdStore, MdWeb } from 'react-icons/md'

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
  hidden: { opacity: 0, y: 30 },
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      delay: i * 0.15
    }
  })
}

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
      delay: 0.3
    }
  }
}

const OurServices = () => {
  const services = [
    {
      icon: MdDesignServices,
      title: "Layout and Elevation Design",
      description: "Professional architectural layouts and elevation designs that optimize space and enhance aesthetic appeal.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
      alt: "Architectural Design"
    },
    {
      icon: MdViewInAr,
      title: "3D Rendering",
      description: "Photorealistic 3D visualizations that bring your architectural vision to life before construction begins.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80",
      alt: "3D Rendering"
    },
    {
      icon: MdSmartToy,
      title: "AI Remodeller",
      description: "AI-powered design suggestions and remodeling solutions for modern, efficient space transformation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      alt: "AI Remodeling"
    },
    {
      icon: MdBusinessCenter,
      title: "CRM for Contractors",
      description: "Comprehensive CRM system designed specifically for contractors and remodellers.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80",
      alt: "CRM for Contractors"
    },
    {
      icon: MdStore,
      title: "Material Showroom",
      description: "Extensive showroom with premium materials and expert sourcing services for all your construction needs.",
      image: "https://images.unsplash.com/photo-1564540583246-934409427776?w=400&q=80",
      alt: "Material Showroom"
    },
    {
      icon: MdWeb,
      title: "Free Website",
      description: "Get a professional website free with our CRM package to showcase your work and attract more clients.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80",
      alt: "Website Development"
    }
  ];
  return (
   <motion.div 
    className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-10 w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={containerVariants}
   >
      <motion.div 
        className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        Our Services
      </motion.div>
      <motion.h5 
        className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter w-full md:w-[80%] lg:w-[66%]"
        variants={itemVariants}
      >
        Comprehensive architectural solutions from concept to completion. 
        Design, planning, construction management, and renovation services 
        crafted to bring your vision to life.
      </motion.h5>
      <motion.div 
        id="services here" 
        className="flex flex-col gap-4 md:gap-6 lg:gap-7 w-full"
        variants={containerVariants}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-7">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="relative flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:p-6 lg:p-7 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-full overflow-hidden group"
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <motion.div 
                  className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit"
                  variants={iconVariants}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon className="text-white text-3xl" />
                </motion.div>
                <motion.h5 
                  className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-tighter"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {service.title}
                </motion.h5>
                <motion.p 
                  className="text-sm md:text-base lg:text-xl text-stone-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="white" route="/">Learn More</Button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-7">
          {services.slice(3, 6).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="relative flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:p-6 lg:p-7 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-full overflow-hidden group"
                custom={index + 3}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <motion.div 
                  className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit"
                  variants={iconVariants}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon className="text-white text-3xl" />
                </motion.div>
                <motion.h5 
                  className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-tighter"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {service.title}
                </motion.h5>
                <motion.p 
                  className="text-sm md:text-base lg:text-xl text-stone-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="white" route="/">Learn More</Button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default OurServices
