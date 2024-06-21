import React from "react";
import LogoCard from "./LogoCard";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";

const LogoCards = () => {
  const cardsData = [
    {
      image: logo1,
      header: "Pictorial marks",
      description:
        "Logo symbols (a.k.a. brand marks or pictorial marks) are graphic icons, symbols or images that reflect the brand's identity or activity. Normally, these types of logos represent an object from the real world.",
      link: "www.google.com",
    },
    {
      image: logo2,
      header: "Abstract logo marks",
      description:
        "These are image-based logos that use abstract forms to reflect a company's branding. Unlike pictorial marks that represent a real object, abstract logo marks are more metaphorical.",
      link: "www.google.com",
    },
    {
      image: logo3,
      header: "Mascot logos",
      description:
        "Mascot logos consist of illustrated characters that act as visual representations or “ambassadors” for a brand. They can be anything from fictitious creatures to real people, as long as they reflect the brand’s identity.",
      link: "www.google.com",
    },
  ];
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 pt-0 mx-auto lg:py-0 lg:grid-cols-3 justify-stretch justify-items-center gap-2 lg:gap-10 mt-20 mb-20">
        {cardsData.map((cardData, index) => {
          console.log(index);
          return <LogoCard key={index} datarep={cardData} index={index} />;
        })}
      </div>
    </section>
  );
};

export default LogoCards;
