import React from "react";

const NinthSection = () => {
    return (
        <div className="bg-black flex text-xl font-semibold gap-2 flex-col px-4 justify-center py-10 items-center">
            <h3 className="text-[#FF7310] w-full px-3 text-center">
                All in the family
            </h3>
            <h2 className=" text-3xl md:text-7xl font-bold px-3 w-full  text-center ">
                All the must‑haves. <br />
                All on iPhone..
            </h2>
            <div className="flex w-full my-6  justify-center items-center">
                <img src="/images/left.jpg" className="h-[200px] sm:h-[300px]  md:h-[400px]"  alt="" />
                <img src="/images/middle.jpg" className="h-[200px] sm:h-[300px] md:h-[400px]" alt="" />
                <img src="/images/right.jpg" className="h-[200px] sm:h-[300px] md:h-[400px]" alt="" />
            </div>
            <p className="text-white/50 px-3 md:w-[60%] text-balance font-semibold text-center">
                The latest iPhone models come packed with advanced capabilities.
                Helpful Apple Intelligence features such as visual
                intelligence12 and Writing Tools to make your everyday easier.
                Fast, secure connections with{" "}
                <span className="text-white">
                    Wi‑Fi 7,13 Bluetooth 6, 5G connectivity14 and eSIM15.
                </span>{" "}
            </p>
        </div>
    );
};

export default NinthSection;
