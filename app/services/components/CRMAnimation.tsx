'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaClipboardList, FaChartLine, FaFileInvoice, FaCalendarAlt, FaMobileAlt } from 'react-icons/fa'

const CRMAnimation = () => {
  const features = [
    { icon: FaUsers, label: 'Clients' },
    { icon: FaClipboardList, label: 'Projects' },
    { icon: FaChartLine, label: 'Analytics' },
    { icon: FaFileInvoice, label: 'Invoices' },
    { icon: FaCalendarAlt, label: 'Schedule' },
    { icon: FaMobileAlt, label: 'Mobile' }
  ]

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Central Dashboard */}
      <motion.div
        className="relative w-64 h-48 bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg shadow-2xl flex items-center justify-center"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white text-2xl font-bold">CRM</div>
        
        {/* Screen glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: [
              "0 0 20px rgba(147, 51, 234, 0.5)",
              "0 0 40px rgba(147, 51, 234, 0.7)",
              "0 0 20px rgba(147, 51, 234, 0.5)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
      </motion.div>

      {/* Orbiting feature icons */}
      {features.map((feature, i) => {
        const angle = (i * 60) * Math.PI / 180
        const radius = 140
        const Icon = feature.icon
        
        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center gap-1"
            initial={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius
            }}
            animate={{
              x: Math.cos(angle + Math.PI * 2) * radius,
              y: Math.sin(angle + Math.PI * 2) * radius
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity
              }}
            >
              <Icon className="text-white text-xl" />
            </motion.div>
            <span className="text-xs text-purple-300 mt-1">{feature.label}</span>
          </motion.div>
        )
      })}

      {/* Connection lines */}
      {features.map((_, i) => {
        const angle = (i * 60) * Math.PI / 180
        const radius = 140
        
        return (
          <motion.div
            key={`line-${i}`}
            className="absolute w-0.5 bg-gradient-to-b from-purple-500 to-transparent"
            style={{
              height: radius,
              transformOrigin: 'top',
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 60 + 90}deg)`
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity
            }}
          />
        )
      })}
    </div>
  )
}

export default CRMAnimation