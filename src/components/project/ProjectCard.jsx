import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <>
      {/* --- CARD 1 --- */}
      <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full flex-1'>
        <img className='h-full w-full object-cover' src={props.image1} alt={props.name1 || "Project"} />
        
        <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 flex flex-col items-center justify-center gap-6 left-0 h-full w-full bg-black/60 p-4'>
          
          {/* Dynamic Project Name */}
          <h3 className="text-white text-4xl lg:text-6xl font-bold font-[font2] text-center uppercase tracking-wide">
            {props.name1}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to={props.live1}>
              <h2 className='uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors'>
                Live Link
              </h2>
            </Link>
            <Link to={props.github1}>
              <h2 className='uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors'>
                GitHub
              </h2>
            </Link>
          </div>
        </div>
      </div>

      {/* --- CARD 2 --- */}
      {props.image2 && (
        <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full flex-1'>
          <img className='h-full w-full object-cover' src={props.image2} alt={props.name2 || "Project"} />
          
          <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 flex flex-col items-center justify-center gap-6 left-0 h-full w-full bg-black/60 p-4'>
            
            {/* Dynamic Project Name */}
            <h3 className="text-white text-4xl lg:text-6xl font-bold font-[font2] text-center uppercase tracking-wide">
              {props.name2}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to={props.live2}>
                <h2 className='uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors'>
                  Live Link
                </h2>
              </Link>
              <Link to={props.github2}>
                <h2 className='uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors'>
                  GitHub
                </h2>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;