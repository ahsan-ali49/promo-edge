import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const SummaryCard = () => {
  return (
    <section>
      <div className="flex flex-col max-w-screen-xl border border-white mx-auto rounded-lg mb-10">
        <div className="flex flex-row flex-wrap card-summary-bg">
          <div className="w-full lg:w-2/4 pt-10 px-8 lg:p-10">
            <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 text-sm md:text-lg lg:text-xl gradient-class">
              POCKET-FRIENDLY PRICING FOR THE PERFECT DESIGN AND TEMPLATES FOR
              ALL
            </p>
            <p className="mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Start from $99
            </p>
          </div>
          <div className="w-full lg:w-2/4 py-10 px-8 lg:p-10">
            <p className="max-w-2xl text-left mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-300 px-0 mx-0">
              We know our competition. Perhaps that is why we have a fair
              pricing model for logos. Professional logo designers in the market
              may be a dime a dozen, but we guarantee to create quality over
              quantity for brand(s) on each order!
            </p>
            <button
              type="button"
              className="text-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-bold px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              id="get-started"
            >
              CONTACT US
              <FiArrowUpRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap" id="get-started">
          <h1 className="text-3xl mt-16 px-10 my-transparent-text">
            Because your Satisfaction is Everything.
          </h1>
          <p className="lg:w-2/4 text-left mt-6 px-10 lg:pr-10 font-light my-transparent-text mb-8 md:text-base lg:text-base">
            Our team is a leader in the industry where offering genuinely
            creative design is a rarity. We have it all at our
            one-stop-design-shop. The seamless transition of ideas into reality
            is a feather in our hat that we love to tout about.
            <br />
            We cater to all of our clients with similar vigor and passion. We
            believe that our clientele is our greatest asset, with our team
            being a close second. We fuel each campaign with blood, sweat,
            effort, and love. Each project is a benchmark of our excellent
            craft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummaryCard;
