import React from "react";
import InnovationLogo from "../assets/images/InnovationLogo.png";
import GrowthLogo from "../assets/images/GrowthLogo.png";
import CustomizationLogo from "../assets/images/CustomizationLogo.png";
import CollaborationLogo from "../assets/images/CollaborationLogo.png";

const WhyUs = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-16 lg:mt-40 mb-4 lg:mb-40 mb-16">
        <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl gradient-class">
          WHY CHOOSE US
        </p>
        <h1 className="mb-4 text-3xl text-center tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Feel your love with graphics!
        </h1>
        <p className="max-w-4xl text-center mb-6 px-2 font-light text-gray-500 lg:mb-8 text-base md:text-lg lg:text-xl dark:text-gray-400">
          The professional logo design process plays a significant role in the
          development of logos and other visual content. Breaking down the
          entire project into smaller, manageable chunks helps architects,
          thinkers, and artists approach their tasks with utmost clarity and
          creativity.
        </p>
        <div className="flex flex-row flex-wrap text-white max-w-screen-xl">
          <div className="flex flex-col border border-0 lg:border-e-2 border-sky-500 lg:pr-16 px-2 gap-8">
            <div className="flex flex-row border border-0 border-b-2 border-sky-500">
              <div className="px-6">
                <img
                  src={InnovationLogo}
                  alt="inoovation logo"
                  className="mt-2"
                />
              </div>
              <div>
                <p>Innovative</p>
                <p className="max-w-5xl text-left mb-6 font-light text-gray-500 lg:mb-8 lg:mr-8 md:text-lg lg:text-base dark:text-gray-400">
                  We know what sells in the market. And the only way to survive
                  the neck-to-neck competition is to grab the rope of innovation
                  to build leverage over your market share. We stay a step ahead
                  of others in the market to prevent the competitors from
                  getting in the same lane.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="px-6">
                <img src={GrowthLogo} alt="growth logo" className="mt-2" />
              </div>
              <div>
                <p>Growth Optimization</p>
                <p className="max-w-5xl text-left mb-6 font-light text-gray-500 lg:mb-8  lg:mr-8 md:text-lg lg:text-base dark:text-gray-400">
                  All of our strategies work towards the growth of businesses
                  far and wide. The focal point of our efforts remains to be
                  higher revenues and ROIs for our clientele. We are here
                  because of our loyal customers. There is no way that we would
                  want anything less than the best for our excellent clientele.s
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap lg:ml-10 mr-0 lg:pl-8 gap-8">
            <div className="flex flex-row border border-0 border-b-2 border-sky-500">
              <div className="px-6">
                <img
                  src={CustomizationLogo}
                  alt="customization logo"
                  className="mt-2"
                />
              </div>
              <div>
                <p>Customization</p>
                <p className="max-w-5xl text-left mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-base dark:text-gray-400">
                  If there is one thing that you could learn from decades of
                  experience in marketing, it is the significance of
                  customization. We strongly disagree with the broad selling,
                  one-size-fits-all ideology advertised by multiple agencies in
                  the market. We build a design from a knot and tie the tapestry
                  according to the client’s specifications.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="px-4">
                <img
                  src={CollaborationLogo}
                  alt="collaboration logo"
                  className="mt-2"
                />
              </div>
              <div>
                <p>Collaboration</p>
                <p className="max-w-5xl text-left mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-base dark:text-gray-400">
                  We are well-known for our flawless communications. Our
                  communication team works tirelessly to maintain clarity
                  amongst the visions of the clients and the work of our
                  creatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
