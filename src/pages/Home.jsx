import React from 'react'
import Video from '../components/home/Video'
import HomeHero from '../components/home/HomeHero'
import HomeBottom from '../components/home/HomeBottom'
import LocationTimeIndicator from '../components/common/LocationTimeIndicator'

const Home = () => {
  return (
     <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHero />
        <HomeBottom />
      </div>
      <LocationTimeIndicator />
    </div>
  )
}

export default Home
