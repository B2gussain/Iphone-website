import React from "react";
import Navbar from "./Components/Navbar";
import CelebrateHeader from "./Components/CelebrateHeader";
import HeroSection from "./Components/HeroSection";
import StickyHeader from "./Components/StickyHeader";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import ForthSection from "./Components/ForthSection";
import FifthSection from "./Components/FifthSection";
import SixthSection from "./Components/SixthSection";
import SeventhSection from "./Components/SeventhSection";
import EightSection from "./Components/EightSection";
import NinthSection from "./Components/NinthSection";

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
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EightSection/>
      <NinthSection/>
    </div>
  );
};

export default Page;
