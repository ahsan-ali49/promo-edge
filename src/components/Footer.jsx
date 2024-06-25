import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { LuMailOpen } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <section>
      <div className="py-8 border border-0 border-t-2 border-white w-full text-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-10 lg:grid-cols-12 text-white border border-0 border-b-2 border-white text-left">
          <div className="mr-auto place-self-center lg:col-span-8">
            <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl gradient-class">
              WHY CHOOSE US
            </p>
            <p className="mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Let's Talk.
            </p>
            <p className="text-lg">
              Providing creative ideas for your business
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-4">
            <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl gradient-class">
              GET IN TOUCH
            </p>
            <p className="mb-4 tracking-tight leading-none dark:text-white">
              Promo edge solutions LLC
            </p>
            <div
              style={{ display: "flex", justifyContent: "start", gap: "10px" }}
            >
              <TfiLocationPin />
              <span>5301 Alpha Rd Ste 80 Dallas TX 75240</span>
            </div>
            <div
              style={{ display: "flex", justifyContent: "start", gap: "10px" }}
            >
              <LuMailOpen />
              <span>support@promoedgesolutions.com</span>
            </div>
            <div
              style={{ display: "flex", justifyContent: "start", gap: "10px" }}
            >
              <LuPhone />
              <span>(650) 912 5153</span>
            </div>
          </div>
        </div>
        <span className="max-w-screen-xl inline-block mt-10 lg:px-52 text-white text-center">
          Copyright. Promo Edge 2024{" "}
        </span>
      </div>
    </section>
  );
};

export default Footer;
