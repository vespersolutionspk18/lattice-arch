'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AIAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Central AI Brain */}
      <motion.div
        className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#8a08fc] to-[#8a08fc] flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 20px rgba(147, 51, 234, 0.5)",
            "0 0 60px rgba(147, 51, 234, 0.8)",
            "0 0 20px rgba(147, 51, 234, 0.5)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <div className="text-white text-3xl font-bold">AI</div>
        
        {/* Neural connections */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-r from-[#8a08fc] to-transparent"
            style={{
              height: '100px',
              top: '50%',
              left: '50%',
              transformOrigin: 'left center',
              transform: `rotate(${i * 45}deg)`
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity
            }}
          />
        ))}
      </motion.div>

      {/* Orbiting nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-full bg-[#8a08fc]"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [
              Math.cos((i * 60 * Math.PI) / 180) * 120,
              Math.cos(((i * 60 + 360) * Math.PI) / 180) * 120
            ],
            y: [
              Math.sin((i * 60 * Math.PI) / 180) * 120,
              Math.sin(((i * 60 + 360) * Math.PI) / 180) * 120
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-[#8a08fc]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity
            }}
          />
        </motion.div>
      ))}

      {/* Data streams */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-2 h-2 rounded-full bg-[#8a08fc]"
          initial={{
            x: -150,
            y: (i - 2) * 30,
            opacity: 0
          }}
          animate={{
            x: 150,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.7,
            repeat: Infinity
          }}
        />
      ))}
    </div>
  )
}

export default AIAnimation