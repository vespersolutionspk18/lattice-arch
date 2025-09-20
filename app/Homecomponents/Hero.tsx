import React from 'react'
import Button from '../components/Button'
import Marquee from 'react-fast-marquee'
import { 
  FaApple, 
  FaMicrosoft, 
  FaGoogle, 
  FaAmazon, 
  FaFacebook,
  FaSpotify,
  FaSlack,
  FaLinkedin
} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className=" flex flex-col justify-between lg:flex-row lg:gap-10 gap-5 w-full lg:p-16 p-5 mt-16">
      <div className="lg:w-[40%] w-full flex flex-col gap-10 justify-between">
        <div className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-4 py-2 text-lg text-white">
            #1 in Smart, Stylish Spaces
        </div>
        <h1 className="text-7xl">
            Crafting Spaces That Match <span className="font-serif italic">Your Style</span> and Needs
        </h1>
        <p className="text-2xl text-stone-400">
            Building new or upgrading? We craft stylish, inspiring spaces that feel uniquely yours.
        </p>
        <div className="flex flex-row gap-5">
        <Button variant='white' route='/contact'>Get In Touch</Button>
        <Button variant='dark' route='/projects'>View Services</Button>
        </div>
        <div className="w-full relative">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <Marquee
              direction="right"
              speed={30}
              gradient={false}
              className="overflow-y-hidden"
            >
              <div className="flex items-center gap-20 py-4 mr-20">
                <FaApple className="text-4xl text-stone-500" />
                <FaMicrosoft className="text-4xl text-stone-500" />
                <FaGoogle className="text-4xl text-stone-500" />
                <FaAmazon className="text-4xl text-stone-500" />
                <FaFacebook className="text-4xl text-stone-500" />
                <FaSpotify className="text-4xl text-stone-500" />
                <FaSlack className="text-4xl text-stone-500" />
                <FaLinkedin className="text-4xl text-stone-500" />
              </div>
            </Marquee>
        </div>
      </div>
      <div className="lg:w-[40%] w-full min-h-[600px] rounded-b-[32px] relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-t-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>

        {/* Feature Pills */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/30">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-white text-sm font-medium">Smart planning</span>
          </div>
        </div>

        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
          <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/30">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-white text-sm font-medium">Seamless process</span>
          </div>
        </div>

        {/* Client Satisfaction Pill - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-20">
          <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/30">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-white text-sm font-medium">Client satisfaction</span>
          </div>
        </div>

        {/* Client Rating Section - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
            {/* Avatar Stack */}
            <div className="flex -space-x-3 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
                alt="Client 1" 
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" 
                alt="Client 2" 
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" 
                alt="Client 3" 
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop" 
                alt="Client 4" 
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
            </div>

            {/* Stars */}
            <div className="flex gap-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className="w-4 h-4 fill-white" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Rating Text */}
            <div className="text-center">
              <p className="text-white text-sm font-medium">Rated 5 Stars by</p>
              <p className="text-white/80 text-xs">2k+ happy clients</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hero
