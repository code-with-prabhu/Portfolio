import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/project/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/common/Footer'
import { projects } from '../data/data'

const Projects = () => {

  // Updated array to include live and github links for both items in the row
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <>
      <div className='lg:p-4 p-2 mb-[100vh]'>
        <div className=' pt-[45vh]'>
          <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
        </div>
        <div className='-lg:mt-20 lol pb-10'>
          {projects.map(function (elem, idx) {
            return (
              <div key={idx} className='hero w-full lg:h-[550px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
                {/* Passing the new props down to ProjectCard */}
                <ProjectCard 
                  image1={elem.image1} 
                  live1={elem.live1}
                  github1={elem.github1}
                  image2={elem.image2} 
                  live2={elem.live2}
                  github2={elem.github2}
                />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects