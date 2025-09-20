"use client"
import React from 'react'
import Image from 'next/image'

const ProjectsMarquee = () => {
  // Using Unsplash images
  const projectImages = [
    'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
  ]

  // Duplicate array for seamless loop
  const duplicatedImages = [...projectImages, ...projectImages]

  return (
    <div className=" w-full overflow-hidden mt-20 py-8">
      <div className="relative flex">
        <div className="animate-marquee flex items-end gap-8 pr-6">
          {duplicatedImages.map((image, index) => (
            index % 2 === 0 ? (
              <div
                key={`first-${index}`}
                className="relative flex-shrink-0 h-100 w-80 rounded-b-xl overflow-hidden"
              >
                <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                  <Image
                    src={image}
                    alt={`Project ${(index % projectImages.length) + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
            ) : (
              <div
                key={`first-${index}`}
                className="relative flex-shrink-0 h-64 w-106 rounded-xl overflow-hidden bg-gray-200"
              >
                <Image
                  src={image}
                  alt={`Project ${(index % projectImages.length) + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 320px"
                />
              </div>
            )
          ))}
        </div>
        <div className="animate-marquee2 absolute top-0 flex items-end gap-8 pr-6">
          {duplicatedImages.map((image, index) => (
            index % 2 === 0 ? (
              <div
                key={`second-${index}`}
                className="relative flex-shrink-0 h-100 w-80 rounded-b-xl overflow-hidden"
              >
                <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                  <Image
                    src={image}
                    alt={`Project ${(index % projectImages.length) + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
            ) : (
              <div
                key={`second-${index}`}
                className="relative flex-shrink-0 h-64 w-106 rounded-xl overflow-hidden bg-gray-200"
              >
                <Image
                  src={image}
                  alt={`Project ${(index % projectImages.length) + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 320px"
                />
              </div>
            )
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee2 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        
        .animate-marquee2 {
          animation: marquee2 60s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default ProjectsMarquee
