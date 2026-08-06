import React from 'react';
import { RiJavascriptFill } from '@remixicon/react';
// --- DATA ARRAYS ---


const allTechItems = [
  { name: 'Java', icon: <RiJavascriptFill/>, hoverBg: 'hover:bg-[#f89820]' },       // Java Orange
  { name: 'Python', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#FFE873]' },    // Python Yellow
  { name: 'React', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#61DAFB]' },     // React Blue
  { name: 'Express', icon: <span className="text-xl font-light tracking-tight">iOS</span>, hoverBg: 'hover:bg-[#e5e7eb]' }, // Light Gray
  { name: 'MongoDB', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#47A248]' },   // MongoDB Green
  { name: 'Node', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#339933]' },      // Node Green
  { name: 'Github', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#d1d5db]' },    // Github Gray
  { name: 'Javascript', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#F7DF1E]' },// JS Yellow
  { name: 'MySQL', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#87d3e6]' },     // MySQL Light Blue
  { name: 'AWS', icon: <RiJavascriptFill />, hoverBg: 'hover:bg-[#FF9900]' },       // AWS Orange
];

// --- 8x2 GRID MAPPING FOR DESKTOP ---
// Row 1: 1 blank | 6 items | 1 blank
// Row 2: 2 blanks | 4 items | 2 blanks
const desktopGrid = [
  null, allTechItems[0], allTechItems[1], allTechItems[2], allTechItems[3], allTechItems[4], allTechItems[5], null,
  null, null, allTechItems[6], allTechItems[7], allTechItems[8], allTechItems[9], null, null,
];


// --- MAIN COMPONENT ---
const LanguageStackSection = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center font-[font1] mb-5 text-black ">
      {/* Outer wrapper without borders */}
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 md:p-16 lg:p-24 border-[#c9c9c4] bg-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[font2] font-bold tracking-tight w-full lg:w-1/2">
            We speak your language
          </h2>
          <p className="text-lg md:text-xl w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-16 leading-relaxed text-gray-900 font-medium">
            You don’t have to reinvent your stack to get great video. We’re compatible with your favorite languages and frameworks.
          </p>
        </div>

        {/* --- DESKTOP GRID (Hidden on mobile/tablet) --- */}
        <div className="hidden lg:grid grid-cols-8 bg-white border-1 border-[#c9c9c4]">
          {desktopGrid.map((item, index) => {
            const isBottomRow = index >= 8;
            const isLastInRow = (index + 1) % 8 === 0;
            
            return (
              <div 
                key={index} 
                className={`
                  flex flex-col items-center justify-center p-6 min-h-[160px] border-[#c9c9c4] 
                  ${!isBottomRow ? 'border-b' : ''} 
                  ${!isLastInRow ? 'border-r' : ''}
                  ${item ? item.hoverBg : ''} 
                  transition-colors duration-300 cursor-pointer
                `}
              >
                {item && (
                  <>
                    <div className="h-10 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                      {item.name}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* --- MOBILE / TABLET GRID (Hidden on Desktop) --- */}
        <div className="grid lg:hidden grid-cols-2 md:grid-cols-4 bg-white border-b border-[#c9c9c4]">
          {allTechItems.map((item, index) => {
            // Determine border classes safely for smaller screens
            const isMobileRightEdge = (index + 1) % 2 === 0;
            const isTabletRightEdge = (index + 1) % 4 === 0;
            const isBottomRow = index >= 8; // Because there are 10 items total
            
            return (
              <div 
                key={item.name} 
                className={`
                  flex flex-col items-center justify-center p-6 min-h-[140px] border-[#c9c9c4]
                  ${!isBottomRow ? 'border-b' : ''}
                  border-r
                  ${isMobileRightEdge ? 'max-md:border-r-0' : ''}
                  ${isTabletRightEdge ? 'md:border-r-0' : ''}
                  ${item.hoverBg}
                  transition-colors duration-300 cursor-pointer
                `}
              >
                <div className="h-10 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default LanguageStackSection;