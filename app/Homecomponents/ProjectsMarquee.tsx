"use client"
import React, { useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

const ProjectsMarquee = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  
  // Project data with before/after images
  const projectData = [
    {
      before: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      name: 'Project 1'
    },
    {
      before: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=400&fit=crop',
      name: 'Project 2'
    },
    {
      before: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
      name: 'Project 3'
    },
    {
      before: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=400&fit=crop',
      name: 'Project 4'
    },
    {
      before: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      name: 'Project 5'
    },
    {
      before: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=400&fit=crop',
      name: 'Project 6'
    },
    {
      before: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop',
      name: 'Project 7'
    },
    {
      before: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=400&fit=crop',
      name: 'Project 8'
    }
  ]

  // Triple the array for seamless infinite loop
  const duplicatedProjects = [...projectData, ...projectData, ...projectData]

  return (
    <div className="w-full overflow-hidden mt-8 md:mt-12 lg:mt-20 py-4 md:py-6 lg:py-8">
      <style jsx>{`
        .marquee-container {
          display: flex;
          animation: marquee 60s linear infinite;
          width: fit-content;
        }
        
        .marquee-container:hover {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .image-container {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .image-container:hover {
          z-index: 10;
          transform: scale(1.05);
        }
        
        .slider-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
      `}</style>
      
      <div className="relative">
        <div className="marquee-container flex items-center gap-8">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${index}`}
              className="image-container relative flex-shrink-0 h-48 w-80 md:h-64 md:w-96 lg:h-80 lg:w-[480px] rounded-lg md:rounded-xl overflow-hidden bg-gray-200 group"
              onMouseEnter={() => setActiveCardIndex(index)}
              onMouseLeave={() => setActiveCardIndex(null)}
            >
              {/* Before/After Slider - Always Visible */}
              <div className="slider-overlay">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  alt={project.name}
                  isActive={activeCardIndex === index}
                  onActivate={() => setActiveCardIndex(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsMarquee