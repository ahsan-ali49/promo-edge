import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCards from "./components/LogoCards";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCards />
      <AboutUs />
      <Pricing />
    </>
  );
};

export default App;
