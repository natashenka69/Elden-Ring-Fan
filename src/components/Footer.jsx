import React from 'react'

import { FaTwitch, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='w-full h-full bg-black'>
        <div className='flex md:flex-row flex-col justify-between max-w-[1850px] items-center'>
            <div className='text-white'>
                <p className='border-4 px-4 rounded-xl border-red-500 uppercase text-[30px] font-bold md:mb-28 mt-8 ml-4 cursor-pointer max-w-[260px] md:items-center items-start'>Rudya Namko</p>
            </div>
            <div className='flex flex-col text-white mt-6 justify-center text-[20px] items-center md:items-start'>
                <p className='mb-2 cursor-pointer hover:text-red-500 duration-300'>Games</p>
                <p className='mb-2 cursor-pointer hover:text-red-500 duration-300'>About</p>
                <p className='mb-2 cursor-pointer hover:text-red-500 duration-300'>Press</p>
                <p className='mb-2 cursor-pointer hover:text-red-500 duration-300'>Recruitment</p>
                <p className='hover:text-red-500 duration-300 cursor-pointer'>Licensing</p>
            </div>
            <div className='flex flex-row text-white mt-4 items-center mr-2'>
                <FaTwitch size={30} className="cursor-pointer hover:text-red-500 duration-300"/>
                <FaInstagram size={30} className="ml-8 cursor-pointer hover:text-red-500 duration-300"/>
                <FaYoutube size={30} className="ml-8 cursor-pointer hover:text-red-500 duration-300"/>
                <FaTwitter size={30} className="ml-8 cursor-pointer hover:text-red-500 duration-300"/>
                <FaFacebook size={30} className="ml-8 cursor-pointer hover:text-red-500 duration-300"/>
            </div>
        </div>
        <p className='text-white ml-4 text-[12px] mt-4 md:justify-start justify-center flex'>© 2022 - 2024 Rudya Namco Europe</p>
    </div>
  )
}
