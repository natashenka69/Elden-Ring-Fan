import React, {useState} from 'react'


import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"



const MobileNav = () => {

const [nav, setNav] = useState(false)
const handleClickNav = () => setNav(!nav)


  return (
    <div className='lg:hidden flex mx-auto justify-start items-center h-full mr-0'>
        {nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300'></div> : <div className='duration-300'></div>}
        <div className={nav ? 'fixed top-0 right-0 md:w-[475px] w-[300px] h-screen bg-black z-20 duration-500' : 'fixed top-0 right-[-100%] md:w-[475px] w-[300px] h-screen bg-black z-20 duration-500'}>
        <AiOutlineClose size={40} className="cursor-pointer text-white hover:text-red-500 duration-300 mt-[27px] ml-4 bg-[#302c2c] rounded-xl py-2 px-2 " onClick={() => handleClickNav()}/>
        <div className='flex flex-col items-center justify-center text-center mt-8 text-white space-y-4 uppercase'>
          <p className='text-[18px] text-gray-200 cursor-pointer hover:text-orange-400 duration-300 border px-[63px] py-2 hover:border-orange-400'>Key features</p>
          <p className='text-[18px] text-gray-200 cursor-pointer hover:text-orange-400 duration-300 border px-[12px] py-2 hover:border-orange-400'>Shadow Of The Erdtree</p>
          <p className='text-[18px] text-gray-200 cursor-pointer hover:text-orange-400 duration-300 border px-[51px] py-2 hover:border-orange-400'>Official Merch</p>
          <p className='text-[18px] text-gray-200 cursor-pointer hover:text-orange-400 duration-300 border px-[95px] py-2 hover:border-orange-400'>Music</p>
          <p className='text-[18px] text-gray-200 cursor-pointer hover:text-orange-400 duration-300 border px-[104px] py-2 hover:border-orange-400'>Wiki</p>
          <p className='text-[18px] text-gray-200 cursor-pointer hover:text-orange-400 duration-300 border px-20 py-2 hover:border-orange-400'>Concert</p>
        </div>
        <button className='mt-8 uppercase text-white border border-[#c89c54] text-[15px] bg-[#c89c54] px-[26px] py-[16px] rounded-md font-semibold tracking-wider hover:bg-black hover:text-orange-300
        hover:border hover:border-orange-300 duration-300
        '>Shop Now</button>
        </div>
        <AiOutlineMenu size={30} onClick={setNav} className="text-white cursor-pointer hover:text-red-500 duration-300"/>
    </div>
    
  )
}

export default MobileNav