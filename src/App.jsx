import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCards from "./components/LogoCards";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCards />
      <AboutUs />
    </>
  );
};

export default App;
