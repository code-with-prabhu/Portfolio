import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <>
      {/* --- CARD 1 --- */}
      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full flex-1">
        <img className="h-full w-full object-cover" src={props.image1} alt={props.name1 || "Project"} />
        
        {/* Hover Overlay */}
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/60 p-4">
          
          {/* Project Name */}
          <h3 className="text-white text-4xl lg:text-6xl font-bold font-[font2] text-center uppercase tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {props.name1}
          </h3>

          {/* Links Container */}
          <div className="flex items-center justify-center gap-4">
            <Link to={props.live1}>
              <span className="uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors block">
                Live Link
              </span>
            </Link>
            <Link to={props.github1}>
              <span className="uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors block">
                GitHub
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* --- CARD 2 --- */}
      {/* Added a conditional render just in case the last row only has 1 project */}
      {props.image2 && (
        <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full flex-1">
          <img className="h-full w-full object-cover" src={props.image2} alt={props.name2 || "Project"} />
          
          {/* Hover Overlay */}
          <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/60 p-4">
            
            {/* Project Name */}
            <h3 className="text-white text-4xl lg:text-6xl font-bold font-[font2] text-center uppercase tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {props.name2}
            </h3>

            {/* Links Container */}
            <div className="flex items-center justify-center gap-4">
              <Link to={props.live2}>
                <span className="uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors block">
                  Live Link
                </span>
              </Link>
              <Link to={props.github2}>
                <span className="uppercase text-xl lg:text-3xl font-[font1] border-2 lg:border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors block">
                  GitHub
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;