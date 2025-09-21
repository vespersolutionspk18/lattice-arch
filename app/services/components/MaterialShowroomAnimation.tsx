'use client'

import React from 'react'
import { motion } from 'framer-motion'

const MaterialShowroomAnimation = () => {
  const materials = [
    { color: 'from-stone-400 to-stone-600', label: 'Stone' },
    { color: 'from-amber-600 to-amber-800', label: 'Wood' },
    { color: 'from-slate-400 to-slate-600', label: 'Metal' },
    { color: 'from-blue-400 to-blue-600', label: 'Glass' },
    { color: 'from-orange-400 to-orange-600', label: 'Ceramic' },
    { color: 'from-gray-400 to-gray-600', label: 'Concrete' }
  ]

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* 3D Material Grid */}
      <div className="relative w-72 h-72 perspective-1000">
        <motion.div
          className="relative w-full h-full transform-gpu preserve-3d"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {materials.map((material, i) => {
            const angle = (i * 60) * Math.PI / 180
            
            return (
              <motion.div
                key={i}
                className={`absolute w-20 h-20 rounded-lg bg-gradient-to-br ${material.color} shadow-xl`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `
                    translateX(-50%) 
                    translateY(-50%) 
                    translateZ(80px) 
                    rotateY(${i * 60}deg) 
                    translateZ(80px)
                  `
                }}
                whileHover={{ scale: 1.2, z: 100 }}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="w-full h-full rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold opacity-80">
                    {material.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Floating samples */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`sample-${i}`}
          className="absolute w-8 h-8 rounded bg-gradient-to-br from-purple-400 to-purple-600"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: [null, Math.random() * 200 - 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Light beams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
          style={{
            top: '20%',
            left: `${30 + i * 20}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 1,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

export default MaterialShowroomAnimation