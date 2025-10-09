"use client";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [imgSrc, setImgSrc] = useState("/images/logo_gif.gif");

  useEffect(() => {
   
    const handleResize = () => {
      if (window.innerWidth < 735) {
        setImgSrc("/images/hero_endframe_mobile.jpg"); 
      } else {
        setImgSrc("/images/hero_endframe.jpg");
      }
    };

    
    handleResize();

  
    window.addEventListener("resize", handleResize);

   
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black relative">
      <img
        src={imgSrc}
        className={`${imgSrc=="/images/hero_endframe_mobile.jpg"? " w-full px-4 pt-4  ":"mx-auto pt-8 h-dvh"}    object-contain`}
        alt="Hero section"
      />
<div className="absolute bottom-0 gap-2 bg-[#0000009c] flex flex-col items-center justify-center w-full h-28">
  <button className="text-xl px-4 py-1 sm:px-6 sm:py-2 bg-[#0043fa] rounded-full">Buy</button>
  <p className="text-sm sm:text-xl font-semibold">From ₹134900.00*or ₹10825.00/mo. for 12mo.*</p>
</div>

    </div>
  );
};

export default HeroSection;
