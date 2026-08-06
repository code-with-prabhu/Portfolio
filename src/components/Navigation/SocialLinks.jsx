import React from 'react';

const SocialLinks = () => {
  const socials = [
    { label: 'FB', url: '#facebook' },
    { label: 'IG', url: '#instagram' },
    { label: 'IN', url: '#linkedin' },
    { label: 'BE', url: '#behance' },
  ];

  return (
    <div className=" bottom-5 right-5 lg:bottom-4 lg:right-6 z-50 flex items-center gap-2 lg:gap-3 absolute">
  {socials.map((social) => (
    <a
      key={social.label}
      href={social.url}
      className="
        font-[font1]
        flex items-center justify-center 
        /* Responsive padding and minimum width */
        px-4 py-1.5 lg:px-5 lg:py-2 min-w-12 lg:min-w-14
        border-3 border-white rounded-full 
        /* Responsive text size */
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
  );
};

export default SocialLinks;