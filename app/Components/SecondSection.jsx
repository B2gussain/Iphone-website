"use client";
import { PlayCircle } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SecondSection = () => {
  const images = [
    { heading: "Heat-forged aluminum unibody design for exceptional pro capability.", img: "/images/second_img_one.jpg" },
    { heading: "A19 Pro, vapour-cooled for lightning-fast performance. Breakthrough battery life.", img: "/images/second_img_sec.jpg" },
    { heading: "The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on an iPhone.", img: "/images/second_img_third.jpg" },
    { heading: "New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more.", img: "/images/second_img_forth.jpg" },
    { heading: "iOS 26. New look. Even more magic.", img: "/images/second_img_fifth.jpg" },
    { heading: "Apple Intelligence. Effortlessly helpful features — from image creation to Live Translation.", img: "/images/second_img_six.jpg" },
  ];

  return (
    <div className="bg-[#1D1D1F] py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end px-6 justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Get the highlights.</h2>
        <p className="flex text-[#0043fa] gap-2 items-center cursor-pointer hover:underline">
          Watch the film
          <PlayCircle />
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Pagination]}
        className="mySwiper px-6"
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx} className="">
            <div className="w-[90vw] h-[90vh] rounded-3xl overflow-hidden bg-black">
              <img
                src={item.img}
                alt="Second Section Image"
                className="w-full h-full object-cover object-center"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecondSection;
