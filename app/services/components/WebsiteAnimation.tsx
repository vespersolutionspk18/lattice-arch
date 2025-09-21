'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaMobile, FaRocket, FaSearch, FaShieldAlt } from 'react-icons/fa'

const WebsiteAnimation = () => {
  const features = [
    { icon: FaCode, color: 'from-blue-500 to-blue-700' },
    { icon: FaPalette, color: 'from-pink-500 to-pink-700' },
    { icon: FaMobile, color: 'from-green-500 to-green-700' },
    { icon: FaRocket, color: 'from-orange-500 to-orange-700' },
    { icon: FaSearch, color: 'from-purple-500 to-purple-700' },
    { icon: FaShieldAlt, color: 'from-red-500 to-red-700' }
  ]

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Browser Window */}
      <motion.div
        className="relative w-80 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl"
        animate={{
          rotateX: [0, 5, 0, -5, 0],
          rotateY: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Browser Header */}
        <div className="h-8 bg-gray-700 rounded-t-lg flex items-center px-3 gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 bg-gray-600 rounded h-4 px-2 flex items-center">
            <span className="text-xs text-gray-300">www.yoursite.com</span>
          </div>
        </div>

        {/* Website Content */}
        <div className="p-4 relative">
          {/* Header Bar */}
          <motion.div
            className="h-6 bg-gradient-to-r from-purple-600 to-purple-800 rounded mb-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />

          {/* Content Blocks */}
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="h-8 bg-gradient-to-r from-purple-700 to-purple-900 rounded"
                animate={{
                  scaleX: [1, 0.95, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            className="h-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity
            }}
          />
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: [
              "0 0 20px rgba(147, 51, 234, 0.3)",
              "0 0 40px rgba(147, 51, 234, 0.5)",
              "0 0 20px rgba(147, 51, 234, 0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      </motion.div>

      {/* Floating Feature Icons */}
      {features.map((feature, i) => {
        const Icon = feature.icon
        const angle = (i * 60) * Math.PI / 180
        const radius = 120

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
            }}
            animate={{
              y: [Math.sin(angle) * radius, Math.sin(angle) * radius - 10, Math.sin(angle) * radius],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.2 }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                rotate: {
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <Icon className="text-white text-lg" />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default WebsiteAnimation