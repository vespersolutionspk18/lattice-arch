import React from 'react'
import { MarqueeDemo } from '../components/Marquee'

const Testimonials = () => {
  return (
     <div className="flex flex-col justify-between lg:gap-10 gap-5 w-full lg:px-16 px-5 lg:py-26 py-10 items-center">
      <div className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-4 py-2 text-lg text-white/85">
        Testimonials
      </div>
      <h5 className="text-center text-5xl text-white/85 font-semibold tracking-tighter w-[66%]">
        Hear from our clients
      </h5>
      <MarqueeDemo />
    </div>
  )
}

export default Testimonials
