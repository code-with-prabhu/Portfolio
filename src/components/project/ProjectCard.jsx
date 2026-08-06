import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <>
      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        {/* Added gap-4 to space out the two links */}
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center gap-4 left-0 h-full w-full bg-black/40">
          <Link to={props.live1}>
            <h2 className="uppercase text-2xl lg:text-4xl font-[font1] border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors">
              Live Link
            </h2>
          </Link>
          <Link to={props.github1}>
            <h2 className="uppercase text-2xl lg:text-4xl font-[font1] border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors">
              GitHub
            </h2>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        {/* Added gap-4 to space out the two links */}
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center gap-4 left-0 h-full w-full bg-black/40">
          <Link to={props.live2}>
            <h2 className="uppercase text-2xl lg:text-4xl font-[font1] border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors">
              Live Link
            </h2>
          </Link>
          <Link to={props.github2}>
            <h2 className="uppercase text-2xl lg:text-4xl font-[font1] border-4 pt-2 pb-1 px-6 text-white border-white rounded-full hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors">
              GitHub
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;