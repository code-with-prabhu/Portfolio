import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'; // Adjust the import path to your Footer

const PageNotFound = () => {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center p-6 lg:p-20 bg-white text-black">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl justify-between items-start lg:items-center gap-12 lg:gap-20">
          
          {/* Left side: Huge Heading */}
          <div className="lg:w-1/2">
            <h1 className="font-[font1] uppercase text-[18vw] lg:text-[9.5vw] leading-[0.85] tracking-tighter">
              Page Not<br />Found
            </h1>
          </div>

          {/* Right side: Description and Button */}
          <div className="lg:w-1/2 flex flex-col items-start gap-6 lg:gap-8">
            <p className="font-[font2] text-2xl lg:text-[3vw] leading-tight font-medium">
              The page you are looking for is either in dev environment <br /> or not to be found.
            </p>
            
            <Link 
              to="/" 
              className="font-[font1] font-bold uppercase border-2 lg:border-3 border-black rounded-full px-6 py-1.5 lg:px-8 lg:py-2 text-lg lg:text-2xl hover:bg-[#D3FD50] hover:border-black transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </div>
      
      {/* Footer added at the bottom */}
      <Footer />
    </>
  );
};

export default PageNotFound;