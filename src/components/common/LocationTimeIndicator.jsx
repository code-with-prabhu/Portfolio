import React, { useState, useEffect } from 'react';

const LocationTimeIndicator = ({ 
  location = "Cuttack", 
  timeZone = "Asia/Kolkata" 
}) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formatter.format(now));
    };

    // Initialize clock immediately
    updateClock();

    // Update every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
   <div className="font-[font2] fixed bottom-5 left-5 z-50 hidden md:flex items-center gap-2 text-xl md:text-lg lg:text-2xl font-medium text-white select-none pointer-events-none">
      {/* Globe SVG */}
      <svg
        className="w-6 h-6 stroke-current fill-none shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>

      {/* Location and Live Time */}
      <span className="uppercase tracking-wider">
        {location}_ <span className="tabular-nums">{time || '00:00:00'}</span>
      </span>
    </div>
  );
};

export default LocationTimeIndicator;