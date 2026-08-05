import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'


const Skills = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 0%',
        end: 'top -110%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
    })
  return (
    <div className='parent'>
      <div id='page1' className='py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-40 -top-80 lg:left-[30vw] left-[30vw] bg-amber-200'>
          <img ref={imageRef} className='h-full object-cover w-full' src="" alt="" />
        </div>
      <div className="relative font-[font2]">
      <div className="lg:mt-[50vh] mt-[35vh]">
        <h1 className="text-[19vw] text-center uppercase leading-[18vw]">
          Always <br />
          Learning
        </h1>
      </div>

      <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
        <p className='lg:text-3xl text-xl leading-tight'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          I'm a full-stack developer who enjoys transforming ideas into fast,
          scalable, and intuitive digital experiences. I approach every project
          with curiosity, focusing on clean architecture, thoughtful design, and
          maintainable code. Whether I'm building modern web applications,
          exploring cloud technologies, or experimenting with new tools, my goal
          is always the same: create software that solves real problems and
          delivers a seamless user experience.
        </p>
      </div>
    </div>
      </div>
      <div id='page2' className='h-screen'>

      </div>
    </div>
  );
};

export default Skills;
