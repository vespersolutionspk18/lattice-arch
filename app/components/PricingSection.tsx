import React from 'react'

const PricingSection = () => {
  return (
     <div 
    className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-7 w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 items-center"

   >
      <div 
        className="w-fit rounded-full border-1 border-[#8a08fc]/40 bg-[radial-gradient(ellipse_at_50%_200%,_#8a08fc_0%,_#0D0D0D_60%)] hover:bg-[radial-gradient(ellipse_at_50%_150%,_#8a08fc_0%,_#0D0D0D_60%)] transition-all duration-200 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85"
      
      >
       Our Pricing
      </div>
      <h5 
        className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter w-full md:w-[80%] lg:w-[66%]"
      
      >
        Comprehensive architectural solutions from concept to completion. 
        Design, planning, construction management, and renovation services 
        crafted to bring your vision to life.
      </h5>
      <div 
        id="services here" 
        className="flex flex-col gap-4 md:gap-6 lg:gap-7 w-full"
      >
        </div>
      
    </div>
  )
}

export default PricingSection
