import React from 'react';
import LocationTimeIndicator from './LocationTimeIndicator';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socials = [
  { label: 'FB', url: '#facebook' },
  { label: 'IG', url: '#instagram' },
  { label: 'IN', url: '#linkedin' },
  { label: 'DC', url: '#behance' },
];
  return (
    <div className="h-[50vh] bg-black text-white p-6 flex flex-col justify-between font-sans">
      
      {/* --- TOP SECTION --- */}
      <div className="flex justify-between items-start">
        
        {/* Top Left: Your Custom Social Links */}
        <div className="flex items-center gap-2 lg:gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="
                font-[font2]
                flex items-center justify-center 
                px-4 py-1.5 lg:px-5 lg:py-2 min-w-12 lg:min-w-14
                border-[3px] border-white rounded-full 
                text-white text-base lg:text-2xl font-bold uppercase tracking-wider
                transition-colors duration-300 ease-in-out
                hover:border-[#D3FD50] hover:text-[#D3FD50]
              "
              aria-label={`Visit our ${social.label} page`}
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Top Right: Contact */}
        <Link 
          to="/contact" 
          className="border-[3px] border-white rounded-full px-6 py-2 text-base lg:text-3xl font-bold font-[font2] uppercase tracking-wider flex items-center gap-3 transition-colors duration-300 ease-in-out hover:border-[#D3FD50] hover:text-[#D3FD50]"
        >
          CONTACT
          {/* Heart Icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-8 lg:h-8">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </Link>
      </div>
    

      {/* --- BOTTOM SECTION --- */}
      <div className="flex justify-between items-end pb-2">
        
        {/* Bottom Left: Location/Time */}
        <div>
            <LocationTimeIndicator/>
        </div>


        {/* Bottom Right: Back to top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-[font2] font-bold  tracking-widest uppercase hover:text-[#D3FD50] transition-colors"
        >
          Back To Top
        </button>
      </div>

    </div>
  );
};

export default Footer;