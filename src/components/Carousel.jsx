import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Tilt } from 'react-tilt';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import border from "../assets/border.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import astrologer from "../assets/classes/astrologer.png"
import bandit from "../assets/classes/bandit.png"
import hero from "../assets/classes/hero.png"
import confessor from "../assets/classes/confessor.png"
import prisoner from "../assets/classes/prisoner.png"
import prophet from "../assets/classes/prophet.png"
import samurai from "../assets/classes/samurai.png"
import vagabon from "../assets/classes/vagabon.png"
import warrior from "../assets/classes/warrior.png"
import wretch from "../assets/classes/wretch.png"

const slides = [astrologer, bandit, hero, confessor, prisoner, prophet, samurai, vagabon, warrior, wretch]

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            25,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          2000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "ease-in",    // Easing on enter/exit.
}
export default function Carousel() {

  return (
    <div className='h-full w-full mt-[270px] min-[700px]:mt-0 bg-black '>
      <div className='flex justify-center items-center'>
        <img src={border} className="lg:w-[800px] md:w-[600px] w-[400px] h-full mt-24 mb-12"/>
      </div>
      <Swiper
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide"
      }}
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        962: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Autoplay]} className="relative max-w-[1600px]">
      {slides.map((item) => (
        <SwiperSlide key={item}>
          <div className='flex group justify-center items-center'>
          <Tilt  options={defaultOptions} className="duration-300">
          <img src={item} className="w-full xl:h-full h-[500px]"/>
          </Tilt>
          </div>
        </SwiperSlide>
      ))}
      <div className='button-prev-slide rounded-full absolute z-10 top-[45%] left-4 2xl:left-0 bg-[#64614d] p-4 cursor-pointer'>
        <FaArrowLeft size={20}/>
      </div>
      <div className='button-next-slide rounded-full absolute z-10 top-[45%] right-4 2xl:right-0 bg-[#64614d] p-4 cursor-pointer'>
        <FaArrowRight size={20}/>
      </div>
      </Swiper>
      <div className='flex justify-center items-center'>
        <img src={border} className="lg:w-[800px] md:w-[600px] w-[400px] h-full mt-24 mb-12"/>
      </div>
    </div>
  )
}
