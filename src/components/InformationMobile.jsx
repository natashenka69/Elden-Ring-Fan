import React from 'react'

import videofirst from "../assets/infofirst.mp4"
import videosecond from "../assets/infosecond.mp4"

export default function InformationMobile() {
  return (
    <div className='md:hidden bg-gradient-to-b from-[#171918] to-[#186052] min-[500px]:h-[1070px] min-[700px]:h-[1000px]  w-full'>
        <div className='flex flex-col items-center justify-center'>
            <div className='justify-center items-center flex flex-col'>
            <video autoPlay loop muted className="w-[350px] h-full mt-12">
                <source src={videofirst} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="flex flex-col justify-center items-center mt-4 mx-4">
            <p className='bg-orange-500 px-8 py-2 mb-4 text-white text-[18px] font-bold'>A NEW FANTASY WORLD</p>
                <div className='text-right'>
            <p className='text-white max-w-[700px]'>Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. </p>
            <p className='text-white mt-4 max-w-[700px]'>Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures. </p>
                </div>
              </div>
            </div>
            <div className='justify-center items-center flex flex-col'>
            <video autoPlay loop muted className="w-[350px] h-full mt-12">
                <source src={videosecond} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="flex flex-col justify-center items-center mt-4 mx-4">
              <p className='bg-orange-500 mb-4 px-8 py-2 text-white text-[17px] font-bold'>WORLD EXPLORATION IN THE LANDS BETWEEN</p>
            <p className='text-white text-[16px]'>ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly.</p>
            <p className='text-white mt-4'>Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title. </p>
              </div>
            </div>
        </div>
    </div>
  )
}
