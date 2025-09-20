import React from 'react'
import Image from 'next/image'
import Button from '../components/Button'

const CTA = () => {
  return (
    <div className="relative w-full lg:px-16 px-5 lg:py-16 py-10">
      <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
          alt="Modern interior space"
          fill
          className="object-cover"
        />
        
        {/* Centered Dark Overlay Container */}
        <div className="absolute inset-0 flex items-center justify-center p-20">
          <div className="bg-black/70 backdrop-blur-sm rounded-[2rem] w-full h-full flex flex-col items-center justify-center text-center px-12">
            <h2 className="text-5xl lg:text-6xl text-white font-semibold tracking-tighter mb-6">
              Let&apos;s create a<br />space you&apos;ll love
            </h2>
            
            <p className="text-xl text-white/85 mb-10">
              We&apos;d love to hear from you. Reach out to discuss your ideas,<br />
              get a quote, or book a consultation.
            </p>
            
            <Button variant="white" route="/contact">
              Get a free quote!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
