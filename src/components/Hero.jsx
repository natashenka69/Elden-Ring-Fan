import React from 'react'

import bg from "../assets/project.mp4"
import logo from "../assets/elden.png"
import button from "../assets/button.png"
import line from "../assets/line.png"

export default function 
() {
  return (
    <div className='w-full h-full relative'>
        <div className='relative '>
          <div className='bg-black/30 backdrop-blur-[1px] w-full h-full absolute'></div>
          <img src={line} className='w-full h-full left-0 bottom-0 absolute'/>
        <video autoPlay loop muted className="w-full h-full object-cover ">
           <source src={bg} type="video/mp4" />
           Your browser does not support the video tag.
        </video>
        <div className='absolute w-full h-full top-0 justify-center items-center flex flex-col'>
        <img src={logo} className="lg:h-[160px] h-[50px] md:h-[100px]"/>
        <button className='mt-4'>
            <img src={button} className="lg:h-[120px] h-[70px] md:h-[90px] backdrop-blur-sm"/>
        </button>
        </div>
        </div>
    </div>
  )
}
