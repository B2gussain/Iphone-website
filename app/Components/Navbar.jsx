"use client";
import { Handbag, Search, Tally2, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="w-full relative">
      <div
        className={`flex items-center justify-between md:px-0 px-6 md:justify-center gap-8 transition-all duration-300 ${
          isMobile && "flex"
        }`}
      >
        <svg
          height="55"
          fill="white"
          viewBox="0 0 14 44"
          width="55"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
        </svg>

        <ul className="hidden text-white justify-evenly md:gap-4 md:flex lg:gap-8 text-sm font-normal">
          {[
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV",
            "Entertainment",
            "Accessories",
            "Support",
          ].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-white/70 hover:text-white"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 md:gap-8 justify-evenly text-white">
          <Search className="cursor-pointer text-white/70 hover:text-white" />
          <Handbag className="cursor-pointer text-white/70 hover:text-white" />
          <Tally2
            onClick={() => setIsMobile(true)}
            className="transform rotate-90 mt-2 md:hidden cursor-pointer text-white/70 hover:text-white"
          />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-dvh bg-[#161617] text-white md:hidden transition-transform duration-500 ${
          isMobile ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <div className="flex flex-col h-full py-4 px-6">
          <div className="flex justify-end">
            <X
              onClick={() => setIsMobile(false)}
              className="cursor-pointer text-white/70 hover:text-white w-8 h-8"
            />
          </div>

          <ul className="flex flex-col gap-6 text-2xl font-semibold ">
            {[
              "Store",
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "AirPods",
              "TV",
              "Entertainment",
              "Accessories",
              "Support",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer text-white/70 hover:text-white transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
