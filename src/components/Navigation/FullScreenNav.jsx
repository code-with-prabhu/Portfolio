import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../../context/NavContext";
import SocialLinks from "./SocialLinks";
import {Link} from "react-router-dom"

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
    tl.to(".social-anim", {
      opacity: 1,
      y: 0,
      duration: 0.3,
    }, "<");
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".social-anim", {
      opacity: 0,
      y: 20,
      duration: 0.2,
    });

    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.1 },
    }, "<");

    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="">
            <Link to='/'>
            <div className="lg:w-36 w-24">
              <svg className=" w-full" viewBox="5 10 80 50">
            <use href="/light.svg" />
          </svg>
          </div>
            </Link>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-20 h-12 w-12 lg:w-20 relative cursor-pointer"
          >
            <div className="lg:h-28 h-16 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="lg:h-28 h-16 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className=" py-10">
          <Link to="/projects" className="cursor-pointer" onClick={() => setNavOpen(false)}>
            <div className="link origin-top overflow-hidden relative border-t-1 border-white">
              <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                Projects
              </h1>
              <div className="moveLink absolute text-black flex inset-0 overflow-hidden items-center bg-[#D3FD50]">
                <div className="moveX flex items-center ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    See Everything
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    See Everything{" "}
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX flex items-center ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    See Everything
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    See Everything
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/skills" className="cursor-pointer" onClick={() => setNavOpen(false)}>
            <div className="link origin-top overflow-hidden relative border-t-1 border-white">
              <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                Skills
              </h1>
              <div className="moveLink absolute text-black flex inset-0 overflow-hidden items-center bg-[#D3FD50]">
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Know my Skills
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Know my skills
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Know my skills
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Know my skills
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/contact" className="cursor-pointer" onClick={() => setNavOpen(false)}>
            <div className="link origin-top overflow-hidden relative border-t-1 border-white">
              <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                Contact
              </h1>
              <div className="moveLink absolute text-black flex inset-0 overflow-hidden items-center bg-[#D3FD50]">
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Send me a mail
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Send me a mail
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Send me a mail
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Send me a mail
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/blogs" className="cursor-pointer" onClick={() => setNavOpen(false)}>
            <div className="link origin-top overflow-hidden relative border-y-1 border-white">
              <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                Blogs
              </h1>
              <div className="moveLink absolute text-black flex inset-0 overflow-hidden items-center bg-[#D3FD50]">
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Read Article
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Read Article
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Read Article
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl  text-center lg:leading-[0.8] lg:pt-5 pt-2.5 uppercase">
                    Read Article
                  </h2>
                  <img
                    className="lg:h-24 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div >
        <SocialLinks className="social-anim opacity-0 translate-y-5" />
      </div>
    </div>
  );
};

export default FullScreenNav;
