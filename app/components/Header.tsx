import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className="px-4 w-full bg-black">
      <div className="flex flex-row px-5 py-3 items-center   justify-between">
        <div className="font-light text-3xl w-[20%] text-white">
            Lattice
        </div>
        <div className="flex flex-row gap-8 text-white text-xl font-light">
            <p>Home</p>
            <p>Services</p>
            <p>About</p>
            <p>Projects</p>
        </div>
       <div className="w-[20%] flex flex-row justify-end">
         <Button variant='white' route='/contact'>Book A Meeting</Button>
       </div>
       
      </div>
    </div>
  )
}

export default Header
