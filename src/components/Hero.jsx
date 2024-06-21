import React from "react";
import heroImage from "../assets/images/heroImage.png";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="pt-20 lg:pt-32">
      <div className="grid max-w-screen-xl px-4 pt-8 pb-0 mx-auto lg:py-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center gradient-class">
            WELCOME TO PROMO EDGE SOLUTIONS
          </p>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Affordable Solutions For Creative Needs.
          </h1>
          <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Our team of concept driven professionals works tirelessly to deliver
            logos that are visually pleasing to the eyes.
          </p>

          <button
            type="button"
            className="text-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            id="get-started"
          >
            START FROM $99
            <FiArrowUpRight className="inline-block ml-2" />
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
