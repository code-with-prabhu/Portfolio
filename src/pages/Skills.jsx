import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Footer from "../components/common/Footer";
import LanguageStackSection from "../components/skill/LanguageStackSection";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top -15%",
        end: "top -130%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  });
  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-40 -top-80 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="/avatar.png"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[50vh] mt-[35vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[18vw]">
              Always <br />
              Learning
            </h1>
          </div>

          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-3xl text-xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              I'm a full-stack developer who enjoys transforming ideas into
              fast, scalable, and intuitive digital experiences. I approach
              every project with curiosity, focusing on clean architecture,
              thoughtful design, and maintainable code. Whether I'm building
              modern web applications, exploring cloud technologies, or
              experimenting with new tools, my goal is always the same: create
              software that solves real problems and delivers a seamless user
              experience.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen">
        <div className="w-full bg-white text-black px-6 py-16 md:px-12 lg:px-24 lg:py-32 font-sans">
          {/* --- TOP SECTION: EXPERTISE LIST --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 mb-24 lg:mb-48">
            {/* Label */}
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="text-xl lg:text-2xl font-semibold font-[font2] tracking-tight">
                Expertise
              </h2>
            </div>

            {/* List */}
            <div className="md:col-span-7 lg:col-span-8">
              <ul className="text-xl lg:text-2xl font-[font2] font-semibold tracking-tight flex flex-col gap-1">
                <li>Web Development</li>
                <li>AWS Cloud</li>
                <li>Programming</li>
                <li>Problem Solving</li>
                <li>Gaming</li>
              </ul>
            </div>
          </div>

          {/* --- BOTTOM SECTION: THREE PARAGRAPHS --- */}
          <div className="font-[font1] grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Programming & WebTech */}
            <div className="text-lg lg:text-xl font-medium leading-snug tracking-tight pr-4">
              Web Development_ Building modern, responsive, and user-friendly
              web applications with clean code, strong performance, and
              intuitive interfaces. Every project is designed to be scalable,
              accessible, and easy to maintain.{" "}
            </div>

            {/* Column 2: Cloud */}
            <div className="text-lg lg:text-xl font-medium leading-snug tracking-tight pr-4">
              Cloud_ Creating scalable and reliable applications using modern
              cloud technologies. From deployment to storage and monitoring,
              every solution is built to be secure, efficient, and ready to
              grow.
            </div>

            {/* Column 3: Gaming */}
            <div className="text-lg lg:text-xl font-medium leading-snug tracking-tight pr-4">
              Problem Solving_ Turning complex ideas into practical software
              through logical thinking and continuous learning. Every challenge
              is approached with curiosity, attention to detail, and a
              commitment to building meaningful solutions.{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <LanguageStackSection />
      </div>
      <div id="page4" className="h-1/2">
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
