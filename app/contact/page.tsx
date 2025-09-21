'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BorderBeam } from '../components/BorderBeam'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const [isHovered, setIsHovered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: HiPhone,
      title: "Phone",
      details: "+1 (234) 567-8900",
      subtext: "Mon-Fri 9am-6pm EST"
    },
    {
      icon: HiMail,
      title: "Email",
      details: "info@latticearch.com",
      subtext: "We reply within 24 hours"
    },
    {
      icon: HiLocationMarker,
      title: "Office",
      details: "123 Architecture Lane",
      subtext: "Design District, NY 10001"
    },
    {
      icon: FaClock,
      title: "Hours",
      details: "Monday - Friday",
      subtext: "9:00 AM - 6:00 PM EST"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section with Prism Background */}
      <div className="relative w-full pt-24 md:pt-12 min-h-[500px]">
        <div style={{ width: '100%', height: '500px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <Prism
            animationType="rotate"
            timeScale={0.2}
            height={2.5}
            baseWidth={4}
            scale={2.5}
            hueShift={270}
            colorFrequency={0.5}
            noise={0}
            glow={0.9}
            suspendWhenOffscreen={true}
          />
        </div>
        
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-4 md:px-8 lg:px-16 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-fit rounded-full bg-white/[0.40] backdrop-blur-xl flex items-center justify-center py-1 px-3 text-sm text-white mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl mb-6"
            variants={itemVariants}
          >
            Let's Build Something <motion.span
              className="font-serif italic"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >Amazing</motion.span>
          </motion.h1>
          
          <motion.p
            className="text-base md:text-xl lg:text-2xl text-stone-200 max-w-3xl"
            variants={itemVariants}
          >
            Ready to transform your space? We're here to bring your architectural vision to life.
          </motion.p>
        </motion.div>
      </div>

      {/* Contact Info Cards */}
      <motion.section
        className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={info.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#000000_70%)] border border-[#8a08fc]/30"
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#8a08fc]/20 flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-[#8a08fc]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                <p className="text-white/80 text-sm mb-1">{info.details}</p>
                <p className="text-stone-500 text-xs">{info.subtext}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Contact Form & Map Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-fit rounded-full border-1 border-[#8a08fc]/40 bg-[radial-gradient(ellipse_at_50%_200%,_#8a08fc_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85 mx-auto mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Start Your Project
        </motion.div>
        
        <motion.h2
          className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          Tell us about your vision and we'll make it happen
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="relative p-8 rounded-3xl bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#000000_70%)] border border-[#8a08fc]/30 overflow-hidden"
            variants={itemVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#8a08fc]/30 text-white placeholder-stone-500 focus:outline-none focus:border-[#8a08fc]/60 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#8a08fc]/30 text-white placeholder-stone-500 focus:outline-none focus:border-[#8a08fc]/60 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#8a08fc]/30 text-white placeholder-stone-500 focus:outline-none focus:border-[#8a08fc]/60 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#8a08fc]/30 text-white focus:outline-none focus:border-[#8a08fc]/60 transition-colors"
                  >
                    <option value="" className="bg-black">Select a type</option>
                    <option value="residential" className="bg-black">Residential</option>
                    <option value="commercial" className="bg-black">Commercial</option>
                    <option value="renovation" className="bg-black">Renovation</option>
                    <option value="consultation" className="bg-black">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#8a08fc]/30 text-white focus:outline-none focus:border-[#8a08fc]/60 transition-colors"
                >
                  <option value="" className="bg-black">Select budget range</option>
                  <option value="<50k" className="bg-black">Under $50,000</option>
                  <option value="50k-100k" className="bg-black">$50,000 - $100,000</option>
                  <option value="100k-250k" className="bg-black">$100,000 - $250,000</option>
                  <option value="250k-500k" className="bg-black">$250,000 - $500,000</option>
                  <option value=">500k" className="bg-black">Over $500,000</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#8a08fc]/30 text-white placeholder-stone-500 focus:outline-none focus:border-[#8a08fc]/60 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#8a08fc] text-white font-semibold rounded-lg hover:bg-[#8a08fc]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {isHovered && (
              <BorderBeam
                duration={3}
                size={400}
                delay={0}
                className="from-transparent via-[#8a08fc] to-transparent"
              />
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            {/* Office Hours */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-[#8a08fc]/20 to-transparent border border-[#8a08fc]/30"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-stone-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-[#8a08fc]/20 to-transparent border border-[#8a08fc]/30"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Quick Response</h3>
              <p className="text-stone-300 mb-4">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="tel:+12345678900"
                  className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.a>
                <motion.a
                  href="mailto:info@latticearch.com"
                  className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Us
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-[#8a08fc]/20 to-transparent border border-[#8a08fc]/30"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Connect With Us</h3>
              <p className="text-stone-300 mb-6">Follow us for design inspiration and project updates</p>
              <div className="flex gap-4">
                {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#8a08fc]/20 flex items-center justify-center hover:bg-[#8a08fc]/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-xl text-[#8a08fc]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  )
}