import React from 'react'

const Contact = () => {
    const socials = [
  { label: 'FB', url: '#facebook' },
  { label: 'IG', url: '#instagram' },
  { label: 'IN', url: '#linkedin' },
  { label: 'DC', url: '#behance' },
];



  return (
    <>
    <div className="relative w-full min-h-[85vh] lg:min-h-screen bg-black text-white flex flex-col justify-between p-6 lg:p-12 font-sans overflow-hidden">
      
      {/* 
        Main Huge Text 
        Positioned absolutely so it remains perfectly centered 
        regardless of the bottom text heights.
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-center font-font[1] uppercase text-6xl sm:text-7xl md:text-9xl lg:text-[11vw] leading-[0.85] font-medium tracking-tight">
          To Talk<br />
          About<br />
          My<br />
          Project
        </h1>
      </div>

      {/* Top spacer (Leaves breathing room where your existing navbar sits) */}
      <div className="h-20 w-full"></div>

      {/* Bottom Content Row */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-10 md:gap-0 mt-auto pb-2 lg:pb-6">
        
        {/* Left Block - Centered text block */}
        <div className="flex flex-col items-center text-sm md:text-base lg:text-lg font-[font2] font-semibold tracking-wide">
          <span>Onscreen or in an office.</span>
          <span>Here. There.</span>
          <span>Anywhere.</span>
        </div>

        {/* Right Block - Right-aligned text block (Centered on mobile) */}
        <div className="flex flex-col items-center md:items-end text-sm md:text-base lg:text-lg font-[font2] font-semibold tracking-wide cursor-pointer hover:text-gray-300 transition-colors">
          <span className='mr-19'>30 Av. 9A - Salepur</span>
          <span className="flex items-center gap-2">
            Cuttack, FWXC +P66 1G6 
            {/* Simple arrow icon matching the reference */}
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div className="relative w-full bg-black py-24 md:py-40 flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* --- MARQUEE SECTION --- */}
      <div className="w-[120%] ml-[-10%] bg-[#D3FD50] font-[font1] transform -rotate-4 flex overflow-hidden py-4 shadow-xl">
        
        {/* First Moving Block */}
        <div className="moveX flex items-center shrink-0">
          <HeartIcon />
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-medium uppercase whitespace-nowrap text-black tracking-tight">
            HELLO@GMAIL.COM
          </h2>
          <HeartIcon />
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-medium uppercase whitespace-nowrap text-black tracking-tight">
            HELLO@GMAIL.COM
          </h2>
        </div>

        {/* Second Moving Block (Duplicate for seamless loop) */}
        <div className="moveX flex items-center shrink-0">
          <HeartIcon />
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-medium uppercase whitespace-nowrap text-black tracking-tight">
            HELLO@GMAIL.COM
          </h2>
          
          <HeartIcon />
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-medium uppercase whitespace-nowrap text-black tracking-tight">
            HELLO@GMAIL.COM
          </h2>
        </div>
      </div>

      {/* --- FOLLOW US SECTION --- */}
      <div className="flex flex-col items-center gap-6 mt-20 md:mt-32">
        
        <h3 className="text-white text-xs md:text-sm font-[font1] lg:text-3xl font-bold tracking-widest uppercase">
          Follow Me
        </h3>
        
        {/* Adjusted Socials Map */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="
                font-[font1]
                flex items-center justify-center 
                /* Scaled padding to match the giant ovals */
                px-6 py-2 md:px-10 md:py-3 lg:px-12 lg:py-4
                border-[3px] border-white rounded-full 
                /* Scaled text size to match reference image */
                text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider
                transition-colors duration-300 ease-in-out
                /* Your custom hover effects */
                hover:border-[#D3FD50] hover:text-[#D3FD50]
              "
              aria-label={`Visit our ${social.label} page`}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

    </div>
    </>
  )
}
const HeartIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-16 h-16 md:w-24 md:h-24 lg:w-[8vw] lg:h-[8vw] mx-6 md:mx-12 shrink-0 text-black"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
export default Contact
