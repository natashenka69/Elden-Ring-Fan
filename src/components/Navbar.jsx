import React from 'react'

import { IoSearchOutline } from "react-icons/io5";

import logo from "../assets/elden.png"
import MobileNav from './MobileNav';

export default function Navbar() {
  return (
    <div className='w-full h-[70px] bg-black'>
      <div className='flex justify-between text-center items-center h-[75px] mx-8'>
        <div className='flex'>
          <img src={logo} className="md:h-[32px] h-[20px] mr-6 hover:scale-105 duration-300 cursor-pointer"/>
          <div className='xl:flex hidden'>
          <p className='text-[18px] ml-8 text-gray-200 cursor-pointer hover:text-orange-400 duration-300'>Key features</p>
          <p className='text-[18px] ml-8 text-gray-200 cursor-pointer hover:text-orange-400 duration-300'>Shadow Of The Erdtree</p>
          <p className='text-[18px] ml-8 text-gray-200 cursor-pointer hover:text-orange-400 duration-300'>Official Merch</p>
          <p className='text-[18px] ml-8 text-gray-200 cursor-pointer hover:text-orange-400 duration-300'>Music</p>
          <p className='text-[18px] ml-8 text-gray-200 cursor-pointer hover:text-orange-400 duration-300'>Wiki</p>
          <p className='text-[18px] ml-8 text-gray-200 cursor-pointer hover:text-orange-400 duration-300'>Concert</p>
          </div>
        </div>
        <div className='xl:flex hidden items-center h-[75px] text-center'>
        <IoSearchOutline size={28} className="text-white mr-[26px]"/>
        <button className='uppercase text-white border border-[#c89c54] text-[15px] bg-[#c89c54] px-[26px] py-[10px] rounded-md font-semibold tracking-wider hover:bg-black hover:text-orange-300
        hover:border hover:border-orange-300 duration-300
        '>Shop Now</button>
        </div>
        <MobileNav/>
      </div>
    </div>
  )
}
