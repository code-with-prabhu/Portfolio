import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    // 1. Made the container relative and used flex-col on mobile to prevent squishing
    <div className="relative w-full font-[font2] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-2 px-4 py-8 lg:p-0">
      
      {/* 2. Grouped buttons in a flex container so they stay side-by-side on mobile */}
      <div className="flex items-center justify-center gap-3 w-full lg:w-auto">
        <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-6 py-2 lg:pt-1 lg:pb-2 lg:px-14 border-white rounded-full uppercase transition-colors">
          <Link className="text-xl md:text-2xl lg:text-[6vw] lg:mt-6" to="/projects">
            Projects
          </Link>
        </div>
        
        <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-6 py-2 lg:pt-1 lg:pb-2 lg:px-14 border-white rounded-full uppercase transition-colors">
          <Link className="text-xl md:text-2xl lg:text-[6vw] lg:mt-6" to="/skills">
            Skills
          </Link>
        </div>
      </div>

      {/* 3. Made the paragraph 'relative' on mobile to avoid overlap, and 'absolute' on lg */}
      <p className="relative lg:absolute lg:w-[17vw] w-full max-w-sm lg:max-w-none lg:right-20 lg:bottom-30 font-[font1] lg:text-lg text-sm lg:leading-relaxed leading-tight text-center lg:text-left mt-2 lg:mt-0">
        
        {/* 4. Hid the hardcoded spacing on mobile so it doesn't break the centering */}
        <span className="hidden lg:inline">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        I build software with curiosity, creativity, and purpose. I believe the
        best ideas come from exploring new possibilities, asking questions.
        Every application I create is designed to be clean, scalable. I value
        continuous learning, development, and writing code that makes
        a real difference today.
      </p>
      
    </div>
  );
};

export default HomeBottom;