import React from "react";

const SummaryCard = () => {
  return (
    <section>
      <div className="flex flex-col max-w-screen-xl border border-white mx-auto rounded-lg mb-10">
        <div className="">1</div>
        <div className="flex flex-row" id="get-started">
          <h1 className="text-4xl mt-16 pl-10 my-transparent-text">
            Because your Satisfaction is Everything.
          </h1>
          <p className="w-2/4 text-left mt-6 pr-10 font-light my-transparent-text lg:mb-8 md:text-base lg:text-base">
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
