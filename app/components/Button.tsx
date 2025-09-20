'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  variant?: 'white' | 'dark'
  route?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'white', 
  route, 
  children,
  onClick 
}) => {
  const router = useRouter()
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    if (route) {
      router.push(route)
    }
  }

  const variants = {
    white: 'bg-white/80 text-black hover:bg-gray-100 hover:scale-105',
    dark: 'bg-stone-900 border border-stone-800 text-white hover:bg-stone-800 hover:scale-105'
  }

  return (
    <button
      className={`rounded-full flex items-center justify-center text-lg px-4 py-2 w-fit font-regular transition-all duration-200 ease-in-out cursor-pointer ${variants[variant]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
