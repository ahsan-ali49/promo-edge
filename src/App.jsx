import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCards from "./components/LogoCards";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCards />
      <AboutUs />
      <Pricing />
      <WhyUs />
    </>
  );
};

export default App;
