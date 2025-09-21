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
          <div className="absolute w-64 h-64 bg-gradient-to-br from-[#8a08fc] to-[#8a08fc] border border-[#8a08fc]/30 rounded-lg transform-gpu translate-z-32 flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">3D</div>
          </div>
          
          {/* Back face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-[#8a08fc] to-[#8a08fc] border border-[#8a08fc]/30 rounded-lg transform-gpu rotate-y-180 -translate-z-32" />
          
          {/* Right face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-[#8a08fc] to-[#8a08fc] border border-[#8a08fc]/30 rounded-lg transform-gpu rotate-y-90 translate-x-32" />
          
          {/* Left face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-[#8a08fc] to-[#8a08fc] border border-[#8a08fc]/30 rounded-lg transform-gpu -rotate-y-90 -translate-x-32" />
          
          {/* Top face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-[#8a08fc] to-[#8a08fc] border border-[#8a08fc]/30 rounded-lg transform-gpu rotate-x-90 -translate-y-32" />
          
          {/* Bottom face */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-[#8a08fc] to-[#8a08fc] border border-[#8a08fc]/30 rounded-lg transform-gpu -rotate-x-90 translate-y-32" />
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => {
        // Use deterministic values based on index to avoid hydration mismatch
        const xPos = (i * 67 - 100) % 200;
        const yPos = (i * 43 - 100) % 200;
        const xTarget = ((i + 3) * 71 - 100) % 200;
        const yTarget = ((i + 2) * 53 - 100) % 200;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#8a08fc] rounded-full"
            initial={{ 
              x: xPos,
              y: yPos,
              opacity: 0 
            }}
            animate={{
              x: [xPos, xTarget],
              y: [yPos, yTarget],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        );
      })}
    </div>
  )
}

export default Rendering3DAnimation