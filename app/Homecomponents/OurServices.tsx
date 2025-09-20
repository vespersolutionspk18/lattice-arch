import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import { MdDesignServices, MdViewInAr, MdSmartToy, MdBusinessCenter, MdStore, MdWeb } from 'react-icons/md'

const OurServices = () => {
  return (
   <div className=" flex flex-col justify-between lg:gap-10 gap-5 w-full lg:px-16 px-5 lg:py-16 py-10 items-center">
      <div className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-4 py-2 text-lg text-white/85">
        Our Services
      </div>
      <h5 className="text-center text-5xl text-white/85 font-semibold tracking-tighter w-[66%]">
        Comprehensive architectural solutions from concept to completion. 
        Design, planning, construction management, and renovation services 
        crafted to bring your vision to life.
      </h5>
      <div id="services here" className="flex flex-col gap-7 w-full">
        <div className="flex flex-row w-full gap-7">
            <div className="relative flex flex-col gap-10 p-7 rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-1/3 overflow-hidden group">
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" 
                            alt="Architectural Design"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit" id="icon here">
                    <MdDesignServices className="text-white text-3xl" />
                </div>
                <h5 className="text-3xl text-white/90 font-light tracking-tighter ">
                    Layout and Elevation Design
                </h5>
                <p className="text-xl text-stone-400">
                    Professional architectural layouts and elevation designs that optimize space and enhance aesthetic appeal.
                </p>
                <Button variant="white" route="/">Learn More </Button>
            </div>
             <div className="relative flex flex-col gap-10 p-7 rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-1/3 overflow-hidden group">
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80" 
                            alt="3D Rendering"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit" id="icon here">
                    <MdViewInAr className="text-white text-3xl" />
                </div>
                <h5 className="text-3xl text-white/90 font-light tracking-tighter ">
                    3D Rendering
                </h5>
                <p className="text-xl text-stone-400">
                    Photorealistic 3D visualizations that bring your architectural vision to life before construction begins.
                </p>
                <Button variant="white" route="/">Learn More </Button>
            </div>
             <div className="relative flex flex-col gap-10 p-7 rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-1/3 overflow-hidden group">
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" 
                            alt="AI Remodeling"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit" id="icon here">
                    <MdSmartToy className="text-white text-3xl" />
                </div>
                <h5 className="text-3xl text-white/90 font-light tracking-tighter ">
                    AI Remodeller
                </h5>
                <p className="text-xl text-stone-400">
                    AI-powered design suggestions and remodeling solutions for modern, efficient space transformation.
                </p>
                <Button variant="white" route="/">Learn More </Button>
            </div>
        </div>
        <div className="flex flex-row w-full gap-7">
            <div className="relative flex flex-col gap-10 p-7 rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-1/3 overflow-hidden group">
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80" 
                            alt="CRM for Contractors"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit" id="icon here">
                    <MdBusinessCenter className="text-white text-3xl" />
                </div>
                <h5 className="text-3xl text-white/90 font-light tracking-tighter ">
                    CRM for Contractors
                </h5>
                <p className="text-xl text-stone-400">
                    Comprehensive customer relationship management system designed specifically for contractors and remodellers.
                </p>
                <Button variant="white" route="/">Learn More </Button>
            </div>
             <div className="relative flex flex-col gap-10 p-7 rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-1/3 overflow-hidden group">
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1564540583246-934409427776?w=400&q=80" 
                            alt="Material Showroom"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit" id="icon here">
                    <MdStore className="text-white text-3xl" />
                </div>
                <h5 className="text-3xl text-white/90 font-light tracking-tighter ">
                    Material Showroom
                </h5>
                <p className="text-xl text-stone-400">
                    Extensive showroom with premium materials and expert sourcing services for all your construction needs.
                </p>
                <Button variant="white" route="/">Learn More </Button>
            </div>
             <div className="relative flex flex-col gap-10 p-7 rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-1/3 overflow-hidden group">
                <div className="absolute top-0 -right-12 w-64 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80" 
                            alt="Website Development"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-stone-600 rounded-full p-3 w-fit" id="icon here">
                    <MdWeb className="text-white text-3xl" />
                </div>
                <h5 className="text-3xl text-white/90 font-light tracking-tighter ">
                    Free Website
                </h5>
                <p className="text-xl text-stone-400">
                    Get a professional website free with our CRM package to showcase your work and attract more clients.
                </p>
                <Button variant="white" route="/">Learn More </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
