import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const LogoCard = ({ datarep, index }) => {
  let classes = "";
  classes +=
    index === 0
      ? "w-full max-w-sm border rounded-lg shadow back-shade"
      : "w-full max-w-sm border rounded-lg shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700";
  console.log(classes);
  return (
    <div className={classes}>
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={datarep.image}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {datarep.header}
        </h5>
        <span className="text-sm text-center text-gray-500 dark:text-gray-400">
          {datarep.description}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            type="button"
            className="text-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            id="get-started"
            href={datarep.link}
          >
            Get started
            <FiArrowUpRight className="inline-block ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;
