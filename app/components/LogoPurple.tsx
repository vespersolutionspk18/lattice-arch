'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

interface LogoPurpleProps {
  animate?: boolean
}

const LogoPurple: React.FC<LogoPurpleProps> = ({ animate = true }) => {
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
      const svg = svgRef.current
      if (!svg) return
      
      // Update all edges using querySelector scoped to this SVG instance
      // Bottom face edges
      const edgeBottomFront = svg.querySelector(".edge-bottom-front")
      if (edgeBottomFront) {
        edgeBottomFront.setAttribute('x1', verts.bottomFrontLeft.x.toString())
        edgeBottomFront.setAttribute('y1', verts.bottomFrontLeft.y.toString())
        edgeBottomFront.setAttribute('x2', verts.bottomFrontRight.x.toString())
        edgeBottomFront.setAttribute('y2', verts.bottomFrontRight.y.toString())
      }
      
      const edgeBottomRight = svg.querySelector(".edge-bottom-right")
      if (edgeBottomRight) {
        edgeBottomRight.setAttribute('x1', verts.bottomFrontRight.x.toString())
        edgeBottomRight.setAttribute('y1', verts.bottomFrontRight.y.toString())
        edgeBottomRight.setAttribute('x2', verts.bottomBackRight.x.toString())
        edgeBottomRight.setAttribute('y2', verts.bottomBackRight.y.toString())
      }
      
      const edgeBottomBack = svg.querySelector(".edge-bottom-back")
      if (edgeBottomBack) {
        edgeBottomBack.setAttribute('x1', verts.bottomBackRight.x.toString())
        edgeBottomBack.setAttribute('y1', verts.bottomBackRight.y.toString())
        edgeBottomBack.setAttribute('x2', verts.bottomBackLeft.x.toString())
        edgeBottomBack.setAttribute('y2', verts.bottomBackLeft.y.toString())
      }
      
      const edgeBottomLeft = svg.querySelector(".edge-bottom-left")
      if (edgeBottomLeft) {
        edgeBottomLeft.setAttribute('x1', verts.bottomBackLeft.x.toString())
        edgeBottomLeft.setAttribute('y1', verts.bottomBackLeft.y.toString())
        edgeBottomLeft.setAttribute('x2', verts.bottomFrontLeft.x.toString())
        edgeBottomLeft.setAttribute('y2', verts.bottomFrontLeft.y.toString())
      }
      
      // Vertical edges
      const edgeVerticalFrontLeft = svg.querySelector(".edge-vertical-front-left")
      if (edgeVerticalFrontLeft) {
        edgeVerticalFrontLeft.setAttribute('x1', verts.bottomFrontLeft.x.toString())
        edgeVerticalFrontLeft.setAttribute('y1', verts.bottomFrontLeft.y.toString())
        edgeVerticalFrontLeft.setAttribute('x2', verts.topFrontLeft.x.toString())
        edgeVerticalFrontLeft.setAttribute('y2', verts.topFrontLeft.y.toString())
      }
      
      const edgeVerticalFrontRight = svg.querySelector(".edge-vertical-front-right")
      if (edgeVerticalFrontRight) {
        edgeVerticalFrontRight.setAttribute('x1', verts.bottomFrontRight.x.toString())
        edgeVerticalFrontRight.setAttribute('y1', verts.bottomFrontRight.y.toString())
        edgeVerticalFrontRight.setAttribute('x2', verts.topFrontRight.x.toString())
        edgeVerticalFrontRight.setAttribute('y2', verts.topFrontRight.y.toString())
      }
      
      const edgeVerticalBackLeft = svg.querySelector(".edge-vertical-back-left")
      if (edgeVerticalBackLeft) {
        edgeVerticalBackLeft.setAttribute('x1', verts.bottomBackLeft.x.toString())
        edgeVerticalBackLeft.setAttribute('y1', verts.bottomBackLeft.y.toString())
        edgeVerticalBackLeft.setAttribute('x2', verts.topBackLeft.x.toString())
        edgeVerticalBackLeft.setAttribute('y2', verts.topBackLeft.y.toString())
      }
      
      const edgeVerticalBackRight = svg.querySelector(".edge-vertical-back-right")
      if (edgeVerticalBackRight) {
        edgeVerticalBackRight.setAttribute('x1', verts.bottomBackRight.x.toString())
        edgeVerticalBackRight.setAttribute('y1', verts.bottomBackRight.y.toString())
        edgeVerticalBackRight.setAttribute('x2', verts.topBackRight.x.toString())
        edgeVerticalBackRight.setAttribute('y2', verts.topBackRight.y.toString())
      }
      
      // Top face edges
      const edgeTopFront = svg.querySelector(".edge-top-front")
      if (edgeTopFront) {
        edgeTopFront.setAttribute('x1', verts.topFrontLeft.x.toString())
        edgeTopFront.setAttribute('y1', verts.topFrontLeft.y.toString())
        edgeTopFront.setAttribute('x2', verts.topFrontRight.x.toString())
        edgeTopFront.setAttribute('y2', verts.topFrontRight.y.toString())
      }
      
      const edgeTopRight = svg.querySelector(".edge-top-right")
      if (edgeTopRight) {
        edgeTopRight.setAttribute('x1', verts.topFrontRight.x.toString())
        edgeTopRight.setAttribute('y1', verts.topFrontRight.y.toString())
        edgeTopRight.setAttribute('x2', verts.topBackRight.x.toString())
        edgeTopRight.setAttribute('y2', verts.topBackRight.y.toString())
      }
      
      const edgeTopBack = svg.querySelector(".edge-top-back")
      if (edgeTopBack) {
        edgeTopBack.setAttribute('x1', verts.topBackRight.x.toString())
        edgeTopBack.setAttribute('y1', verts.topBackRight.y.toString())
        edgeTopBack.setAttribute('x2', verts.topBackLeft.x.toString())
        edgeTopBack.setAttribute('y2', verts.topBackLeft.y.toString())
      }
      
      const edgeTopLeft = svg.querySelector(".edge-top-left")
      if (edgeTopLeft) {
        edgeTopLeft.setAttribute('x1', verts.topBackLeft.x.toString())
        edgeTopLeft.setAttribute('y1', verts.topBackLeft.y.toString())
        edgeTopLeft.setAttribute('x2', verts.topFrontLeft.x.toString())
        edgeTopLeft.setAttribute('y2', verts.topFrontLeft.y.toString())
      }
      
      // Back edges (hidden)
      const edgeBackBottom = svg.querySelector(".edge-back-bottom")
      if (edgeBackBottom) {
        edgeBackBottom.setAttribute('x1', verts.bottomBackLeft.x.toString())
        edgeBackBottom.setAttribute('y1', verts.bottomBackLeft.y.toString())
        edgeBackBottom.setAttribute('x2', verts.bottomBackRight.x.toString())
        edgeBackBottom.setAttribute('y2', verts.bottomBackRight.y.toString())
      }
      
      const edgeBackVertical = svg.querySelector(".edge-back-vertical")
      if (edgeBackVertical) {
        edgeBackVertical.setAttribute('x1', verts.bottomBackLeft.x.toString())
        edgeBackVertical.setAttribute('y1', verts.bottomBackLeft.y.toString())
        edgeBackVertical.setAttribute('x2', verts.topBackLeft.x.toString())
        edgeBackVertical.setAttribute('y2', verts.topBackLeft.y.toString())
      }
      
      const edgeBackTop = svg.querySelector(".edge-back-top")
      if (edgeBackTop) {
        edgeBackTop.setAttribute('x1', verts.topBackLeft.x.toString())
        edgeBackTop.setAttribute('y1', verts.topBackLeft.y.toString())
        edgeBackTop.setAttribute('x2', verts.topBackRight.x.toString())
        edgeBackTop.setAttribute('y2', verts.topBackRight.y.toString())
      }
      
      // Update vertices (spheres)
      const vertexBottomFrontLeft = svg.querySelector(".vertex-bottom-front-left")
      if (vertexBottomFrontLeft) {
        vertexBottomFrontLeft.setAttribute('cx', verts.bottomFrontLeft.x.toString())
        vertexBottomFrontLeft.setAttribute('cy', verts.bottomFrontLeft.y.toString())
      }
      
      const vertexBottomFrontRight = svg.querySelector(".vertex-bottom-front-right")
      if (vertexBottomFrontRight) {
        vertexBottomFrontRight.setAttribute('cx', verts.bottomFrontRight.x.toString())
        vertexBottomFrontRight.setAttribute('cy', verts.bottomFrontRight.y.toString())
      }
      
      const vertexBottomBackLeft = svg.querySelector(".vertex-bottom-back-left")
      if (vertexBottomBackLeft) {
        vertexBottomBackLeft.setAttribute('cx', verts.bottomBackLeft.x.toString())
        vertexBottomBackLeft.setAttribute('cy', verts.bottomBackLeft.y.toString())
      }
      
      const vertexBottomBackRight = svg.querySelector(".vertex-bottom-back-right")
      if (vertexBottomBackRight) {
        vertexBottomBackRight.setAttribute('cx', verts.bottomBackRight.x.toString())
        vertexBottomBackRight.setAttribute('cy', verts.bottomBackRight.y.toString())
      }
      
      const vertexTopFrontLeft = svg.querySelector(".vertex-top-front-left")
      if (vertexTopFrontLeft) {
        vertexTopFrontLeft.setAttribute('cx', verts.topFrontLeft.x.toString())
        vertexTopFrontLeft.setAttribute('cy', verts.topFrontLeft.y.toString())
      }
      
      const vertexTopFrontRight = svg.querySelector(".vertex-top-front-right")
      if (vertexTopFrontRight) {
        vertexTopFrontRight.setAttribute('cx', verts.topFrontRight.x.toString())
        vertexTopFrontRight.setAttribute('cy', verts.topFrontRight.y.toString())
      }
      
      const vertexTopBackLeft = svg.querySelector(".vertex-top-back-left")
      if (vertexTopBackLeft) {
        vertexTopBackLeft.setAttribute('cx', verts.topBackLeft.x.toString())
        vertexTopBackLeft.setAttribute('cy', verts.topBackLeft.y.toString())
      }
      
      const vertexTopBackRight = svg.querySelector(".vertex-top-back-right")
      if (vertexTopBackRight) {
        vertexTopBackRight.setAttribute('cx', verts.topBackRight.x.toString())
        vertexTopBackRight.setAttribute('cy', verts.topBackRight.y.toString())
      }
      
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
      
      const backEdges = svg.querySelector(".back-edges")
      if (backEdges) {
        backEdges.setAttribute('opacity', backOpacity.toString())
      }
    }
    
    // Initial update
    updateCube()
    
    // Create the rotation animation only if animate prop is true
    let tween: gsap.core.Tween | null = null
    if (animate) {
      tween = gsap.to(rotationState, {
        angle: -360,
        duration: 8,
        ease: "none",
        repeat: -1,
        onUpdate: updateCube
      })
    }
    
    // Cleanup function
    return () => {
      if (tween) {
        tween.kill()
      }
    }
  }, [cubeSize, centerX, centerY, animate])

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
        <g className="cube-container">
          
          {/* Back/hidden edges (render first, lower opacity) */}
          <g className="back-edges">
            {/* Back bottom edge */}
            <line
              className="edge-back-bottom"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.bottomBackRight.x}
              y2={vertices.bottomBackRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
              opacity="0.3"
            />
            {/* Back left vertical edge */}
            <line
              className="edge-back-vertical"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.topBackLeft.x}
              y2={vertices.topBackLeft.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
              opacity="0.3"
            />
            {/* Back top edge */}
            <line
              className="edge-back-top"
              x1={vertices.topBackLeft.x}
              y1={vertices.topBackLeft.y}
              x2={vertices.topBackRight.x}
              y2={vertices.topBackRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
              opacity="0.3"
            />
          </g>

          {/* Bottom face edges */}
          <g className="bottom-edges">
            <line
              className="edge-bottom-front"
              x1={vertices.bottomFrontLeft.x}
              y1={vertices.bottomFrontLeft.y}
              x2={vertices.bottomFrontRight.x}
              y2={vertices.bottomFrontRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-bottom-right"
              x1={vertices.bottomFrontRight.x}
              y1={vertices.bottomFrontRight.y}
              x2={vertices.bottomBackRight.x}
              y2={vertices.bottomBackRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-bottom-back"
              x1={vertices.bottomBackRight.x}
              y1={vertices.bottomBackRight.y}
              x2={vertices.bottomBackLeft.x}
              y2={vertices.bottomBackLeft.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-bottom-left"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.bottomFrontLeft.x}
              y2={vertices.bottomFrontLeft.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
          </g>

          {/* Vertical edges */}
          <g className="vertical-edges">
            <line
              className="edge-vertical-front-left"
              x1={vertices.bottomFrontLeft.x}
              y1={vertices.bottomFrontLeft.y}
              x2={vertices.topFrontLeft.x}
              y2={vertices.topFrontLeft.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-vertical-front-right"
              x1={vertices.bottomFrontRight.x}
              y1={vertices.bottomFrontRight.y}
              x2={vertices.topFrontRight.x}
              y2={vertices.topFrontRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-vertical-back-left"
              x1={vertices.bottomBackLeft.x}
              y1={vertices.bottomBackLeft.y}
              x2={vertices.topBackLeft.x}
              y2={vertices.topBackLeft.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-vertical-back-right"
              x1={vertices.bottomBackRight.x}
              y1={vertices.bottomBackRight.y}
              x2={vertices.topBackRight.x}
              y2={vertices.topBackRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
          </g>

          {/* Top face edges */}
          <g className="top-edges">
            <line
              className="edge-top-front"
              x1={vertices.topFrontLeft.x}
              y1={vertices.topFrontLeft.y}
              x2={vertices.topFrontRight.x}
              y2={vertices.topFrontRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-top-right"
              x1={vertices.topFrontRight.x}
              y1={vertices.topFrontRight.y}
              x2={vertices.topBackRight.x}
              y2={vertices.topBackRight.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-top-back"
              x1={vertices.topBackRight.x}
              y1={vertices.topBackRight.y}
              x2={vertices.topBackLeft.x}
              y2={vertices.topBackLeft.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
            <line
              className="edge-top-left"
              x1={vertices.topBackLeft.x}
              y1={vertices.topBackLeft.y}
              x2={vertices.topFrontLeft.x}
              y2={vertices.topFrontLeft.y}
              stroke="#8a08fc"
              strokeWidth={edgeWidth}
            />
          </g>

          {/* Vertices (white border, black fill spheres) */}
          <g className="vertices">
            {/* Bottom vertices */}
            <circle
              className="vertex-bottom-front-left"
              cx={vertices.bottomFrontLeft.x}
              cy={vertices.bottomFrontLeft.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
            <circle
              className="vertex-bottom-front-right"
              cx={vertices.bottomFrontRight.x}
              cy={vertices.bottomFrontRight.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
            <circle
              className="vertex-bottom-back-left"
              cx={vertices.bottomBackLeft.x}
              cy={vertices.bottomBackLeft.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
            <circle
              className="vertex-bottom-back-right"
              cx={vertices.bottomBackRight.x}
              cy={vertices.bottomBackRight.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
            
            {/* Top vertices */}
            <circle
              className="vertex-top-front-left"
              cx={vertices.topFrontLeft.x}
              cy={vertices.topFrontLeft.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
            <circle
              className="vertex-top-front-right"
              cx={vertices.topFrontRight.x}
              cy={vertices.topFrontRight.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
            <circle
              className="vertex-top-back-left"
              cx={vertices.topBackLeft.x}
              cy={vertices.topBackLeft.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
            <circle
              className="vertex-top-back-right"
              cx={vertices.topBackRight.x}
              cy={vertices.topBackRight.y}
              r={sphereRadius}
              fill="#8a08fc"
              stroke="#8a08fc"
              strokeWidth={sphereBorder}
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LogoPurple