import React from "react";
import AboutLogo1 from "../assets/images/AboutLogo1.png";
import AboutLogo2 from "../assets/images/AboutLogo2.png";

const AboutUs = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-40">
        <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl gradient-class">
          WHAT WE OFFER
        </p>
        <h1 className="mb-4 text-4xl text-center tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          The Craftsman That Makes Unique
        </h1>
        <p className="max-w-3xl text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Our logo services help you get the best leaving the competition in the
          backyard and zip through the market of logo design companies
        </p>
        <div className="flex flex-row w-full justify-around mt-10">
          <div className="relative">
            <div className="w-64 h-52 border border-sky-500 rounded-lg">
              <img src={AboutLogo1} alt="clean logo" className="mx-auto my-8" />
            </div>
            <div className="absolute top-48 left-48 w-64 h-52 border border-sky-500 rounded-lg">
              <div className="about-log-div-2 w-full h-full rounded-lg flex items-center justify-center">
                <img
                  src={AboutLogo2}
                  alt="clean logo"
                  className="mx-auto my-8 opacity-100"
                />
              </div>
            </div>
          </div>
          <div className="text-white">World</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
