import React from "react";
import Navbar from "./Components/Navbar";
import CelebrateHeader from "./Components/CelebrateHeader";
import HeroSection from "./Components/HeroSection";
import StickyHeader from "./Components/StickyHeader";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import ForthSection from "./Components/ForthSection";

const Page = () => {
  return (
    <div className="relative">
      <Navbar />
      <CelebrateHeader />
      <HeroSection />
      <StickyHeader />
      <SecondSection />
      <ThirdSection />
      <ForthSection/>
    </div>
  );
};

export default Page;
