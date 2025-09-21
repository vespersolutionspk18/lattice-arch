'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { BorderBeam } from '../components/BorderBeam'
import CTA from '../components/CTA'
import { 
  FaAward, 
  FaUsers, 
  FaProjectDiagram, 
  FaClock,
  FaHandshake,
  FaRocket,
  FaGlobe
} from 'react-icons/fa'
import { 
  MdVerified,
  MdTrendingUp,
  MdSecurity
} from 'react-icons/md'
import { HiLightBulb, HiSparkles } from 'react-icons/hi'
import Prism from '@/components/Prism'

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
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: i * 0.1
    }
  })
}

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.3
    }
  }
}

export default function AboutPage() {
  const stats = [
    { value: "15+", label: "Years Experience", icon: FaClock },
    { value: "500+", label: "Projects Completed", icon: FaProjectDiagram },
    { value: "98%", label: "Client Satisfaction", icon: FaHandshake },
    { value: "50+", label: "Expert Team", icon: FaUsers }
  ]

  const values = [
    {
      icon: HiLightBulb,
      title: "Innovation First",
      description: "We leverage cutting-edge technology including AI and VR to transform architectural design."
    },
    {
      icon: MdVerified,
      title: "Quality Excellence",
      description: "Every project meets the highest standards of design, functionality, and sustainability."
    },
    {
      icon: FaHandshake,
      title: "Client Partnership",
      description: "We work closely with you at every step, ensuring your vision becomes reality."
    },
    {
      icon: FaGlobe,
      title: "Sustainable Design",
      description: "Environmentally conscious solutions that reduce impact and optimize energy efficiency."
    },
    {
      icon: MdTrendingUp,
      title: "Continuous Growth",
      description: "We evolve with industry trends, constantly improving our services and expertise."
    },
    {
      icon: MdSecurity,
      title: "Trust & Reliability",
      description: "Transparent pricing, on-time delivery, and unwavering commitment to your success."
    }
  ]

  const milestones = [
    { year: "2009", event: "Founded with a vision to revolutionize architecture" },
    { year: "2014", event: "Launched AI-powered design tools" },
    { year: "2018", event: "Opened material showroom & expanded nationally" },
    { year: "2020", event: "Introduced VR walkthroughs & remote collaboration" },
    { year: "2023", event: "Released contractor CRM platform" },
    { year: "2024", event: "500+ successful projects milestone" }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section with Prism Background */}
      <div className="relative w-full pt-24 md:pt-12 min-h-[600px]">
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <Prism
            animationType="rotate"
            timeScale={0.25}
            height={3}
            baseWidth={5}
            scale={3}
            hueShift={280}
            colorFrequency={0.8}
            noise={0}
            glow={0.6}
            suspendWhenOffscreen={true}
          />
        </div>
        
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-4 md:px-8 lg:px-16 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-fit rounded-full bg-white/[0.40] backdrop-blur-xl flex items-center justify-center py-1 px-3 text-sm text-white mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            About Lattice Architecture
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl mb-6"
            variants={itemVariants}
          >
            Designing Tomorrow's <motion.span
              className="font-serif italic"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >Spaces</motion.span> Today
          </motion.h1>
          
          <motion.p
            className="text-base md:text-xl lg:text-2xl text-stone-200 max-w-3xl"
            variants={itemVariants}
          >
            We're not just architects; we're innovators, dreamers, and problem-solvers dedicated to transforming how spaces are designed, built, and experienced.
          </motion.p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#000000_70%)] border border-purple-950/50"
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="mb-4"
                >
                  <Icon className="text-3xl text-purple-400" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-stone-400">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-fit rounded-full border-1 border-purple-900/65 bg-[radial-gradient(ellipse_at_50%_200%,_#4c1d95_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85 mx-auto mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Our Story
        </motion.div>
        
        <motion.h2
          className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          From a small studio to industry leaders in architectural innovation
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.p
              className="text-base md:text-lg text-stone-300 leading-relaxed"
              variants={itemVariants}
            >
              Founded in 2009, Lattice Architecture began as a vision to bridge the gap between traditional architectural practices and cutting-edge technology. What started as a small team of passionate architects has grown into a comprehensive design and build powerhouse.
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg text-stone-300 leading-relaxed"
              variants={itemVariants}
            >
              We recognized early that the future of architecture lies in the seamless integration of AI, VR, and sustainable design principles. This foresight has positioned us as pioneers in the industry, offering services that go beyond conventional architectural firms.
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg text-stone-300 leading-relaxed"
              variants={itemVariants}
            >
              Today, we're proud to offer a complete ecosystem of architectural services, from initial concept to final construction, supported by our innovative CRM platform and extensive material showroom.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant='white' route='/contact'>Start Your Journey</Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="space-y-4"
            variants={containerVariants}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex gap-4 items-start"
                custom={index}
                variants={cardVariants}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-600/20 border border-purple-600/40 flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-sm">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-stone-300">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-fit rounded-full border-1 border-purple-900/65 bg-[radial-gradient(ellipse_at_50%_200%,_#4c1d95_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85 mx-auto mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Our Values
        </motion.div>
        
        <motion.h2
          className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          Principles that guide every project we undertake
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            const [isHovered, setIsHovered] = React.useState(false)
            
            return (
              <motion.div
                key={value.title}
                className="relative p-6 rounded-2xl bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#000000_70%)] border border-purple-950/50 overflow-hidden"
                custom={index}
                variants={cardVariants}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  variants={iconVariants}
                >
                  <div className="p-2 rounded-full bg-purple-600/20">
                    <Icon className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                </motion.div>
                
                <p className="text-stone-400">{value.description}</p>
                
                {isHovered && (
                  <BorderBeam
                    duration={3}
                    size={200}
                    delay={0}
                    className="from-transparent via-purple-500 to-transparent"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-fit rounded-full border-1 border-purple-900/65 bg-[radial-gradient(ellipse_at_50%_200%,_#4c1d95_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85 mx-auto mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Why Choose Us
        </motion.div>
        
        <motion.h2
          className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          The Lattice difference in every detail
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            className="relative p-8 rounded-3xl bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#000000_70%)] border border-purple-950/50 overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <HiSparkles className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Technology-Driven Design</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaRocket className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300">AI-powered design optimization for maximum efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300">VR walkthroughs before construction begins</span>
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300">Real-time collaboration through our digital platform</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="relative p-8 rounded-3xl bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#000000_70%)] border border-purple-950/50 overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <FaAward className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Unmatched Service</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaRocket className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300">48-hour design turnaround on standard projects</span>
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300">Unlimited revisions until you're satisfied</span>
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300">24/7 support throughout your project</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-fit rounded-full border-1 border-purple-900/65 bg-[radial-gradient(ellipse_at_50%_200%,_#4c1d95_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#4c1d95_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85 mx-auto mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Our Process
        </motion.div>
        
        <motion.h2
          className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          A seamless journey from vision to reality
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {[
            { step: "01", title: "Discovery", description: "We listen to your ideas, understand your needs, and explore possibilities together." },
            { step: "02", title: "Design", description: "Our team creates innovative concepts using AI and traditional design principles." },
            { step: "03", title: "Refine", description: "We iterate based on your feedback until the design exceeds expectations." },
            { step: "04", title: "Deliver", description: "Final designs are delivered with all documentation needed for construction." },
            { step: "05", title: "Support", description: "We remain your partner throughout construction and beyond." }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="flex gap-6 items-start mb-8"
              custom={index}
              variants={cardVariants}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-stone-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <CTA />
      <Footer />
    </>
  )
}