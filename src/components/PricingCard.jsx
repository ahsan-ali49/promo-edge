import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const PricingCard = ({ priceData, index }) => {
  let classes =
    "w-full h-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 lg:pb-0 dark:bg-gray-800 flex flex-col";
  if (index == 1) classes += " dark:border-blue-500";
  else classes += " dark:border-gray-700";
  return (
    <div className={classes}>
      <h5 className="mb-4 text-xl font-medium text-white dark:text-white frame-19 w-full text-center w-full h-12">
        {priceData.title}
      </h5>
      <div className="flex items-baseline w-full justify-center text-gray-900 dark:text-white mb-4">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">
          {priceData.price}
        </span>
      </div>
      <ul role="list" className="list-disc space-y-2 my-7 flex-grow">
        {priceData.features.map((feature, index) => (
          <li
            key={index}
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-300 ms-3 custom-list-marker"
          >
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        id="get-started"
      >
        START PROJECT
        <FiArrowUpRight className="inline-block ml-2" />
      </button>
      <p className="my-4 text-base font-normal text-gray-300">
        {priceData.postNote}
      </p>
    </div>
  );
};

export default PricingCard;
