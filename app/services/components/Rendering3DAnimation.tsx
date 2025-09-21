'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Rendering3DAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* 3D Cube Animation */}
      <div className="relative w-64 h-64 transform-gpu perspective-1000">
        <motion.div
          className="absolute inset-0 transform-gpu preserve-3d"
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Front face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-600 to-purple-800 border border-purple-400/30 rounded-lg transform-gpu translate-z-32 flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">3D</div>
          </div>
          
          {/* Back face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-400/30 rounded-lg transform-gpu rotate-y-180 -translate-z-32" />
          
          {/* Right face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-600 to-purple-800 border border-purple-400/30 rounded-lg transform-gpu rotate-y-90 translate-x-32" />
          
          {/* Left face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-400/30 rounded-lg transform-gpu -rotate-y-90 -translate-x-32" />
          
          {/* Top face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-500 to-purple-700 border border-purple-400/30 rounded-lg transform-gpu rotate-x-90 -translate-y-32" />
          
          {/* Bottom face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-800 to-purple-950 border border-purple-400/30 rounded-lg transform-gpu -rotate-x-90 translate-y-32" />
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          initial={{ 
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0 
          }}
          animate={{
            x: [null, Math.random() * 200 - 100],
            y: [null, Math.random() * 200 - 100],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}
    </div>
  )
}

export default Rendering3DAnimation