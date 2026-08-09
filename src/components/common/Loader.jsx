import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ isLoaded, onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    // Fake a smooth loading progression
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 2;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Only trigger the exit animation if the progress is 100% AND the app says it's loaded
    if (progress === 100 && isLoaded) {
      const tl = gsap.timeline({
        onComplete: onComplete // Tells App.jsx to unmount this component
      });

      tl.to(textRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in"
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut"
      });
    }
  }, [progress, isLoaded, onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[9999] bg-black text-[#D3FD50] flex flex-col items-center justify-center font-[font2] overflow-hidden"
    >
      <div className="overflow-hidden">
        <h1 
          ref={textRef} 
          className="text-7xl md:text-9xl lg:text-[10vw] font-bold tracking-tighter uppercase"
        >
          {progress}%
        </h1>
      </div>
      
      {/* Optional minimal loading bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gray-800">
        <div 
          className="h-full bg-[#D3FD50] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;