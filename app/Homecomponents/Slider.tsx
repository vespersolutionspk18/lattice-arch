'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  initialPosition?: number
  className?: string
  height?: number | string
  width?: number | string
  sliderColor?: string
  sliderWidth?: number
  handleColor?: string
  handleSize?: number
  labels?: {
    before?: string
    after?: string
  }
  showLabels?: boolean
  labelPosition?: 'top' | 'bottom'
  transitionDuration?: number
  enableKeyboard?: boolean
  enableTouch?: boolean
  enableHover?: boolean
}

const Slider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before image',
  afterAlt = 'After image',
  initialPosition = 50,
  className = '',
  height = 600,
  width = '100%',
  sliderColor = '#ffffff',
  sliderWidth = 4,
  handleColor = '#ffffff',
  handleSize = 40,
  labels = { before: 'Before', after: 'After' },
  showLabels = true,
  labelPosition = 'top',
  transitionDuration = 0,
  enableKeyboard = true,
  enableTouch = true,
  enableHover = true,
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState({ before: false, after: false })
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 })
  
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef<number>(0)
  const dragStartPosition = useRef<number>(0)
  const animationFrameRef = useRef<number | null>(null)

  // Update container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    // Use ResizeObserver for more accurate dimension tracking
    const resizeObserver = new ResizeObserver(updateDimensions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener('resize', updateDimensions)
      resizeObserver.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Smooth position update with requestAnimationFrame
  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging) return

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current!.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    })
  }, [isDragging])

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    dragStartX.current = e.clientX
    dragStartPosition.current = sliderPosition
    document.body.style.cursor = 'ew-resize'
    document.body.style.userSelect = 'none'
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }, [isDragging, updateSliderPosition])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableTouch) return
    const touch = e.touches[0]
    setIsDragging(true)
    dragStartX.current = touch.clientX
    dragStartPosition.current = sliderPosition
  }

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !enableTouch) return
    const touch = e.touches[0]
    updateSliderPosition(touch.clientX)
  }, [isDragging, enableTouch, updateSliderPosition])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboard || !containerRef.current?.contains(document.activeElement)) return

    const step = e.shiftKey ? 10 : 2
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        setSliderPosition(prev => Math.max(0, prev - step))
        break
      case 'ArrowRight':
        e.preventDefault()
        setSliderPosition(prev => Math.min(100, prev + step))
        break
      case 'Home':
        e.preventDefault()
        setSliderPosition(0)
        break
      case 'End':
        e.preventDefault()
        setSliderPosition(100)
        break
      case ' ':
        e.preventDefault()
        setSliderPosition(50)
        break
    }
  }, [enableKeyboard])

  // Mouse hover effect
  const handleMouseEnter = () => {
    if (enableHover) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (enableHover) setIsHovered(false)
  }

  // Click to position
  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === sliderRef.current || sliderRef.current?.contains(e.target as Node)) {
      return
    }
    
    const rect = containerRef.current!.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  // Setup global event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  // Keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  // Preload images
  useEffect(() => {
    const preloadImage = (src: string, type: 'before' | 'after') => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [type]: true }))
      }
    }

    preloadImage(beforeImage, 'before')
    preloadImage(afterImage, 'after')
  }, [beforeImage, afterImage])

  const allImagesLoaded = imagesLoaded.before && imagesLoaded.after

  return (
    <div className={`px-12 py-20 w-full ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg shadow-2xl select-none focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        style={{ 
          height: typeof height === 'number' ? `${height}px` : height,
          width: typeof width === 'number' ? `${width}px` : width,
          cursor: isDragging ? 'ew-resize' : enableHover && isHovered ? 'ew-resize' : 'default',
        }}
        onClick={handleContainerClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        role="slider"
        aria-label="Before and after image comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Loading indicator */}
        {!allImagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-600 font-medium">Loading images...</span>
            </div>
          </div>
        )}

        {/* After image (bottom layer) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            draggable={false}
          />
        </div>

        {/* Before image (top layer with clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transition: isDragging ? 'none' : `clip-path ${transitionDuration}ms ease-out`,
          }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            draggable={false}
          />
        </div>

        {/* Labels */}
        {showLabels && allImagesLoaded && (
          <>
            <div
              className={`absolute ${labelPosition === 'top' ? 'top-4' : 'bottom-4'} left-4 z-20 pointer-events-none`}
            >
              <span
                className="px-3 py-1.5 bg-black bg-opacity-70 text-white text-sm font-semibold rounded-md backdrop-blur-sm"
                style={{ 
                  opacity: sliderPosition > 80 ? 0 : 1,
                  transition: 'opacity 200ms ease-out',
                }}
              >
                {labels.before}
              </span>
            </div>
            <div
              className={`absolute ${labelPosition === 'top' ? 'top-4' : 'bottom-4'} right-4 z-20 pointer-events-none`}
            >
              <span
                className="px-3 py-1.5 bg-white bg-opacity-90 text-black text-sm font-semibold rounded-md backdrop-blur-sm"
                style={{ 
                  opacity: sliderPosition < 20 ? 0 : 1,
                  transition: 'opacity 200ms ease-out',
                }}
              >
                {labels.after}
              </span>
            </div>
          </>
        )}

        {/* Slider line and handle */}
        {allImagesLoaded && (
          <div
            ref={sliderRef}
            className="absolute top-0 bottom-0 z-30"
            style={{ 
              left: `${sliderPosition}%`,
              transform: 'translateX(-50%)',
              transition: isDragging ? 'none' : `left ${transitionDuration}ms ease-out`,
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0"
              style={{
                width: `${sliderWidth}px`,
                backgroundColor: sliderColor,
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
              }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-ew-resize"
              style={{
                width: `${handleSize}px`,
                height: `${handleSize}px`,
                backgroundColor: handleColor,
                borderRadius: '50%',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
                border: `${sliderWidth}px solid ${sliderColor}`,
                transition: isDragging || isHovered ? 'transform 150ms ease-out' : 'none',
                transform: `translate(-50%, -50%) scale(${isDragging ? 1.2 : isHovered ? 1.1 : 1})`,
              }}
            >
              {/* Arrow icons */}
              <svg
                className="absolute inset-0 w-full h-full p-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12L3 8M3 8L7 4M3 8H21M17 12L21 16M21 16L17 20M21 16H3"
                  stroke={sliderColor === '#ffffff' ? '#000000' : '#ffffff'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Hover effect ripple */}
            {isHovered && !isDragging && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: `${handleSize * 1.5}px`,
                  height: `${handleSize * 1.5}px`,
                  borderRadius: '50%',
                  border: `2px solid ${handleColor}`,
                  opacity: 0.3,
                  animation: 'pulse 1.5s ease-out infinite',
                }}
              />
            )}
          </div>
        )}

        {/* Percentage indicator (shows on drag) */}
        {isDragging && allImagesLoaded && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40"
            style={{
              opacity: 0.9,
              transition: 'opacity 150ms ease-out',
            }}
          >
            <div className="bg-black bg-opacity-80 text-white px-4 py-2 rounded-full font-bold text-lg backdrop-blur-sm">
              {Math.round(sliderPosition)}%
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      {enableKeyboard && allImagesLoaded && (
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Drag slider or use arrow keys to compare • Press Space for 50% • Shift + Arrow for faster navigation</p>
        </div>
      )}

      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

// Default export with example usage
const SliderComponent = () => {
  // Using Unsplash images for demonstration
  // You can change these to any Unsplash image by modifying the photo ID in the URL
  return (
    <Slider
      beforeImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=100"
      afterImage="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=100"
      beforeAlt="Mountain landscape in daylight"
      afterAlt="Mountain landscape at sunset"
      initialPosition={50}
      height={600}
      showLabels={true}
      labels={{ before: 'Daylight', after: 'Sunset' }}
      labelPosition="top"
      sliderColor="#ffffff"
      handleColor="#ffffff"
      handleSize={44}
      sliderWidth={4}
      enableKeyboard={true}
      enableTouch={true}
      enableHover={true}
      transitionDuration={150}
    />
  )
}

export default SliderComponent
