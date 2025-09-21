'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const LogoPurple: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  
  // Smaller cube with thicker elements
  const cubeSize = 16  // Internal calculation size (gets scaled down by 0.5 in projection = 8px visual)
  const svgSize = 42   // Larger container to prevent cropping
  const centerX = 21
  const centerY = 21
  
  // Thicker elements for better visibility
  const edgeWidth = 2      // 2px edges (thicker)
  const sphereRadius = 2.5  // 2.5px spheres (bigger)
  const sphereBorder = 1    // 1px borders (thicker)
  
  // Function to calculate isometric cube vertices based on rotation angle
  const calculateVertices = (angle: number) => {
    // Convert angle to radians
    const rad = (angle * Math.PI) / 180
    
    // Calculate the 8 vertices of a cube in 3D space
    // then project them to 2D isometric view
    const vertices3D = [
      // Bottom face (y = -1)
      { x: -1, y: -1, z: -1 }, // bottom-back-left
      { x: 1, y: -1, z: -1 },  // bottom-back-right
      { x: 1, y: -1, z: 1 },   // bottom-front-right
      { x: -1, y: -1, z: 1 },  // bottom-front-left
      // Top face (y = 1)
      { x: -1, y: 1, z: -1 },  // top-back-left
      { x: 1, y: 1, z: -1 },   // top-back-right
      { x: 1, y: 1, z: 1 },    // top-front-right
      { x: -1, y: 1, z: 1 }    // top-front-left
    ]
    
    // Rotate vertices around Y axis and project to isometric 2D
    const projectedVertices = vertices3D.map(v => {
      // Rotate around Y axis
      const rotatedX = v.x * Math.cos(rad) - v.z * Math.sin(rad)
      const rotatedZ = v.x * Math.sin(rad) + v.z * Math.cos(rad)
      
      // Isometric projection (30-degree angle)
      const screenX = centerX + (rotatedX - rotatedZ) * cubeSize * 0.5
      const screenY = centerY + (v.y * cubeSize * 0.5 + (rotatedX + rotatedZ) * cubeSize * 0.25)
      
      return { x: screenX, y: screenY }
    })
    
    return {
      bottomBackLeft: projectedVertices[0],
      bottomBackRight: projectedVertices[1],
      bottomFrontRight: projectedVertices[2],
      bottomFrontLeft: projectedVertices[3],
      topBackLeft: projectedVertices[4],
      topBackRight: projectedVertices[5],
      topFrontRight: projectedVertices[6],
      topFrontLeft: projectedVertices[7]
    }
  }
  
  // Initial vertices state
  const vertices = calculateVertices(0)

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    // Create a rotation object to track the angle
    const rotationState = { angle: 0 }
    
    // Update function that will be called on each frame
    const updateCube = () => {
      const verts = calculateVertices(rotationState.angle)
      
      // Update all edges
      // Bottom face edges
      gsap.set("#edge-bottom-front", {
        attr: {
          x1: verts.bottomFrontLeft.x,
          y1: verts.bottomFrontLeft.y,
          x2: verts.bottomFrontRight.x,
          y2: verts.bottomFrontRight.y
        }
      })
      gsap.set("#edge-bottom-right", {
        attr: {
          x1: verts.bottomFrontRight.x,
          y1: verts.bottomFrontRight.y,
          x2: verts.bottomBackRight.x,
          y2: verts.bottomBackRight.y
        }
      })
      gsap.set("#edge-bottom-back", {
        attr: {
          x1: verts.bottomBackRight.x,
          y1: verts.bottomBackRight.y,
          x2: verts.bottomBackLeft.x,
          y2: verts.bottomBackLeft.y
        }
      })
      gsap.set("#edge-bottom-left", {
        attr: {
          x1: verts.bottomBackLeft.x,
          y1: verts.bottomBackLeft.y,
          x2: verts.bottomFrontLeft.x,
          y2: verts.bottomFrontLeft.y
        }
      })
      
      // Vertical edges
      gsap.set("#edge-vertical-front-left", {
        attr: {
          x1: verts.bottomFrontLeft.x,
          y1: verts.bottomFrontLeft.y,
          x2: verts.topFrontLeft.x,
          y2: verts.topFrontLeft.y
        }
      })
      gsap.set("#edge-vertical-front-right", {
        attr: {
          x1: verts.bottomFrontRight.x,
          y1: verts.bottomFrontRight.y,
          x2: verts.topFrontRight.x,
          y2: verts.topFrontRight.y
        }
      })
      gsap.set("#edge-vertical-back-left", {
        attr: {
          x1: verts.bottomBackLeft.x,
          y1: verts.bottomBackLeft.y,
          x2: verts.topBackLeft.x,
          y2: verts.topBackLeft.y
        }
      })
      gsap.set("#edge-vertical-back-right", {
        attr: {
          x1: verts.bottomBackRight.x,
          y1: verts.bottomBackRight.y,
          x2: verts.topBackRight.x,
          y2: verts.topBackRight.y
        }
      })
      
      // Top face edges
      gsap.set("#edge-top-front", {
        attr: {
          x1: verts.topFrontLeft.x,
          y1: verts.topFrontLeft.y,
          x2: verts.topFrontRight.x,
          y2: verts.topFrontRight.y
        }
      })
      gsap.set("#edge-top-right", {
        attr: {
          x1: verts.topFrontRight.x,
          y1: verts.topFrontRight.y,
          x2: verts.topBackRight.x,
          y2: verts.topBackRight.y
        }
      })
      gsap.set("#edge-top-back", {
        attr: {
          x1: verts.topBackRight.x,
          y1: verts.topBackRight.y,
          x2: verts.topBackLeft.x,
          y2: verts.topBackLeft.y
        }
      })
      gsap.set("#edge-top-left", {
        attr: {
          x1: verts.topBackLeft.x,
          y1: verts.topBackLeft.y,
          x2: verts.topFrontLeft.x,
          y2: verts.topFrontLeft.y
        }
      })
      
      // Back edges (hidden)
      gsap.set("#edge-back-bottom", {
        attr: {
          x1: verts.bottomBackLeft.x,
          y1: verts.bottomBackLeft.y,
          x2: verts.bottomBackRight.x,
          y2: verts.bottomBackRight.y
        }
      })
      gsap.set("#edge-back-vertical", {
        attr: {
          x1: verts.bottomBackLeft.x,
          y1: verts.bottomBackLeft.y,
          x2: verts.topBackLeft.x,
          y2: verts.topBackLeft.y
        }
      })
      gsap.set("#edge-back-top", {
        attr: {
          x1: verts.topBackLeft.x,
          y1: verts.topBackLeft.y,
          x2: verts.topBackRight.x,
          y2: verts.topBackRight.y
        }
      })
      
      // Update vertices (spheres)
      gsap.set("#vertex-bottom-front-left", {
        attr: { cx: verts.bottomFrontLeft.x, cy: verts.bottomFrontLeft.y }
      })
      gsap.set("#vertex-bottom-front-right", {
        attr: { cx: verts.bottomFrontRight.x, cy: verts.bottomFrontRight.y }
      })
      gsap.set("#vertex-bottom-back-left", {
        attr: { cx: verts.bottomBackLeft.x, cy: verts.bottomBackLeft.y }
      })
      gsap.set("#vertex-bottom-back-right", {
        attr: { cx: verts.bottomBackRight.x, cy: verts.bottomBackRight.y }
      })
      gsap.set("#vertex-top-front-left", {
        attr: { cx: verts.topFrontLeft.x, cy: verts.topFrontLeft.y }
      })
      gsap.set("#vertex-top-front-right", {
        attr: { cx: verts.topFrontRight.x, cy: verts.topFrontRight.y }
      })
      gsap.set("#vertex-top-back-left", {
        attr: { cx: verts.topBackLeft.x, cy: verts.topBackLeft.y }
      })
      gsap.set("#vertex-top-back-right", {
        attr: { cx: verts.topBackRight.x, cy: verts.topBackRight.y }
      })
      
      // Adjust opacity based on rotation angle for depth effect
      const normalizedAngle = rotationState.angle % 360
      let backOpacity = 0.3
      if (normalizedAngle > 45 && normalizedAngle < 135) {
        backOpacity = 0.4
      } else if (normalizedAngle > 135 && normalizedAngle < 225) {
        backOpacity = 0.6
      } else if (normalizedAngle > 225 && normalizedAngle < 315) {
        backOpacity = 0.4
      }
      
      gsap.set("#back-edges", { opacity: backOpacity })
    }
    
    // Create the rotation animation (reversed - counterclockwise)
    const tween = gsap.to(rotationState, {
      angle: -360,
      duration: 8,
      ease: "none",
      repeat: -1,
      onUpdate: updateCube
    })
    
    // Initial update
    updateCube()
    
    // Cleanup function
    return () => {
      tween.kill()
    }
  }, [cubeSize, centerX, centerY])

  return (
    <div ref={containerRef} className="inline-flex items-center justify-center">
      <svg
        ref={svgRef}
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="isometric-cube-logo"
      >
        {/* Define groups for organization */}
        <g id="cube-container">
          
          {/* Back/hidden edges (render first, lower opacity) */}
          <g id="back-edges">
            {/* Back bottom edge */}
            <line
              id="edge-back-bottom"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.bottomBackRight.x}
              y2={vertices.bottomBackRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
              opacity="0.3"
            />
            {/* Back left vertical edge */}
            <line
              id="edge-back-vertical"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.topBackLeft.x}
              y2={vertices.topBackLeft.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
              opacity="0.3"
            />
            {/* Back top edge */}
            <line
              id="edge-back-top"
              x1={vertices.topBackLeft.x}
              y1={vertices.topBackLeft.y}
              x2={vertices.topBackRight.x}
              y2={vertices.topBackRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
              opacity="0.3"
            />
          </g>

          {/* Bottom face edges */}
          <g id="bottom-edges">
            <line
              id="edge-bottom-front"
              x1={vertices.bottomFrontLeft.x}
              y1={vertices.bottomFrontLeft.y}
              x2={vertices.bottomFrontRight.x}
              y2={vertices.bottomFrontRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-bottom-right"
              x1={vertices.bottomFrontRight.x}
              y1={vertices.bottomFrontRight.y}
              x2={vertices.bottomBackRight.x}
              y2={vertices.bottomBackRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-bottom-back"
              x1={vertices.bottomBackRight.x}
              y1={vertices.bottomBackRight.y}
              x2={vertices.bottomBackLeft.x}
              y2={vertices.bottomBackLeft.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-bottom-left"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.bottomFrontLeft.x}
              y2={vertices.bottomFrontLeft.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
          </g>

          {/* Vertical edges */}
          <g id="vertical-edges">
            <line
              id="edge-vertical-front-left"
              x1={vertices.bottomFrontLeft.x}
              y1={vertices.bottomFrontLeft.y}
              x2={vertices.topFrontLeft.x}
              y2={vertices.topFrontLeft.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-vertical-front-right"
              x1={vertices.bottomFrontRight.x}
              y1={vertices.bottomFrontRight.y}
              x2={vertices.topFrontRight.x}
              y2={vertices.topFrontRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-vertical-back-left"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.topBackLeft.x}
              y2={vertices.topBackLeft.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-vertical-back-right"
              x1={vertices.bottomBackRight.x}
              y1={vertices.bottomBackRight.y}
              x2={vertices.topBackRight.x}
              y2={vertices.topBackRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
          </g>

          {/* Top face edges */}
          <g id="top-edges">
            <line
              id="edge-top-front"
              x1={vertices.topFrontLeft.x}
              y1={vertices.topFrontLeft.y}
              x2={vertices.topFrontRight.x}
              y2={vertices.topFrontRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-top-right"
              x1={vertices.topFrontRight.x}
              y1={vertices.topFrontRight.y}
              x2={vertices.topBackRight.x}
              y2={vertices.topBackRight.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-top-back"
              x1={vertices.topBackRight.x}
              y1={vertices.topBackRight.y}
              x2={vertices.topBackLeft.x}
              y2={vertices.topBackLeft.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
            <line
              id="edge-top-left"
              x1={vertices.topBackLeft.x}
              y1={vertices.topBackLeft.y}
              x2={vertices.topFrontLeft.x}
              y2={vertices.topFrontLeft.y}
              stroke="#4c1d95"
              strokeWidth={edgeWidth}
            />
          </g>

          {/* Vertices (white border, black fill spheres) */}
          <g id="vertices">
            {/* Bottom vertices */}
            <circle
              id="vertex-bottom-front-left"
              cx={vertices.bottomFrontLeft.x}
              cy={vertices.bottomFrontLeft.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-bottom-front-right"
              cx={vertices.bottomFrontRight.x}
              cy={vertices.bottomFrontRight.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-bottom-back-left"
              cx={vertices.bottomBackLeft.x}
              cy={vertices.bottomBackLeft.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-bottom-back-right"
              cx={vertices.bottomBackRight.x}
              cy={vertices.bottomBackRight.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
            
            {/* Top vertices */}
            <circle
              id="vertex-top-front-left"
              cx={vertices.topFrontLeft.x}
              cy={vertices.topFrontLeft.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-top-front-right"
              cx={vertices.topFrontRight.x}
              cy={vertices.topFrontRight.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-top-back-left"
              cx={vertices.topBackLeft.x}
              cy={vertices.topBackLeft.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-top-back-right"
              cx={vertices.topBackRight.x}
              cy={vertices.topBackRight.y}
              r={sphereRadius}
              fill="#2e1065"
              stroke="#4c1d95"
              strokeWidth={sphereBorder}
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LogoPurple
