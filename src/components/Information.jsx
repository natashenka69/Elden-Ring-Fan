import React, { useState, useEffect, useRef } from 'react'

import bg from "../assets/bginfo.png"
import videofirst from "../assets/infofirst.mp4"
import videosecond from "../assets/infosecond.mp4"
import InformationMobile from './InformationMobile';

export default function Information() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleScrollVisibility = () => {
      if (!componentRef.current) return;

      const top = componentRef.current.getBoundingClientRect().top;
      const offset = window.innerHeight * 0.94; // Adjust this value if needed

      if (top < offset && top > -componentRef.current.clientHeight) {
        setIsVisible(true);
        window.addEventListener('scroll', handleScroll);
      } else {
        setIsVisible(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    handleScrollVisibility();
    window.addEventListener('scroll', handleScrollVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollVisibility);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className='w-full h-[800px] min-[800px]:h-[940px] min-[700px]:h-[1000px] min-[900px]:h-[840px] min-[1000px]:h-[800px] min-[1020px]:h-[980px] min-[1050px]:h-[1000px] xl:h-[1000px] min-[1400px]:h-[1100px] relative min-[1800px]:bg-black bg-gradient-to-b from-[#171918] to-[#186052] min-[1800px]:from-black min-[1800px]:to-black' ref={componentRef}>
        <div className='relative hidden md:block'>
        <img src={bg} className="hidden min-[1800px]:block"/>
        <div className='lg:absolute w-full h-full top-0'>
            <div className='flex flex-col items-center justify-start  h-full'>
            <div className='flex flex-col md:flex-row justify-center mx-4 items-end space-y-16 space-x-4'>
              <div
              
              className={`flex flex-col justify-center items-end ${
          isVisible ? 'md:transform' : ''
        }`}
        style={{ transform: isVisible ? `translateY(${(scrollY - 1200) * -0.1}px)` : 'none' }}
              >
              <p className='bg-orange-500 px-8 py-2 mb-4 text-white lg:text-[26px] md:text-[20px] font-bold'>A NEW FANTASY WORLD</p>
                <div className='text-right'>
            <p className='text-white max-w-[700px]'>Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. </p>
            <p className='text-white mt-4 max-w-[700px]'>Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures. </p>
                </div>
              </div>
            <video autoPlay loop muted className={`lg:w-[600px] md:w-[400px] h-full ${
          isVisible ? 'md:transform' : ''
        }`}
        style={{ transform: isVisible ? `translateY(${scrollY * 0.1}px)` : 'none' }}
            >
                <source src={videofirst} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className='flex flex-col md:flex-row justify-center mx-4 items-end space-x-4 mt-24'>
            <video autoPlay loop muted className={`lg:w-[600px] md:w-[400px] h-full ${
          isVisible ? 'md:transform' : ''
        }`}
        style={{ transform: isVisible ? `translateY(${scrollY * 0.1}px)` : 'none' }}>
                <source src={videosecond} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`flex flex-col justify-center items-start ${
          isVisible ? 'md:transform' : ''
        }`}
        style={{ transform: isVisible ? `translateY(${(scrollY - 1800) * -0.1}px)` : 'none' }}
              >
              <p className='bg-orange-500 mb-4 px-8 py-2 text-white lg:text-[26px] md:text-[20px] font-bold'>WORLD EXPLORATION IN THE LANDS BETWEEN</p>
            <p className='text-white max-w-[700px]'>ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly.</p>
            <p className='text-white mt-4 max-w-[700px]'>Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title. </p>
              </div>
            </div>
            </div>
            
        </div>
        </div>
        <InformationMobile/>
    </div>
  )
}
