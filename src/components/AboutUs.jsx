import React from "react";
import AboutLogo1 from "../assets/images/AboutLogo1.png";
import AboutLogo2 from "../assets/images/AboutLogo2.png";

const AboutUs = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-4 lg:mt-40 mb-4 lg:mb-40">
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
        <div className="flex flex-row w-full mt-10">
          <div className="relative lg:top-2/4 lg:w-3/6 flex flex-col items-center justify-center">
            <div className="absolute top-32 left-48 lg:w-64 w-0 h-52 lg:border lg:border-sky-500 rounded-lg mb-8 flex items-center">
              <div className="about-log-div-2 lg:w-full h-full rounded-lg flex items-center justify-center">
                <img
                  src={AboutLogo1}
                  alt="clean logo"
                  className="opacity-100"
                />
              </div>
            </div>
            <div className="absolute top-80 left-96 lg:w-64 w-0 h-52 lg:border border-sky-500 rounded-lg">
              <div className="about-log-div-2 w-full h-full rounded-lg flex items-center justify-center">
                <img
                  src={AboutLogo2}
                  alt="clean logo"
                  className="opacity-100"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white lg:w-3/6 px-4">
            <div className="flex">
              <p className="max-w-lg mt-2 lg:mt-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-3xl font-bold gradient-class">
                01.
              </p>
              <div className="flex flex-col ml-8">
                <h1 className="mb-4 text-2xl tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">
                  Emblems
                </h1>
                <p className="max-w-2xl text-left mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-300 px-0 mx-0">
                  Emblems, also known as badge logos, are typically reminiscent
                  of crests. They combine text and symbolic imagery to form
                  ornate designs with a traditional feel.
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="max-w-lg mt-2 lg:mt-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-3xl font-bold gradient-class">
                02.
              </p>
              <div className="flex flex-col ml-8">
                <h3 className="mb-4 text-2xl tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-gray-400">
                  Combination Marks
                </h3>
                <p className="max-w-2xl text-left mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-400 px-0 mx-0">
                  This type of logo combines (surprise, surprise) images with
                  words. For example, a combination logo could consist of an
                  icon with a wordmark, or a mascot with a letterform and so on.
                  Some brands have one main logo in the form of a combination
                  mark, while occasionally splitting up the text and imagery to
                  better suit various contexts.
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="max-w-lg mt-2 lg:mt-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-3xl font-bold gradient-class">
                03.
              </p>
              <div className="flex flex-col ml-8">
                <h3 className="mb-4 text-2xl tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-gray-400">
                  Wordmarks
                </h3>
                <p className="max-w-2xl text-left mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-400 px-0 mx-0">
                  Wordmarks (a.k.a. logotypes) consist of the company’s name,
                  written in a certain typeface. While this may sound very
                  straightforward, as Steve Jobs said, “Simple can be harder
                  than complex.” To successfully learn how to design a logo, you
                  need to pay extra attention to every little detail.
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="max-w-lg mt-2 lg:mt-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-3xl font-bold gradient-class">
                04.
              </p>
              <div className="flex flex-col ml-8">
                <h3 className="mb-4 text-2xl tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-gray-400">
                  Monogram logos
                </h3>
                <p className="max-w-2xl text-left mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-400 px-0 mx-0">
                  Lettermarks (a.k.a. monogram logos) are typography logos that
                  are made up of the brand’s initials. In most cases, brands
                  that have monogram logos are referred to by their abbreviated
                  version when speaking, like IBM and NASA (when was the last
                  time you heard someone say National Aeronautics and Space
                  Administration?).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
