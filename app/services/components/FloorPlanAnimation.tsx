'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const FloorPlanAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    // Get all the paths and elements
    const allPaths = svgRef.current.querySelectorAll('path, line, rect, circle, ellipse, polygon')
    
    // Create the main timeline with better defaults
    const tl = gsap.timeline({
      defaults: {
        ease: "none", // Linear ease for more mechanical drawing feel
        duration: 1
      }
    })

    // Set initial state for all elements - make them invisible
    gsap.set(allPaths, {
      strokeDasharray: function(this: SVGGeometryElement) {
        if ('getTotalLength' in this) {
          const length = this.getTotalLength()
          return `${length} ${length}`
        }
        return "1000 1000" // Fallback for elements without getTotalLength
      },
      strokeDashoffset: function(this: SVGGeometryElement) {
        if ('getTotalLength' in this) {
          return this.getTotalLength()
        }
        return 1000
      },
      opacity: 1
    })

    // Separate elements by type for better control
    const outerWalls = svgRef.current.querySelectorAll('.outer-wall')
    const innerWalls = svgRef.current.querySelectorAll('.inner-wall')
    const doors = svgRef.current.querySelectorAll('.door')
    const windows = svgRef.current.querySelectorAll('.window')
    const furniture = svgRef.current.querySelectorAll('.furniture')
    const fixtures = svgRef.current.querySelectorAll('.fixture')
    const dimensions = svgRef.current.querySelectorAll('.dimension')
    const details = svgRef.current.querySelectorAll('.detail')

    // Animation sequence with proper timing
    
    // 1. Draw outer walls first
    tl.to(outerWalls, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut"
    })

    // 2. Draw inner walls
    .to(innerWalls, {
      strokeDashoffset: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power1.inOut"
    }, "-=0.5")

    // 3. Add windows
    .to(windows, {
      strokeDashoffset: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: "power1.out"
    }, "-=0.5")

    // 4. Add doors
    .to(doors, {
      strokeDashoffset: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power1.out"
    }, "-=0.2")

    // 5. Draw furniture
    .to(furniture, {
      strokeDashoffset: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.out"
    }, "-=0.1")

    // 6. Add fixtures
    .to(fixtures, {
      strokeDashoffset: 0,
      duration: 0.2,
      stagger: 0.03
    }, "-=0.1")

    // 7. Add dimension lines
    .to(dimensions, {
      strokeDashoffset: 0,
      duration: 0.4,
      stagger: 0.05
    }, "-=0.1")

    // 8. Add details
    .to(details, {
      strokeDashoffset: 0,
      duration: 0.3,
      stagger: 0.02
    }, "-=0.1")

    timelineRef.current = tl

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{ maxWidth: '1000px', maxHeight: '750px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid background for architectural look */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.1" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#grid)" />

        {/* OUTER WALLS */}
        <g id="outer-walls">
          <path
            className="outer-wall"
            d="M 100 100 L 700 100 L 700 500 L 100 500 Z"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* INNER WALLS */}
        <g id="inner-walls">
          {/* Vertical wall dividing living/kitchen from bedrooms */}
          <path
            className="inner-wall"
            d="M 400 100 L 400 200 M 400 240 L 400 340 M 400 380 L 400 500"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Horizontal wall separating upper and lower areas */}
          <path
            className="inner-wall"
            d="M 100 300 L 200 300 M 240 300 L 340 300 M 380 300 L 400 300"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Bathroom walls */}
          <path
            className="inner-wall"
            d="M 400 300 L 500 300 M 540 300 L 700 300"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          
          <path
            className="inner-wall"
            d="M 550 300 L 550 380 M 550 420 L 550 500"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* DOORS (gaps in walls with swing arcs) */}
        <g id="doors">
          {/* Main entrance */}
          <path
            className="door"
            d="M 380 500 A 40 40 0 0 1 420 460"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,3"
          />
          <rect
            className="door"
            x="380"
            y="498"
            width="40"
            height="4"
            fill="white"
          />
          
          {/* Living room to hallway */}
          <path
            className="door"
            d="M 200 300 A 40 40 0 0 1 240 340"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,3"
          />
          
          {/* Kitchen door */}
          <path
            className="door"
            d="M 340 300 A 40 40 0 0 1 380 340"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,3"
          />
          
          {/* Bedroom 1 door */}
          <path
            className="door"
            d="M 400 200 A 40 40 0 0 1 440 240"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,3"
          />
          
          {/* Bedroom 2 door */}
          <path
            className="door"
            d="M 400 340 A 40 40 0 0 1 440 380"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,3"
          />
          
          {/* Bathroom door */}
          <path
            className="door"
            d="M 500 300 A 40 40 0 0 1 540 340"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,3"
          />
          
          {/* Bedroom 3 door */}
          <path
            className="door"
            d="M 550 380 A 40 40 0 0 1 590 420"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,3"
          />
        </g>

        {/* WINDOWS */}
        <g id="windows">
          {/* Living room windows */}
          <rect
            className="window"
            x="150"
            y="97"
            width="80"
            height="6"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          
          <rect
            className="window"
            x="270"
            y="97"
            width="80"
            height="6"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          
          {/* Bedroom windows */}
          <rect
            className="window"
            x="450"
            y="97"
            width="80"
            height="6"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          
          <rect
            className="window"
            x="570"
            y="97"
            width="80"
            height="6"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          
          {/* Side windows */}
          <rect
            className="window"
            x="697"
            y="150"
            width="6"
            height="80"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          
          <rect
            className="window"
            x="697"
            y="370"
            width="6"
            height="80"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          
          <rect
            className="window"
            x="97"
            y="350"
            width="6"
            height="80"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
        </g>

        {/* FURNITURE */}
        <g id="furniture">
          {/* LIVING ROOM (Top Left) */}
          {/* Sofa */}
          <rect
            className="furniture"
            x="120"
            y="140"
            width="120"
            height="40"
            stroke="white"
            strokeWidth="1"
            fill="none"
            rx="5"
          />
          <line
            className="furniture"
            x1="120"
            y1="155"
            x2="240"
            y2="155"
            stroke="white"
            strokeWidth="0.5"
          />
          
          {/* Coffee Table */}
          <rect
            className="furniture"
            x="145"
            y="200"
            width="70"
            height="40"
            stroke="white"
            strokeWidth="1"
            fill="none"
            rx="3"
          />
          
          {/* TV Unit */}
          <rect
            className="furniture"
            x="260"
            y="130"
            width="120"
            height="20"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <rect
            className="furniture"
            x="290"
            y="133"
            width="60"
            height="14"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
          
          {/* Armchair */}
          <circle
            className="furniture"
            cx="290"
            cy="200"
            r="20"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          
          {/* KITCHEN (Bottom Left) */}
          {/* L-shaped Counter */}
          <path
            className="furniture"
            d="M 120 320 L 280 320 L 280 340 L 140 340 L 140 460 L 120 460 Z"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          
          {/* Kitchen Island */}
          <rect
            className="furniture"
            x="200"
            y="380"
            width="80"
            height="40"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          
          {/* Sink */}
          <rect
            className="fixture"
            x="180"
            y="325"
            width="30"
            height="10"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            rx="2"
          />
          
          {/* Stove */}
          <rect
            className="fixture"
            x="125"
            y="380"
            width="35"
            height="35"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <circle className="fixture" cx="135" cy="390" r="5" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="fixture" cx="150" cy="390" r="5" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="fixture" cx="135" cy="405" r="5" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="fixture" cx="150" cy="405" r="5" stroke="white" strokeWidth="0.5" fill="none"/>
          
          {/* Refrigerator */}
          <rect
            className="fixture"
            x="125"
            y="430"
            width="30"
            height="40"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <line
            className="fixture"
            x1="125"
            y1="445"
            x2="155"
            y2="445"
            stroke="white"
            strokeWidth="0.5"
          />
          
          {/* Bar stools */}
          <circle className="furniture" cx="220" cy="360" r="8" stroke="white" strokeWidth="0.8" fill="none"/>
          <circle className="furniture" cx="240" cy="360" r="8" stroke="white" strokeWidth="0.8" fill="none"/>
          <circle className="furniture" cx="260" cy="360" r="8" stroke="white" strokeWidth="0.8" fill="none"/>
          
          {/* DINING AREA (Center Bottom) */}
          {/* Dining Table */}
          <rect
            className="furniture"
            x="310"
            y="360"
            width="70"
            height="90"
            stroke="white"
            strokeWidth="1"
            fill="none"
            rx="5"
          />
          
          {/* Dining Chairs */}
          <rect className="furniture" x="315" y="345" width="15" height="10" stroke="white" strokeWidth="0.8" fill="none"/>
          <rect className="furniture" x="340" y="345" width="15" height="10" stroke="white" strokeWidth="0.8" fill="none"/>
          <rect className="furniture" x="365" y="345" width="15" height="10" stroke="white" strokeWidth="0.8" fill="none"/>
          
          <rect className="furniture" x="315" y="455" width="15" height="10" stroke="white" strokeWidth="0.8" fill="none"/>
          <rect className="furniture" x="340" y="455" width="15" height="10" stroke="white" strokeWidth="0.8" fill="none"/>
          <rect className="furniture" x="365" y="455" width="15" height="10" stroke="white" strokeWidth="0.8" fill="none"/>
          
          {/* MASTER BEDROOM (Top Right) */}
          {/* Queen Bed */}
          <rect
            className="furniture"
            x="440"
            y="130"
            width="100"
            height="80"
            stroke="white"
            strokeWidth="1"
            fill="none"
            rx="3"
          />
          {/* Pillows */}
          <rect
            className="furniture"
            x="450"
            y="135"
            width="80"
            height="15"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            rx="8"
          />
          
          {/* Nightstands */}
          <rect
            className="furniture"
            x="420"
            y="150"
            width="15"
            height="25"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
          />
          <rect
            className="furniture"
            x="545"
            y="150"
            width="15"
            height="25"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
          />
          
          {/* Dresser */}
          <rect
            className="furniture"
            x="580"
            y="130"
            width="100"
            height="25"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <line className="furniture" x1="610" y1="130" x2="610" y2="155" stroke="white" strokeWidth="0.5"/>
          <line className="furniture" x1="630" y1="130" x2="630" y2="155" stroke="white" strokeWidth="0.5"/>
          <line className="furniture" x1="650" y1="130" x2="650" y2="155" stroke="white" strokeWidth="0.5"/>
          
          {/* Wardrobe */}
          <rect
            className="furniture"
            x="440"
            y="240"
            width="100"
            height="30"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <line className="furniture" x1="490" y1="240" x2="490" y2="270" stroke="white" strokeWidth="0.5"/>
          
          {/* Chair */}
          <circle
            className="furniture"
            cx="610"
            cy="190"
            r="15"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          
          {/* BATHROOM (Center Right) */}
          {/* Toilet */}
          <rect
            className="fixture"
            x="420"
            y="320"
            width="20"
            height="30"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
            rx="5"
          />
          <ellipse
            className="fixture"
            cx="430"
            cy="330"
            rx="8"
            ry="6"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
          
          {/* Sink */}
          <rect
            className="fixture"
            x="460"
            y="320"
            width="25"
            height="20"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
            rx="3"
          />
          
          {/* Bathtub */}
          <rect
            className="fixture"
            x="420"
            y="360"
            width="65"
            height="35"
            stroke="white"
            strokeWidth="1"
            fill="none"
            rx="5"
          />
          
          {/* Shower */}
          <rect
            className="fixture"
            x="500"
            y="320"
            width="35"
            height="35"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            className="fixture"
            d="M 500 320 L 535 355"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
          
          {/* BEDROOM 2 (Bottom Center) */}
          {/* Single Bed */}
          <rect
            className="furniture"
            x="420"
            y="420"
            width="60"
            height="80"
            stroke="white"
            strokeWidth="1"
            fill="none"
            rx="3"
          />
          <rect
            className="furniture"
            x="425"
            y="425"
            width="50"
            height="12"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            rx="6"
          />
          
          {/* Desk */}
          <rect
            className="furniture"
            x="490"
            y="430"
            width="50"
            height="25"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          
          {/* Chair */}
          <circle
            className="furniture"
            cx="515"
            cy="470"
            r="10"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
          />
          
          {/* BEDROOM 3 (Bottom Right) */}
          {/* Single Bed */}
          <rect
            className="furniture"
            x="580"
            y="420"
            width="60"
            height="80"
            stroke="white"
            strokeWidth="1"
            fill="none"
            rx="3"
          />
          <rect
            className="furniture"
            x="585"
            y="425"
            width="50"
            height="12"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            rx="6"
          />
          
          {/* Wardrobe */}
          <rect
            className="furniture"
            x="650"
            y="420"
            width="40"
            height="70"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <line className="furniture" x1="670" y1="420" x2="670" y2="490" stroke="white" strokeWidth="0.5"/>
        </g>

        {/* ARCHITECTURAL DETAILS */}
        <g id="details">
          {/* Electrical Outlets */}
          <circle className="detail" cx="200" cy="115" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="detail" cx="350" cy="115" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="detail" cx="500" cy="115" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="detail" cx="650" cy="115" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          
          <circle className="detail" cx="200" cy="485" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="detail" cx="350" cy="485" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="detail" cx="500" cy="485" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle className="detail" cx="650" cy="485" r="3" stroke="white" strokeWidth="0.5" fill="none"/>
          
          {/* Light Switches */}
          <rect className="detail" x="250" y="305" width="8" height="12" stroke="white" strokeWidth="0.5" fill="none"/>
          <rect className="detail" x="405" y="250" width="8" height="12" stroke="white" strokeWidth="0.5" fill="none"/>
          <rect className="detail" x="505" y="360" width="8" height="12" stroke="white" strokeWidth="0.5" fill="none"/>
          <rect className="detail" x="555" y="430" width="8" height="12" stroke="white" strokeWidth="0.5" fill="none"/>
        </g>

        {/* DIMENSIONS */}
        <g id="dimensions">
          {/* Overall width */}
          <line className="dimension" x1="100" y1="80" x2="700" y2="80" stroke="white" strokeWidth="0.3"/>
          <line className="dimension" x1="100" y1="75" x2="100" y2="85" stroke="white" strokeWidth="0.3"/>
          <line className="dimension" x1="700" y1="75" x2="700" y2="85" stroke="white" strokeWidth="0.3"/>
          
          {/* Overall height */}
          <line className="dimension" x1="80" y1="100" x2="80" y2="500" stroke="white" strokeWidth="0.3"/>
          <line className="dimension" x1="75" y1="100" x2="85" y2="100" stroke="white" strokeWidth="0.3"/>
          <line className="dimension" x1="75" y1="500" x2="85" y2="500" stroke="white" strokeWidth="0.3"/>
          
          {/* Room width markers */}
          <line className="dimension" x1="100" y1="520" x2="400" y2="520" stroke="white" strokeWidth="0.3"/>
          <line className="dimension" x1="400" y1="520" x2="550" y2="520" stroke="white" strokeWidth="0.3"/>
          <line className="dimension" x1="550" y1="520" x2="700" y2="520" stroke="white" strokeWidth="0.3"/>
          
          {/* Room height markers */}
          <line className="dimension" x1="720" y1="100" x2="720" y2="300" stroke="white" strokeWidth="0.3"/>
          <line className="dimension" x1="720" y1="300" x2="720" y2="500" stroke="white" strokeWidth="0.3"/>
        </g>
      </svg>
    </div>
  )
}

export default FloorPlanAnimation