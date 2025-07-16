import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowDownLong } from "react-icons/fa6";
import bg from "./assets/bg.png"
import sky from "./assets/sky.png"
import girlbg from "./assets/girlbg.png"
import imag from "./assets/imag.png"
import ps5 from "./assets/ps5.png"
import logo18 from "./assets/logo18.png"

const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      transformOrigin: "50% 50%",
      opacity: 0,
      ease: "Expo.easeInOut",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".main");

    if (!showContent) return;

    gsap.from(".main", {
      scale: 2,
      rotate: -10,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.from(".sky", {
      scale: 2,
      rotate: -10,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.from(".bg", {
      scale: 2,
      rotate: -3,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.from(".char", {
      scale: 2,
      rotate: -10,
      duration: 2,
      delay: "-.6",
      ease: "Expo.easeInOut",
    });

    gsap.from(".text", {
      rotate: -10,
      scale: 2,
      opacity: 0,
      duration: 1.5,
      delay: "-.2",
      ease: "Expo.easeInOut",
    });

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".imagesdiv .text", {
        x: `${-xMove * 0.5}%`,
      });
      gsap.to(".sky", {
        x: `${-xMove * 0.2}%`,
      });
      gsap.to(".bg", {
        x: `${-xMove * 0.1}%`,
      });
      gsap.to(".char", {
        x: `${-xMove * 0.09}%`,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            href={bg}
            width="800"
            height="600"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full">
          {/* landing  */}
          <div className="landing relative w-full h-screen bg-black">
            {/* navbar */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-5 lg:py-[1.5vw] px-10 lg:px-[3vw]">
              <div className="logo flex items-center gap-5 lg:gap-[1vw]">
                <div className="lines flex flex-col gap-1.5 lg:gap-[.4vw]">
                  <div className="line w-[9vh] h-1.5 xl:h-[1vh] bg-white"></div>
                  <div className="line w-[6vh] h-1.5 xl:h-[1vh] bg-white"></div>
                  <div className="line w-[3vh] h-1.5 xl:h-[1vh] bg-white"></div>
                </div>
                <h3 className="text-4xl hidden lg:block -mt-3 lg:-mt-[1vw] lg:text-[3vw] text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* imagesdiv */}
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                src={sky}
                alt="sky"
                className="sky scale-130 absolute top-0 left-0 w-full h-full object-cover"
              />
              <img
                src={bg}
                alt="bg"
                className="bg scale-120 absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* text  */}
              <div className="text absolute top-1/4 lg:top-[3vw] left-1/2 -translate-x-1/2 text-white text-5xl lg:text-[7vw]">
                <h1 className=" -ml-[7vw] leading-15 lg:leading-[8vw]">
                  grand
                </h1>
                <h1 className=" -mr-[7vw] leading-15 lg:leading-[8vw]">
                  theft
                </h1>
                <h1 className=" -ml-[5vw] leading-15 lg:leading-[8vw]">auto</h1>
              </div>

              <img
                src={girlbg}
                alt="girlbg"
                className="char absolute left-1/2 -translate-x-1/2 -bottom-[20vw] w-full lg:w-1/3 scale-120"
              />
            </div>

            {/* btmbar */}
            <div className="absolute bottom-0 left-0 btmbar w-full py-10 lg:py-[2vw] lg:px-[3vw] bg-gradient-to-t from-black text-white to-transparent font-sans">
              <div className="hidden lg:flex items-center gap-1">
                <FaArrowDownLong className="lg:text-[1vw]" />
                <h3 className="lg:text-[1.4vw] font-sm leading-0 -mt-1">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 lg:h-[5vw]"
                src={ps5}
                alt=""
              />
            </div>
          </div>

          {/* second */}
          <div className="w-full h-full lg:h-screen px-10 lg:px-0 bg-black text-white flex items-center justify-center">
            <div className="cntnr w-full h-full lg:h-[80%] flex flex-col lg:flex-row gap-[2vw]">
              <div className="limg w-full lg:w-1/2 h-100 lg:h-full relative">
                <img
                  className="absolute top-1/2 bottom-0 object-cover left-1/2 h-full scale-120 -translate-1/2"
                  src={imag}
                  alt=""
                />
              </div>

              {/* right */}
              <div className="rg lg:w-2/5 py-5 lg:py-[4.5vw]">
                <h1 className="text-4xl lg:text-[2.3vw]">Still Running,</h1>
                <h1 className="text-4xl lg:text-[2.3vw]">Not Hunting</h1>
                <p className="mt-10 lg:mt-[2vw] font-sans font-semibold text-base lg:text-[1.2vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing harum!
                </p>
                <p className="mt-4 lg:mt-[1vw] font-sans font-semibold text-base lg:text-[1.2vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, modi doloremque deleniti sint incidunt
                </p>
                <p className="mt-10 lg:mt-[1.5vw] font-sans font-semibold text-base lg:text-[1.2vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, modi doloremque deleniti sint incidunt omnis qui
                  commodi reiciendis repudiandae suscipit.
                </p>
                <button className="bg-yellow-400 text-black mt-5 lg:mt-[1.5vw]  text-lg lg:text-[1.5vw] px-5 py-2 lg:py-[.5vw] lg:px-[1.5vw] ">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
