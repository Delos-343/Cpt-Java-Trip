import React from "react";
import captainWhiteLogo from "../assets/logo/Logo-White-Rectangular.png";

const Hero = () => {
  return (
    <section>
      <div className="bg-stone-800 text-stone-100 z-0 lg:h-[36rem] md:h-[58rem] h-[50rem]">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full opacity-20"
        >
          <source src="/images/bannervideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 z-10 lg:h-[33rem] md:h-[49rem]">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center sm:items-start p-8">
            {/* <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-700 bg-clip-text text-6xl sm:text-7xl font-extrabold text-transparent tracking-loose">
                        CAPTAIN
                    </h1>
                    <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-700 bg-clip-text text-5xl font-extrabold text-transparent leading-relaxed md:leading-snug mb-2">
                        JAVA TRIP
                    </h2> */}

            <img
              src={captainWhiteLogo}
              alt="Captain Java Trip Logo"
              className="w-fit"
            />

            <p className="text-sm md:text-base sm:text-left text-center text-stone-100 mt-4 mb-4 sm:mb-16">
              We are a unique travel agency with a passion for finding memorable
              routes and both internationally-renowned and lesser-known
              archaeological hotspots across Java.
            </p>
            <a
              href="/our-routes"
              className="text-2xl bg-yellow-700 px-14 py-3 mb-10 sm:mb-0 text-stone-100 hover:bg-transparent hover:text-white hover:border-2 hover:border-stone-100 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              EXPLORE NOW
            </a>
          </div>
          <div className="p-8 mt-10 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="md:inline-block mt-28 hidden xl:block h-[200px] w-[200px] rounded-full object-cover	-rotate-12"
                  src="../images/maskeran_gan.jpg"
                />
              </div>
              <div>
                <img
                  className="sm:inline-block mt-0 mx-10 md:mt-0 p-8 md:p-0 w-[275px] h-auto sm:h-[250px] sm:w-[250px] rounded-full object-cover -rotate-45 sm:rotate-0"
                  src="../images/motoran_gan.jpg"
                />
              </div>
              <div>
                <img
                  className="md:inline-block mt-28 hidden lg:block h-[200px] w-[200px] rounded-full object-cover rotate-45"
                  src="../images/sarung_gan.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
