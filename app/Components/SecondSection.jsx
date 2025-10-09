"use client";
import { PlayCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SecondSection = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsLargeScreen(window.innerWidth > 768);
        }
    }, []);

    const images = [
        {
            heading:
                "Heat-forged aluminum unibody design for exceptional pro capability.",
            img: isLargeScreen
                ? "/images/second_img_first.jpg"
                : "/images/second_img_one.jpg",
        },
        {
            heading:
                "A19 Pro, vapour-cooled for lightning-fast performance. Breakthrough battery life.",
            img: "/images/second_img_sec.jpg",
        },
        {
            heading:
                "The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on an iPhone.",
            img: "/images/second_img_third.jpg",
        },
        {
            heading:
                "New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more.",
            img: "/images/second_img_forth.jpg",
        },
        {
            heading: "iOS 26. New look. Even more magic.",
            img: "/images/second_img_fifth.jpg",
        },
        {
            heading:
                "Apple Intelligence. Effortlessly helpful features — from image creation to Live Translation.",
            img: "/images/second_img_six.jpg",
        },
    ];

    return (
        <div className="bg-[#1D1D1F] py-16">
            <div className="flex flex-col sm:flex-row sm:items-end px-6 justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Get the highlights.
                </h2>
                <p className="flex text-[#0043fa] gap-2 items-center cursor-pointer hover:underline">
                    Watch the film
                    <PlayCircle />
                </p>
            </div>

           
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
                autoplay={{
                    delay: 4000, 
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {images.map((item, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="pb-10 px-3 flex  justify-center items-center"
                    >
                        <div className="h-[60vh] relative md:h-[130vh] rounded-3xl overflow-hidden bg-black">
                            <img
                                src={item.img}
                                alt="Second Section Image"
                                className="h-full w-full object-cover md:object-fill object-center"
                            />

                            <p
                                className={`${
                                    idx == "1"
                                        ? "bottom-10"
                                        : idx == "2"
                                        ? "top-8"
                                        : "top-10"
                                } absolute text-center font-semibold w-[80%] md:[70%] lg:w-[40%] md:text-3xl -translate-x-1/2 left-1/2`}
                            >
                                {idx == 5 ? (
                                    <>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-red-600 to-yellow-500">
                                            Apple Intelligence.
                                        </span>
                                        <br />
                                        <span className="text-white">
                                            Effortlessly helpful features — from
                                            image creation to Live Translation.
                                        </span>
                                    </>
                                ) : (
                                    item.heading
                                )}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SecondSection;
