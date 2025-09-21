'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'
import { MdDesignServices, MdViewInAr, MdSmartToy, MdBusinessCenter, MdStore, MdWeb } from 'react-icons/md'
import { BorderBeam } from '../components/BorderBeam'

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
      title: "Floor Plans & Front Elevation",
      price: "$2,995",
      description: "Professional architectural layouts and elevation designs that optimize space.",
      link: "/services/floor-plans-and-front-elevation",
      includes: [
        "Custom floor plan design",
        "3D elevation rendering",
        "Material specifications",
        "Structural drawings",
        "2 revisions included",
        "Digital files delivery"
      ]
    },
    {
      icon: MdViewInAr,
      title: "3D Rendering",
      price: "$1,495",
      description: "Photorealistic 3D visualizations that bring your architectural vision to life.",
      link: "/services/3d-rendering",
      includes: [
        "High-resolution 3D renders",
        "Multiple viewing angles",
        "Lighting variations",
        "Material textures",
        "Virtual walkthrough",
        "Quick turnaround"
      ]
    },
    {
      icon: MdSmartToy,
      title: "AI Remodeller",
      price: "$4,995",
      description: "AI-powered design suggestions and remodeling solutions for modern transformation.",
      link: "/services/ai-remodeller",
      includes: [
        "AI design generation",
        "Space optimization",
        "Cost estimation",
        "Material recommendations",
        "Energy efficiency analysis",
        "Unlimited variations"
      ]
    },
    {
      icon: MdBusinessCenter,
      title: "CRM for Contractors",
      price: "$199/mo",
      description: "Comprehensive CRM system designed specifically for contractors and remodellers.",
      link: "/services/crm-for-contractors",
      includes: [
        "Client management",
        "Project tracking",
        "Quote generation",
        "Invoice automation",
        "Team collaboration",
        "Mobile app access"
      ]
    },
    {
      icon: MdStore,
      title: "Material Showroom",
      price: "Custom",
      description: "Extensive showroom with premium materials and expert sourcing services.",
      link: "/services/material-showroom",
      includes: [
        "Premium material access",
        "Wholesale pricing",
        "Expert consultation",
        "Sample delivery",
        "Installation guides",
        "Warranty support"
      ]
    },
    {
      icon: MdWeb,
      title: "Free Website",
      price: "$0",
      description: "Professional website included free with our CRM package subscription.",
      link: "/services/free-website",
      includes: [
        "Custom domain setup",
        "Responsive design",
        "SEO optimization",
        "Portfolio showcase",
        "Contact forms",
        "Monthly updates"
      ]
    }
  ];
  return (
   <motion.div 
    className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-7 w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 items-center"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
   >
      <motion.div 
        className="w-fit rounded-full border-1 border-[#8a08fc]/40 bg-[radial-gradient(ellipse_at_50%_200%,_#8a08fc_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85"
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
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-4">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            const [isHovered, setIsHovered] = React.useState(false);
            return (
              <motion.div
                key={service.title}
                className="relative flex flex-col p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#000000_70%)] border-[1px] border-[#8a08fc]/30 w-full overflow-hidden group"
                custom={index}
                variants={cardVariants}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="flex items-center justify-center rounded-full p-2 w-fit"
                      variants={iconVariants}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                    <motion.h5 
                      className="text-lg md:text-xl lg:text-2xl text-white/90 font-semibold tracking-tighter"
                    >
                      {service.title}
                    </motion.h5>
                  </div>
                  <motion.div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                    {service.price}
                  </motion.div>
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base text-white/70 line-clamp-2"
                  >
                    {service.description}
                  </motion.p>
                </div>
                
                <div className="my-4 h-[1px] bg-[#8a08fc]/30" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <motion.h6 className="text-sm md:text-base text-white/80 font-medium">
                    Includes:
                  </motion.h6>
                  <ul className="flex flex-col gap-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#8a08fc] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs md:text-sm text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className="w-full mt-4 py-3 px-4 bg-white/85 text-black text-xl rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = service.link}
                >
                  Get Started
                </motion.button>
                {isHovered && (
                  <>
                    <BorderBeam
                      duration={3}
                      size={300}
                      delay={0}
                      className="from-transparent via-[#8a08fc] to-transparent"
                    />
                    <BorderBeam
                      duration={3}
                      delay={1.5}
                      size={300}
                      borderWidth={2}
                      className="from-transparent via-[#8a08fc] to-transparent"
                      reverse
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-7">
          {services.slice(3, 6).map((service, index) => {
            const Icon = service.icon;
            const [isHovered, setIsHovered] = React.useState(false);
            return (
              <motion.div
                key={service.title}
                className="relative flex flex-col p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#000000_70%)] border-[1px] border-[#8a08fc]/30 w-full overflow-hidden group"
                custom={index + 3}
                variants={cardVariants}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="flex items-center justify-center rounded-full p-2 w-fit"
                      variants={iconVariants}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                    <motion.h5 
                      className="text-lg md:text-xl lg:text-2xl text-white/90 font-semibold tracking-tighter"
                    >
                      {service.title}
                    </motion.h5>
                  </div>
                  <motion.div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                    {service.price}
                  </motion.div>
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base text-white/70 line-clamp-2"
                  >
                    {service.description}
                  </motion.p>
                </div>
                
                <div className="my-4 h-[1px] bg-[#8a08fc]/30" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <motion.h6 className="text-sm md:text-base text-white/80 font-medium">
                    Includes:
                  </motion.h6>
                  <ul className="flex flex-col gap-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#8a08fc] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs md:text-sm text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className="w-full mt-4 py-3 px-4 bg-white/85 text-black text-xl rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = service.link}
                >
                  Get Started
                </motion.button>
                {isHovered && (
                  <>
                    <BorderBeam
                      duration={3}
                      size={300}
                      delay={0}
                      className="from-transparent via-[#8a08fc] to-transparent"
                    />
                    <BorderBeam
                      duration={3}
                      delay={1.5}
                      size={300}
                      borderWidth={2}
                      className="from-transparent via-[#8a08fc] to-transparent"
                      reverse
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default OurServices
