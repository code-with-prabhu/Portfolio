import React from 'react'
import Video from './Video'

const HomeHero = () => {
  return (
    <div className='font-[font1]  mt-72 lg:mt-0 pt-9 mr-9 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                The spark for
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                All
                <div className='h-[7vw] w-[16vw] rounded-full shrink-0 mt-2 overflow-hidden '>
                    <Video className="rounded-full" />
                </div>
                Things
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Creative
            </div>
        </div>
  )
}

export default HomeHero
