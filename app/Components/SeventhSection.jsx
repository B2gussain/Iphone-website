"use client";
import React from "react";

const SeventhSection = () => {
  const images = [
    {
      img: "/images/seventh_img_one.jpg",
    },
    {
      img: "/images/seventh_img_two.jpg",
    },
    {
      img: "/images/seventh_img_three.jpg",
    },
    {
      img: "/images/seventh_img_fourth.jpg",
    },
    {
      img: "/images/seventh_img_fifth.jpg",
    },
  ];

  return (
    <div className="bg-[#000000] md:pl-8 ">
      {/* Header */}
      <h2 className="text-2xl md:text-4xl ml-6 font-bold text-white mb-8">
        Pro results down to the pixel.
      </h2>

      {/* Unified scroll section for all screen sizes */}
      <div className="overflow-x-auto pb-10 hide-scrollbar">
        <div className="flex gap-3 px-6 min-w-max">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="h-[60vh] md:h-[80vh] relative overflow-hidden bg-black flex justify-center items-center flex-shrink-0"
            >
              <img
                src={item.img}
                alt="Section Image"
                className="h-full w-auto rounded-3xl object-contain"
              />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
