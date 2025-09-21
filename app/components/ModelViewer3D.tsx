'use client'

import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'
import * as THREE from 'three'

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url)
  const modelRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 3.5 / maxDim
      
      gltf.scene.scale.multiplyScalar(scale)
      gltf.scene.position.sub(center.multiplyScalar(scale))
      
      // Optimize materials
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = false
          child.receiveShadow = false
          if (child.material) {
            child.material.side = THREE.FrontSide
          }
        }
      })
    }
  }, [gltf])

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003
    }
  })

  return <primitive ref={modelRef} object={gltf.scene} dispose={null} />
}

function LoadingAnimation() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-white text-lg font-medium animate-pulse">Loading Animation</p>
    </div>
  )
}

export default function ModelViewer3D() {
  const [error, setError] = useState(false)

  useEffect(() => {
    const handleContextLost = (event: Event) => {
      event.preventDefault()
      setError(true)
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    }

    const handleContextRestored = () => {
      setError(false)
    }

    const canvas = document.querySelector('canvas')
    if (canvas) {
      canvas.addEventListener('webglcontextlost', handleContextLost)
      canvas.addEventListener('webglcontextrestored', handleContextRestored)
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleContextLost)
        canvas.removeEventListener('webglcontextrestored', handleContextRestored)
      }
    }
  }, [])

  if (error) {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900/50 to-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-lg mb-2">3D context lost. Reloading...</p>
          <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900/50 to-black/50 backdrop-blur-sm">
      <Suspense fallback={<LoadingAnimation />}>
        <Canvas
          camera={{ 
            position: [0, 2, 5], 
            fov: 45,
            near: 0.1,
            far: 100
          }}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "low-power",
            preserveDrawingBuffer: false,
            failIfMajorPerformanceCaveat: false
          }}
          shadows={false}
          dpr={[1, 1.5]}
          frameloop="demand"
        >
          <ambientLight intensity={2.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={4.5}
          />
          <directionalLight position={[-10, 10, -5]} intensity={3} />
          <pointLight position={[0, 10, 0]} intensity={1.8} />
          <spotLight
            position={[0, 15, 10]}
            angle={0.3}
            penumbra={0.5}
            intensity={2.4}
          />
          
          <Suspense fallback={null}>
            <Model url="/studio_office_interior.glb" />
          </Suspense>
          
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            minDistance={1}
            maxDistance={10}
            minPolarAngle={0}
            maxPolarAngle={Math.PI * 0.85}
            autoRotate={false}
            enableDamping
            dampingFactor={0.05}
          />
          
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  )
}