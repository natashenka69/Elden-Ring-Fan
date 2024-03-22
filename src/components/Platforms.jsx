import React from 'react'

import background from "../assets/platforms.jpg"

import { FaSteam, FaPlaystation, FaXbox } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

export default function Platforms() {
  return (
    <div className='w-full h-[400px] relative'>
      <div className=''>
        <img src={background} alt="" className='w-full h-[400px] object-cover object-bottom relative' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-black'>
          <p className='text-white md:text-[32px] text-[28px]'>Wishlist on your favourite platform</p>
          <p className='text-white md:text-[18px] text-[16px]'>Wishlist now to stay tuned for the latest updates about this video game! </p>
          <div className='flex flex-col lg:flex-row justify-center text-center mt-8 items-center'>
          <button className='flex lg:mb-0 mb-4 justify-between space-x-20 items-center text-center bg-white mr-4 px-4 py-[12px] rounded-sm hover:bg-transparent border duration-300 text-orange-700 hover:text-white'>
            <FaSteam size={24}/>
            <p>Steam</p>
            <IoOpenOutline/>
          </button>
          <button className='flex lg:mb-0 mb-4 justify-between space-x-16 items-center text-center bg-white mr-4 px-4 py-[12px] rounded-sm hover:bg-transparent border duration-300 text-orange-700 hover:text-white'>
            <FaPlaystation size={24}/>
            <p>Playstation</p>
            <IoOpenOutline/>
          </button>
          <button className='flex justify-between space-x-[88px] items-center text-center bg-white mr-4 px-4 py-[12px] rounded-sm hover:bg-transparent border duration-300 text-orange-700 hover:text-white'>
            <FaXbox size={24}/>
            <p>Xbox</p>
            <IoOpenOutline/>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
