"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FifthSection = () => {
  const options = ["200", "100", "48", "35", "28", "24", "13", "macro"];
  const [active, setactive] = useState("200");
  const containerRef = useRef(null);

  const handlePrev = () => {
    const currentIndex = options.indexOf(active);
    const prevIndex = currentIndex === 0 ? options.length - 1 : currentIndex - 1;
    setactive(options[prevIndex]);
    scrollToButton(prevIndex);
  };

  const handleNext = () => {
    const currentIndex = options.indexOf(active);
    const nextIndex = currentIndex === options.length - 1 ? 0 : currentIndex + 1;
    setactive(options[nextIndex]);
    scrollToButton(nextIndex);
  };

  const scrollToButton = (index) => {
    const container = containerRef.current;
    const button = container.children[index];
    
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const scrollLeft = button.offsetLeft - (container.offsetWidth - button.offsetWidth) / 2;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-black gap-6 py-6 flex flex-col justify-center items-center">
      <div className="w-[100%] md:w-[50%] aspect-square">
        {active === "200" && (
          <img src="/images/200mm.jpg" className="w-full aspect-square object-cover" />
        )}
        {active === "100" && (
          <img src="/images/100mm.jpg" className="w-full aspect-square object-cover" />
        )}
        {active === "48" && (
          <img src="/images/48mm.jpg" className="w-full aspect-square object-cover" />
        )}
        {active === "35" && (
          <img src="/images/35mm.jpg" className="w-full aspect-square object-cover" />
        )}
        {active === "28" && (
          <img src="/images/28mm.jpg" className="w-full aspect-square object-cover" />
        )}
        {active === "24" && (
          <img src="/images/24mm.jpg" className="w-full aspect-square object-cover" />
        )}
        {active === "13" && (
          <img src="/images/13mm.jpg" className="w-full aspect-square object-cover" />
        )}
        {active === "macro" && (
          <img src="/images/macro.jpg" className="w-full aspect-square object-cover" />
        )}
      </div>

      <div className="relative w-[90%] md:w-auto flex items-center">
        <button
          onClick={handlePrev}
          className="absolute left-1 z-10 p-3 bg-[#555555] rounded-full md:hidden"
        >
          <ChevronLeft size={20} color="white" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-2 text-white bg-[#333336] p-2 rounded-full overflow-x-scroll md:overflow-x-hidden hide-scrollbar scroll-smooth w-full px-12 md:px-2 " 
        >
          {options.map((item) => (
            <button
              key={item}
              onClick={() => {
                setactive(item);
                const index = options.indexOf(item);
                scrollToButton(index);
              }}
              className={`px-3 py-2 whitespace-nowrap font-semibold rounded-full ${
                active === item ? "bg-white text-black" : ""
              }`}
            >
              {item === "macro" ? "Macro" : `${item} mm`}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-1 z-10 p-3 bg-[#555555] rounded-full md:hidden"
        >
          <ChevronRight size={20} color="white" />
        </button>
      </div>

      <p className="font-semibold">
        {active === "200"
          ? "8x"
          : active === "100"
          ? "4x"
          : active === "48"
          ? "2x"
          : active === "35"
          ? "1.5x"
          : active === "28"
          ? "1.2x"
          : active === "24"
          ? "1x"
          : active === "13"
          ? ".5x"
          : " macro"}
      </p>
    </div>
  );
};

export default FifthSection;