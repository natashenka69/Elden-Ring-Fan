import React from 'react'

import { IoHeart } from 'react-icons/io5'

import background from "../assets/news/shadow.jpg"
import patchOne from "../assets/news/patch1.png"
import patchTwo from "../assets/news/patch2.jpg"
import patchThree from "../assets/news/patch3.jpg"

export default function News() {
  return (
    <div className='w-full h-full bg-[#081611]'>
        <div className='flex flex-row justify-center items-start mx-4'>
            <div className='mr-12 mt-12 hidden xl:flex-col xl:flex cursor-pointer mb-8'>
            <img className='w-[1050px] object-cover' src={background}/>
            <div className='bg-white w-full h-[280px] xl:h-[240px] 2xl:h-[220px]'>
                <div className='mb-4 mt-8 mx-4 flex justify-between items-center'>
                <p className='text-[12px]'>21 February 2024</p>
                <IoHeart/>
                </div>
            <p className='text-[28px] max-w-[950px] ml-4 text-orange-500 font-medium mr-4 lg:mb-4 2xl:mb-8'>Fall from grace in ELDEN RING SHADOW OF THE ERDTREE, the expansion to ELDEN RING arriving this june</p>
            <p className='items-end flex justify-end mr-4 text-orange-600'>Learn More</p>
            </div>
            </div>
            <div className='flex flex-col mt-12'>
                <div className='mb-4 flex flex-row cursor-pointer'>
                <img className='object-cover md:w-[300px] md:h-[170px] h-[120px] xl:h-[120px] min-[1536px]:h-[140px] min-[1830px]:h-[170px]' src={background} alt="" />
                  <div className='bg-white w-[450px]'>
                    <div className='flex justify-between items-center mx-4 mt-4'>
                    <p className='text-[12px]'>21 February 2024</p>
                    <IoHeart/>
                    </div>
                    <p className='mx-4 mt-4 xl:text-[13px] 2xl:text-[17px] text-[18px] md:flex hidden lg:hidden 2xl:flex'>
                    Fall from grace in ELDEN RING SHADOW OF THE ERDTREE, the expansion to ELDEN RING arriving this june
                    </p>
                    <p className='mx-4 mt-4 xl:text-[13px] 2xl:text-[20px] text-[18px] md:hidden flex lg:flex 2xl:hidden'>
                    Fall from grace in ELDEN RING SHADOW OF THE ERDTREE, the ex...
                    </p>
                    <p className='items-end md:flex justify-end mr-4 mt-4 xl:hidden hidden'>Learn More</p>
                  </div>
                </div>
                <div className='mb-4 flex flex-row cursor-pointer'>
                <img className='object-cover md:w-[300px] md:h-[170px] h-[120px] xl:h-[120px] min-[1536px]:h-[140px] min-[1830px]:h-[170px]' src={patchThree} alt="" />
                  <div className='bg-white w-[450px]'>
                    <div className='flex justify-between items-center mx-4 mt-4'>
                    <p className='text-[12px]'>21 February 2024</p>
                    <IoHeart/>
                    </div>
                    <p className='mx-4 mt-4 xl:text-[13px] 2xl:text-[20px] text-[18px]'>
                    Elden Ring - Patch Notes Version 1.10
                    </p>
                    <p className='items-end md:flex justify-end mr-4 mt-16 xl:hidden hidden'>Learn More</p>
                  </div>
                </div>
                <div className='mb-4 flex flex-row cursor-pointer'>
                <img className='object-cover md:w-[300px] md:h-[170px] h-[120px] xl:h-[120px] min-[1536px]:h-[140px] min-[1830px]:h-[170px]' src={patchTwo} alt="" />
                  <div className='bg-white w-[450px]'>
                    <div className='flex justify-between items-center mx-4 mt-4'>
                    <p className='text-[12px]'>21 February 2024</p>
                    <IoHeart/>
                    </div>
                    <p className='mx-4 mt-4 xl:text-[13px] 2xl:text-[20px] text-[18px]'>
                    Elden Ring - Patch Notes Version 1.9
                    </p>
                    <p className='items-end md:flex justify-end mr-4 mt-16 xl:hidden hidden'>Learn More</p>
                  </div>
                </div>
                <div className='mb-4 flex flex-row cursor-pointer'>
                <img className='object-cover md:w-[300px] md:h-[170px] h-[120px] xl:h-[120px] min-[1536px]:h-[140px] min-[1830px]:h-[170px]' src={patchOne} alt="" />
                  <div className='bg-white w-[450px]'>
                    <div className='flex justify-between items-center mx-4 mt-4'>
                    <p className='text-[12px]'>21 February 2024</p>
                    <IoHeart/>
                    </div>
                    <p className='mx-4 mt-4 xl:text-[13px] 2xl:text-[20px] text-[18px]'>
                    Elden Ring - Patch Notes Version 1.8
                    </p>
                    <p className='items-end md:flex justify-end mr-4 mt-16 xl:hidden hidden'>Learn More</p>
                  </div>
                </div>
                <div className='mt-[24px] justify-center xl:justify-start flex xl:mb-0 mb-8'>
                <button className='uppercase text-white border border-[#c89c54] text-[15px] bg-[#c89c54] px-[26px] py-[10px] rounded-md font-semibold tracking-wider hover:bg-[#081611] hover:text-orange-300
        hover:border hover:border-orange-300 duration-300
        '>See All News</button>
                </div>
            </div>
        </div>
    </div>
  )
}
