import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const pricingData = [
    {
      title: "Basic Logo",
      price: "99",
      features: [
        "3 Custom Logo Design Concepts",
        "1 Dedicated Designer",
        "4 Revisions",
        "48 to 72 hours TAT",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Basic Logo",
      price: "168",
      features: [
        "5 Custom Logo Design Concepts",
        "By 2 Designers",
        "UNLIMITED Revisions",
        "48 to 72 hours TAT",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Basic Logo",
      price: "248",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 4 Designers",
        "UNLIMITED Revisions",
        "Stationary Design (Business Card, Letterhead, Envelope)",
        "FREE MS Word Letterhead",
        "48 to 72 hours TAT",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Elite Logo",
      price: "348",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 5 Award Winning Designers",
        "Stationary Design (Business Card, Letterhead, Envelope)",
        "Icon Design",
        "UNLIMITED Revisions",
        "FREE MS Word Letterhead",
        "Free Email Signature",
        "48 to 72 hours TAT",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Business Logo",
      price: "448",
      features: [],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Gold Logo",
      price: "848",
      features: [],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Elite Logo",
      price: "499",
      features: [],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Business Logo",
      price: "999",
      features: [],
      postNote: "Add on; $50 for expedited services",
    },
    {
      title: "Gold Logo",
      price: "1999",
      features: [],
      postNote: "Add on; $50 for expedited services",
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center mb-40">
        <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl gradient-class">
          PRICING PLANS
        </p>
        <h1 className="mb-4 text-4xl text-center tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          That Work For You!
        </h1>
        <div className="grid lg:grid-rows-3 md-grid-rows-4 sm:grid-rows-3 max-w-screen-xl px-4 py-8 mx-auto lg:py-0 lg:grid-cols-12 w-full text-white">
          <div className="lg:col-span-4">
            <PricingCard />
          </div>
          <div className="lg:col-span-4">2</div>
          <div className="lg:col-span-4">3</div>
          <div className="lg:col-span-4">4</div>
          <div className="lg:col-span-4">5</div>
          <div className="lg:col-span-4">6</div>
          <div className="lg:col-span-4">7</div>
          <div className="lg:col-span-4">8</div>
          <div className="lg:col-span-4">9</div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
