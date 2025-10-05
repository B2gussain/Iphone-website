"use client";
import React, { useEffect, useState } from "react";

const StickyHeader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8;
      if (window.scrollY > triggerPoint) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center py-2 sm:py-3 px-3 sm:px-5 border-[1px] border-[white]/20 rounded-2xl bg-[#141414] mx-auto transition-all duration-700 z-50
        ${show 
          ? "top-4 opacity-100 translate-y-0" 
          : "-top-32 opacity-0 -translate-y-10 pointer-events-none"
        }`}
    >
      <p className="text-xl font-semibold">iPhone 17 Pro</p>
      <div className="flex gap-2 sm:gap-4">
        <button className="px-4 py-1 text-sm bg-black/40 border border-white text-white rounded-full">Explore</button>
        <button className="px-4 py-1 text-sm bg-[#0043fa] text-white rounded-full">Buy</button>
      </div>
    </div>
  );
};

export default StickyHeader;
